
import {
    STRESSCOPING_SUCCESSFULLY_REGISTERED,
    REGISTERED_STRESSCOPING_FETCHED_SUCCESSFULLY,
    REGISTERING_STRESSCOPING_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [STRESSCOPING_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            stressCopingSuccessFullyRegistered: true
        }),
    [REGISTERING_STRESSCOPING_FAILED]: state =>
        Object.assign({}, state, {
            stressCopingSuccessFullyRegistered: false
        }),
    [REGISTERED_STRESSCOPING_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredStressCoping: action.payload.registeredStressCoping
        }),


};
