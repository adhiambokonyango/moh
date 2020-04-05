
import {
    CHILDRENTIPS_SUCCESSFULLY_REGISTERED,
    REGISTERED_CHILDRENTIPS_FETCHED_SUCCESSFULLY,
    REGISTERING_CHILDRENTIPS_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [CHILDRENTIPS_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            childrenTipsSuccessFullyRegistered: true
        }),
    [REGISTERING_CHILDRENTIPS_FAILED]: state =>
        Object.assign({}, state, {
            childrenTipsSuccessFullyRegistered: false
        }),
    [REGISTERED_CHILDRENTIPS_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredChildrenTips: action.payload.registeredChildrenTips
        }),


};
