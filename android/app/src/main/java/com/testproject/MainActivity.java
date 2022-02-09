package com.testproject;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
// for splash Screen
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  //  add by me splash Screen 
  @Override 
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

    // add by me for react native navaigation 
  //   @Override
  //   protected void onCreate(Bundle savedInstanceState) {
  //   super.onCreate(null);
  //  }
     
  @Override
  protected String getMainComponentName() {
    return "testProject";
  }
}

