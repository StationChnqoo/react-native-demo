import React, { createContext, useEffect } from "react";
import { AppRegistry, StatusBar, View } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { useStore } from "./useStore";
import Screens from "./Screens";

const StoreContext = createContext();

const Demo = () => {
  useEffect(() => {
    // console.log('Config.APP_PACKAGE_NAME: ', Config.APP_PACKAGE_NAME);
    return function () {};
  }, []);

  return (
    <StoreContext.Provider value={useStore}>
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} />
        <View style={{ flex: 1, position: "relative" }}>
          <Screens />
        </View>
      </View>
    </StoreContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => Demo);
