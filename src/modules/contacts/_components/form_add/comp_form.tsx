import { Button, Col, Divider, Form, Input, Row, Typography } from 'antd';
import * as React from 'react';
import {formLayout} from './form_layout';

const {Title} = Typography;

interface IProps {
    onSubmit?: any;
}

const FormComponent: React.FC<IProps> = (props) => {
        const [form] = Form.useForm();

        const yes = (values:any) => {
            props.onSubmit(values);
        }

        return (
            <div className='form-container'>
                <Title level={5}>Add New Contact</Title>
                <Divider/>
                <Form form={form} {...formLayout} onFinish={yes}>
                    <Form.Item labelAlign='left' colon={false} name="name" label="Name"><Input/></Form.Item>
                    <Form.Item labelAlign='left' colon={false} name="phone" label="Phone Number"><Input/></Form.Item>
                    <Form.Item labelAlign='left' colon={false} name="email" label="Email" rules={[{type: 'email', message: 'Invalid Email'}]}><Input/></Form.Item>
                    <Form.Item labelAlign='left' colon={false} name="address" label="Address"><Input.TextArea/></Form.Item>
                    <Row justify='end'>
                        <Col>
                            <Button style={{borderRadius: '6px'}} type='primary' htmlType='submit'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
}

export default FormComponent;