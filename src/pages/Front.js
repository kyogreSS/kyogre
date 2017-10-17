/**
 * Created by hjx on 2017/9/14.
 */
import React, {Component} from "react"
import {View, Button, Dimensions, Text} from "react-native"
import {NavigationActions} from "react-navigation"
import WebSocketMethod from "../configs/network/WebSocketMethod"
import {observer} from "mobx-react"
import {observable} from "mobx"



@observer
export default class Front extends Component {
	constructor(...props) {
		super(...props)
	}


	data1 = "123"
	data2 = "456"

	test1 = (data) => {
		console.warn("===data1", this.data1, data)
	}

	test2(data) {
		console.warn("===data2", this.data2, data)
	}

	render() {
		return (
			<View style={{}}>
				<Button title="go To othor place" onPress={() => this.nav.href("TestPage")}/>
				<Button title="try notify" onPress={() => this.notify("aaa")}/>
				<Button title="try fetch" onPress={() => {
					this.request("TEST", {}, this.test1)
				}}/>
				<Button title="try fetch 2" onPress={() => {
					this.request("USERS", {aaa: "123"}, this.test2.bind(this))
				}}></Button>
				<Button title="send socket message"
				        onPress={() => {
					        if (this.socketInstance().readyState === 1) {
						        this.socketInstance().send("aaaaa")
					        }
				        }}
				></Button>
				<Text>123+{this.store.name}</Text>
			</View>
		)
	}
}