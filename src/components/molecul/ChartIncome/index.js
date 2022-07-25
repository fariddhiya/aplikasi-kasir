import React, {useContext, useState} from 'react';
import {Dimensions, StyleSheet, FlatList} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {ReportBuyContext} from '../../../context';

export default function ChartIncome({filter, orientation}) {
  const {
    state: {dataReport},
  } = useContext(ReportBuyContext);

  const dataLabel = dataReport.data.chart_data.purchases.map(item => {
    return item.time;
  });

  const dataSales = dataReport.data.chart_data.sales.map(item => {
    return item.data / 1000;
  });

  const dataPurchases = dataReport.data.chart_data.purchases.map(item => {
    return item.data / 1000;
  });

  let dataSetChart;

  if (filter === 'all') {
    dataSetChart = [
      {
        data: dataSales,
        strokeWidth: 2,
        color: opacity => `rgba(91, 91, 255, 1)`,
      },
      {
        data: dataPurchases,
        strokeWidth: 2,
        color: opacity => `rgba(190, 91, 223, 1)`,
      },
    ];
  }
  if (filter === 'sales') {
    dataSetChart = [
      {
        data: dataSales,
        strokeWidth: 2,
        color: opacity => `rgba(91, 91, 255, 1)`, // optional
      },
    ];
  }
  if (filter === 'purchases') {
    dataSetChart = [
      {
        data: dataPurchases,
        strokeWidth: 2,
        color: opacity => `rgba(190, 91, 223, 1)`, // optional
      },
    ];
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={
        <LineChart
          data={{
            labels: dataLabel,
            datasets: dataSetChart,
          }}
          width={orientation.width * 1.2} // from react-native
          height={
            orientation.isPotrait
              ? orientation.height * 0.35
              : orientation.height * 0.5
          }
          yAxisSuffix="k"
          yAxisInterval={0.7} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#000000',
            backgroundGradientFrom: '#f8f4fc',
            backgroundGradientTo: '#f8f4fc',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: opacity => `rgba(0, 0, 0, 0.1)`,
            labelColor: opacity => `rgba(0, 0, 0, 1)`,
            fillShadowGradientOpacity: 10,
            propsForDots: {
              r: '5',
            },
            propsForLabels: {
              fontSize: (orientation.width + orientation.height) / 100,
            },
            paddingLeft: 60,
            paddingTop: 200,
            useShadowColorFromDataset: true,
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      }
    />
  );
}
