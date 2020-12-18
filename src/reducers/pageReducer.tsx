import { SET_YEAR } from "../actions/PageActions"

const initialState = {
    year: 2018,
    photos: ["photo_1", "photo_2", "photo_3", "photo_4", "photo_5", "photo_6"]
}

export function pageReducer(state = initialState, action: any) {
    switch (action.type){
        case SET_YEAR:
            return {...state, year: action.payload}
        default:
            return state
    }
}