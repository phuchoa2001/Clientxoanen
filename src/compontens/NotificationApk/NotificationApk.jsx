import React, { useEffect } from 'react';
import { Alert, Button } from 'antd';
import { sendDataToReactNative } from '../../commons/React Native/reactNative';

export default function NotificationApk() {

  useEffect(() => {
    setInterval(() => {
      sendDataToReactNative({ message: "test" })
    }, [5000])

    window.addEventListener('message', handleMessage);

    function handleMessage(event) {
      const message = event.data; // Thông điệp từ ứng dụng React Native
      console.log('Received message:', message);

      // Xử lý thông điệp theo nhu cầu của bạn
    }

  }, [])

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
