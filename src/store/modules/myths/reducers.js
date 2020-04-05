
import {
    MYTHS_SUCCESSFULLY_REGISTERED,
    REGISTERED_MYTHS_FETCHED_SUCCESSFULLY,
    REGISTERING_MYTHS_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [MYTHS_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            mythsSuccessFullyRegistered: true
        }),
    [REGISTERING_MYTHS_FAILED]: state =>
        Object.assign({}, state, {
            mythsSuccessFullyRegistered: false
        }),
    [REGISTERED_MYTHS_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredMyths: action.payload.registeredMyths
        }),


};
