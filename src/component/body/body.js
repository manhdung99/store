import React from 'react'
import Sale from './sale/Sale'

export default function Body() {
    return (
        <div className='body'>
            <div className='body-content'>
                <Sale />
                <div className='social'>
                    <ul className='social-list'>
                        <li className='social-item'></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
