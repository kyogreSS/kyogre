package com.kyogre.myModule;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class GenericsTest extends ReactContextBaseJavaModule {

    public GenericsTest(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "GenericsTest";
    }


//    @ReactMethod
//    public static <T> void doSomeThing(T message){
//        Toast.makeText(getReactApplicationContext(),message,1).show();
//    }

//    @ReactMethod
//    public <L> void show(L message){
//
//    }

    public <L> void doSomething(L message){
        Log.w("yayaya","what");
        System.out.print(message);
    }

    @ReactMethod
    public void SomeTest1(int message){
        switch(message){
            case 1 :
                doSomething(123456);
                break;
            case 2 :
                doSomething("hahaha");
                break;
            case 3 :
                doSomething("fuckyou");
                break;
            default :
                doSomething("noThing");
        }
    }

}
