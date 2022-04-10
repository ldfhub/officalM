import React from 'react';
import styles from './index.less';
import { Form, Input, Button } from 'antd-mobile';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { VerifyPassword, VerifyUserName } from '@/utils/utils';

export default function Register() {
  const FormItem = Form.Item;
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = () => {
    const res = form.validateFields();
    const fieldValue = form.getFieldsValue();
    dispatch({
      type: 'register/getRegisterInfo',
      payload: fieldValue,
    });
  };
  // const onValuesChange = (values, allValues) => {
  //   console.log(values, allValues);
  // };
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
  // 返回路由
  const backRouter = () => {
    history.goBack();
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
    <div className={styles.register}>
      <div className={styles.headerBack}>
        <div className={styles.BackIcon} onClick={backRouter} />
      </div>
      <div className={styles.register_content}>
        <Form
          layout="horizontal"
          form={form}
          // onValuesChange={onValuesChange}
          footer={
            <Button
              block
              type="submit"
              onClick={onSubmit}
              color="primary"
              size="large"
            >
              注册
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
      </div>
    </div>
  );
}
