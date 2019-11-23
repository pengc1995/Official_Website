import React from 'react';
import './jobitem.styles.scss'
import {Link} from 'react-router-dom';

const JobItem = (props) => (
    <div className='job-item'>
            <div>
                <Link to ={`/Recruitment/details/${props.id}`} className='position' key={props.id}>{props.position}</Link>
                <span className='location'key={props.id}>{props.area}</span>
            </div>
    </div>
);

export default JobItem;
