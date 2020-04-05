
import {
    PREVENTIONDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_PREVENTIONDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_PREVENTIONDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [PREVENTIONDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            preventionDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_PREVENTIONDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            preventionDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_PREVENTIONDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredPreventionDescription: action.payload.registeredPreventionDescription
        }),


};
