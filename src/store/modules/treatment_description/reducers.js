
import {
    TREATMENTDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_TREATMENTDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_TREATMENTDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [TREATMENTDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            treatmentDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_TREATMENTDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            treatmentDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_TREATMENTDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredTreatmentDescription: action.payload.registeredTreatmentDescription
        }),


};
