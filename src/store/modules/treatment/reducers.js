
import {
    TREATMENT_SUCCESSFULLY_REGISTERED,
    REGISTERED_TREATMENT_FETCHED_SUCCESSFULLY,
    REGISTERING_TREATMENT_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [TREATMENT_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            treatmentSuccessFullyRegistered: true
        }),
    [REGISTERING_TREATMENT_FAILED]: state =>
        Object.assign({}, state, {
            treatmentSuccessFullyRegistered: false
        }),
    [REGISTERED_TREATMENT_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredTreatment: action.payload.registeredTreatment
        }),


};
