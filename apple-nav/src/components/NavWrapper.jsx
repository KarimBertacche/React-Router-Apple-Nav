import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import NavLinkData from '../NavLinkData';
import styled from 'styled-components';

import MacNav from './MacNav';

const StylesHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: #333;
    color: #fff;

    .nav-links {
        color: #fff;
        padding: 10px 40px;
        text-decoration: none;
    }
`;

const bgColor =  {
    backgroundColor: '#333',
    color: '#fff'
}

export default function NavWrapper() {
    return(
        <div>
            <StylesHeader>  
                <nav>  
                    {
                        NavLinkData.map(data => {
                        return <NavLink key={data.id} className="nav-links" to={`/${data.id}`}>{data.title}</NavLink> 
                        })
                    }
                </nav>  
            </StylesHeader>
            <div>
                {
                    NavLinkData.map(data => {
                        return <Route key={data.id} path={`/${data.id}`} render={(props) => <MacNav {...props} subLinks={data.subLink} style={data.title === 'TV' ? bgColor : null}/>} /> 
                    })
                }
            </div>
        </div>
    );
}