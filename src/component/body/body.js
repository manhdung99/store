import React from 'react'
import Sale from './sale/Sale'
import Social from './social/social'
export default function Body() {
    return (
        <div className='body'>
            <div className='body-content'>
                <Sale />
                <Social />
            </div>
        </div>
    )
}
