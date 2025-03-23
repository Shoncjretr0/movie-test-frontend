import React from 'react';
import { Card } from 'antd';
import Register from '../components/Register';

const RegisterPage = () => (
    <Card title="Register" style={{ width: 300, margin: 'auto', marginTop: 100 }}>
        <Register />
    </Card>
);

export default RegisterPage;