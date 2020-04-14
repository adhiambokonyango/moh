import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

import { reducer as admin_home } from "./modules/admin_home";

import { reducer as user_home } from "./modules/user_home";
import { reducer as children_tips } from "./modules/children_tips";
import { reducer as children_tips_description } from "./modules/children_tips_description";
import { reducer as measure } from "./modules/measure";
import { reducer as measure_description } from "./modules/measure_description";
import { reducer as myths_description } from "./modules/myths_description";
import { reducer as preventions } from "./modules/preventions";
import { reducer as myths } from "./modules/myths";
import { reducer as prevention_descriptions } from "./modules/prevention_descriptions";
import { reducer as questions } from "./modules/questions";
import { reducer as question_description } from "./modules/question_description";
import { reducer as scams } from "./modules/scams";
import { reducer as scam_description } from "./modules/scam_description";
import { reducer as stress_coping } from "./modules/stress_coping";
import { reducer as stress_coping_description } from "./modules/stress_coping_description";
import { reducer as symptoms } from "./modules/symptoms";
import { reducer as symptom_descriptions } from "./modules/symptom_descriptions";
import { reducer as testing } from "./modules/testing";
import { reducer as testing_description } from "./modules/testing_description";
import { reducer as travel } from "./modules/travel";
import { reducer as travel_description } from "./modules/travel_description";
import { reducer as treatment } from "./modules/treatment";
import { reducer as treatment_description } from "./modules/treatment_description";
import { reducer as county } from "./modules/county";
import { reducer as county_death } from "./modules/county_death";





// =============================================================
// The rootReducer object aggregates our earlier reducers into a
// single reducer that holds our entire immutable application
// (theme) state.
// =============================================================

const rootReducer = reduceReducers(
  combineReducers({

      admin_home,

      user_home,
      children_tips,
      children_tips_description,
      measure,
      measure_description,
      myths,
      myths_description,
      preventions,
      prevention_descriptions,
      questions,
      question_description,
      scams,
      scam_description,
      stress_coping,
      stress_coping_description,
      symptoms,
      symptom_descriptions,
      testing,
      testing_description,
      travel,
      travel_description,
      treatment,
      treatment_description,
        county,
        county_death


  })
);

export default rootReducer;
