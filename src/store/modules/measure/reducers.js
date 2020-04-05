
import {
    MEASURES_SUCCESSFULLY_REGISTERED,
    REGISTERED_MEASURES_FETCHED_SUCCESSFULLY,
    REGISTERING_MEASURES_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [MEASURES_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            measureSuccessFullyRegistered: true
        }),
    [REGISTERING_MEASURES_FAILED]: state =>
        Object.assign({}, state, {
            measureSuccessFullyRegistered: false
        }),
    [REGISTERED_MEASURES_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredMeasure: action.payload.registeredMeasure
        }),


};
