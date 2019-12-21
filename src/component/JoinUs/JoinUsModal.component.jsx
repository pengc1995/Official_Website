import React, { Component } from 'react';
import { Modal } from 'antd';

import JoinUs from './JoinUs.component';

import './JoinUsModal.component.style.css';

class JoinUsModal extends Component {
  constructor(props){
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
        <button onClick={this.showModal} className='ft_driver_modal_button'>
          <img className='ft_driver_modal_button_icon' src={require('../../images/drive-document.png')} />
          Apply Now
        </button>
        <Modal
          visible={visible}
          closable={false}
          onCancel={this.handleCancel}
          footer={null}
          width='597px'
        >
            <div className='ft_driver_body'>
                <JoinUs getformVisibility={this.getformVisibility}/>
                <button onClick={this.handleCancel} className='ft_driver_cancle_button'>
                    Close
<<<<<<< HEAD
                </button> 
=======
                </button>
>>>>>>> 30762a1e16c7de042de4942ce5740d0a06a77ebb
            </div>
        </Modal>
      </div>
    );
  }
}

export default JoinUsModal;