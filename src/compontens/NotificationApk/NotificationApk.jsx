import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'antd';
// import { sendDataToReactNative } from '../../commons/React Native/reactNative';

export default function NotificationApk() {
  const [isShow, setIsShow] = useState("loading");

  useEffect(() => {
    function eventHandlerReact(event) {
      if (event?.detail?.type === "IS_REACT_NATIVE") {
        setIsShow("hide");
        return;
      }
      setIsShow("show")
    }
    window.addEventListener('ReactNativeToDataWeb', eventHandlerReact);
  }, []);

  if (isShow === "loading" || isShow === "hide") {
    return <></>
  }
  return (
    <div>
      <Alert
        message="Thông báo"
        description="Đã có ứng dụng APK trên điện thoại di động."
        type="success"
        action={
          <Button size="small" type="primary">
            Tải ứng dùng apk
          </Button>
        }
        showIcon
        closable
      />
    </div>
  );
}
