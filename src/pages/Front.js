/**
 * Created by hjx on 2017/9/14.
 */
import React, {Component} from "react"
import {View, Button, Dimensions} from "react-native"
import {NavigationActions} from "react-navigation"

let getWidth = (px) => Dimensions.get("window").width / DefaultWidth * px
let getHeight = (px) => Dimensions.get("window").height / DefaultHeight * px


export default class Front extends Component {
	constructor(...props) {
		super(...props)
	}

	data1 = "123"
	data2 = "456"

	test1 = (data) => {
		console.warn("===data1", this.data1, data)
	}

	test2(data) {
		console.warn("===data2", this.data2, data)
	}

	render() {
		return (
			<View style={{}}>
				<Button title="go To othor place" onPress={() => this.nav.href("TestPage")}/>
				<Button title="try notify" onPress={() => this.notify("aaa")}/>
				<Button title="try fetch" onPress={() => {
					this.request("TEST", {}, this.test1)
				}}/>
				<Button title="try fetch 2" onPress={() => {
					this.request("USERS", this.test2.bind(this))
				}}></Button>
			</View>
		)
	}
}