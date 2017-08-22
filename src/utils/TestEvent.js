/**
 * Created by hjx on 2017/8/10.
 */
import {NativeModules} from "react-native"

const EventName = {}
EventName.TestPower = NativeModules.TestPower
EventName.TestIntent = NativeModules.TestIntent
EventName.TestBroadSend = NativeModules.TestBroadSend
EventName.TestBroadCast = NativeModules.TestBroadCast


export default EventName