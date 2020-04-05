
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    MEASUREDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_MEASUREDESCRIPTION_FAILED,

    REGISTERED_MEASUREDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_MEASUREDESCRIPTION,
    REGISTERED_MEASUREDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerMeasureDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_measure_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: MEASUREDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_MEASUREDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllMeasureDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_measure_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_MEASUREDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredMeasureDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_MEASUREDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_MEASUREDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
