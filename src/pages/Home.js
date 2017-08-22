/**
 * Created by hjx on 2017/8/10.
 */

import React, {Component} from "react"
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Button,
	NativeModules,
	DeviceEventEmitter
} from "react-native"
import EventName from "../utils/TestEvent"


export default class Kyogre extends Component {

	static navigationOptions = {
		title: "welcome!"
	}
	doSomething = () => {
		//NativeModules.TestPower.doSomething()
		//console.warn("this is ",EventName.TestIntent.goTo)

		//console.warn("====",NativeModules.TestToast)
	}
	makeBroadCast = () => {
		//console.warn("this is ",EventName.TestBroadCast)
		EventName.TestBroadCast.makeBroadCast()
	}
	removeBroadCast = () => {
		EventName.TestBroadCast.removeBroadCast()
	}
	sendBroad = () => {
		//console.warn("this is",EventName.TestBroadSend)
		EventName.TestBroadSend.broadSend()
	}

	constructor() {
		super()
		DeviceEventEmitter.addListener("testPower", () => {
			console.warn("wtf")
		})
		DeviceEventEmitter.addListener("TestBroad", (data) => {
			console.warn("this is data", data.data)
		})

		//console.log("aaaa")
		//this.testFunction().then(()=>{
		//	console.log("444")
		//})
		//console.log("3333")


	}

	//testFunction = async () => {
	//	console.log("====111!")
	//	await new Promise((resolve, reject) => {
	//		setTimeout(()=>{resolve()}, 1000)
	//	})
	//	console.log("===2222!")
	//}


	render() {
		const {navigate} = this.props.navigation
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{"\n"}
					Cmd+D or shake for dev menu
				</Text>
				<Button title="go To othor place" onPress={() => navigate("TestPage", {title: 'aaaaa!!!'})}/>
				<Button title="doSomething" onPress={this.doSomething}/>
				<Button title="makeBroadCast" onPress={this.makeBroadCast}/>
				<Button title="sendBroad" onPress={this.sendBroad}/>
				<Button title="removeBroadCast" onPress={this.removeBroadCast}/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
})
