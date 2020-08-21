export const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE'
export const setScreenSize = screenSize => ({
    type: SET_SCREEN_SIZE,
    screenSize: screenSize
})

export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'
export const setCurrentProject = project => ({
    type: SET_CURRENT_PROJECT,
    project: project
})