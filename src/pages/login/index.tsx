import React from 'react';
import styles from './index.less';
import { Form, Input, Button } from 'antd-mobile';

export default function Login() {
  const FormItem = Form.Item;
  const [form] = Form.useForm();
  const onSubmit = () => {
    const res = form.validateFields();
    console.log(res);
    // const values = form.getFieldsValue();
    // console.log(values);
    // console.log('111')
  };
  const onValuesChange = (values, allValues) => {
    console.log(values, allValues);
  };
  const checkPassword = (_: any, value: string) => {
    console.log(_, value);
  };
  return (
    <div className={styles.login}>
      <div className={styles.headerBack}>
        <div className={styles.BackIcon} />
      </div>
      <div className={styles.login_content}>
        <Form
          layout="horizontal"
          form={form}
          onValuesChange={onValuesChange}
          footer={
            <Button
              block
              type="submit"
              onClick={onSubmit}
              color="primary"
              size="large"
            >
              登录
            </Button>
          }
        >
          <FormItem name="userName" label="帐号" rules={[]}>
            <Input onChange={console.log} clearable placeholder="请输入姓名" />
          </FormItem>
          <FormItem
            name="password"
            label="密码"
            rules={[{ validator: checkPassword }]}
          >
            <Input
              onChange={console.log}
              clearable
              placeholder="请输入密码"
              type="password"
            />
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
