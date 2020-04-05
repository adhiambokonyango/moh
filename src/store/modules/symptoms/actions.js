
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    SYMPTOMS_SUCCESSFULLY_REGISTERED,
    REGISTERING_SYMPTOMS_FAILED,

    REGISTERED_SYMPTOMS_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_SYMPTOMS,
    REGISTERED_SYMPTOMS_EMPTY_RESULTS

} from "./actionTypes";

export function registerSymptom(payload) {
    return async dispatch => {
        const apiRoute = "/add_symptoms";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: SYMPTOMS_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_SYMPTOMS_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllSymptom() {
    return async dispatch => {
        const apiRoute = "/get_all_symptoms";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_SYMPTOMS_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredSymptom: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_SYMPTOMS_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_SYMPTOMS
                });
                console.log(err);
            }
        );
    };
}
