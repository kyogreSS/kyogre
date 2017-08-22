package com.kyogre.utils;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by softa on 2017/8/3.
 * 原生向js发送事件工具
 */
public class EventEmitter {
    public static void send(ReactApplicationContext reactApplicationContext, String eventName, WritableMap params) {
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
