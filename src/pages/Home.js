import React from 'react';
import Header from '../component/Header';
import "./Home.css";
import Stories from '../component/Stories';
import Body from '../component/Body';


const Home = () => {
    return (
        <div className="homePage">
       <Header />   
       <Stories/>  
       <Body/>
        </div>
    )
}

export default Home
