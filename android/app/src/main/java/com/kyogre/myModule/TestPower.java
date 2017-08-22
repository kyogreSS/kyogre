package com.kyogre.myModule;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import com.kyogre.utils.EventEmitter;


public class TestPower extends ReactContextBaseJavaModule {

    private static final String TAG = "TestPower";


    public TestPower(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestPower";
    }


    @ReactMethod
    public void doSomething() {
        WritableMap params = Arguments.createMap();
        params.putInt("value", 1);
        EventEmitter.send(getReactApplicationContext(),"testPower", params);
        Log.i(TAG, "doSomething: ");
    }


}
