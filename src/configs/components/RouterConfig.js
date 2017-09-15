/**
 * Created by hjx on 2017/9/12.
 */
import Home from  "../../pages/Home"
import TestPage from "../../pages/TestPage"
import Front from "../../pages/Front"
const Router = {}


Router.Home = {
	screen: Home,
	navigationOptions: {
		header: null
	}
}

Router.TestPage = {
	screen: TestPage,
	navigationOptions: {

	}
}
Router.Front = {
	screen: Front
}


export default Router