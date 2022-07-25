import {useIsFocused} from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Menu, MenuItem} from 'react-native-material-menu';
import {IconFilterAltWhite} from '../../assets';
import {
  CardTransactionReport,
  ChartIncome,
  Texting,
  TopBar,
} from '../../components';
import {ReportBuyContext} from '../../context';
import {useOrientation} from '../../hooks';
import {numberWithCommas} from '../../utils';
import SkeletonPlaceholder from './SkeletonPlaceholder';
import styles from './styles';

export default function HistoryTransaction() {
  const orientation = useOrientation();
  const isFocused = useIsFocused();
  const dataRef = useRef(true);
  const loadingRef = useRef(true);
  const pageRef = useRef(true);
  const [loading, isLoading] = useState(false);
  const {
    report,
    clearData,
    paginationReport,
    state: {dataReport, msg, errorMsg},
  } = useContext(ReportBuyContext);

  const [page, setPage] = useState(1);
  const [loadingPagination, setLoadingPagination] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [refresh, setRefresh] = useState(null);

  const [day, setDay] = useState(false);
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(false);

  const [visibleMenu, setVisibleMenu] = useState(false);

  const hideMenu = () => setVisibleMenu(false);
  const showMenu = () => setVisibleMenu(true);

  const [type, setType] = useState('weekly');
  const [filter, setFilter] = useState('all');

  const handlerDay = () => {
    setLoadingPage(true);
    setType('daily');
    setFilter('all');
    setPage(1);
    setDay(true);
    setWeek(false);
    setMonth(false);
  };

  const handlerWeek = () => {
    setLoadingPage(true);
    setType('weekly');
    setFilter('all');
    setPage(1);
    setDay(false);
    setWeek(true);
    setMonth(false);
  };
  const handlerMonth = () => {
    setLoadingPage(true);
    setType('monthly');
    setFilter('all');
    setPage(1);
    setDay(false);
    setWeek(false);
    setMonth(true);
  };

  const handlerFilterAll = () => {
    setLoadingPage(true);
    setFilter('all');
    setPage(1);
    hideMenu();
  };

  const handlerFilterSale = () => {
    setLoadingPage(true);
    setFilter('sales');
    setPage(1);
    hideMenu();
  };

  const handlerFilterPurchase = () => {
    setLoadingPage(true);
    setFilter('purchases');
    setPage(1);
    hideMenu();
  };

  useEffect(() => {
    if (dataRef.current && isFocused) {
      dataRef.current = false;
    }
    if (!dataRef.current && isFocused) {
      report({filter: filter, type: type});
      isLoading(true);
    }
  }, [msg, type, filter, refresh]);

  useEffect(() => {
    if (pageRef.current && isFocused) {
      pageRef.current = false;
    }
    if (!pageRef.current && isFocused && Object.keys(dataReport).length !== 0) {
      paginationReport({filter: filter, type: type, page: page});
    }
  }, [page]);

  useEffect(() => {
    if (loadingRef.current && isFocused) {
      setLoadingPagination(false);
      setLoadingPage(false);
    } else {
      setLoadingPagination(false);
      setLoadingPage(false);
    }
  }, [dataReport || errorMsg]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefresh(true);
    // report({filter: filter, type: type, page: 1});
  }, []);

  const [duringMomentum, setDuringMomentum] = useState(false);
  const handlerDuringMomentum = () => {
    setDuringMomentum(true);
  };
  const loadMoreRandomData = ({distanceFromEnd}) => {
    if (
      Object.keys(dataReport.data.orders).length % 10 === 0 &&
      duringMomentum
    ) {
      setPage(page + 1);
      setLoadingPagination(true);
      setDuringMomentum(false);
    }
  };

  return (
    <SafeAreaView>
      <TopBar
        condition="mainTopBar"
        label="History"
        orientation={orientation}
      />
      <View style={styles.chartMenu(orientation)}>
        <TouchableOpacity
          style={
            day
              ? styles.activeChartBox(orientation)
              : styles.chartBox(orientation)
          }
          onPress={type === 'daily' ? null : handlerDay}>
          <Text
            style={[
              styles.font(orientation),
              {color: day ? 'white' : '#262ca7'},
            ]}>
            {'Day'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            week
              ? styles.activeChartBox(orientation)
              : styles.chartBox(orientation)
          }
          onPress={type === 'weekly' ? null : handlerWeek}>
          <Text
            style={[
              styles.font(orientation),
              {color: week ? 'white' : '#262ca7'},
            ]}>
            {'Week'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            month
              ? styles.activeChartBox(orientation)
              : styles.chartBox(orientation)
          }
          onPress={type === 'monthly' ? null : handlerMonth}>
          <Text
            style={[
              styles.font(orientation),
              {color: month ? 'white' : '#262ca7'},
            ]}>
            {'Month'}
          </Text>
        </TouchableOpacity>
      </View>
      {Object.keys(dataReport).length !== 0 && !loadingPage ? (
        <FlatList
          maxToRenderPerBatch={2}
          updateCellsBatchingPeriod={2}
          initialNumToRender={dataReport.data.orders.length}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          style={styles.containerFlatlist}
          keyExtractor={(index, value) => value}
          data={dataReport.data.orders}
          renderItem={({item}) => (
            <CardTransactionReport data={item} orientation={orientation} />
          )}
          onEndReached={distanceFromEnd => loadMoreRandomData(distanceFromEnd)}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={handlerDuringMomentum}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={
            <View style={{backgroundColor: '#f8f4fc'}}>
              <View style={styles.header}>
                <Text style={styles.font(orientation)}>
                  {`Total ${type} earning`}
                </Text>
                <Text
                  style={[
                    styles.font(orientation),
                    {color: '#001973', fontWeight: 'bold'},
                  ]}>{`Rp. ${numberWithCommas(
                  dataReport.data.report.total_price,
                )}`}</Text>
              </View>
              {dataReport !== null && (
                <ChartIncome filter={filter} orientation={orientation} />
              )}
              <View style={styles.descriptionChart(orientation)}>
                <View style={styles.rowDesc}>
                  <View style={styles.descBox(orientation)} />
                  <Text style={styles.font(orientation)}>Penjualan</Text>
                </View>
                <View style={styles.rowDesc}>
                  <View style={styles.descBox(orientation)} />
                  <Text style={styles.font(orientation)}>Pembelian</Text>
                </View>
              </View>
              <View style={styles.summaryTrx}>
                <View style={styles.boxSummaryTrx(orientation)}>
                  <Text style={[styles.font(orientation), {color: '#3f3f3f'}]}>
                    Total Transaksi
                  </Text>

                  <Texting
                    label={dataReport.data.report.total_transactions}
                    size={35}
                    weight="bold"
                  />
                </View>
                <View style={styles.lines} />

                <View style={styles.boxSummaryTrx(orientation)}>
                  <Text style={[styles.font(orientation), {color: '#3f3f3f'}]}>
                    Total Belanja
                  </Text>

                  <Texting
                    label={dataReport.data.report.total_purcahses}
                    size={35}
                    weight="bold"
                  />
                </View>
                <View style={styles.lines} />
                <View style={styles.boxSummaryTrx(orientation)}>
                  <Text style={[styles.font(orientation), {color: '#3f3f3f'}]}>
                    Total Penjualan
                  </Text>

                  <Texting
                    label={dataReport.data.report.total_sales}
                    size={35}
                    weight="bold"
                  />
                </View>
              </View>
              <View style={styles.historyTitle(orientation)}>
                <Text style={styles.font(orientation)}>
                  {`${type} transaction history`}
                </Text>

                <Menu
                  visible={visibleMenu}
                  anchor={
                    <TouchableOpacity
                      onPress={showMenu}
                      style={styles.filterButton(orientation)}>
                      <Text
                        style={[styles.font(orientation), {color: 'white'}]}>
                        {filter === 'sales'
                          ? 'Penjualan'
                          : filter === 'purchases'
                          ? 'Belanja'
                          : 'Semuanya'}
                      </Text>
                      <IconFilterAltWhite width={'30%'} height={'60%'} />
                    </TouchableOpacity>
                  }
                  onRequestClose={hideMenu}>
                  <MenuItem
                    style={{width: 300}}
                    onPress={filter === 'all' ? hideMenu : handlerFilterAll}>
                    <Text style={styles.font(orientation)}>Semuanya</Text>
                  </MenuItem>
                  <MenuItem
                    style={{width: 300}}
                    onPress={filter === 'sales' ? hideMenu : handlerFilterSale}>
                    <Text style={styles.font(orientation)}>Penjualan</Text>
                  </MenuItem>
                  <MenuItem
                    style={{width: 300}}
                    onPress={
                      filter === 'purchases' ? hideMenu : handlerFilterPurchase
                    }>
                    <Text style={styles.font(orientation)}>Belanja</Text>
                  </MenuItem>
                </Menu>
              </View>
            </View>
          }
          ListFooterComponent={
            loadingPagination ? (
              <View
                style={{
                  height: orientation.isPotrait
                    ? orientation.height * 0.3
                    : orientation.height * 0.5,
                }}>
                <ActivityIndicator size={'large'} color={'#262ca7'} />
              </View>
            ) : (
              <View
                style={{
                  marginBottom: orientation.isPotrait
                    ? orientation.height * 0.3
                    : orientation.height * 0.5,
                }}>
                {dataReport.data.report.total_transactions === 0 ? (
                  <Text
                    style={[styles.font(orientation), {textAlign: 'center'}]}>
                    Data Kosong
                  </Text>
                ) : null}
              </View>
            )
          }
        />
      ) : (
        <SkeletonPlaceholder orientation={orientation} />
      )}
    </SafeAreaView>
  );
}
