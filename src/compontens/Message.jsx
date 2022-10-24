import { Modal, Space } from "antd";
import React, { useState } from "react";

const LocalizedModal = ({ content }) => {
  const [open, setOpen] = useState(true);
  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={null}
        visible={open}
        onOk={hideModal}
        onCancel={hideModal}
        closable={false}
        okText="Tôi hiểu"
        cancelText="Thôi bỏ đi"
      >
        {content}
      </Modal>
    </>
  );
};

const Message = ({ children }) => (
  <Space>
    <LocalizedModal content={children} />
  </Space>
);

export default Message;
