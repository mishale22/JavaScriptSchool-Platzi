export const setFavourite = payload => {
    return {
        type: 'SET_FAVORITE',
        payload,
    }
}

//otra forma de retornar. Sin el return explicito
export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
})

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
}) 

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload,
}) 

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
}) 

export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload,
})

export const videoSearch = payload => ({
    type: 'VIDEO_SEARCH',
    payload
})