import React from 'react'
import { connect } from 'react-redux'
import { setScreenResolution } from './redux/actions'
import './Body.css'

function Body(props){


    return(
        <div id='body-container'>
            <div>{props.resolution}</div>
            <div className='body-section'>
                <div className='project-container'>
                    <div className='project-image-main'>
                        <image className='img' src='' alt=''></image>
                    </div>
                    <div className='project-details-container'>
                        <div className='project-title'>Project Title</div>
                        <div className='project-description'>Sample Description</div>
                        <div className='project-description-buttons'>
                            <button className='description-button'>Github</button>
                            <button className='description-button'>LinkedIn</button>
                        </div>
                        <div className='project-preview-images'>
                            <image className='preview-image' src='' alt=''></image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    resolution: state.resolution
})

const mapDispatchToProps = { setScreenResolution }

export default connect(mapStateToProps,mapDispatchToProps)(Body)