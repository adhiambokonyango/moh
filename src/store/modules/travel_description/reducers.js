
import {
    TRAVELDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_TRAVELDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_TRAVELDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [TRAVELDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            travelDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_TRAVELDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            travelDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_TRAVELDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredTravelDescription: action.payload.registeredTravelDescription
        }),


};
