
import {apiGetAll, apiPost} from "../../../services/api_connector/ApiConnector";
import {
    COUNTY_DEATH_INCREASED_SUCCESSFULLY,
    ERROR_INCREASING_COUNTY_DEATH

} from "./actionTypes";

export function increaseCountyDeaths(payload) {
    return async dispatch => {
        const apiRoute = "/update_county_death";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (result.data.results.success) {
                    dispatch({
                        type: COUNTY_DEATH_INCREASED_SUCCESSFULLY
                    });
                } else {
                    dispatch({
                        type: ERROR_INCREASING_COUNTY_DEATH
                    });
                }
            },
            function(err) {
                console.log(err);
            }
        );
    };
}




// export function fetchAllCountyDeaths() {
//     return async dispatch => {
//         const apiRoute = "/get_all_county_death";
//         const returnedPromise = apiGetAll(apiRoute);
//         returnedPromise.then(
//             function(result) {
//                 if (result.data.results && result.data.results.length > 0) {
//                     dispatch({
//                         type: REGISTERED_COUNTYDEATHS_FETCHED_SUCCESSFULLY,
//                         payload: {
//                             registeredCountyDeaths: result.data.results
//                         }
//                     });
//                 } else if (result.data.results && result.data.results.length === 0) {
//                     dispatch({
//                         type: REGISTERED_COUNTYDEATHS_EMPTY_RESULTS
//                     });
//                 }
//             },
//             function(err) {
//                 dispatch({
//                     type: ERROR_FETCHING_COUNTYDEATHS
//                 });
//                 console.log(err);
//             }
//         );
//     };
// }
