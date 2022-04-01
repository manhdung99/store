import React from 'react'
import Header from './header/header'
import Body from './body/body'
import SlideShow from './slide/slide'
import './Home.scss'
export default function HomePage() {
    return (
        <div className='homepage' >
            <Header />
            <SlideShow />
            <Body />
        </div>
    )
}
