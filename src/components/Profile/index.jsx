import React, { Component } from 'react';
import './profile.style.css';
import Bio from './bio';
import Skills from './skills';
import Links from './links';

class Index extends Component {
    me ={
        name:'S M Jabbaruzzaman Jony',
        title:'Fullstack JavaScript Developer,Entrepreneur And Trainer',
        skillA:'Java',
        skillB:'JavaScript',
        skillC:'Python'
    }
    render() {
        console.log("Profile----",this.props);


        return (
            <div className='Container'>
                
                <Bio name={this.me.name} title ={this.me.title}></Bio>

                <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC}></Skills>
                
                <Links></Links>    
            </div>
        );
    }
}

export default Index;
