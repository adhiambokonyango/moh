
import {
    SCAMDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_SCAMDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_SCAMDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [SCAMDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            scamDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_SCAMDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            scamDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_SCAMDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredScamDescription: action.payload.registeredScamDescription
        }),


};
