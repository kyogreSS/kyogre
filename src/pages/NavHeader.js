/**
 * Created by hjx on 2017/9/15.
 */
import React, {Component} from "react"
import {View, StyleSheet, Dimensions, TouchableOpacity, Text} from "react-native"
import PropTypes from "prop-types"

let getWidth = (px) => Dimensions.get("window").width / DefaultWidth * px
let getHeight = (px) => Dimensions.get("window").height / DefaultHeight * px

export default class NavHeader extends Component {
	static propTypes = {
		goBack: PropTypes.func.isRequired,
		headerTitle: PropTypes.string,
		headerRight: PropTypes.any,
		headerLeft: PropTypes.any,
		headerRightTitle: PropTypes.string,
		headerLeftTitle: PropTypes.string,
	}
	static defaultProps = {}

	constructor(...params) {
		super(...params)
	}


	render() {
		return (
			<View style={[styles.container]}>
				<TouchableOpacity
					onPress={this.props.goBack}
				>
					<Text style={[styles.goBack]}>{"<"}</Text>
				</TouchableOpacity>
				<Text>{this.props.headerTitle}</Text>
				<TouchableOpacity>

				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		width: "100%",
		height: getHeight(100),
		backgroundColor: "black",
	},
	goBack: {
		backgroundColor: "white",
		textAlign:"center",
		width: getWidth(50),
		height:getHeight(50),
		lineHeight:getHeight(45)

	}

})