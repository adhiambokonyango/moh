
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    PREVENTIONDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_PREVENTIONDESCRIPTION_FAILED,

    REGISTERED_PREVENTIONDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_PREVENTIONDESCRIPTION,
    REGISTERED_PREVENTIONDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerPreventionDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_prevention_descriptions";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: PREVENTIONDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_PREVENTIONDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllPreventionDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_prevention_descriptions";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_PREVENTIONDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredPreventionDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_PREVENTIONDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_PREVENTIONDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
