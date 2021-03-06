import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './newscard.component.style.css';

function delHtmlTag(str){
    return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
} 

class NewsCard extends Component {
    render() {
        var content=delHtmlTag(this.props.content);

        return (
            <div className='ft_news_card_bg'>
                <Link to={`/News/details/${this.props.id}`} key={this.props.id}>
                    <div className="ft_news_card" style={{"width": "339px", 'min-height':'404px'}}>
                        <div className='ft_news_card_img_div'>
                            <img key={this.props.id} src={this.props.cover} className="ft_news_card_img" />
                        </div>
                        <div className="ft_news_card_body">
                            <h1 className="ft_news_card_title" key={this.props.id}>
                                {this.props.title}
                            </h1>
                            <h2 className='ft_news_card_timestamp' key={this.props.id}>
                                {this.props.date}
                            </h2>
                            <p className='ft_news_card_text'> 
                                {content} 
                            </p>
                        </div>
                    </div>
                    <div style={{padding:'45px 0'}} />
                </Link>
            </div>
        );
    } 
}

export default NewsCard;
