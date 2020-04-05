import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import './MainStyle.scss';
import Login from "./views/authentication/Login.jsx";
import ErrorPage from "./components/error_page/ErrorPage";
import ChildrenTips from "./views/children_tips/ChildrenTips";
import ChildrenTipsDescription from "./views/children_tips_description/ChildrenTipsDescription";
import Measure from "./views/measure/Measure";
import MeasureDescription from "./views/measure_description/MeasureDescription";
import Myths from "./views/myths/Myths";
import MythsDescription from "./views/myths_description/MythsDescription";
import Prevention from "./views/preventions/Prevention";
import PreventionDescription from "./views/prevention_descriptions/PreventionDescription";
import Question from "./views/questions/Question";
import QuestionDescription from "./views/question_description/QuestionDescription";
import Scam from "./views/scams/Scam";
import ScamDescription from "./views/scam_description/ScamDescription";
import StressCopingDescription from "./views/stress_coping_description/StressCopingDescription";
import StressCoping from "./views/stress_coping/StressCoping";
import Symptom from "./views/symptoms/Symptom";
import SymptomDescription from "./views/symptom_descriptions/SymptomDescription";
import Testing from "./views/testing/Testing";
import TestingDescription from "./views/testing_description/TestingDescription";
import Travel from "./views/travel/Travel";
import TravelDescription from "./views/travel_description/TravelDescription";
import Treatment from "./views/treatment/Treatment";
import TreatmentDescription from "./views/treatment_description/TreatmentDescription";
import Moh from "./components/moh/Moh";



class App extends Component {
  render() {
    return (
        <div>
          <div className="main-style__error-page">
            <ErrorPage />
          </div>

        <div className="main-style__application-body">
      <Router>
        <div>
            <Route path="/" exact component={Moh} />
            <Route path="/childrenTips" exact component={ChildrenTips} />
            <Route path="/childrenTipsDescription" exact component={ChildrenTipsDescription} />
            <Route path="/measure" exact component={Measure} />
            <Route path="/measureDescription" exact component={MeasureDescription} />
            <Route path="/myths" exact component={Myths} />
            <Route path="/mythsDescription" exact component={MythsDescription} />
            <Route path="/preventions" exact component={Prevention} />
            <Route path="/preventionDescription" exact component={PreventionDescription} />
            <Route path="/questions" exact component={Question} />
            <Route path="/questionDescription" exact component={QuestionDescription} />
            <Route path="/scam" exact component={Scam} />
            <Route path="/scamDescription" exact component={ScamDescription} />
            <Route path="/stressCopingDescription" exact component={StressCopingDescription} />
            <Route path="/stressCoping" exact component={StressCoping} />
            <Route path="/symptoms" exact component={Symptom} />
            <Route path="/symptomDescription" exact component={SymptomDescription} />
            <Route path="/testing" exact component={Testing} />
            <Route path="/testingDescription" exact component={TestingDescription} />
            <Route path="/travel" exact component={Travel} />
            <Route path="/travelDescription" exact component={TravelDescription} />
            <Route path="/treatment" exact component={Treatment} />
            <Route path="/treatmentDescription" exact component={TreatmentDescription} />



        </div>
      </Router>
        </div>
        </div>
    );
  }
}

export default App;
