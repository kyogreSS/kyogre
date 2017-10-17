/**
 * Created by hjx on 2017/10/13.
 */
import React, {Component} from "react"
import {View, TextInput, Text, Button, StyleSheet} from "react-native"
import {observable, action} from "mobx"
import {observer} from "mobx-react"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},
	TextInput: {
		width: "50%",
		marginTop: getWidth(10),
		marginBottom: getWidth(10),
		textAlign: "center"
	}
})

@observer
export default class Login extends Component {
	constructor(...params) {
		super(...params)
		this.listen("LoginIn", this, this.LoginIn)
	}

	@action
	LoginIn = (data) => {
		if (data.messageType === 1) {
			this.nav.createReset({index: 0, actions: [{routeName: "Chat",params:{userNumber:data.userNumber}}]})
		}
		if (data.messageType === 2) {

		}
	}

	componentWillUnmount() {
		this.removeListen("LoginIn", this)
	}

	@observable
	myName = ""

	clickToLogin = () => {
		if (this.myName == "") return
		let obj = {}
		this.store.uuid = this.createUUID()
		this.store.name = this.myName

		obj.uuid = this.store.uuid
		obj.name = this.myName

		this.socketSend("LoginIn", obj)
	}

	@action
	textInput = (text) => {
		this.myName = text
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>请登录</Text>
				<TextInput
					style={styles.TextInput}
					onChangeText={this.textInput}
					maxLength={6}
					placeholder={"输入昵称进入"}
				/>
				<Button title="点击登录" onPress={this.clickToLogin}/>
			</View>
		)
	}


}