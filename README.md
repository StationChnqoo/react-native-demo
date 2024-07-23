## react-native-demo

主分支基于`react-native@0.68.7`，配置了`ts`和`@ alias`，继承了常用的三方插件：`react-navigation`，`zustand`、`react-native-debugger`。

为什么选择此分支？

在`0.69`及以后，官方修改了`Android`的渲染器，移除了`Flipper`以及`Remote JS Debug`，自带的调试器功能太过鸡肋，截止`0.74.3`仍然不能调试网络，所以选择的`0.69`最近的一个版本：`0.68.7`。
