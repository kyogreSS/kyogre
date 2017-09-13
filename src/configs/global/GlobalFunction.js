/**
 * Created by hjx on 2017/8/22.
 */
import EventBus from "../../utils/EventBus"

const globalFunc = {}


globalFunc.notify = function (key, ...args) {
	EventBus.instance.notify(key, ...args)
	//console.warn("===aaa")
	//console.warn(EventBus.instance)

}

globalFunc.listen = function (key, bind, func) {
	EventBus.instance.listen(key, bind, func)
}
globalFunc.removeListen=function(key,bind,func){
	EventBus.instance.removeListen(key,bind,func)
}

export default globalFunc