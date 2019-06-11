import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StylesSubNav = styled.div`
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    background-color: #000;
    background-color: #eee;

    figure {
        display: flex;
        justify-content: center;
        width: 10px;
        height: 50px;
        object-fit: cover;
        margin-bottom: -10px;

        img {
            width: 500%;
            height: 100%;
        }
    }

    .subnav-links {
        text-decoration: none;
    }

    p {
        width: 90px;
        font-size: .7rem;
        font-weight: bold;
        margin-bottom: -5px;
        color: #333;
    }

    span {
        font-size: .7rem;
        color: #f00;
    }

`;


export default function MacNav(props) {
    return(
        <StylesSubNav>
            {
                props.subLinks.map(subLink => {
                    return(
                        <Link key={subLink.id} className="subnav-links" to={`/#`}>
                            <figure>
                                <img src={subLink.imageUrl} alt={subLink.id}/>
                            </figure>
                            <p>{subLink.title}</p>
                            <span>{subLink.new ? 'New' : null }</span>
                        </Link>
                    );
                         
                })
            }          
        </StylesSubNav> 
    );
}