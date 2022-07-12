import { Modal } from "antd";
import * as React from "react";
import './s.scss';
import FormComponent from './form_edit/comp_form';

interface IProps {
    visibleEdit?: boolean,
    setVisibleEdit?: any;
}

export default class ModalComponent extends React.Component<IProps> {
    render() {
        const onSubmit = (values:any) => {
            console.log(values);
            this.props.setVisibleEdit(false);
        }

        
        return (
            <Modal
                visible={this.props.visibleEdit} 
                centered={true} 
                closable={true}
                onCancel={() => this.props.setVisibleEdit(false)}
                footer={null}
                destroyOnClose={true}>
                <FormComponent onSubmit={onSubmit}/>
            </Modal>
        )
    }
}