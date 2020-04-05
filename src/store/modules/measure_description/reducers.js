
import {
    MEASUREDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_MEASUREDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_MEASUREDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [MEASUREDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            measureDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_MEASUREDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            measureDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_MEASUREDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredMeasureDescription: action.payload.registeredMeasureDescription
        }),


};
