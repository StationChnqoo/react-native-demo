import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import App from "./App";
import React from "react";
import { Image } from "react-native";
const Tab = createBottomTabNavigator();

function TabScreens() {
  const screens = [
    {
      name: "Home",
      component: App,
      icon: require("src/assets/menu_home.png"),
      label: "首页",
    },
    {
      name: "Hot",
      component: App,
      icon: require("src/assets/menu_fire.png"),
      label: "热门",
    },
    {
      name: "Message",
      component: App,
      icon: require("src/assets/menu_message.png"),
      label: "消息",
    },
    {
      name: "Friends",
      component: App,
      icon: require("src/assets/menu_friends.png"),
      label: "社区",
    },
    {
      name: "Me",
      component: App,
      icon: require("src/assets/menu_me.png"),
      label: "我的",
    },
  ];
  return (
    <Tab.Navigator>
      {screens.map((it, i) => (
        <Tab.Screen
          name={it.name}
          key={i}
          component={it.component}
          options={{
            tabBarLabel: it.label,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={it.icon}
                style={{ height: 24, width: 24, tintColor: color }}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default TabScreens;
