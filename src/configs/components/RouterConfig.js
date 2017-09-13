/**
 * Created by hjx on 2017/9/12.
 */
import Home from  "../../pages/Home"
import TestPage from "../../pages/TestPage"

const Router = {}


Router.Home = {
	screen: Home,
	navigationOptions: {
		header:null
	}
}

Router.TestPage = {
	screen: TestPage,
	navigationOptions: {
		//title: "aha"
	}
}


export default Router