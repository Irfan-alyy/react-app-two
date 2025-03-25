import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = values => {
  console.log(values);
};
const Contact = () => (
    <div className='border border-black rounded flex flex-col items-center p-10 w-fit m-auto mt-10'>

    
  <Form
    className='flex flex-col items-end '
  
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required:true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Subject" rules={[{required:true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'message']} label="Message" rules={[{required:true }]}>
      <Input.TextArea />
    </Form.Item>
    <Form.Item label={null} className='text-center'>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
);
export default Contact;