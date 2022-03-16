export const ADD_ONE = 'ADD_ONE';
export const MINUS_ONE = 'MINUS_ONE';
export const ASSIGN_DETAILS = 'ASSIGN_DETAILS'

export const increment_counter = () => {
    return {
        type: "ADD_ONE"
    };
}
export const decrement_counter = () => {
    return {
        type: "MINUS_ONE"
    };
}