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
import {StackNavigator, StackRouter} from "react-navigation"
import TestPage from "./TestPage"


export default class Kyogre extends Component {

	static navigationOptions = {
		//title: "welcome!"
	}

	testNotifyValue = "home!!"

	constructor() {
		super()
		this.listen("aaa", this, () => {
			console.warn("===aaa,home!", this.testNotifyValue)
		})

	}



	//static router = StackRouter({
	//	"TestPage": {screen: TestPage}
	//})

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
				<Button title="go To othor place" onPress={() => navigate("TestPage")}/>
				<Button title="try notify" onPress={() => this.notify("aaa")}/>

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
