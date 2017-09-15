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
import TestPage from "./TestPage"
import Front from "./Front"

const icon = [require("../assets/home.png"), require("../assets/set.png")]
const selectedIcon = [require("../assets/home-selected.png"), require("../assets/set-selected.png")]

import TabBar from "./TabBar"

export default class Kyogre extends Component {

	constructor() {
		super()
	}

	stateChanged(index) {
		console.log(index)
	}

	render() {
		return (
			<View style={styles.container}>
				<TabBar
					someValue="123"
					stateChanged={this.stateChanged}
				>
					<TabBar.Item
						icon={icon[0]}
						selectedIcon={selectedIcon[0]}
						text="首页"

					>
						<Front/>
					</TabBar.Item>
					<TabBar.Item
						icon={icon[1]}
						selectedIcon={selectedIcon[1]}
						text="设置"
					>
						<TestPage/>
					</TabBar.Item>
					<TabBar.Item
						icon={icon[1]}
						selectedIcon={selectedIcon[0]}
						text="图标"
					>
						<Text>wthsa</Text>
					</TabBar.Item>

				</TabBar>


			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "black",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	}
})
