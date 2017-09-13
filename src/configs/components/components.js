/**
 * Created by hjx on 2017/8/10.
 */
import {View, Text, Button} from "react-native"
import React, {Component} from "react"


let HeaderText = () => {
	return (
		<View style={{borderWidth: 1, borderColor: "red", borderStyle: "solid", height: 500, width: 500}}>
			<Text style={{borderWidth: 1, borderColor: "red", borderStyle: "solid", height: 500, width: 500}}>what the
				fuck</Text>
		</View>
	)
}

function HeaderFunc({state, setParams, goBack}) {
	let right = (
		<Button
			title="yeyeye"
			onPress={() => setParams({mode: "info"})}
		></Button>
	)

	let left = (
		<Button
			title="aaa"
			onPress={() => setParams({mode: "none"})}
		>

		</Button>
	)
	return (<View style={{height: 200}}><Text>www</Text></View>)
}



const componentInit = {
	headerMode: "screen",
	initialRouteName: "Home",
	navigationOptions: {
		//headerRight: HeaderText,
		//headerLeft: HeaderText,
		//header: Header


	},
	path: "",
	mode: "card",
	headerMode: "float",
	cardStyle: {},
	transitionConfig: () => {

	},
	onTransitionStart: () => {

	},
	onTransitionEnd: () => {

	},

}
export default componentInit
