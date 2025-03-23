import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await axiosInstance.post('/register', values);
            message.success('Registration successful!');
            navigate('/login');
        } catch (error) {
            message.error('Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register;