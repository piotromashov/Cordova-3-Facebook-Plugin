# Cordova-3-Facebook-Plugin

This plugin is for Cordova 3.0.0 and above, it uses Facebook SDK 3.5 (newest release by now). I have refractored and changed the code made by @mgcrea https://github.com/mgcrea/cordova-facebook-connect and https://github.com/Polve/phonegap-facebook-plugin. This is a merge of both of them, and much easier to use.

The Facebook plugin for [Apache Cordova](http://cordova.apache.org/) allows you to use the same JavaScript code in your Cordova application as you use in your web application. However, unlike in the browser, the Cordova application will use the native Facebook app to perform Single Sign On for the user. If this is not possible then the sign on will degrade gracefully using the standard dialog based authentication.

* Supported on PhoneGap (Cordova) v3.0 and above.
* Supported FacebookSDK 3.0 and above.

## Facebook Requirements and Set-Up

To use this plugin you will need to make sure you've registered your Facebook app with Facebook and have an APP_ID (https://developers.facebook.com/apps).
Please note that you will need to [generate a hash of your Android key(s) and submit those to the Developers page on Facebook](https://developers.facebook.com/docs/getting-started/facebook-sdk-for-android/3.0/) to get it working. Further explanation can be found below.

# Key Hash generation

On Linux/OS X run: <pre>keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64</pre>

On Windows, use: <pre>keytool -exportcert -alias androiddebugkey -keystore %HOMEPATH%\.android\debug.keystore | openssl sha1 -binary | openssl base64</pre>

You will be prompted for a password. This should be 'android' without quotes. You'll then be given a key hash of 10-20 characters. (If you are not prompted for a password, something is wrong and you must check your paths above to ensure the debug.keystore is present.)

	Note: When you are ready to release your app, be sure that your Facebook Application is not in sandbox mode, and generate your key hash with your android key, example: <pre>keytool -exportcert -alias <yourkeyalias> -keystore <yourkeypath> | openssl sha1 -binary | openssl base64</pre> when prompted for password, it's not 'android', it's your key password.