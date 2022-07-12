import { HomeOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row, Space, Typography } from "antd";
import * as React from "react";

const { Title, Text } = Typography;

interface IProps {
    data: {
    id: number,
    name: string,
    phone: number,
    email: string,
    address: string
    }
}

export default class CardContent extends React.Component<IProps> {
    render() {
        return (
            <>
            <Row style={{padding: '10px 0'}}>
                <Space direction="vertical" size="large">
                    <Col span={24}>
                        <Title level={5}><UserOutlined style={{marginRight: '10px'}} />Name</Title>
                        <Text style={{marginLeft: '25px'}}>{this.props.data.name}</Text>
                    </Col>
                    <Col span={24}>
                        <Title level={5}><PhoneOutlined style={{marginRight: '10px'}} />Phone Number</Title>
                        <Text style={{marginLeft: '25px'}}>{this.props.data.phone}</Text>
                    </Col>
                    <Col span={24}>
                        <Title level={5}><MailOutlined style={{marginRight: '10px'}} />Email</Title>
                        <Text style={{marginLeft: '25px'}}>{this.props.data.email}</Text>
                    </Col>
                    <Col span={24}>
                        <Title level={5}><HomeOutlined style={{marginRight: '10px'}} />Address</Title>
                        <Text style={{marginLeft: '25px'}}>{this.props.data.address}</Text>
                    </Col>
                </Space>
            </Row>
            </>
        )
    }
}