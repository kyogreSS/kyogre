package com.kyogre.myModule;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

//引入有氧支付相关
import com.jinfu.pay.sdk.api.JFPaySdkImpl;
import com.jinfu.pay.sdk.app.common.contants.PayVariety;
import com.jinfu.pay.sdk.app.entity.PayResult;
import com.jinfu.pay.sdk.app.listener.Callback;
import com.jinfu.pay.sdk.app.listener.PaymentCallback;



import java.util.Map;
import java.util.HashMap;

public class TestPay extends ReactContextBaseJavaModule {

    //    这是支付商户的Key！
    private final String APP_KEY = "6413f866b558d3e2b6ccf4f0d865f9df";
    //    这个是支付的类型
    private PayVariety variety;


    public TestPay(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestPay";
    }


    //     这里是点击事件！界面要在前台写，这里需要告诉支付接口，我们调用的是何种方式！参数自己定义，只要能判断就行。
    @ReactMethod
    public void click(String message) {
        switch (message){
            case "wx" :
                this.variety=PayVariety.WeiXin;
                break;
            case "zfb":
                this.variety=PayVariety.Alipay;
                break;
            case "yhk":
                this.variety=PayVariety.BankGather;
                break;
            default:
                Log.e("you","are a shit");
        }


    }





}
