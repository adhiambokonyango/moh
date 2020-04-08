
import {
    COUNTY_SUCCESSFULLY_REGISTERED,
    REGISTERED_COUNTY_FETCHED_SUCCESSFULLY, REGISTERED_COUNTY_EMPTY_RESULTS,
    REGISTERING_COUNTY_FAILED
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [COUNTY_SUCCESSFULLY_REGISTERED]: state =>
        Object.assign({}, state, {
            countySuccessFullyRegistered: true
        }),
    [REGISTERING_COUNTY_FAILED]: state =>
        Object.assign({}, state, {
            countySuccessFullyRegistered: false
        }),
    [REGISTERED_COUNTY_FETCHED_SUCCESSFULLY]: (state, action) =>
        Object.assign({}, state, {
            registeredCounty: action.payload.registeredCounty
        }),


};
