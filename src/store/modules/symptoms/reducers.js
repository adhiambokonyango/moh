
import {
    SYMPTOMS_SUCCESSFULLY_REGISTERED,
    REGISTERED_SYMPTOMS_FETCHED_SUCCESSFULLY,
    REGISTERING_SYMPTOMS_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [SYMPTOMS_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            symptomsSuccessFullyRegistered: true
        }),
    [REGISTERING_SYMPTOMS_FAILED]: state =>
        Object.assign({}, state, {
            symptomsSuccessFullyRegistered: false
        }),
    [REGISTERED_SYMPTOMS_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredSymptom: action.payload.registeredSymptom
        }),


};
