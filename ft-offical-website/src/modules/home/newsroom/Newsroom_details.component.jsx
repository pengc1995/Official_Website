/* Create by Chelly P */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FormattedMessage} from 'react-intl';

import Header from '../Header';
import Footer from '../Footer';

import NewsData from '../fake_data/news_data';

import '../../../assets/css/Details_page.css';

class NewsroomDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newsdata: NewsData,
            current_id: this.props.match.params.newspost
        };
    }

    render() {
        console.log(this.props);
        const { newsdata } = this.state;
        const target_news = newsdata.find( data => data.id == this.state.current_id );
        var content = target_news.content;

        return(
            <div>
                <Header />
                <div className='ft-news-container-bg'>
                <div className='ft_detail_container'>
                    <div className='fh_news_det_path'>
                        <Link className='path_option' to="/"><FormattedMessage id="ft_news_path_home"/></Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option' to="/news"><FormattedMessage id="ft_news_path_newsroom"/></Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option'><FormattedMessage id="ft_news_path_newsdetail"/></Link>
                    </div>

                    <h1 className='ft-w1140-section-fs40 fh_news_det_title'>
                        {target_news.title}
                    </h1>
                    <pre className='ft-w1140-section-fs16 fh_news_det_subtitle'>
                        By {target_news.user}    |    {target_news.date}
                    </pre>
                    <hr className='fh_news_det_divider' />
                    <p className='fh_news_det_content' dangerouslySetInnerHTML = {{ __html:content }}></p>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsroomDetail;