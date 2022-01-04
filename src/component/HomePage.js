import React from 'react'
import Header from './header/header'
import Body from './body/body'
import SlideShow from './slide/slide'
export default function HomePage() {
    return (
        <div className='homepage' style={{'maxWidth' : '1200px',margin : '0 auto'}}>
            <Header />
            <SlideShow />
            <Body />
        </div>
    )
}
