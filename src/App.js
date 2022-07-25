import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthProvider, ReportBuyProvider, TransactionProvider} from './context';
import {navigationRef} from './RootNavigation';
import {Router} from './router';
import {responsiveFont} from './utils';
import {useOrientation} from './hooks';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <ReportBuyProvider>
        <TransactionProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </TransactionProvider>
      </ReportBuyProvider>
    </NavigationContainer>
  );
};

export default App;
