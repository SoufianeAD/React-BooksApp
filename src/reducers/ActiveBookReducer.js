import {ACTIVE_BOOK} from "../actions/Types";

export default (state = null, action) => {
    switch (action.type) {
        case ACTIVE_BOOK:
            return action.payload;
        default:
            return state;
    }
}