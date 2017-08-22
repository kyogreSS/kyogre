package com.kyogre.myModule;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by hjx on 2017/8/11.
 */

public class TestBroadSend extends ReactContextBaseJavaModule{
    private ReactApplicationContext myContext;
    public TestBroadSend(ReactApplicationContext reactContext){
        super(reactContext);
        myContext = reactContext;
    }

    @Override
    public String getName(){
        return "TestBroadSend";
    }

    @ReactMethod
    public void broadSend(){
        Intent intent = new Intent();
        intent.putExtra("data","you are a big big girl");
        intent.setAction("TestBroadCast");
        myContext.sendBroadcast(intent);
    }


}
