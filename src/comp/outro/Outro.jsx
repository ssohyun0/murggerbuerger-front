import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/img/storebackground.png';

const Outro = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const time = queryParams.get('time');
    const ordersMatch = queryParams.get('ordersMatch');

    console.log('Time value:', time);
    console.log('Orders match:', ordersMatch);
    
    return (
        <div>
            <Back>
                <h1>아</h1>
            </Back>
        </div>
    );
};

export default Outro;

const Back = styled.div`
    display : flex;
    width : 1280px;
    height : 720px;
    background : url(${background});
    background-size: cover;
`;
