
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    TESTINGDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_TESTINGDESCRIPTION_FAILED,

    REGISTERED_TESTINGDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_TESTINGDESCRIPTION,
    REGISTERED_TESTINGDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerTestingDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_testing_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: TESTINGDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_TESTINGDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllTestingDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_testing_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_TESTINGDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredTestingDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_TESTINGDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_TESTINGDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
