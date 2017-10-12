/**
 * Created by hjx on 2017/8/10.
 */

import React, {Component} from "react"
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

//全局屏幕设置
global.DefaultWidth = 750
global.DefaultHeight = 1334

