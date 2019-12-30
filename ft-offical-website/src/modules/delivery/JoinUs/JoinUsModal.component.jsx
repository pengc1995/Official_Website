import React, { Component } from 'react';
import { Modal } from 'antd';
import { FormattedMessage} from 'react-intl';

import JoinUs from './JoinUs.component';

import './JoinUsModal.component.style.css';

class JoinUsModal extends Component {
  state = {
    visible: false
  };

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
        <button onClick={this.showModal} className='ft_driver_modal_button'>
          <img className='ft_driver_modal_button_icon' src={require('../../../assets/imgs/icon/delivery-deliver-document@2x.png')} 
            width="35px" height="22px"/>
          <FormattedMessage id="fd_deliver_become_button"/>
        </button>
        <Modal
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width='597px'
        >
            <div className='ft_driver_body'>
                <p className='ft_driver_modal_title'><FormattedMessage id="fd_deliver_become_title"/></p>
                <hr style={{'padding-bottom':'10px'}} />
                <JoinUs />
                <button onClick={this.handleCancel} className='ft_driver_cancle_button'>
                  <FormattedMessage id="fd_deliver_become_close"/>
                </button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default JoinUsModal;