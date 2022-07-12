import { Card, Col, Row, Space, Tooltip } from 'antd';
import DropdownMenu from './_components/dropdown';
import CardContent from './_components/card';
import './s.scss';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

interface IContact {
    data: {
        id: number,
        name: string,
        phone: number,
        email: string,
        address: string
    }
}

const Index: React.FC = () => {
    const location = useLocation().state as IContact;
    let navigate = useNavigate();

    return (
        <>
            <Row justify='center'>
                <Col span={12}>
                    <Card
                        key={location.data.id}
                        className='detail-contacts-card' 
                        title='Detail Contact'
                        extra={[
                            <Space>
                                <Tooltip title="Back to Contact Page">
                                    <HomeOutlined onClick={() => navigate('/')} />
                                </Tooltip>
                                <DropdownMenu />
                            </Space>
                        ]}>
                            <CardContent data={location.data} />
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Index;