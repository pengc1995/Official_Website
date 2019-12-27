// =================================================================
// Program: DianpingFoodinfo - the food information page of the 
//          Dianping
// Author : Bill Huang
// Date   : Dec 27, 2019 - Jan 15, 2020
// =================================================================

import React, { Component } from 'react';

import Header from './DianpingHeader';
import Footer from './DianpingFooter';

class DianpingFoodinfo extends Component {
  render() {
    return (
      <>
        <Header/>
        <div>
          <h2>点评美食资讯</h2>
        </div>
        <Footer />
      </>
    );
  }
}

export default DianpingFoodinfo;