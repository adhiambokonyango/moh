
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    CHILDRENTIPSDESCRIPTION_SUCCESSFULLY_REGISTERED,
    REGISTERING_CHILDRENTIPSDESCRIPTION_FAILED,

    REGISTERED_CHILDRENTIPSDESCRIPTION_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_CHILDRENTIPSDESCRIPTION,
    REGISTERED_CHILDRENTIPSDESCRIPTION_EMPTY_RESULTS

} from "./actionTypes";

export function registerChildrenTipsDescription(payload) {
    return async dispatch => {
        const apiRoute = "/add_children_tips_description";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: CHILDRENTIPSDESCRIPTION_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_CHILDRENTIPSDESCRIPTION_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllChildrenTipsDescription() {
    return async dispatch => {
        const apiRoute = "/get_all_children_tips_description";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_CHILDRENTIPSDESCRIPTION_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredChildrenTipsDescription: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_CHILDRENTIPSDESCRIPTION_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_CHILDRENTIPSDESCRIPTION
                });
                console.log(err);
            }
        );
    };
}
