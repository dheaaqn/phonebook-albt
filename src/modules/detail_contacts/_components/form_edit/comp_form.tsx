import { Button, Col, Divider, Form, Input, Row, Typography } from 'antd';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {formLayout} from './form_layout';

const {Title} = Typography;

interface IProps {
    onSubmit?: any;
}

interface IContact {
    data: {
        id: number,
        name: string,
        phone: number,
        email: string,
        address: string
    }
}

const FormComponent: React.FC<IProps> = (props) => {
        const [form] = Form.useForm();
        const location = useLocation().state as IContact;

        const yes = (values:any) => {
            props.onSubmit(values);
        }

        const getData = () => {
            let datas = location.data;
            form.setFieldsValue(datas);
        }

        React.useEffect(() => {
            getData();
        })

        return (
            <div className='form-container'>
                <Title level={5}>Edit Contact</Title>
                <Divider/>
                <Form form={form} {...formLayout} onFinish={yes} key={location.data.id}>
                    <Form.Item key="name" labelAlign='left' colon={false} name="name" label="Name"><Input/></Form.Item>
                    <Form.Item key="phone" labelAlign='left' colon={false} name="phone" label="Phone Number"><Input/></Form.Item>
                    <Form.Item key="email" labelAlign='left' colon={false} name="email" label="Email" rules={[{type: 'email', message: 'Invalid Email'}]}><Input/></Form.Item>
                    <Form.Item key="address" labelAlign='left' colon={false} name="address" label="Address"><Input.TextArea/></Form.Item>
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