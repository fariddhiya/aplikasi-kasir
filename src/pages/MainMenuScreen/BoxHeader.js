import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {ILBuy, ILEquals, ILSale} from '../../assets';
import {Gap} from '../../components';
import {AuthContext} from '../../context';
import styles from './styles';
import HomeChart from '../../components/molecul/ChartIncome/HomeChart';

export default function BoxHeader({orientation}) {
  const {
    state: {dataHome},
  } = useContext(AuthContext);

  return (
    <View style={styles.boxHeader(orientation)}>
      <View
        style={[
          styles.row(orientation),
          {
            paddingHorizontal: orientation.isPotrait
              ? orientation.width * 0.04
              : orientation.width * 0.05,
          },
        ]}>
        <Text style={styles.font(orientation)}>Pendapatan Harian</Text>
        <Text
          style={[
            styles.font(orientation),
            {color: '#001678', fontWeight: 'bold'},
          ]}>
          {dataHome.data.report.today_income_format}
        </Text>
      </View>
      <HomeChart orientation={orientation} />
      <View style={{marginHorizontal: 20}}>
        <View style={styles.descriptionChart(orientation)}>
          <View
            style={[
              styles.descChartBox(orientation),
              {backgroundColor: '#807cfc'},
            ]}
          />
          <Text style={[styles.font(orientation), {color: '#807cfc'}]}>
            Penjualan
          </Text>

          <View
            style={[
              styles.descChartBox(orientation),
              {
                backgroundColor: '#d87ce4',
                marginLeft: orientation.width * 0.02,
              },
            ]}
          />
          <Text style={[styles.font(orientation), {color: '#d87ce4'}]}>
            Belanja
          </Text>
        </View>
      </View>

      <View style={styles.header(orientation)}>
        <View>
          <Text style={[styles.font(orientation), {color: '#a09c9c'}]}>
            Penjualan
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.font(orientation), {fontWeight: 'bold'}]}>
            {dataHome.data.report.today_income_format}
          </Text>

          <View style={styles.percentageIncome(orientation)}>
            <Image
              source={ILSale}
              style={styles.conditionTrxDesc(orientation)}
            />
            <Text style={[styles.font(orientation), {color: '#08944c'}]}>
              {`${Math.floor(dataHome.data.report.income_percentage)}%`}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[styles.font(orientation), {color: '#a09c9c'}]}>
            Belanja
          </Text>

          <Text
            numberOfLines={1}
            style={[styles.font(orientation), {fontWeight: 'bold'}]}>
            {dataHome.data.report.today_expenses_format}
          </Text>

          <View style={styles.percentageIncome(orientation)}>
            <Image
              source={ILBuy}
              style={styles.conditionTrxDesc(orientation)}
            />
            <Text
              style={[
                styles.font(orientation),
                {color: '#ff746c', fontWeight: 'bold'},
              ]}>
              {`${Math.floor(dataHome.data.report.expenses_percentage)}%`}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[styles.font(orientation), {color: '#a09c9c'}]}>
            Laba - rugi
          </Text>

          <Text
            numberOfLines={1}
            style={[styles.font(orientation), {fontWeight: 'bold'}]}>
            {dataHome.data.report.today_profit_format}
          </Text>

          <View style={styles.percentageIncome(orientation)}>
            <Image
              source={ILEquals}
              style={styles.conditionTrxDesc(orientation)}
            />

            <Text
              style={[
                styles.font(orientation),
                {color: '#ffcc3c', fontWeight: 'bold'},
              ]}>
              {`${Math.floor(dataHome.data.report.profit_percentage)}%`}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footerBox(orientation)}>
        <View style={styles.row(orientation)}>
          <View style={styles.circle(orientation)} />
          <Text style={styles.font(orientation)}>Penjualan Kemarin</Text>
        </View>
        <Text style={styles.font(orientation)}>
          {dataHome.data.report.yesterday_income_format}
        </Text>
      </View>

      <View style={styles.footerBox(orientation)}>
        <View style={styles.row(orientation)}>
          <View style={styles.circle(orientation)} />
          <Text style={styles.font(orientation)}>Belanja Kemarin</Text>
        </View>
        <Text style={styles.font(orientation)}>
          {dataHome.data.report.yesterday_expenses_format}
        </Text>
      </View>
    </View>
  );
}
