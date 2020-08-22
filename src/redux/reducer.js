import * as actions from './actions.js'
import { projectNames } from "../data/constants"
import { screenSizes } from "../data/constants"


const initialState = {
    screensize: screenSizes.MOBILE,
    currentProject: projectNames.ATOMIST
}

export default (state= initialState, act) => {
    switch (act.type) {
        
        case actions.SET_SCREEN_SIZE:
            if(act.screenSize === screenSizes.MOBILE){
                return {...state, screenSize: screenSizes.MOBILE}
            }
            if(act.screenSize === screenSizes.TABLET){
                return {...state, screenSize: screenSizes.TABLET}
            }
            if(act.screenSize === screenSizes.XL){
                return {...state, screenSize: screenSizes.XL}
            }
            else{
                return {...state, screenSize: screenSizes.COMPUTER}
            }

        case actions.SET_CURRENT_PROJECT:
            return {...state, project: act.project}
            
            

        
        default: return state
    }

}