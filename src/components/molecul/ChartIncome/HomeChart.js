import React, {useContext, useState} from 'react';
import {FlatList, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {AuthContext} from '../../../context';

export default function HomeChart({orientation}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const {
    state: {dataHome},
  } = useContext(AuthContext);

  const dataLabel = dataHome.data.chart_data.sales.map(item => {
    return item.time;
  });

  const dataSales = dataHome.data.chart_data.sales.map(item => {
    return item.data / 1000;
  });

  const dataPurchases = dataHome.data.chart_data.purchases.map(item => {
    return item.data / 1000;
  });

  const [floatData, setFloatData] = useState();

  return (
    <View
      style={{
        height: orientation.isPotrait
          ? orientation.height * 0.25
          : orientation.height * 0.5,
        alignItems: 'center',
      }}>
      <LineChart
        data={{
          labels: dataLabel,
          datasets: [
            {
              data: dataSales,
              strokeWidth: 3,
              color: opacity => `rgba(91, 91, 255, 1)`, // optional
            },
            {
              data: dataPurchases,
              strokeWidth: 3,
              color: opacity => `rgba(190, 91, 223, 1)`, // optional
            },
          ],
        }}
        width={orientation.width * 0.8} // from react-native
        height={
          orientation.isPotrait
            ? orientation.height * 0.3
            : orientation.height * 0.5
        }
        onDataPointClick={index => {
          setFloatData([index.x, index.y]);
          setModalVisible(true);
        }}
        yAxisSuffix="k"
        yAxisInterval={0.7} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#000000',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: opacity => `rgba(0, 0, 0, 0.1)`,
          labelColor: opacity => `rgba(0, 0, 0, 1)`,
          fillShadowGradientOpacity: 10,
          propsForDots: {
            r: `${(orientation.width + orientation.height) / 250}`,
          },
          propsForLabels: {
            fontSize: (orientation.width + orientation.height) / 100,
          },
          useShadowColorFromDataset: true,
          fillShadowGradientOpacity: 2,
        }}
        verticalLabelRotation={orientation.isPotrait ? 15 : 0}
        yLabelsOffset={1}
        bezier
      />
    </View>
  );
}
