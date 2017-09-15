/**
 * Created by hjx on 2017/8/10.
 */

import React, {Component} from "react"
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Button
} from "react-native"


export default class TestPage extends Component {


	testNotifyValue = "TestPage"

	testNotifyFunc = () => {
		console.warn("===testpage", this.testNotifyValue)
	}


	constructor() {
		super()
		this.listen("aaa", this, this.testNotifyFunc)
	}

	componentWillUnmount() {
		this.removeListen("aaa", this, this.testNotifyFunc)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					this is testPage!!!and this is
				</Text>
				<Button title="try notify" onPress={() => this.notify("aaa")}/>
				<Button title="goOther" onPress={() => this.nav.href("Front")}/>
				<Button title="and go other" onPress={() => this.nav.href("Front")}/>
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
