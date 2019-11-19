import React from 'react';

class Card_1 extends React.Component {
    render() {
        return (
            <div className="card" style={{"width": "364px"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    } 
}

export default Card_1;