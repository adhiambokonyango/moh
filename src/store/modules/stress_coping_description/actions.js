
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    STRESSCOPINGDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_STRESSCOPINGDESCRIPTION_FAILED,

    REGISTERED_STRESSCOPINGDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_STRESSCOPINGDESCRIPTION,
    REGISTERED_STRESSCOPINGDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerStressCopingDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_stress_coping_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: STRESSCOPINGDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_STRESSCOPINGDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllStressCopingDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_stress_coping_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_STRESSCOPINGDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredStressCopingDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_STRESSCOPINGDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_STRESSCOPINGDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
