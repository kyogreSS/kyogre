/**
 * Created by hjx on 2017/10/12.
 */
import {observable, autorun} from "mobx"
export default class StoreHandler {
	store = {}

	constructor(config) {
		if (config) {
			this.store = observable(config)
		}
	}

}