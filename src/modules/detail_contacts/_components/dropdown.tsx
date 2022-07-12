import * as React from "react"
import ModalEdit from './modal_edit';
import { Dropdown, Menu, message } from "antd"
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons"

const Index: React.FC<any> = () => {
    const [visibleEdit, setVisibleEdit] = React.useState<boolean>(false);

    const handleClick = (item:any) => {
        switch(item.key) {
            case "1":
                setVisibleEdit(true);
                break;
            case "2":
                message.success("Contact Deleted Succesfully");
            }
        }

        const menu = (
            <Menu onClick={handleClick} items={[
                {
                    label: 'Edit Contact',
                    key: 1,
                    icon: <EditOutlined />
                },
                {
                    label: 'Delete Contact',
                    key: 2,
                    icon: <DeleteOutlined />
                }
            ]}/>
        )
        return (
            <>
                <Dropdown overlay={menu}>
                    <MoreOutlined />
                </Dropdown>
                <ModalEdit visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit}/>
            </>
        )
}

export default Index;