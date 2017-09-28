/**
 * Created by hjx on 2017/8/22.
 */

export default class NavigationHandler {

	static _navigationRef = null

	static _instance = null

	static get instance() {
		if (!NavigationHandler._instance) {
			NavigationHandler._instance = new NavigationHandler()
		}
		return NavigationHandler._instance
	}

	setNavigation(nav) {
		if (!nav._navigation) return
		NavigationHandler._navigationRef = nav._navigation
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

	get State() {
		if (!NavigationHandler._navigationRef) return {}
		return NavigationHandler._navigationRef.state
	}


}