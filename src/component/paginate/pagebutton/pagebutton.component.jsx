import React,{ Component } from "react";
import style from "./pagebutton.styles.scss";
export default class Pagination extends Component{
    constructor(props){
        super(props)
    }

    create(){
        const {
            totalPage,
        } = this.props.config;

        let pages = [];
        pages.push(<li key={0}>上一页</li>)
        for(let i = 1;i <= totalPage; i++){
            pages.push(<li key={i}>{i}</li>)
        }
        pages.push(<li key={totalPage + 1}>下一页</li>)

        return pages;
    }

    render(){
        const Pages = this.create.bind(this)();
        return(
            <div className = "pagination">
                <ul className = { "page" }>
                    { Pages }
                </ul>
            </div>
        );
    }
}

// import React from 'react';

// class pageButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.setNext=this.setNext.bind(this);
//         this.setUp=this.setUp.bind(this);
//         this.state={
//             num: 0,
//             pagenum:this.props.current
//         }
//     }

//     //下一页
//     setNext(){
//         if(this.state.pagenum < this.props.totalPage){
//             this.setState({
//                 num:this.state.num + this.props.pageSize,
//                 pagenum:this.state.pagenum + 1
//             },function () {
//                 console.log(this.state)
//                 this.props.pageNext(this.state.num)
//             })
//         }
//     }

//     //上一页
//     setUp(){
//         if(this.state.pagenum > 1){
//             this.setState({
//                 num:this.state.num - this.props.pageSize,
//                 pagenum:this.state.pagenum - 1
//             },function () {
//                 console.log(this.state)
//                 this.props.pageNext(this.state.num)
//             })
//         }
//     }

//     render() {
//         return (
//             <div className="change_page">
//                 <span onClick={ this.setUp } >上一页</span>
//                 <span>{ this.state.pagenum }页/ { this.props.totalPage }页</span>
//                 <span onClick={ this.setNext }>下一页</span>
//             </div>
//         );
//     }
// }
