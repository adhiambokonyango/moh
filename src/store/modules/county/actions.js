
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    COUNTY_SUCCESSFULLY_REGISTERED,
    REGISTERING_COUNTY_FAILED,

    REGISTERED_COUNTY_FETCHED_SUCCESSFULLY,
    ERROR_FETCHING_COUNTY,
    REGISTERED_COUNTY_EMPTY_RESULTS

} from "./actionTypes";

export function registerCounty(payload) {
    return async dispatch => {
        const apiRoute = "/add_county";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: COUNTY_SUCCESSFULLY_REGISTERED
                    });
                } else {
                    dispatch({
                        type: REGISTERING_COUNTY_FAILED
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




export function fetchAllCounty() {
    return async dispatch => {
        const apiRoute = "/get_all_county";
        const returnedPromise = apiGetAll(apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results && result.data.results.length > 0) {
                    dispatch({
                        type: REGISTERED_COUNTY_FETCHED_SUCCESSFULLY,
                        payload: {
                            registeredCounty: result.data.results
                        }
                    });
                } else if (result.data.results && result.data.results.length === 0) {
                    dispatch({
                        type: REGISTERED_COUNTY_EMPTY_RESULTS
                    });
                }
            },
            function(err) {
                dispatch({
                    type: ERROR_FETCHING_COUNTY
                });
                console.log(err);
            }
        );
    };
}
