/**
 * Created by hjx on 2017/8/10.
 */

import React, {Component} from "react"
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from "react-native"

export default class TestPage extends Component {

	static navigationOptions =
		({navigation}) => {
			return (
				{
					title: `this is some ${navigation.state.params.title}`
				}
			)
		}


	render() {
		const {params} = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					this is testPage!!!and this is {params.title}
				</Text>
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
