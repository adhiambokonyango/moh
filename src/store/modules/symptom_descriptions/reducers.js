
import {
    SYMPTOMDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_SYMPTOMDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_SYMPTOMDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [SYMPTOMDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            symptomDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_SYMPTOMDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            symptomDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_SYMPTOMDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredSymptomDescription: action.payload.registeredSymptomDescription
        }),


};
