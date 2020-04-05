
import {
    PREVENTIONS_SUCCESSFULLY_REGISTERED,
    REGISTERED_PREVENTIONS_FETCHED_SUCCESSFULLY,
    REGISTERING_PREVENTIONS_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [PREVENTIONS_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            preventionsSuccessFullyRegistered: true
        }),
    [REGISTERING_PREVENTIONS_FAILED]: state =>
        Object.assign({}, state, {
            preventionsSuccessFullyRegistered: false
        }),
    [REGISTERED_PREVENTIONS_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredPreventions: action.payload.registeredPreventions
        }),


};
