
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    TREATMENT_SUCCESSFULLY_REGISTERED,
    REGISTERING_TREATMENT_FAILED,

    REGISTERED_TREATMENT_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_TREATMENT,
    REGISTERED_TREATMENT_EMPTY_RESULTS

} from "./actionTypes";

export function registerTreatment(payload) {
    return async dispatch => {
        const apiRoute = "/add_treatment";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: TREATMENT_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_TREATMENT_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllTreatment() {
    return async dispatch => {
        const apiRoute = "/get_all_treatment";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_TREATMENT_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredTreatment: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_TREATMENT_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_TREATMENT
                });
                console.log(err);
            }
        );
    };
}
