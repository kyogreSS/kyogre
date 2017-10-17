/**
 * Created by hjx on 2017/8/22.
 */
import EventBus from "../../utils/EventBus"
import NavigationHandler from "../../configs/navigationHandler/NavigationHandler"
import FetchMethod from "../../configs/network/FetchMethod"
import WebSocketMethod from "../../configs/network/WebSocketMethod"

const globalFunc = {}

//全局事件
globalFunc.notify = function (key, ...args) {
	EventBus.instance.notify(key, ...args)
}

globalFunc.listen = function (key, bind, func) {
	EventBus.instance.listen(key, bind, func)
}
globalFunc.removeListen = function (key, bind, func) {
	EventBus.instance.removeListen(key, bind, func)
}
//----

//全局路由
/*
 * 如果把nav实例化，使用方法为this.nav.href等
 * 如果想直接使用this.href等方法，就要把实例化放在_instance中
 * 然后写this.href调用NavigationHandler.instance.href
 * 那种方法简便看个人
 */
globalFunc.nav = new NavigationHandler()


//globalFunc.setNavigation = function (nav) {
//	NavigationHandler.instance.setNavigation(nav)
//}
//
//globalFunc.href = function (root) {
//	NavigationHandler.instance.href(root)
//}
//globalFunc.goBack = function (key) {
//	NavigationHandler.instance.goBack(key)
//}
//----

//全局网络请求
globalFunc.request = function (key, data, callBack, errorHandler, method, timeOver, timeOverHandler) {
	FetchMethod.doHttpSend(key, data, callBack, errorHandler, method, timeOver, timeOverHandler)
}
//----

//socket实例
globalFunc.socketInstance = () => {
	return WebSocketMethod.SocketInstance
}
//发送方法
globalFunc.socketSend = (key, data) => {
	let obj = {}
	obj.key = key
	obj.data = data
	if (WebSocketMethod.SocketInstance.readyState === 1) {
		WebSocketMethod.SocketInstance.send(JSON.stringify(obj))
		return true
	}
	return false
}
globalFunc.reBuildSocket = () => {
	WebSocketMethod.buildSocket()
}
//----

//uuid
globalFunc.createUUID = function () {
	function S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
}
//----

export default globalFunc