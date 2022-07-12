import { List } from "antd";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import './index.scss';

const data = [
    {
        id: 1,
        name: "John Doe",
        phone: 62812345678,
        email: "lorem@ipsum.sit",
        address: "Lorem ipsum dolor sit amet"
    },
    {
        id: 2,
        name: "Alexa",
        phone: 62812345678,
        email: "lorem@ipsum.sit",
        address: "Lorem ipsum dolor sit amet"
    },
    {
        id: 3,
        name: "Scarlett J",
        phone: 62812345678,
        email: "lorem@ipsum.sit",
        address: "Lorem ipsum dolor sit amet"
    }
]

const Index: React.FC<{}> = () => {
    let navigate = useNavigate();
    return (
        <List
            dataSource={data} 
            renderItem={item => (
                <List.Item 
                    key={item.id}
                    onClick={() => navigate('/detail/' + item.id, {state:{data: item}})}>
                        <List.Item.Meta
                            title={item.name}
                            description={item.phone}
                        />
                </List.Item>
            )}
        />
    )
}

export default Index;