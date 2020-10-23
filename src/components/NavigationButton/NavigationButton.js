import React from 'react';
import { NavLink } from "react-router-dom";
import styled  from 'styled-components';
import './NavigationButton.scss';


const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #0091ae;

  &:hover {
    border-bottom: solid 1px #0091ae;
  }
`;

const NavigationButton = ({
    children,
    path,
    id,
}) => {
    return (
        <div className='navigationButtonWrapper'>
            <button className="navigationButtonWrapper__btn"
                onClick={(event) => {
                    event.preventDefault();
                    sessionStorage.setItem("id", id);
                }}>
                <NavigationLink
                    to={{
                        pathname: path,
                    }}
                >
                    {children}
                </NavigationLink>
            </button>
        </div>
    )
}

export default NavigationButton;