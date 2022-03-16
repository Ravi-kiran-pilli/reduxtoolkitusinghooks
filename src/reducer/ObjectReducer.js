import { ASSIGN_DETAILS } from '../action'

const initialState = {
    email: 'ravi',
    name: '',
    orgranization: '',
    phone: null,
    id: null
};

function ObjectReducer(state = initialState, action) {
    switch (action.type) {
        case "ASSIGN_DETAILS":
            // var email = 'ravikiran@capitalnumbers.com';
            return {
                details: { ...state, email: 'ravikiran@capitalnumbers.com' }
            };
        default:
            return state;
    }

}


export default ObjectReducer;