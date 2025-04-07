const GET_ALL = "get-all"


export const initState = {
    countries : []
}


export const reducer = (state,action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                countries: action.payload
            }

        default:
             return state
    }
}

export const getAllActionCreator = (res) => ({type: GET_ALL,payload : res.data})