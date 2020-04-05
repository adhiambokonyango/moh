
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    SCAMDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_SCAMDESCRIPTION_FAILED,

    REGISTERED_SCAMDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_SCAMDESCRIPTION,
    REGISTERED_SCAMDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerScamDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_scam_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: SCAMDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_SCAMDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllScamDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_scam_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_SCAMDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredScamDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_SCAMDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_SCAMDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
