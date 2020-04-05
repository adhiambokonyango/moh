
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    SCAMS_SUCCESSFULLY_REGISTERED,
    REGISTERING_SCAMS_FAILED,

    REGISTERED_SCAMS_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_SCAMS,
    REGISTERED_SCAMS_EMPTY_RESULTS

} from "./actionTypes";

export function registerScam(payload) {
    return async dispatch => {
        const apiRoute = "/add_scams";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: SCAMS_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_SCAMS_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllScam() {
    return async dispatch => {
        const apiRoute = "/get_all_scams";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_SCAMS_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredScam: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_SCAMS_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_SCAMS
                });
                console.log(err);
            }
        );
    };
}
