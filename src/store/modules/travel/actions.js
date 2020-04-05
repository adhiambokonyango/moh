
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    TRAVEL_SUCCESSFULLY_REGISTERED,
    REGISTERING_TRAVEL_FAILED,

    REGISTERED_TRAVEL_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_TRAVEL,
    REGISTERED_TRAVEL_EMPTY_RESULTS

} from "./actionTypes";

export function registerTravel(payload) {
    return async dispatch => {
        const apiRoute = "/add_travel";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: TRAVEL_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_TRAVEL_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllTravel() {
    return async dispatch => {
        const apiRoute = "/get_all_travel";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_TRAVEL_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredTravel: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_TRAVEL_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_TRAVEL
                });
                console.log(err);
            }
        );
    };
}
