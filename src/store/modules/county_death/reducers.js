
import {
    COUNTY_DEATH_INCREASED_SUCCESSFULLY,
    ERROR_INCREASING_COUNTY_DEATH
} from "./actionTypes";

export const ACTION_HANDLERS = {

    [COUNTY_DEATH_INCREASED_SUCCESSFULLY]: state =>
        Object.assign({}, state, {
            countyDeathsSuccessFullyIncreased: true
        }),
    [ERROR_INCREASING_COUNTY_DEATH]: state =>
        Object.assign({}, state, {
            countyDeathsSuccessFullyIncreased: false
        }),


};
