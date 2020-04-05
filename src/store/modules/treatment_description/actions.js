
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    TREATMENTDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_TREATMENTDESCRIPTION_FAILED,

    REGISTERED_TREATMENTDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_TREATMENTDESCRIPTION,
    REGISTERED_TREATMENTDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerTreatmentDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_treatment_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: TREATMENTDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_TREATMENTDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllTreatmentDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_treatment_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_TREATMENTDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredTreatmentDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_TREATMENTDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_TREATMENTDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
