
import {
    STRESSCOPINGDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_STRESSCOPINGDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_STRESSCOPINGDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [STRESSCOPINGDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            stressCopingDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_STRESSCOPINGDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            stressCopingDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_STRESSCOPINGDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredStressCopingDescription: action.payload.registeredStressCopingDescription
        }),


};
