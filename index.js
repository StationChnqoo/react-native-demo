import React, { createContext, useEffect } from "react";
import { AppRegistry, StatusBar, View } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { useStore } from "./useStore";
import Screens from "./Screens";
import { RootSiblingParent } from "react-native-root-siblings";

const StoreContext = createContext();

const Demo = () => {
  const toast = (message) => {
    console.log("index toast: ", message);
  };

  useEffect(() => {
    // console.log('Config.APP_PACKAGE_NAME: ', Config.APP_PACKAGE_NAME);
    return function () {};
  }, []);

  return (
    <StoreContext.Provider value={useStore}>
      <RootSiblingParent>
        <View style={{ flex: 1 }}>
          <StatusBar translucent={false} />
          <View style={{ flex: 1, position: "relative" }}>
            <Screens />
          </View>
        </View>
      </RootSiblingParent>
    </StoreContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => Demo);
