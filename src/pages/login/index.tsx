import React from 'react';
import styles from './index.less';
import { Form, Input, Button } from 'antd-mobile';
import { VerifyPassword, VerifyUserName } from '@/utils/utils';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const FormItem = Form.Item;
  const [form] = Form.useForm();
  const history = useHistory();
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

  // 跳转注册的页面
  const skipRegister = () => {
    history.push('/register');
  };
  // 校验密码
  const checkPassword = (_: any, value: string) => {
    if (value) {
      const res = VerifyPassword(value);
      if (!res) {
        return Promise.reject(new Error('8-16位数字、字母'));
      } else {
        return Promise.resolve();
      }
    } else {
      return Promise.reject(new Error('密码不能为空!'));
    }
  };
  // 校验用户名
  const checkUserName = (_: any, value: string) => {
    if (value) {
      const res = VerifyUserName(value);
      if (!res) {
        return Promise.reject(new Error('字母开头，5-12位字母、数字'));
      } else {
        return Promise.resolve();
      }
    } else {
      return Promise.reject(new Error('密码不能为空!'));
    }
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
          <FormItem
            name="userName"
            label="帐号"
            rules={[
              { max: 12, message: '最大不能超过12位数' },
              { validator: checkUserName },
            ]}
          >
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
        <div className="registerBtn">
          <span onClick={skipRegister}>注册</span>
        </div>
      </div>
    </div>
  );
}
