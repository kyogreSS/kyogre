/**
 * Created by hjx on 2017/8/10.
 */

import React, {Component} from "react"
import GlobalFunc from "./configs/global/GlobalFunction"
import NavigationHandler from "./configs/navigationHandler/NavigationHandler"
import NetworkConfig from "./configs/network/NetworkConfig"
import FetchMethod from "./configs/network/FetchMethod"

//全局函数
if (GlobalFunc) {
	for (let funcName of Object.keys(GlobalFunc)) {
		Component.prototype[funcName] = GlobalFunc[funcName]
	}
}

//设置网络请求
FetchMethod.setConfig(NetworkConfig)


//全局屏幕设置
global.DefaultWidth = 750
global.DefaultHeight = 1334

