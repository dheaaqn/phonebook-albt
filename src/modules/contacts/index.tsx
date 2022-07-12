import './index.scss';
import * as React from 'react';
import ListComponent from "./_components/list";
import ModalComponent from './_components/modal_add';
import { Card, Row, Col, Button, } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const Index: React.FC<any> = () => {
    const [visibleAdd, setVisibleAdd] = React.useState<boolean>(false);
        return (
            <>
            <Row justify='center'>
                <Col span={12}>
                    <Card 
                        className='contacts-card' 
                        title='Contacts'
                        extra={
                            <Button 
                            type="primary" 
                            icon={<PlusCircleOutlined />} 
                            style={{borderRadius: '6px'}}
                            onClick={() => setVisibleAdd(true)}>
                                Add Contact
                            </Button>
                        }>
                            <ListComponent/>
                    </Card>
                </Col>
            </Row>
            <ModalComponent visibleAdd={visibleAdd} setVisibleAdd={setVisibleAdd}/>
            </>
        )
}

export default Index;