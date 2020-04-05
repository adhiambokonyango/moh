
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    MEASURES_SUCCESSFULLY_REGISTERED,
    REGISTERING_MEASURES_FAILED,

    REGISTERED_MEASURES_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_MEASURES,
    REGISTERED_MEASURES_EMPTY_RESULTS

} from "./actionTypes";

export function registerMeasure(payload) {
    return async dispatch => {
        const apiRoute = "/add_measure";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: MEASURES_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_MEASURES_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllMeasure() {
    return async dispatch => {
        const apiRoute = "/get_all_measure";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_MEASURES_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredMeasure: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_MEASURES_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_MEASURES
                });
                console.log(err);
            }
        );
    };
}
