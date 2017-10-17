/**
 * Created by hjx on 2017/8/10.
 */

import React, {Component} from "react"
import {Dimensions, Platform} from "react-native"
import ExtraDimensions from "react-native-extra-dimensions-android"
import GlobalFunc from "./configs/global/GlobalFunction"
import NavigationHandler from "./configs/navigationHandler/NavigationHandler"
import NetworkConfig from "./configs/network/NetworkConfig"
import FetchMethod from "./configs/network/FetchMethod"
import WebSocketMethod from "./configs/network/WebSocketMethod"
import StoreConfig from "./configs/stores/StoreConfig"
import StoreHandler from "./configs/stores/StoreHandler"
//全局函数
if (GlobalFunc) {
	for (let funcName of Object.keys(GlobalFunc)) {
		Component.prototype[funcName] = GlobalFunc[funcName]
	}
}
let store = new StoreHandler(StoreConfig)
Component.prototype.store = store.store

//设置网络请求
FetchMethod.setConfig(NetworkConfig)
WebSocketMethod.buildSocket()

//全局屏幕设置，默认比例是DefaultWidth和DefaultHeight
//安卓因为有状态栏，采用了'react-native-extra-dimensions-android'组件

global.DefaultWidth = 750
global.DefaultHeight = 1334


if (Platform.OS === "ios") {
	global.DeviceHeight = Dimensions.get("window").height
	global.DeviceWidth = Dimensions.get("window").width
}
if (Platform.OS === "android") {
	global.DeviceHeight = ExtraDimensions.get("REAL_WINDOW_HEIGHT") - ExtraDimensions.get("STATUS_BAR_HEIGHT")
	global.DeviceWidth = ExtraDimensions.get("REAL_WINDOW_WIDTH")
}

global.getHeight = (px) => global.DeviceHeight / global.DefaultHeight * px
global.getWidth = (px) => global.DeviceWidth / global.DefaultWidth * px

