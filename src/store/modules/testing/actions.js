
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    TESTING_SUCCESSFULLY_REGISTERED,
    REGISTERING_TESTING_FAILED,

    REGISTERED_TESTING_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_TESTING,
    REGISTERED_TESTING_EMPTY_RESULTS

} from "./actionTypes";

export function registerTesting(payload) {
    return async dispatch => {
        const apiRoute = "/add_testing";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: TESTING_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_TESTING_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllTesting() {
    return async dispatch => {
        const apiRoute = "/get_all_testing";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_TESTING_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredTesting: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_TESTING_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_TESTING
                });
                console.log(err);
            }
        );
    };
}
