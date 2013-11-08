# Cordova-3-Facebook-Plugin

This plugin is for Cordova 3.0.0 and above, it uses Facebook SDK 3.5 (newest release by now). I have refractored and changed the code made by @mgcrea https://github.com/mgcrea/cordova-facebook-connect and https://github.com/Polve/phonegap-facebook-plugin. This is a merge of both of them, and much easier to use.

The Facebook plugin for [Apache Cordova](http://cordova.apache.org/) allows you to use the same JavaScript code in your Cordova application as you use in your web application. However, unlike in the browser, the Cordova application will use the native Facebook app to perform Single Sign On for the user. If this is not possible then the sign on will degrade gracefully using the standard dialog based authentication.

* Supported on PhoneGap (Cordova) v3.0 and above.
* Supported FacebookSDK 3.0 and above.

## Facebook Requirements and Set-Up

To use this plugin you will need to make sure you've registered your Facebook app with Facebook and have an APP_ID (https://developers.facebook.com/apps).
Please note that you will need to [generate a hash of your Android key(s) and submit those to the Developers page on Facebook](https://developers.facebook.com/docs/getting-started/facebook-sdk-for-android/3.0/) to get it working. Further explanation can be found further.

1. [Create a basic Cordova Android application](http://docs.phonegap.com/en/3.0.0/guide_overview_index.md.html#Overview).

2. In the Cordova Android application you will need to put the following in your res/xml/config.xml file:<pre>
	&lt;feature name="FacebookConnect"&gt;
    	&lt;param name="android-package" value="org.apache.cordova.facebookconnect.FacebookConnect" /&gt;
	&lt;/feature&gt;</pre>

3. You'll need to set up the Facebook SDK for Android:
  * [Install the Facebook SDK for Android and the Facebook APK](https://developers.facebook.com/docs/getting-started/facebook-sdk-for-android/3.0/)
  * [Import the Facebook SDK into Eclipse](https://developers.facebook.com/docs/getting-started/facebook-sdk-for-android/3.0/)
  * Link the Facebook SDK library to your project.  View the properties for the project, and navigate to the 'Android' tab. In the lower part of the dialog, click 'Add' and choose the 'FacebookSDK' project from the workspace.
  * Add a new `com.facebook.LoginActivity` activity to your app to handle Facebook Login. Open up your `AndroidManifest.xml` file and add this additional activity:<pre>&lt;activity android:name="com.facebook.LoginActivity" android:label="@string/app_name" /&gt;</pre>
  * Below the activity tag add this additional meta tag, which will be a link to your facebook App ID:<pre>&lt;meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/app_id"/&gt;</pre>
  * Add the App ID string to your strings file. Open your `strings.xml` file and add this resources child:<pre>&lt;string name="app_id"&gt;FACEBOOKAPPID&lt;/string&gt;</pre>

4. From the Cordova Facebook Plugin folder copy FacebookConnect.java from `src/org/apache/cordova/facebookconnect/` folder into the root of your Cordova Android application into `src/org/apache/cordova/facebookconnect/`. You may have to create that directory path in your project.

5. From the Cordova Facebook Plugin folder copy the `assets/www/js/FacebookConnect.js`, `assets/www/js/device-ready.js` and `assets/www/index.html` files into your application's respective folders. Overwrite the existing index.html file.

You can see the proper folders structure in the zip
This plugin has basic implementations (login, logout, me, status and share), more functionality to be developed later on.

## Key Hash generation

On Linux/OS X run: <pre>keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64</pre>

On Windows, use: <pre>keytool -exportcert -alias androiddebugkey -keystore %HOMEPATH%\.android\debug.keystore | openssl sha1 -binary | openssl base64</pre>

You will be prompted for a password. This should be 'android' without quotes. You'll then be given a key hash of 10-20 characters. (If you are not prompted for a password, something is wrong and you must check your paths above to ensure the debug.keystore is present.)

NOTE 1: When you are ready to release your app, be sure that your Facebook Application is not in sandbox mode, and generate your key hash with your android key, example: <pre>keytool -exportcert -alias yourkeyalias -keystore yourkeypath | openssl sha1 -binary | openssl base64</pre> 

NOTE 2: When prompted for password, it's not 'android', it's your key password.
