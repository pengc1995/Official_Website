import React, { Component } from 'react';
import { Modal } from 'antd';

import PAForm from './paform.component';

import './adformmodal.component.style.css';

class ADFormModal extends Component {
  constructor(props) {
    super(props)
      this.state = {
        visible: false,
      };
  }

  getformVisibility = (visibility) => {
    this.setState({visible:visibility})
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.showModal} className='ft_ad_modal_button'>
          <img className='ft_ad_modal_button_icon' src={require('../../images/drive-document.png')} />
          Contact Now
        </button>
        <Modal
          visible={visible}
          closable={false}
          onCancel={this.handleCancel}
          footer={null}
          width='597px'
        >
            <div className='ft_ad_body'>
                <PAForm getformVisibility={this.getformVisibility}/>
                <button onClick={this.handleCancel} className='ft_ad_cancle_button'>
                    Close
                </button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default ADFormModal;