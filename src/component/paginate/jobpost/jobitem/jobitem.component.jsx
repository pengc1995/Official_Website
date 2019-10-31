import React from 'react';
import './jobitem.styles.scss'
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

const JobItem = (props) => (
    <div className='job-item'>
        <BrowserRouter>
            <div>
                <Link className='position' key={props.id}>{props.name}</Link>
                <span className='location'key={props.id}>{props.username}</span>
            </div>
        </BrowserRouter>
    </div>
);

export default JobItem;