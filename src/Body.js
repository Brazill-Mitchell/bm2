import React from 'react'
import './Body.css'

function Body(){

    return(
        <div id='body-container'>
            <div className='body-section'>
                <div className='project-container'>
                    <div className='project-image-main'>
                        <image className='img' src='' alt=''></image>
                    </div>
                    <div className='project-details-container'>
                        <div className='project-description'>Sample Description</div>
                        <div className='project-preview-images'>
                            <image className='preview-image' src='' alt=''></image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body