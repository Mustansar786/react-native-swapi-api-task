import React, { useEffect, useState } from 'react';
import "./utils/ignore-warnings"
import codePush from "react-native-code-push";
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
// import SplashScreen from 'react-native-splash-screen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider } from 'react-redux';

import { AppNavigator } from './view/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Store from './stores';


let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
};

let App = () => {

  useEffect(() => {
    // (async () => {
    //   SplashScreen.hide();
    // })();
  }, [])

  

  return  <Provider store={Store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
         
            <BottomSheetModalProvider>
              <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <AppNavigator />
              </SafeAreaProvider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    </Provider>
}

App = codePush(codePushOptions)(App);
export default App