import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type='spinningBubbles', color='black' }) => (
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
);
 
export default Loading;