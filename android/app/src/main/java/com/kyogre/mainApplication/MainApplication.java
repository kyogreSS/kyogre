package com.kyogre.mainApplication;

import android.app.Application;
import android.content.Context;
import android.os.Bundle;
import android.widget.Toast;

//引入热更新
import cn.reactnative.modules.update.UpdateContext;
import cn.reactnative.modules.update.UpdatePackage;


import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.kyogre.BuildConfig;
import com.kyogre.TestRegister;


//引入有氧支付相关
import com.jinfu.pay.sdk.api.JFPaySdkImpl;
import com.jinfu.pay.sdk.app.common.contants.PayVariety;
import com.jinfu.pay.sdk.app.entity.PayResult;
import com.jinfu.pay.sdk.app.listener.Callback;
import com.jinfu.pay.sdk.app.listener.PaymentCallback;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private static Context mContext;


    //    这个是RN的部分
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new TestRegister(),
                    new UpdatePackage()  //引入热更新
            );
        }

        //        热更新
        @Override
        protected String getJSBundleFile() {
            return UpdateContext.getBundleUrl(MainApplication.this);
        }

    };

    public static Context getApplication() {
        return mContext;
    }

    //    这个是RN的部分
    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }


    //    这个是创建的时候执行的
    @Override
    public void onCreate() {

        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        mContext = this;

//        初始化，所有的初始化过程均应该写在这里面
        config();

    }


    //    初始化函数均写在这里
    public void config() {

        //金服SDK初始化,初始化需要填写商家在金服的商户号，商户号由金服客服提供
        JFPaySdkImpl.getInstance().jfPayInit(this, new Callback() {

            @Override
            public void onCancel() {
            }

            @Override
            public void onSuccess(Bundle bundle) {
                Toast.makeText(MainApplication.this, "初始化成功", Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onFail(int errorCode, String errorMessage) {
                Toast.makeText(MainApplication.this, errorMessage, Toast.LENGTH_SHORT).show();
            }
        });
    }

}

