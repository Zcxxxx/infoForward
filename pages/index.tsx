import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/login.module.css';
import { Button, Form, Input } from 'antd'
import { UserOutlined, PaperClipOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
const Login: NextPage = () => {
  const nav_ = useRouter()
  const rules = {
    user: [
      { required: true, message: 'Input your username/phone' }
    ],
    password: [
      { required: true, message: 'Input your password' }
    ]
  }
  const goHome = () => {
     nav_.push('/home')
  }
  return (
    <div className={styles.Home_context}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.box_login}>
        <Form>
          <Form.Item name="user">
            <Input size="large" placeholder="User" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="password">
            <Input type='password' size="large" placeholder="Password" prefix={<PaperClipOutlined />} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 19, span: 5 }}>
            <Button className={styles.textPrimaryBtn} type="text">忘记密码?</Button>
          </Form.Item>
          <Form.Item>
            <Button type='primary' block onClick={goHome}>Login</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login

