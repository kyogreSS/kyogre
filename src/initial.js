/**
 * Created by hjx on 2017/8/10.
 */

import React, {Component} from "react"
import GlobalFunc from "./configs/global/GlobalFunction"
import NavigationHandler from "./configs/navigationHandler/NavigationHandler"

//全局函数
if (GlobalFunc) {
	for (let funcName of Object.keys(GlobalFunc)) {
		Component.prototype[funcName] = GlobalFunc[funcName]
	}
}
//全局路由
if (NavigationHandler) {
	Component.prototype.nav = new NavigationHandler()
}

//全局屏幕设置
global.DefaultWidth = 750
global.DefaultHeight = 1334

