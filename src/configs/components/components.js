/**
 * Created by hjx on 2017/8/10.
 */
import React, {Component} from "react"
//screen从右侧push进入
import CardStackStyleInterpolator from "react-navigation/src/views/CardStackStyleInterpolator"

const componentInit = {
	headerMode: "screen",
	initialRouteName: "Home",
	navigationOptions: {
		//header: null
	},
	path: "",
	mode: "modal",
	headerMode: "screen",
	cardStyle: {},
	transitionConfig: () => {
		return {
			screenInterpolator: CardStackStyleInterpolator.forHorizontal
		}
	},
	onTransitionStart: () => {

	},
	onTransitionEnd: () => {

	},

}
export default componentInit
