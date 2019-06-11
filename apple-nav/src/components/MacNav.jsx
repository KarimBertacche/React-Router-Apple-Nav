import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StylesSubNav = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;

`;


export default function MacNav(props) {
    return(
        <StylesSubNav>
            {
                props.subLinks.map(subLink => {
                    return(
                        <Link key={subLink.id} to={`/#`}>
                            <img src={subLink.imageUrl} alt={subLink.id}/>
                            <p>{subLink.title}</p>
                            <p>{subLink.new ? subLink.new : null }</p>
                        </Link>
                    );
                         
                })
            }          
        </StylesSubNav> 
    );
}