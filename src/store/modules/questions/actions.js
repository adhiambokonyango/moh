
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    QUESTIONS_SUCCESSFULLY_REGISTERED,
    REGISTERING_QUESTIONS_FAILED,

    REGISTERED_QUESTIONS_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_QUESTIONS,
    REGISTERED_QUESTIONS_EMPTY_RESULTS

} from "./actionTypes";

export function registerQuestion(payload) {
    return async dispatch => {
        const apiRoute = "/add_questions";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: QUESTIONS_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_QUESTIONS_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllQuestion() {
    return async dispatch => {
        const apiRoute = "/get_all_questions";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_QUESTIONS_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredQuestion: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_QUESTIONS_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_QUESTIONS
                });
                console.log(err);
            }
        );
    };
}
