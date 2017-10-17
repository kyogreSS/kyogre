/**
 * Created by hjx on 2017/9/30.
 * webSocket模块，对应node后端ws模块
 */

import EventBus from "../../utils/EventBus"

export default class WebSocketMethed {
	constructor() {

	}

	static config = {}
	static baseUrl = "ws://192.168.1.233:3002"
	static port = "3000"
	static options = {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}
	static SocketInstance = {}

	static buildSocket() {
		WebSocketMethed.SocketInstance = new WebSocket(WebSocketMethed.baseUrl)
		var Socket = WebSocketMethed.SocketInstance
		console.log("socket build", WebSocketMethed.SocketInstance)
		Socket.onopen = () => {
			console.log("Socket connected!")
			Socket.send("testMessage")
		}
		Socket.onmessage = (evt) => {
			let data = null
			try {
				data = JSON.parse(evt.data)
			} catch (e) {
				data = evt.data
			}
			if (typeof data === "object" && data.key && data.data) {
				EventBus.instance.notify(data.key, data.data)
			}
			console.log("Sokcet received something!", data)
		}
		Socket.onClose = () => {
			console.log("Socket closed!")
		}
		Socket.onerror = (err) => {
			console.log("Socket got some problem!", err)
		}
		console.log("socket ready state", Socket.readyState)

	}

}