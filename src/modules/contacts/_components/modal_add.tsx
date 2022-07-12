import { Modal } from "antd";
import * as React from "react";
import './index.scss';
import FormComponent from './form_add/comp_form';

interface IProps {
    visibleAdd?: boolean,
    setVisibleAdd?: any;
}

export default class ModalComponent extends React.Component<IProps> {
    render() {
        const onSubmit = (values:any) => {
            console.log(values);
            this.props.setVisibleAdd(false);
        }
        return (
            <Modal
                visible={this.props.visibleAdd} 
                centered={true} 
                closable={true}
                onCancel={() => this.props.setVisibleAdd(false)}
                footer={null}
                destroyOnClose={true}>
                <FormComponent onSubmit={onSubmit}/>
            </Modal>
        )
    }
}