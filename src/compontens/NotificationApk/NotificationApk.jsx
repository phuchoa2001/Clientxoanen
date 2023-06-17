import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'antd';
import { sendDataToReactNative } from '../../commons/React Native/reactNative';

export default function NotificationApk() {
  const [isShow , setIsShow] = useState(true);

  useEffect(() => {
    if(window?.isNativeApp) {
      setIsShow(false);
    }
  }, [window.isNativeApp])

  if(!isShow) {
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
