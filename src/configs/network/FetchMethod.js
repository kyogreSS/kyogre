/**
 * Created by hjx on 2017/9/27.
 */
import NetworkConfig from "./NetworkConfig"

function getUrl(...params) {
	let url = ""
	let tempUrl = ""
	let tempArr = []
	for (let i = 0; i < params.length; i++) {
		tempUrl += params[i].toString()
	}
	tempArr = tempUrl.split("/")
	for (let j = 0; j < tempArr.length; j++) {
		if (tempArr[j] === "") {
			continue
		}
		if (tempArr[j] === "http:" || tempArr[j] === "https:") {
			url += tempArr[j] + "//"
			continue
		}
		url += tempArr[j] + "/"
	}
	return url
}


export default class FetchMethod {
	constructor() {

	}

	static config = {}
	static baseUrl = "http://192.168.1.233"
	static port = "3000"
	static options = {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}

	static setConfig(config) {
		FetchMethod.config = config
	}

	static setUrl(baseUrl) {
		FetchMethod.baseUrl = baseUrl
	}

	static setPort(port) {
		FetchMethod.port = port
	}

	static setOptions(options) {
		FetchMethod.options = options
	}

	/*
	 * @params
	 * key
	 * data
	 * callback
	 * errorHandler
	 * timeOver
	 * timeOverHandler
	 * */



	static doHttpSend = (key, ...params) => {
		let data = {}
		let callBack
		let errorHandler
		let timeOver
		let timeOverHandler

		//参数处理
		if (params[0] && typeof params[0] === "object") {
			data = params.shift()
		}
		if (params[0] && typeof params[0] === "function") {
			callBack = params.shift()
		}
		if (params[0] && typeof params[0] === "function") {
			errorHandler = params.shift()
		}
		if (params[0] && (typeof params[0] === "string" || typeof params[0] === "number")) {
			timeOver = params.shift()
		}
		if (params[0] && !timeOver && typeof params[0] === "function") {
			timeOverHandler = params.shift()
		}


		let config = FetchMethod.config[key]
		if (!config) {
			console.log("The network request is not configured!")
			return
		}

		let options = {}
		Object.assign(options, FetchMethod.options)

		let url = getUrl(FetchMethod.baseUrl + ":" + FetchMethod.port, config.url)

		Object.assign(options, {method: config.method})


		if (config.method === "POST") {
			Object.assign(options, {body: JSON.stringify(data)})
		}

		console.log("====dohttpsend", url, options)

		fetch(url, options)
			.then((res) => {
				console.log("===http responsed!", key)
				if (res.status === "404") {
					console.log("404 not found!")
					return
				}
				if (res.status === "") {

				}
				return res.text()
			})
			.then((data) => {
				console.log("===here is data", key, data)
				try {
					data = JSON.parse(data)
				} catch (e) {
					console.log("The data may not be JSON type")
				}
				callBack && callBack(data)
			})
			.catch((error) => {
				console.log("The network get some problem!", error)
				errorHandler && errorHandler()
			})
	}
}