import * as actions from './actions.js'
export const MOBILE = 'MOBILE'
export const TABLET = 'TABLET'
export const COMPUTER = 'COMPUTER'
export const XL = 'XL'

// const test = require('./actions.js')

const initialState = {
    resolution: MOBILE,
    currentProject: {}
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
                if(act.resolution === COMPUTER){
                    return {...state, resolution: COMPUTER}
                }
                if(act.resolution === XL){
                    return {...state, resolution: XL}
                }
            

        
        default: return state
    }

}