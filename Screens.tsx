import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import * as React from "react";

import App from "./App";
import Demo from "@src/screens/Demo";
import TabScreens from "./TabScreens";

export type RootStacksParams = {
  App: undefined;
  TabScreens: undefined;
  Demo: { id: String };
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;

export default function Stacks() {
  const navigator = useNavigationContainerRef();
  // useFlipper(navigator);
  return (
    <NavigationContainer ref={navigator}>
      <RootStack.Navigator
        screenOptions={{ animation: "slide_from_right", headerShown: false }}
      >
        <RootStack.Screen name="TabScreens" component={TabScreens} />
        <RootStack.Screen name="App" component={App} />
        <RootStack.Screen name="Demo" component={Demo} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
