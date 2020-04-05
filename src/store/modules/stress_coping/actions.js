
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    STRESSCOPING_SUCCESSFULLY_REGISTERED,
    REGISTERING_STRESSCOPING_FAILED,

    REGISTERED_STRESSCOPING_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_STRESSCOPING,
    REGISTERED_STRESSCOPING_EMPTY_RESULTS

} from "./actionTypes";

export function registerStressCoping(payload) {
    return async dispatch => {
        const apiRoute = "/add_stress_coping";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: STRESSCOPING_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_STRESSCOPING_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllStressCoping() {
    return async dispatch => {
        const apiRoute = "/get_all_stress_coping";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_STRESSCOPING_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredStressCoping: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_STRESSCOPING_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_STRESSCOPING
                });
                console.log(err);
            }
        );
    };
}
