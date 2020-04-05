
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    MYTHSDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_MYTHSDESCRIPTION_FAILED,

    REGISTERED_MYTHSDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_MYTHSDESCRIPTION,
    REGISTERED_MYTHSDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerMythsDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_myths_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: MYTHSDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_MYTHSDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllMythsDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_myths_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_MYTHSDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredMythsDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_MYTHSDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_MYTHSDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
