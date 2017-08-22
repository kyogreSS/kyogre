package com.kyogre;


import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.kyogre.myModule.GenericsTest;
import com.kyogre.myModule.TestBroadCast;
import com.kyogre.myModule.TestBroadSend;
import com.kyogre.myModule.TestCallBack;
import com.kyogre.myModule.TestIntent;
import com.kyogre.myModule.TestPower;
import com.kyogre.myModule.TestToast;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class TestRegister implements ReactPackage{
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules(){
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext){
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext){
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new TestToast(reactContext));
        modules.add(new GenericsTest(reactContext));
        modules.add(new TestCallBack(reactContext));
        modules.add(new TestPower(reactContext));
        modules.add(new TestIntent(reactContext));
        modules.add(new TestBroadCast(reactContext));
        modules.add(new TestBroadSend(reactContext));
        return modules;
    }

}