/**
 * Created by hjx on 2017/10/11.
 */
import React, {Component} from "react"
import {
	Text,
	View,
	TextInput,
	FlatList,
	Button,
	StyleSheet,
	Dimensions,
	Keyboard,
	InteractionManager
} from "react-native"
import {observer} from "mobx-react"
import {observable, action} from "mobx"

const styles = StyleSheet.create({
	ItemView: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		height: "auto",
		marginTop: getHeight(10),
		marginBottom: getHeight(10),
	},
	ItemNameContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	ItemName: {
		width: "auto",
		textAlign: "center",
	},
	ItemMessageContainer: {
		flex: 2,
		justifyContent: "center"
	},
	ItemMessage: {
		padding: getWidth(10),
		//borderStyle: "solid",
		//borderColor: "#9f9f9f",
		//borderWidth: 1,
		borderRadius: 5
	},
	ItemMessageLeft: {
		width: "auto",
		textAlign: "left",
		alignSelf: "flex-start",
		backgroundColor: "#fffefd",
	},
	ItemMessageRight: {
		width: "auto",
		textAlign: "left",
		alignSelf: "flex-end",
		backgroundColor: "#2196f3",
		color: "white"
	},
	FlatContainerStyle: {
		flex: 12,
	},
	FlatStyle: {
		flex: 1,
	},
	InputStyle: {
		height: getHeight(100),
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: getWidth(5),
		paddingRight: getWidth(5),
	},
	Container: {
		flex: 1,
	},
	MessageInput: {
		flex: 8
	},
	MessageSubmit: {
		flex: 2,
	},
	newsContainer: {
		textAlign: "center",
		color: "#B8B8B8",
		marginTop: getHeight(10),
		marginBottom: getHeight(10),
	}
})

@observer
export default class Chat extends Component {
	constructor() {
		super()
		this.listen("ChatMessage", this, this.receivedMessage)
		this.listen("NewUser", this, this.newUser)
		this.listen("UserExit", this, this.userExit)
		if (this.nav.params) {
			let obj = {}
			obj.messageType = "welcome"
			obj.userNumber = this.nav.params.userNumber
			this.chatData.push(obj)
		}
	}

	componentWillMount() {
		this.keyboardShowListener = Keyboard.addListener("keyboardDidShow", this.flatScrollToEnd)
		this.keyboardHideListener = Keyboard.addListener("keyboardDidHide", this.flatScrollToEnd)
	}

	userExit = (data) => {
		let obj = {}
		obj.messageType = "UserExit"
		obj.data = data
		console.warn(obj.data)
		this.chatData.push(obj)
		this.flatScrollToEnd()
	}

	newUser = (data) => {
		let obj = {}
		obj.messageType = "news"
		obj.data = data
		this.chatData.push(obj)
		this.flatScrollToEnd()
	}

	receivedMessage = (data) => {
		let Message = {}
		Message.messageType = "message"
		Message.data = data

		if (typeof Message.data === "object" && Message.data.name && Message.data.message && Message.data.uuid) {
			this.chatData.push(Message)
			this.flatScrollToEnd()
		}

	}


	@observable
	chatData = []

	message = ""

	chatInput = null

	flatList = null

	setTimeOutToScrollToEnd = null

	flatScrollToEnd = () => {
		this.setTimeOutToScrollToEnd && clearTimeout(this.setTimeOutToScrollToEnd)
		if (this.flatList) {
			this.setTimeOutToScrollToEnd = setTimeout(() => {
				this.flatList.scrollToEnd()
			}, 100)
		}
	}


	textInputFunc = (text) => {
		this.message = text
	}

	@action
	submitMessage = () => {
		console.warn("this is Number", this.nav)

		if (this.message === "") return
		let obj = {}
		obj.name = this.store.name
		obj.uuid = this.store.uuid
		obj.message = this.message
		let success = this.socketSend("ChatMessage", obj)
		if (!success) {
			let faildSend = {}
			faildSend.messageType = "failedSend"
			this.chatData.push(faildSend)
			//this.reBuildSocket()
			return
		}
		if (this.chatInput) {
			this.chatInput.clear()
			this.message = ""
		}
	}

	renderItemFunc = ({item, index}) => {
		return (
			<View>
				{
					item.messageType === "news" && (
						<Text style={styles.newsContainer}>欢迎 {item.data.name} 进入聊天室</Text>
					)
				}
				{
					item.messageType === "message" &&

					(this.store.uuid !== item.data.uuid ?
						(
							<View style={styles.ItemView}>
								<View style={[styles.ItemNameContainer]}>
									<Text style={[styles.ItemName]}>{item.data.name}</Text>
								</View>
								<View style={styles.ItemMessageContainer}>
									< Text
										style={[styles.ItemMessageLeft, styles.ItemMessage]}>{item.data.message}</Text>
								</View>
								<View style={[styles.ItemNameContainer]}>
									<Text style={[styles.ItemName]}></Text>
								</View>
							</View>
						) : (
							<View style={styles.ItemView}>
								<View style={[styles.ItemNameContainer]}>
									<Text style={[styles.ItemName]}></Text>
								</View>
								<View style={styles.ItemMessageContainer}>
									<Text
										style={[styles.ItemMessageRight, styles.ItemMessage]}>{item.data.message}</Text>
								</View>
								<View style={[styles.ItemNameContainer]}>
									<Text style={[styles.ItemName]}>{item.data.name}</Text>
								</View>
							</View>
						))
				}
				{
					item.messageType === "failedSend" && (
						<Text style={styles.newsContainer}>网络不通！请重试</Text>
					)
				}
				{
					item.messageType === "welcome" && (
						<Text style={styles.newsContainer}>欢迎你！当前{item.userNumber}人在线</Text>
					)
				}
				{
					item.messageType === "UserExit" && (
						<Text style={[styles.newsContainer]}>用户 {item.data.userName} 退出！当前剩余{item.data.userNumber}人</Text>
					)
				}

			</View>
		)
	}


	render() {
		return (
			<View style={styles.Container}>
				<View
					style={styles.FlatContainerStyle}>
					<FlatList
						style={styles.FlatStyle}
						data={this.chatData.slice()}
						renderItem={this.renderItemFunc}
						ref={(dom) => {
							if (dom) {
								this.flatList = dom
							}
						}}
						onScroll={() => {

						}}
					/>
				</View>
				<View style={styles.InputStyle}>
					<TextInput style={styles.MessageInput}
					           onChangeText={this.textInputFunc}
					           ref={(dom) => {
						           this.chatInput = dom
					           }}
					           maxLength={70}
					/>
					<Button title="提交"
					        onPress={this.submitMessage}
					        style={styles.MessageSubmit}
					/>
				</View>
			</View>
		)
	}

	componentWillUnmount() {
		this.removeListen("ChatMessage")
		this.removeListen("NewUser")
		this.keyboardHideListener.remove()
		this.keyboardShowListener.remove()
	}
}