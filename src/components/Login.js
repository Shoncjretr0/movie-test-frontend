import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await axiosInstance.post('/login', values);
            localStorage.setItem('token', response.data.token);
            message.success('Login successful!');
            navigate('/');
        } catch (error) {
            message.error('Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;