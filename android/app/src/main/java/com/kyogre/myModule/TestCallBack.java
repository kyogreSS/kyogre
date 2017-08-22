package com.kyogre.myModule;


import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.bridge.Callback;


public class TestCallBack extends ReactContextBaseJavaModule {
    public TestCallBack(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestCallBack";
    }

    @ReactMethod
    public void doSomething(int tag, Callback successCallback, Callback errorCallback) {
        try {
            String message = "";
            switch (tag) {
                case 1:
                    message = "what the fuck?";
                    break;
                case 2:
                    message = "you are shit!";
                    break;
                default:
                    message = "you are good♂";
            }
            successCallback.invoke(message);

        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }


}

