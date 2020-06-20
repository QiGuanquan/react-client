import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';
/*
  登陆的路由组件
*/
export default class Login extends Component {
  
    render() {
      const onFinish = values => {
        console.log('Received values of form: ', values);
      };

      return (
        <div className="login">
          <div className= "wrapper">
            <section className="login-content">
              <div className="content-header">
                <div className="logo"></div>
                <h1>云雀协同</h1>
              </div>
              <div className="content-form">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                </Form.Item>
              </Form>
              </div>
            </section>
            <footer className="login-footer">
              <div className="links">
                <a href="self" className="link">帮助</a>
                <a href="self" className="link">隐私</a>
                <a href="self">条款</a>
              </div>
              <p className="copyright">Copyright © 2020 云雀技术组出品</p>
            </footer>
          </div>
        </div>
      )
    }
}

// const WrapLogin = Form.create()(Login)
// export default WrapLogin