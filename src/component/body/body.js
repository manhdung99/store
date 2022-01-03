import React from 'react'
import Sale from './sale/Sale'
import Social from './social/social'
import AppleReseller from './appleReseller/appleReseller'
export default function Body() {
    return (
        <div className='body'>
            <div className='body-content'>
                <Sale />
                <Social />
                <AppleReseller />
            </div>
        </div>
    )
}
