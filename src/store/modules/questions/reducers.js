
import {
    QUESTIONS_SUCCESSFULLY_REGISTERED,
    REGISTERED_QUESTIONS_FETCHED_SUCCESSFULLY,
    REGISTERING_QUESTIONS_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [QUESTIONS_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            questionsSuccessFullyRegistered: true
        }),
    [REGISTERING_QUESTIONS_FAILED]: state =>
        Object.assign({}, state, {
            questionsSuccessFullyRegistered: false
        }),
    [REGISTERED_QUESTIONS_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredQuestion: action.payload.registeredQuestion
        }),


};
