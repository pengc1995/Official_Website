import React from 'react';
import './jobitem.styles.scss'
import {Link} from 'react-router-dom';

const JobItem = (props) => (
    <>
        <div className='job-item'>
            <div className='pos_hot'>
                <Link to ={`/Recruitment/details/${props.id}`} className='position' key={props.id}>{props.position}</Link>
                {
                    props.expedited ? <div className="hotLabel">HOT</div> : null
                }
            </div>
            <div className='loc_view'>
                <span className='location' key={props.id}>{props.area}</span>
                <Link to ={`/Recruitment/details/${props.id}`} className='view' key={props.id}>View Detail ></Link>
            </div>
        </div>

        <hr />

    </>

);

export default JobItem;