
import {
    QUESTIONDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERED_QUESTIONDESCRIPTION_FETCHED_SUCCESSFULLY,
    REGISTERING_QUESTIONDESCRIPTION_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [QUESTIONDESCRIPTION_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            questionDescriptionSuccessFullyRegistered: true
        }),
    [REGISTERING_QUESTIONDESCRIPTION_FAILED]: state =>
        Object.assign({}, state, {
            questionDescriptionSuccessFullyRegistered: false
        }),
    [REGISTERED_QUESTIONDESCRIPTION_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredQuestionDescription: action.payload.registeredQuestionDescription
        }),


};
