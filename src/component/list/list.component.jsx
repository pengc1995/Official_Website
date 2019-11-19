import React from 'react';

// const List = (props) => (
//     <ul>
//          {props.data.map(listData =>
//              (<li key={listData.id}>{listData.brief}</li>))}
//     </ul>
// )

const List = (props) => (
        <ul>
             {props.data.filter(listData => (listData.position_id==props.current_id)).map(listData =>
                 (<li key={listData.id}>{listData.brief}</li>))}
        </ul>
    )
     
 


export default List;