export const sendDataToReactNative = (data) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
};