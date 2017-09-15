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

	render() {
		return (
			<View style={{}}>
				<Button title="go To othor place" onPress={() => this.nav.href("TestPage")}/>
				<Button title="try notify" onPress={() => this.notify("aaa")}/>
			</View>
		)
	}
}