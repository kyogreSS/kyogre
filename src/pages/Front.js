/**
 * Created by hjx on 2017/9/14.
 */
import React, {Component} from "react"
import {View, Button, Dimensions} from "react-native"
import {NavigationActions} from "react-navigation"

let getWidth = (px) => Dimensions.get("window").width / 750 * px;
let getHeight = (px) => Dimensions.get("window").height / 1334 * px;


export default class Front extends Component {
	constructor(...props) {
		super(...props)
	}

	render() {
		//const navigate = this.props.navigation
		console.warn("==Front")
		return (
			<View style={{}}>
				<Button title="go To othor place" onPress={() => this.nav.href("TestPage")}/>
				<Button title="try notify" onPress={() => this.notify("aaa")}/>
			</View>
		)
	}
}