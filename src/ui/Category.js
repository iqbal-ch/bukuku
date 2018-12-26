import React from 'react'

import './Category.css'

const Category = (props) =>{
    console.log(props)
    const p = props.list.map(p => {   
        return (
            <li onClick={()=>props.onClick(p)}>{p}</li>
        );
    });
    return(
        <div className="category">
            <ul>
                {p}
            </ul>
        </div>
    )
}

export default Category