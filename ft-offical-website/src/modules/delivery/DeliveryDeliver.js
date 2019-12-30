// =================================================================
// Program: DeliveryDeliver.js - the webpage of the deliver of the 
//          delivery
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component, Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick"; 
// import BrainCarousel, { Dots } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import {connect} from 'react-redux';
import { FormattedMessage} from 'react-intl';

import JoinUs from './JoinUs/JoinUsModal.component';

import Header from './DeliveryHeader';
import Footer from './DeliveryFooter';

import DeliverComments from './data/DeliveryDeliver.deliver_comments';
import DeliverCommentsZh from './data/DeliveryDeliver.deliver_comments_zh';

import './DeliveryDeliver.css'

class DeliveryDeliver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callerName: 'deliver',
      valueOfDots: 0,
      deliverComments: DeliverComments,
      deliverCommentsZh: DeliverCommentsZh,
    };
  }

  render() {

    // https://react-slick.neostack.com/docs/example/simple-slider
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      adaptiveHeight: false,
      arrows: false
    };

    const {lang} = this.props;
    let carouselData = this.props.lang === 'en' ? 
      this.state.deliverComments : this.state.deliverCommentsZh;


    return (
      <>
        {/* <Header/> */}
        <Header callerName={this.state.callerName}/>

        {/* flexible hours */}
        <div className="fd-deliver-flexible-bg">
          <div className="fd-deliver-flexible-content">
              <div><strong className="fd-deliver-flexible-title"><FormattedMessage id="fd_deliver_flexible_p1"/></strong></div>
              <div><strong className="fd-deliver-flexible-title"><FormattedMessage id="fd_deliver_flexible_p2"/></strong></div>
              <div className="fd-deliver-flexible-text">
                <FormattedMessage id="fd_deliver_flexible_p3"/>
              </div>
              <div className="fd-deliver-flexible-button">
                <JoinUs/>
              </div>
          </div>
        </div>

        {/* why deliver with Fantuan */}
        <div className="fd-deliver-why-bg">
          <div className="fd-deliver-why-content">
            <CardGroup>
              <Card>
                <Card.Body>
                    <Card.Title><strong className="fd-deliver-why-header"><FormattedMessage id="fd_deliver_why_header"/></strong></Card.Title>
                    <Card.Text className="fd-deliver-why-header-text">
                      <FormattedMessage id="fd_deliver_why_text"/>
                    </Card.Text>
                </Card.Body>
                <CardDeck>
                    <Card className="col-sm-6">
                        <Card.Body>
                            <img className="fd-deliver-why-img" src={require('../../assets/imgs/icon/delivery/delivery-deliver-why-flexible@2x.png')}
                              width="95px"
                              height="90px"
                              alt="delivery on time"/>
                            <Card.Title className="fd-deliver-why-title"><FormattedMessage id="fd_deliver_why_header1"/></Card.Title>
                            <Card.Text className="fd-deliver-why-text">
                              <FormattedMessage id="fd_deliver_why_text1"/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col-sm-6">
                    <Card.Body>
                            <img className="fd-deliver-why-img" src={require('../../assets/imgs/icon/delivery/delivery-deliver-why-competitive@2x.png')}
                              width="95px"
                              height="90px"
                              alt="delivery smarter"/>
                            <Card.Title className="fd-deliver-why-title"><FormattedMessage id="fd_deliver_why_header2"/></Card.Title>
                            <Card.Text className="fd-deliver-why-text">
                              <FormattedMessage id="fd_deliver_why_text2"/>  
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col-sm-6">
                        <Card.Body>
                          <img className="fd-deliver-why-img" src={require('../../assets/imgs/icon/delivery/delivery-deliver-why-more@2x.png')}
                              width="95px"
                              height="90px"
                              alt="gain time"/>
                            <Card.Title className="fd-deliver-why-title"><FormattedMessage id="fd_deliver_why_header3"/></Card.Title>
                            <Card.Text className="fd-deliver-why-text">
                              <FormattedMessage id="fd_deliver_why_text3"/> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
              </Card>
            </CardGroup>
          </div>
        </div>

        {/* meet the people */}
        <div className="fd-deliver-meet-bg">
          <div className="fd-deliver-meet-content">
            <div className="fd-deliver-meet-header">
              <div className="fd-deliver-meet-header"><FormattedMessage id="fd_deliver_meet_header"/></div>
              <div className="fd-deliver-meet-text"><FormattedMessage id="fd_deliver_meet_text"/></div>
            </div>
            <Slider className="fd-deliver-meet-slider" {...settings}>
            {carouselData.map((ft,index) => (
              <div className="fd-deliver-meet-card">
                <Card className="col-sm-6 fd-deliver-meet-card">
                <Card.Body className="fd-deliver-meet-card-body">
                  <div className="fd-deliver-meet-quotation">“</div>
                  <div className="fd-deliver-meet-comment">{ft.comment}</div> 
                  <div className="fd-deliver-meet-div">
                    <div className="fd-deliver-meet-div1"> 
                      <img className="fd-deliver-meet-img" src={ft.imgSrc} width="74px" height="74px" alt={ft.name}/> 
                    </div> 
                    <div className="fd-deliver-meet-div2"> 
                      <Card.Title className="fd-deliver-meet-div2-title">{ft.name}</Card.Title>
                      <Card.Text className="fd-deliver-meet-div2-text">{ft.year}</Card.Text> 
                    </div>
                  </div>
                </Card.Body>
                </Card>
              </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* get started */}
        <div className="fd-deliver-get-bg">
          <div className="fd-deliver-get-content">
          <div className="fd-deliver-get-text-button">
            <div className="fd-deliver-get-note">
              <div className="fd-deliver-get-header"><FormattedMessage id="fd_deliver_get_header"/></div>
              <div className="fd-deliver-get-text">
                <FormattedMessage id="fd_deliver_get_text1"/>
              </div>
              <div className="fd-deliver-get-text">
                <FormattedMessage id="fd_deliver_get_text2"/>
              </div>
            </div>
            <div className="fd-deliver-get-button">
              <JoinUs/>
            </div>
          </div>
        </div>
      </div>

        <Footer/>
      </>
    );
  }
}

function mapStateToProps(state){
  return{
    lang: state.locale.lang
  };
}
export default connect(mapStateToProps)(DeliveryDeliver);
