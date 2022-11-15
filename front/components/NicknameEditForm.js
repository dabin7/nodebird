import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

const NicknameEditForm = () => {
  const style = useMemo(
    () => ({
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px',
    }),
    []
  );

  return (
    <Form style={style}>
      <Input.Search addonBefore='닉네임' enterButton='수정' />
    </Form>
  );
};
//form 불필요한게 많아서 react form 라이브러리 사용하는게 좋음

export default NicknameEditForm;
