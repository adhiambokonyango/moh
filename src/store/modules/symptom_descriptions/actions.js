
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    SYMPTOMDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_SYMPTOMDESCRIPTION_FAILED,

    REGISTERED_SYMPTOMDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_SYMPTOMDESCRIPTION,
    REGISTERED_SYMPTOMDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerSymptomDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_symptom_descriptions";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: SYMPTOMDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_SYMPTOMDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllSymptomDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_symptom_descriptions";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_SYMPTOMDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredSymptomDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_SYMPTOMDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_SYMPTOMDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
