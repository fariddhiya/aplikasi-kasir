import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import {IconArrowDOwnGreen, IconArrowUpPink} from '../../../assets';
import {DateRangePicker, Gap, Texting} from '../../../components';
import styles from './styles';

export default function CardSummaryIncome() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Hari Ini', value: 'Hari Ini'},
    {label: 'Minggu Ini', value: 'Minggu Ini'},
    {label: 'Bulan Ini', value: 'Bulan Ini'},
    {label: 'Bulan Lalu', value: 'Bulan Lalu'},
    {label: 'Custom Date Range', value: 'Custom Date Range'},
  ]);

  const [chooseImage, setChooseImage] = useState(true);
  const handleModal = () => setChooseImage(() => true);
  const [pickerResponse, setPickerResponse] = useState(null);
  const handleCloseModal = () => setChooseImage(false);
  const [date, setDate] = useState(null);
  return (
    <>
      <View style={[styles.boxHeader, {top: '9%'}]}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Hari Ini"
          style={{
            width: 330,
            backgroundColor: '#f8f4f4',
            marginTop: 10,
            borderColor: '#f8f4f4',
            alignSelf: 'center',
            height: 40,
            marginBottom: 10,
            position: 'absolute',
            zIndex: 9999999,
            elevation: 1,
            flex: 1,
          }}
          onClose={handleModal}
          dropDownContainerStyle={{
            backgroundColor: '#f8f4f4',
            width: 330,
            alignSelf: 'center',
            marginTop: 10,
            zIndex: 999999,
            position: 'absolute',
            borderColor: 'grey',
            flex: 1,
          }}
          placeholderStyle={{
            color: 'black',
          }}
          textStyle={{
            color: 'black',
            width: 330,
          }}
          zIndex={99999}
        />

        <View style={[styles.row, {marginTop: 60, zIndex: -1, elevation: -1}]}>
          <View style={styles.boxBalance}>
            <View style={styles.boxOutputIcon}>
              <IconArrowUpPink />
            </View>
            <View style={styles.amountBalance}>
              <Texting label="Belanja" size={15} color="grey" weight="bold" />
              <View style={styles.row}>
                <Texting label="Rp " size={12} color="grey" />
                <Texting label="145.000.000" weight="bold" />
              </View>
            </View>
          </View>

          <View style={styles.boxBalance}>
            <View style={styles.boxInputIcon}>
              <IconArrowDOwnGreen />
            </View>
            <View style={styles.amountBalance}>
              <Texting label="Penjualan" size={15} color="grey" weight="bold" />
              <View style={styles.row}>
                <Texting label="Rp " size={12} color="grey" />
                <Texting label="145.000.000" weight="bold" />
              </View>
            </View>
          </View>
        </View>
        <Gap height={10} />

        <View style={[styles.profitLoss, {zIndex: -1, elevation: -1}]}>
          <Gap width={20} />
          <Texting label="Laba/Rugi : " width={80} color="grey" />
          <Texting label="Rp. 15.000.000" weight="bold" />
        </View>
        <Gap height={5} width={1} />
      </View>
      {value === 'Custom Date Range' ? (
        <Modal
          isVisible={chooseImage}
          onBackButtonPress={handleCloseModal}
          onBackdropPress={handleCloseModal}
          onDismiss={handleCloseModal}
          animationType="fade">
          <View style={styles.modal}>
            <View style={styles.headerCalendar}>
              <Texting label="2021" size={16} color="#f8f4f4" />
              <Texting
                label="Kam, 23 Sep"
                size={26}
                color="#f8f4f4"
                weight="bold"
              />
            </View>

            <DateRangePicker
              initialRange={['2018-04-01', '2018-04-10']}
              onSuccess={(s, e) => setDate(`${s} ${e}`)}
              theme={{markColor: 'skyblue', markTextColor: 'white'}}
            />

            <Gap height={20} />
            <View
              style={[
                styles.row,
                {
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  bottom: 15,
                  right: 15,
                },
              ]}>
              <TouchableOpacity color="white" onPress={handleCloseModal}>
                <Texting
                  label="BATAL"
                  color="#080c64"
                  weight="bold"
                  size={16}
                />
              </TouchableOpacity>
              <Gap width={20} />
              <TouchableOpacity color="white" onPress={handleCloseModal}>
                <Texting label="OKE" color="#080c64" weight="bold" size={16} />
              </TouchableOpacity>
              <Gap width={20} />
            </View>
          </View>
        </Modal>
      ) : null}
    </>
  );
}
