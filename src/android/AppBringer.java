package br.burgo.appbringer;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.content.Intent;
import android.app.PendingIntent;
import android.util.Log;

/**
 * This class echoes a string called from JavaScript.
 */
public class AppBringer extends CordovaPlugin {
  @Override
  public boolean execute(String action, JSONArray args, CallbackContext context) throws JSONException {
    Log.d("Bring", "action is:" + action);
    if (action.equals("bringToFront")) {
      Log.d("Bring", "I see you baby");
      Intent notificationIntent = new Intent(cordova.getActivity(), cordova.getActivity().getClass());
      notificationIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
      PendingIntent pendingIntent = PendingIntent.getActivity(cordova.getActivity(), 0, notificationIntent, 0);
      try {
        pendingIntent.send();
        //context.sendPluginResult(new PluginResult(PluginResult.Status.OK));
      } catch (PendingIntent.CanceledException e) {
        e.printStackTrace();
        //context.sendPluginResult(new PluginResult(PluginResult.Status.ERROR));
      }
      return true;
    } else {
      //context.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
    }
    return false;
  }
}
