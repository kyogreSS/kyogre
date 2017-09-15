/**
 * Created by hjx on 2017/9/15.
 */

import React, {Component} from "react"
import {View, TouchableOpacity, Image, Text, StyleSheet, Dimensions, Button} from "react-native"


export default class TabBarItem extends Component {
	constructor(...props) {
		super(...props)
	}

	render() {
		return (
			<View style={styles.container}>
				{this.props.children}
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})