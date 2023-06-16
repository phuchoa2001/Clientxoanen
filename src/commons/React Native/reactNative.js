export const sendDataToReactNative = (data) => {
  window.postMessage(JSON.stringify(data), '*');
};