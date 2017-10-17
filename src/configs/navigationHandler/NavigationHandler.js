/**
 * Created by hjx on 2017/8/22.
 */
import {NavigationActions} from "react-navigation"

export default class NavigationHandler {

	static _navigationRef = null

	static _instance = null

	static _navigation = null

	static get instance() {
		if (!NavigationHandler._instance) {
			NavigationHandler._instance = new NavigationHandler()
		}
		return NavigationHandler._instance
	}

	setNavigation(nav) {
		if (!nav._navigation) return
		NavigationHandler._navigationRef = nav._navigation
		NavigationHandler._navigation = nav
	}

	href(routeName, params, action) {
		if (!NavigationHandler._navigationRef) return () => {

		}
		return NavigationHandler._navigationRef.navigate(routeName, params, action)

	}

	goBack(key) {
		if (!NavigationHandler._navigationRef) return () => {

		}
		return NavigationHandler._navigationRef.goBack(key)
	}

	dispatch(action) {
		if (!NavigationHandler._navigationRef) return () => {

		}
		return NavigationHandler._navigationRef.dispatch(action)
	}

	setParams(...params) {
		if (!NavigationHandler._navigationRef) return () => {

		}
		return NavigationHandler._navigationRef.setParams(...params)
	}

	get state() {
		if (!NavigationHandler._navigation || !NavigationHandler._navigation.state) return {}
		return NavigationHandler._navigation.state
	}

	get params() {
		if (!NavigationHandler._navigation || !NavigationHandler._navigation.state) return null
		return NavigationHandler._navigation.state.nav.routes[NavigationHandler._navigation.state.nav.index].params

	}


	//文档上似乎可以直接使用各方法，并不需要新创建一个action
	// 新创建action的情况是用dispatch方法，保险起见写上，此部分没有测试！

	createNavigate({routeName, params, action}) {
		if (!NavigationHandler._navigationRef) return () => {
		}
		let navigateAction = NavigationActions.navigate({routeName: routeName, params: params, action: action})
		NavigationHandler._navigationRef.dispatch(navigateAction)
	}

	createReset({index, actions, key}) {
		if (!NavigationHandler._navigationRef) return () => {
		}
		let ResetAction = []
		for (let i = 0; i < actions.length; i++) {
			ResetAction.push(NavigationActions.navigate(actions[i]))
		}
		let navigateAction = NavigationActions.reset({index: index, actions: ResetAction, key: key})
		NavigationHandler._navigationRef.dispatch(navigateAction)
	}

	createBack(key) {
		if (!NavigationHandler._navigationRef) return () => {
		}
		let navigateAction = NavigationActions.back({key: key})
		NavigationHandler._navigationRef.dispatch(navigateAction)
	}

	setParams({params, key}) {
		if (!NavigationHandler._navigationRef) return () => {
		}
		let navigateAction = NavigationActions.setParams({params: params, key: key})
		NavigationHandler._navigationRef.dispatch(navigateAction)

	}


}