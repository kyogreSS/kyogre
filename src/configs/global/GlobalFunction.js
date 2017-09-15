/**
 * Created by hjx on 2017/8/22.
 */
import EventBus from "../../utils/EventBus"

const globalFunc = {}


globalFunc.notify = function (key, ...args) {
	EventBus.instance.notify(key, ...args)
}

globalFunc.listen = function (key, bind, func) {
	EventBus.instance.listen(key, bind, func)
}
globalFunc.removeListen=function(key,bind,func){
	EventBus.instance.removeListen(key,bind,func)
}
globalFunc.href = function(root){

}
export default globalFunc