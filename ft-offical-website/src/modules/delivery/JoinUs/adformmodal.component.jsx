import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { FormattedMessage} from 'react-intl';

import PAForm from './paform.component';

import './adformmodal.component.style.css';

class ADFormModal extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
ƒ
  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.showModal} className='ft_ad_modal_button'>
          <img className='ft_ad_modal_button_icon' src={require('../../../assets/imgs/icon/delivery-deliver-document@2x.png')} 
            width="33px" height="22px"/>
          <FormattedMessage id="fd_partner_become_advert_button"/>
        </button>
        <Modal
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width='597px'
        >
            <div className='ft_ad_body'>
                <p className='ft_ad_modal_title'><FormattedMessage id="fd_partner_become_advert_title"/></p>
                <hr style={{'padding-bottom':'10px'}} />
                <PAForm />
                <button onClick={this.handleCancel} className='ft_ad_cancle_button'>
                    <FormattedMessage id="fd_partner_become_advert_close"/>
                </button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default ADFormModal;