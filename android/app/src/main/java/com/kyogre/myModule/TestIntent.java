package com.kyogre.myModule;



import android.content.Intent;


import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import com.kyogre.myActivity.TestActivity;


public class TestIntent extends ReactContextBaseJavaModule {

    private ReactApplicationContext mContext;

    public TestIntent(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "TestIntent";
    }


    @ReactMethod
    public void goTo(){

    }

}