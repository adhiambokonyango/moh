
import {
    TESTINGDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_TESTINGDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_TESTINGDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [TESTINGDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            testingDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_TESTINGDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            testingDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_TESTINGDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredTestingDescription: action.payload.registeredTestingDescription
        }),


};
