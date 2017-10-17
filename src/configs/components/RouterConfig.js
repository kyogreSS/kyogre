/**
 * Created by hjx on 2017/9/12.
 */
import Home from  "../../pages/Home"
import TestPage from "../../pages/TestPage"
import Front from "../../pages/Front"
import Login from "../../pages/Login"
import Chat from "../../pages/Chat"
const Router = {}


Router.Home = {
	screen: Home,
	navigationOptions: {
		header: null
	}
}

Router.TestPage = {
	screen: TestPage,
	navigationOptions: {}
}
Router.Front = {
	screen: Front
}
Router.Login = {
	screen: Login,
	navigationOptions: {
		header: null
	}
}
Router.Chat = {
	screen: Chat,
	navigationOptions: {
		header: null
	}
}


export default Router