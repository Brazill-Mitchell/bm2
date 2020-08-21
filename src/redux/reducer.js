import * as actions from './actions.js'
import { projectNames } from "../data/projects"

export const MOBILE = 'MOBILE'
export const TABLET = 'TABLET'
export const COMPUTER = 'COMPUTER'
export const XL = 'XL'

const initialState = {
    resolution: MOBILE,
    currentProject: projectNames.PHLASK
}

export default (state= initialState, act) => {
    switch (act.type) {
        
        case actions.SET_SCREEN_RESOLUTION:
            if(act.resolution === MOBILE){
                return {...state, resolution: MOBILE}
            }
            if(act.resolution === TABLET){
                return {...state, resolution: TABLET}
            }
            if(act.resolution === XL){
                return {...state, resolution: XL}
            }
            else{
                return {...state, resolution: COMPUTER}
            }

        case actions.SET_CURRENT_PROJECT:
            return {...state, project: act.project}
            
            

        
        default: return state
    }

}