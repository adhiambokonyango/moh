
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    TRAVELDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_TRAVELDESCRIPTION_FAILED,

    REGISTERED_TRAVELDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_TRAVELDESCRIPTION,
    REGISTERED_TRAVELDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerTravelDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_travel_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: TRAVELDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_TRAVELDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllTravelDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_travel_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_TRAVELDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredTravelDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_TRAVELDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_TRAVELDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
