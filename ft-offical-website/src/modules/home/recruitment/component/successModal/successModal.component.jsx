import React, { Component } from 'react';
import { Modal } from 'antd';

import './successModal.component.style.css';

class SuccessModal extends Component {
  constructor(props){
    super(props)
  }
  handleCancel = () => {
    this.props.getVisibility(false);
  };

  render() {
  return (
    <div>
        <Modal
          visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
          footer={ null }
          width='597px'
        >
          <div className='s_modal_body'>
            <p className='s_modal_title'>Thank You</p>
            <p className='s_modal_subtitle'>Submit Completed</p>

            <div className='s_modal_image'>
              <img src={require('../../images/check.png')} style={{width:'161px', height:'161px'}}/>
            </div>

            <p className='s_modal_content'>We will Contact you within 7 working days by Email</p>

            <hr style={{padding:'0', margin:'0'}}/>
            <button className='s_modal_cancel_button' onClick={this.handleCancel}>
              Close
            </button>
          </div>

        </Modal>
      </div>
    );
  }
}
export default SuccessModal;