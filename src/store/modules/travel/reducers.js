
import {
    TRAVEL_SUCCESSFULLY_REGISTERED,
    REGISTERED_TRAVEL_FETCHED_SUCCESSFULLY,
    REGISTERING_TRAVEL_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [TRAVEL_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            travelSuccessFullyRegistered: true
        }),
    [REGISTERING_TRAVEL_FAILED]: state =>
        Object.assign({}, state, {
            travelSuccessFullyRegistered: false
        }),
    [REGISTERED_TRAVEL_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredTravel: action.payload.registeredTravel
        }),


};
