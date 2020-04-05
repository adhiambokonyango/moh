
import {
    SCAMS_SUCCESSFULLY_REGISTERED,
    REGISTERED_SCAMS_FETCHED_SUCCESSFULLY,
    REGISTERING_SCAMS_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [SCAMS_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            scamsSuccessFullyRegistered: true
        }),
    [REGISTERING_SCAMS_FAILED]: state =>
        Object.assign({}, state, {
            scamsSuccessFullyRegistered: false
        }),
    [REGISTERED_SCAMS_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredScam: action.payload.registeredScam
        }),


};
