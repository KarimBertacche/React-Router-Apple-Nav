import React from 'react';
import { Link } from 'react-router-dom';


export default function MacNav(props) {
    return(
        <div>
            {
                props.subLinks.map(subLink => {
                    return <Link key={subLink.id} to={subLink.imageUrl} /> 
                })
            }          
        </div> 
    );
}