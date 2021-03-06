import React, { Component,useState } from 'react';

import JobItem from './jobitem/jobitem.component';
import PositionCollapse from './positioncollapse.component';

import JobData from '../../fake_data/position_data';

export default class Jobmore extends Component{
    constructor(props){
        super(props)
        this.state= {
            indexList:[], //当前渲染的页面数据
            // totalData:props.renderData,//我的数据
            totalData:JobData,
            totalPositions:JobData.length,
            ViewMore: true,
        };
    }

    componentWillMount(){
        //设置总页数
        this.setState({
            indexList:this.noticeSorting()
        })
        if (this.state.totalPositions < 6) {
            this.setState({
                ViewMore: false,
            })
        }
    }
    //思路：首先用find把有加急标签的元素给挑出来，然后用filter把这些元素去除掉后进行时间排序，然后再把挑出来的元素append到数列头部？？
    //可以用传统loop来完成上述操作吗？？？
    
    // noticeSorting(){
    //     return(
    //         this.state.totalData.sort(function(a,b){
    //         return new Date(b.initialRegistration) - new Date(a.initialRegistration);
    //     }
    //     ))
    // }
    noticeSorting(){
        var expeditedList =[];
        var sortedList=[];
        var i=0;
        while (i<this.state.totalPositions){
            if(!(this.state.totalData[i].expedited)){
                sortedList.push(this.state.totalData[i])
            }
            else{
                expeditedList.push(this.state.totalData[i])
            }
            i++;
        }
        
        sortedList.sort(function(a,b){
             return new Date(b.initialRegistration) - new Date(a.initialRegistration);
        })
        var finalList=expeditedList.concat(sortedList)
        return finalList
        
    }
    
    render(){
        return (
            <div>
                <div className='fh_rec_title'>
                    <h3 className='ft-w1140-section-fs40 fh_rec_find'>Find open roles</h3> 
                    <span className='ft-w1140-smtext-fs18 fh_rec_open'>{this.state.totalPositions} open roles</span>
                </div>
                <hr />
                {
                    this.state.indexList.slice(0,6).map(({...otherCollectionProps}) => (
                        <JobItem  {...otherCollectionProps} />
                    ))
                }
                {
                    this.state.ViewMore?
                    <div>
                        <PositionCollapse {...this.state} />
                    </div>:null
                }
                
            </div>
        )
    }

    
}


