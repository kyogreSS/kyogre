/**
 * Created by hjx on 2017/8/10.
 */

import React, {Component} from "react"
import GlobalFunc from "./configs/global/GlobalFunction"
import EventBus from "./utils/EventBus"


if (GlobalFunc) {
	for (let funcName of Object.keys(GlobalFunc)) {
		Component.prototype[funcName] = GlobalFunc[funcName]
	}
}