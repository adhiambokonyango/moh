
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    QUESTIONDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_QUESTIONDESCRIPTION_FAILED,

    REGISTERED_QUESTIONDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_QUESTIONDESCRIPTION,
    REGISTERED_QUESTIONDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerQuestionDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_question_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: QUESTIONDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_QUESTIONDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllQuestionDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_question_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_QUESTIONDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredQuestionDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_QUESTIONDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_QUESTIONDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
