/* Create by Chelly P */
import React, { Component } from 'react';

import NewsCard from './newscard.component';
import NewsCollapse from './newscollapse.component';

import NewsData from '../../fake_data/news_data';

import './newsmore.component.style.css';

class NewsMore extends Component {

    constructor(props) {
        super(props)
        this.state = {
            indexList: [],
            totalNews: NewsData.length,
            ViewMore: true,
        };
    }

    componentWillMount() {
        this.setState({
            indexList: this.timeSorting()
        }) 
        if (this.state.totalNews < 9) {
            this.setState({
                ViewMore: false
            })
        }
    }

    timeSorting() {
        var sortedList = NewsData;
        sortedList.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })
        return sortedList;
    }

    render() {
        return (
            <div>
                <div className='fh_news'>
                <h1 className='ft-w1140-section-fs40 fh_news_title'>Fantuan News</h1>
                <p className='ft-w1140-section-fs16 fh_news_title_contact'>Advertising information please contact us pr@fantuan.ca</p>
                </div>

                <div className='fh_news_group'>
                    {
                        this.state.indexList.slice(0,9).map(({ ...otherCollectionProps }) => (
                            <NewsCard { ...otherCollectionProps } />
                        ))
                    }
                </div>
                {
                    this.state.ViewMore?
                    <div className='fh_news'>
                        <NewsCollapse { ...this.state } />
                    </div>:null
                }
            </div>
        )
    }
}

export default NewsMore;