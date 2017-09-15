/**
 * Created by hjx on 2017/9/13.
 */
class EventBus {
	constructor() {

	}

	static eventBus = new Map()
	static eventBusListenOnce = new Map()

	static _instance

	static get instance() {
		if (!EventBus._instance) {
			EventBus._instance = new EventBus()
		}
		return EventBus._instance
	}

	listen(key, bind, func) {
		if (typeof func !== "function") {
			return
		}
		let keyMap
		(keyMap = EventBus.eventBus.get(key)) || (EventBus.eventBus.set(key, keyMap = new Map()))
		let bindFuncSet
		(bindFuncSet = keyMap.get(bind)) || (keyMap.set(bind, bindFuncSet = new Set()))
		bindFuncSet.add(func)
	}

	notify(key, ...args) {
		let keyMap = EventBus.eventBus.get(key)
		if (keyMap) {
			keyMap.forEach((bindFuncSet, bind) => {
				bindFuncSet.forEach(func => {
					func.call(bind, ...args)
				})
			})
		}
		let keyMapListenOnce = EventBus.eventBusListenOnce.get(key)
		if (keyMapListenOnce) {
			keyMapListenOnce.forEach((bindFuncSet, bind) => {
				bindFuncSet.forEach(func => {
					func.call(bind, ...args)
				})
			})
			EventBus.eventBusListenOnce.delete(key)
		}

	}

	listenOnce(key, bind, func) {
		if (typeof func !== "function") {
			return
		}
		let keyMap
		(keyMap = EventBus.eventBusListenOnce.get(key)) || (EventBus.eventBusListenOnce.set(key, keyMap = new Map()))
		let bindFuncSet
		(bindFuncSet = keyMap.get(bind)) || (keyMap.set(bind, bindFuncSet = new Set()))
		bindFuncSet.add(func)
	}

	removeListen(key = undefined, bind = undefined, func = undefined) {
		
		if (key == undefined) {
			EventBus.eventBus.clear()
			EventBus.eventBusListenOnce.clear()
			return
		}
		if (bind == undefined) {
			EventBus.eventBus.delete(key)
			EventBus.eventBusListenOnce.delete(key)
			return
		}
		if (func == undefined) {
			let keyMap = EventBus.eventBus.get(key)
			keyMap && keyMap.delete(bind)
			let keyMapListenOnce = EventBus.eventBusListenOnce.get(key)
			keyMapListenOnce && keyMapListenOnce.delete(bind)
			return
		}

		let keyMap = EventBus.eventBus.get(key)
		if (keyMap) {
			let bindFuncSet = keyMap.get(bind)
			bindFuncSet && (bindFuncSet.delete(func))
		}
		let keyMapListenOnce = EventBus.eventBusListenOnce.get(key)
		if (keyMapListenOnce) {
			let bindFuncSetListenOnce = keyMapListenOnce.get(bind)
			bindFuncSetListenOnce && (bindFuncSetListenOnce.delete(func))
		}
	}

}

export default EventBus