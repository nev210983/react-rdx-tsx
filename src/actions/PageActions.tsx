export const SET_YEAR = "SET_YEAR"

export function setYear(year: number) {
    return {
        type: SET_YEAR,
        payload: year
    }
}