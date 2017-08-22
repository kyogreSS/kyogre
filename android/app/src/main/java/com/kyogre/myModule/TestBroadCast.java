package com.kyogre.myModule;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;


import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.kyogre.utils.EventEmitter;

/**
 * Created by hjx on 2017/8/11.
 */

public class TestBroadCast extends ReactContextBaseJavaModule {

    private ReceiveBroadCast receiveBroadCast;
    private ReactApplicationContext myContext;


    public TestBroadCast(ReactApplicationContext reactContext) {
        super(reactContext);
        myContext = reactContext;

    }

    @Override
    public String getName() {
        return "TestBroadCast";
    }

    @ReactMethod
    public void makeBroadCast(){
        receiveBroadCast = new ReceiveBroadCast();
        IntentFilter filter = new IntentFilter();
        filter.addAction("TestBroadCast");
        myContext.registerReceiver(receiveBroadCast,filter);
    }

    @ReactMethod
    public void removeBroadCast(){
        myContext.unregisterReceiver(receiveBroadCast);
    }

    public class ReceiveBroadCast extends BroadcastReceiver{

        @Override
        public void onReceive(Context context, Intent intent){
            String message = intent.getStringExtra("data");
            WritableMap list =Arguments.createMap();
            list.putString("data",message);
            EventEmitter.send(myContext,"TestBroad",list);
        }
    }


}

