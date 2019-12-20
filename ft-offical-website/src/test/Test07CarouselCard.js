import React, { Component } from 'react';
// import { Collapse, Icon } from 'antd';
// import { Carousel } from 'antd';
// import 'antd/dist/antd.css';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';

import './Test07CarouselCard.css';


class DeliveryFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
       cdata: [{
            "id":"1",
            "imgSrc":"/imgs/test/cat-widget1.jpg",
            "slideTitle":"First slide label",
            "slideCaption":"Nulla vitae elit libero, a pharetra augue mollis interdum. slideCaption Nulla vitae elit libero, a pharetra augue mollis interdum. slideCaption Nulla vitae elit libero, a pharetra augue mollis interdum. slideCaption Nulla vitae elit libero, a pharetra augue mollis interdum."
          },{
            "id":"2",
            "imgSrc":"/imgs/test/cat-widget2.jpg",
            "slideTitle":"Second slide label",
            "slideCaption":"Nulla vitae elit libero, a pharetra augue mollis interdum."
          },{
            "id":"3",
            "imgSrc":"/imgs/test/cat-widget3.jpg",
            "slideTitle":"Third slide label",
            "slideCaption":"Nulla vitae elit libero, a pharetra augue mollis interdum.slideCaption Nulla vitae elit libero, a pharetra augue mollis interdum."
          }],

          carouselData: [{
            "id":"1",
            "imgSrc":"/imgs/delivery/cat-widget1.jpg",
            "name":"Wukong Sun",
            "year":"3 years",
            "comment":"“I love that even though Uber has grown so much in the past few years, there’s still the spirit that we’re truly building access to transportation and that we still move fast! There’s no shortage of technical challenges here that also have meaningful impact, which really excited me when I took the job at Uber.”"
          },{
            "id":"2",
            "imgSrc":"/imgs/delivery/cat-widget2.jpg",
            "name":"Bajie Zhu",
            "year":"2 Months",
            "comment":"I love that even though Uber has grown so much in the past few years, there’s still the spirit that we’re truly building access to transportation and that we still move fast! "
          },{
            "id":"3",
            "imgSrc":"/imgs/delivery/cat-widget3.jpg",
            "name":"SengTang",
            "year":"10 years",
            "comment":"I love that even though Uber has grown so much in the past few years, there’s still the spirit that we’re truly building access to transportation and that we still move fast! There’s no shortage of technical challenges here that also have meaningful impact."
          },{
            "id":"4",
            "imgSrc":"/imgs/delivery/delivery-dachu.jpg",
            "name":"Wukong Sun",
            "year":"5 years",
            "comment":"I love that even though Uber has grown so much in the past few years, there’s still the spirit that we’re truly building access to transportation and that we still move fast! There’s no shortage of technical challenges here that also have meaningful impact, which really excited me when I took the job at Uber."
          }],

          widthOfWin: window.innerWidth,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({ widthOfWin: window.innerWidth, heightofWin: window.innerHeight });
    if (this.state.widthOfWin >= 993) {
      this.setState({widthOfImage: '66%'});
    } else if (this.state.widthOfWin >= 979 && this.state.widthOfWin <= 992) {
      this.setState({widthOfImage: '58%'});
    } else if (this.state.widthOfWin >= 751 && this.state.widthOfWin <= 978) {
      this.setState({widthOfImage: '55%'});
    } else if (this.state.widthOfWin >= 376 && this.state.widthOfWin <= 750) {
      this.setState({widthOfImage: '65%'});
    } else {
      this.setState({widthOfImage: '77%'});
    }
    // increase = 1140/375;
    
  }

  render() {

    const params = {
      // slidesPerView: 5,
      spaceBetween: 50,
      autoplay: {
        delay: 1000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }

    console.log('window width: '+this.state.widthOfWin);

    return (
      <>

      {/* process here!!! */}
      <div className="fd-test-about-bg">
        <div className="fd-test-about-content">
        { this.state.widthOfWin >= 570 ?
          <Carousel className="fd-test-about" interval="1000" controls="false" indicators="true" prevLabel="" nextLabel="" pauseOnHover="true" fade="true">
            {this.state.cdata.map((ft,index) =>
            <Carousel.Item key={index}>
              <CardDeck className="fd-test-about-cards">
                <Card className=" fd-test-about-card-text">
                    <Card.Body className="fd-test-about-card-body">
                      <div className="fd-test-about-card-notes">
                        <Card.Title>{ft.slideTitle}</Card.Title>
                        <Card.Text>
                        {ft.slideCaption} 
                        </Card.Text>
                      </div>
                    </Card.Body>
                </Card>
                <Card className=" fd-test-about-card-img">
                    <Card.Body className="fd-test-about-card-body">
                        <img className="fd-test-about-card-imgs" src={ft.imgSrc} alt={ft.slideTitle}/>
                    </Card.Body>
                </Card>
              </CardDeck>
            </Carousel.Item>
            )}
          </Carousel>
          :
          <Carousel className="fd-test-about" interval="1000" controls="true" indicators="false" pauseOnHover="true" fade="true">
            {this.state.cdata.map((ft,index) =>
            <Carousel.Item key={index}>
              <CardDeck className="fd-test-about-cards">
                <Card className=" fd-test-about-card-img" width=''>
                    <Card.Body className="fd-test-about-card-body">
                        <img className="fd-test-about-card-imgs" src={ft.imgSrc} alt={ft.slideTitle}/>
                    </Card.Body>
                </Card>
                <Card className=" fd-test-about-card-text">
                    <Card.Body className="fd-test-about-card-body">
                      <div className="fd-test-about-card-notes">
                        <Card.Title>{ft.slideTitle}</Card.Title>
                        <Card.Text>
                        {ft.slideCaption} 
                        </Card.Text>
                      </div>
                    </Card.Body>
                </Card>
              </CardDeck>
            </Carousel.Item>
            )}
          </Carousel>
        }
        </div>
      </div>


    </>
   );
  }
}

export default DeliveryFAQ;