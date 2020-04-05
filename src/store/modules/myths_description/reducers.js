
import {
    MYTHSDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_MYTHSDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_MYTHSDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [MYTHSDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            mythsDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_MYTHSDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            mythsDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_MYTHSDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredMythsDescription: action.payload.registeredMythsDescription
        }),


};
