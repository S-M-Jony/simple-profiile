import React, { Component } from 'react'

const MyProps = (props)=>{

    console.log('My-Props----',props.name);
    return <h1>My Name is {props.name}</h1>
}

export default MyProps;