import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "../Login";
import Signup from "../SignUp";
import Resetpass from "../ForgotPass";
import Safa from "../Safa";
import Coffeecard from "../Coffee/CardPractice";
import Weather from "../WeatherApp/Weather";
// import Table from "../Table";
import Practice from "../Practice";
import Quiz from "../QuizApp/Quiz";
import Home from "../QuizApp/Pages/Home/Home";
import QuizPage from "../QuizApp/Pages/Quiz/QuizPage";
import Result from "../QuizApp/Pages/Result/Result";
import Giftcard from "../Giftcard/Giftcard";
import HomePage from "../Learning/HomePage";
import Page1 from "../Learning/Page1";
import Page2 from "../Learning/Page2";
import Misc from "../Misc/misc";
import Recipe from "../Recipe App/Recipe.Js";
import ProcessminingPage from "../ProcessMining/ProcessminingPage";
import Table1 from "../Misc/Table";

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/Reset" component={Resetpass} />
        <Route exact path="/Coffee" component={Coffeecard} />
        <Route exact path="/safa" component={Safa} />
        <Route exact path="/" component={Safa} />
        <Route exact path="/weather" component={Weather} />
        {/* <Route exact path="/table" component={Table} /> */}
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/gift" component={Giftcard} />
        <Route exact path="/learning" component={HomePage} />
        <Route exact path="/l1p1" component={Page1} />
        <Route exact path="/l1p2" component={Page2} />
        <Route exact path="/misc" component={Misc} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/student" component={Table1} />
        <Route exact path="/page" component={ProcessminingPage} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
