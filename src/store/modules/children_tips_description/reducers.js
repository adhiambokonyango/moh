
import {
    CHILDRENTIPSDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_CHILDRENTIPSDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_CHILDRENTIPSDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [CHILDRENTIPSDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            childrenTipsDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_CHILDRENTIPSDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            childrenTipsDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_CHILDRENTIPSDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredChildrenTipsDescription: action.payload.registeredChildrenTipsDescription
        }),


};
