import React from 'react';
import { Card } from 'antd';
import Login from '../components/Login';

const LoginPage = () => (
    <Card title="Login" style={{ width: 300, margin: 'auto', marginTop: 100 }}>
        <Login />
    </Card>
);

export default LoginPage;