import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomNavigator, TopNavigator} from '../components';
import {
  AddProduct,
  BuyItemScreen,
  DetailTransactionReport,
  EditProduct,
  EditProfile,
  HistoryTransaction,
  InvoicePurchases,
  InvoiceSale,
  KurScreen,
  LandingPage,
  Login,
  MainMenuScreen,
  News,
  NewsDetailScreen,
  NewsMenu,
  OTPScreen,
  ProfileScreen,
  Register,
  ReportScreen,
  ShopScreen,
  SplashScreen,
  TipsScreen,
} from '../pages';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const NewsRouter = ({orientation}) => {
  return (
    <TopTab.Navigator
      initialRouteName="News"
      tabBar={props => <TopNavigator {...props} orientation={orientation} />}>
      <TopTab.Screen name="Kur" component={KurScreen} />
      <TopTab.Screen name="News" component={News} />
      <TopTab.Screen name="Tips" component={TipsScreen} />
    </TopTab.Navigator>
  );
};

const MainApp = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomNavigator {...props} />}>
      <BottomTab.Screen
        name="Berita"
        component={NewsMenu}
        options={{headerShown: false, cardStyleInterpolator: forFade}}
      />
      <BottomTab.Screen
        name="Penjualan"
        component={ShopScreen}
        options={{headerShown: false, cardStyleInterpolator: forFade}}
      />
      <BottomTab.Screen
        name="Home"
        component={MainMenuScreen}
        options={{headerShown: false, cardStyleInterpolator: forFade}}
      />
      <BottomTab.Screen
        name="Belanja"
        component={BuyItemScreen}
        options={{headerShown: false, cardStyleInterpolator: forFade}}
      />
      <BottomTab.Screen
        name="Laporan"
        component={HistoryTransaction}
        options={{headerShown: false, cardStyleInterpolator: forFade}}
      />
    </BottomTab.Navigator>
  );
};

const Router = () => {
  return (
    <View style={styles.ancestor}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{presentation: 'modal'}}
        theme={DarkTheme}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="HistoryTransaction"
          component={HistoryTransaction}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="InvoiceSale"
          component={InvoiceSale}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="EditProduct"
          component={EditProduct}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="ShopScreen"
          component={ShopScreen}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="MainMenuScreen"
          component={MainMenuScreen}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="BuyItemScreen"
          component={BuyItemScreen}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="NewsDetailScreen"
          component={NewsDetailScreen}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="DetailTransactionReport"
          component={DetailTransactionReport}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
        <Stack.Screen
          name="InvoicePurchases"
          component={InvoicePurchases}
          options={{cardStyleInterpolator: forFade, headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  ancestor: {
    backgroundColor: 'black',
    flex: 1,
  },
});

const forFade = ({current, closing}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export {Router, MainApp, NewsRouter};
