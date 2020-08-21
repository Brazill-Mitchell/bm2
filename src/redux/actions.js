export const SET_SCREEN_RESOLUTION = 'SET_SCREEN_RESOLUTION'
export const setScreenResolution = resolution => ({
    type: SET_SCREEN_RESOLUTION,
    resolution: resolution
})

export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'
export const setCurrentProject = project => ({
    type: SET_CURRENT_PROJECT,
    project: project
})