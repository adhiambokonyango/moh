
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    CHILDRENTIPS_SUCCESSFULLY_REGISTERED,
    REGISTERING_CHILDRENTIPS_FAILED,

    REGISTERED_CHILDRENTIPS_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_CHILDRENTIPS,
    REGISTERED_CHILDRENTIPS_EMPTY_RESULTS

} from "./actionTypes";

export function registerChildrenTips(payload) {
    return async dispatch => {
        const apiRoute = "/add_children_tips";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: CHILDRENTIPS_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_CHILDRENTIPS_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllChildrenTips() {
    return async dispatch => {
        const apiRoute = "/get_all_children_tips";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_CHILDRENTIPS_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredChildrenTips: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_CHILDRENTIPS_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_CHILDRENTIPS
                });
                console.log(err);
            }
        );
    };
}
