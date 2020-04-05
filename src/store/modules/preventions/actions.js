
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    PREVENTIONS_SUCCESSFULLY_REGISTERED,
    REGISTERING_PREVENTIONS_FAILED,

    REGISTERED_PREVENTIONS_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_PREVENTIONS,
    REGISTERED_PREVENTIONS_EMPTY_RESULTS

} from "./actionTypes";

export function registerPreventions(payload) {
    return async dispatch => {
        const apiRoute = "/add_preventions";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: PREVENTIONS_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_PREVENTIONS_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllPreventions() {
    return async dispatch => {
        const apiRoute = "/get_all_preventions";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_PREVENTIONS_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredPreventions: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_PREVENTIONS_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_PREVENTIONS
                });
                console.log(err);
            }
        );
    };
}
