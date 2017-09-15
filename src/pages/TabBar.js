/**
 * Created by hjx on 2017/9/14.
 */
import React, {Component} from "react"
import {View, TouchableOpacity, Image, Text, StyleSheet, Dimensions, Button} from "react-native"
import PropTypes from "prop-types"
import TabBarItem from "./TabBarItem"

let getWidth = (px) => Dimensions.get("window").width / DefaultWidth * px;
let getHeight = (px) => Dimensions.get("window").height / DefaultHeight * px;


const styles = StyleSheet.create({
	//conatiner
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "green",
	},
	show: {
		position: "absolute",
		flex: 1,
		width: "100%",
		height: "100%",
	},
	hidden: {
		position: "absolute",
		left: -2 * DefaultWidth,
		width: "-100%",
		height: "-100%",
		opacity: 0,
	},
	//子视图conatiner样式
	childrenView: {
		flex: 11,
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	//导航条样式
	nav: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		width: "100%",
		borderStyle: "solid",
		borderTopWidth: 1,
		borderTopColor: "#e2e2e2"
	},
	//图标容器
	navTouchable: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 5,

	},
	//图标
	icon: {
		width: getWidth(40),
		height: getHeight(40)
	},
	text: {
		fontSize: 11,
		textAlign: "center",
		lineHeight: getHeight(35),
		height: getHeight(35),

	},
	selectedText: {
		color: "red"
	},
	emptyView: {
		textAlign: "center",
	}
})


export default class TabBar extends Component {

	static Item = TabBarItem

	static propTypes = {
		icon: PropTypes.any,
		selectedIcon: PropTypes.any,
		text: PropTypes.string,
		selectedText: PropTypes.string,
		stateChanged: PropTypes.func
	}
	static defaultProps = {
		text: "图标",
	}

	activity = [true]


	constructor(...props) {
		super(...props)
		this.state = {
			selected: 0,
		}
	}


	selectChange(index) {
		if (this.state.selected == index) return
		this.setState({selected: index})
		this.props.stateChanged && this.props.stateChanged(index)
		this.activity[index] = true
	}


	render() {

		return (
			<View style={[styles.container]}>
				<View style={[styles.childrenView]}>
					{
						this.props.children ? React.Children.map(this.props.children, (child, index) => {
							return ( this.activity[index] &&
								<View
									key={"child" + index}
									style={[this.state.selected == index ? styles.show : styles.hidden]}
								>
									{child}
								</View>
							)
						}) : (<Text style={[styles.emptyView]}>no Children View！</Text>)
					}

				</View>
				<View style={[styles.nav]}>
					{
						React.Children.map(this.props.children, (child, index) => {
							let iconSource = child.props.icon
							let selectedIconSource = child.props.selectedIcon || child.props.icon
							let text = child.props.text
							let selectedText = child.props.selectedText || child.props.text
							return (
								<TouchableOpacity
									onPress={() => {
										this.selectChange(index)
									}}
									key={"nav" + index}
									style={styles.navTouchable}
								>
									<Image
										source={this.state.selected == index ? selectedIconSource : iconSource}
										style={[styles.icon]}
									/>
									<Text
										style={[styles.text, this.state.selected == index ? styles.selectedText : null]}>{this.state.selected == index ? text : selectedText}</Text>
								</TouchableOpacity>
							)
						})
					}

				</View>
			</View>
		)
	}
}

