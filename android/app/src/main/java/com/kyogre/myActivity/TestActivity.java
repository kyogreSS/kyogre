package com.kyogre.myActivity;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.events.Event;
import com.kyogre.R;
import com.kyogre.utils.EventEmitter;

public class TestActivity extends Activity {

    private static final String TAG = "TestActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_test);
    }

    @Override
    protected void onStart(){
        super.onStart();
        Log.i(TAG, "onStart: ");
    }

    @Override
    protected void onStop(){
        super.onStop();
        Log.i(TAG, "onStop: ");
    }

    @Override
    protected void onDestroy(){
        super.onDestroy();
        Log.i(TAG, "onDestroy: ");
    }

    @Override
    protected void onPause(){
        super.onPause();
        Log.i(TAG, "onPause: ");
    }

    @Override
    protected void onRestart(){
        super.onRestart();
        Log.i(TAG, "onRestart: ");
    }






}
