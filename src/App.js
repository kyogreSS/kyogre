/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react"
import {
	AppRegistry,
	View,
	StatusBar
} from "react-native"
import {StackNavigator} from "react-navigation"
//引入组件
import componentInit from "./configs/components/components"
import Router from "./configs/components/RouterConfig"

//设置StackNavigator
const Kyogre = StackNavigator(
	Router, componentInit
)

const styles = {
	root: {
		flex: 1
	}
}

class App extends Component {
	render() {
		return (
			<View style={styles.root}>
				<StatusBar
					barStyle="dark-content"//字体颜色
				/>
				<Kyogre
					ref={nav => {
						this.navigator = nav
					}}
					screenProps={{}}
				/>
			</View>
		)
	}
}

AppRegistry.registerComponent("Kyogre", () => App)

