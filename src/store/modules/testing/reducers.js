
import {
    TESTING_SUCCESSFULLY_REGISTERED,
    REGISTERED_TESTING_FETCHED_SUCCESSFULLY,
    REGISTERING_TESTING_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [TESTING_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            testingSuccessFullyRegistered: true
        }),
    [REGISTERING_TESTING_FAILED]: state =>
        Object.assign({}, state, {
            testingSuccessFullyRegistered: false
        }),
    [REGISTERED_TESTING_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredTesting: action.payload.registeredTesting
        }),


};
