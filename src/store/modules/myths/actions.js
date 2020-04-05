
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    MYTHS_SUCCESSFULLY_REGISTERED,
    REGISTERING_MYTHS_FAILED,

    REGISTERED_MYTHS_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_MYTHS,
    REGISTERED_MYTHS_EMPTY_RESULTS

} from "./actionTypes";

export function registerMyths(payload) {
    return async dispatch => {
        const apiRoute = "/add_myths";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: MYTHS_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_MYTHS_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllMyths() {
    return async dispatch => {
        const apiRoute = "/get_all_myths";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_MYTHS_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredMyths: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_MYTHS_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_MYTHS
                });
                console.log(err);
            }
        );
    };
}
