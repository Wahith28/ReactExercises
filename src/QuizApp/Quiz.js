import { Card } from "@material-ui/core";
import React from "react";
import Header from "./Components/Header/Header";
import bgimg from "../QuizApp/ques1.png";
import QHeader from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import QuizPage from "./Pages/Quiz/QuizPage";
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";

const Quiz = () => {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            minHeight: "95vh",
            width: "auto",
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            border: "8px solid #39445a93",
            margin: "5px",
            padding: "5px",

            //   backgroundPosition: "center center",
          }}
        >
          <QHeader />
          <Switch>
            <Route exact path="/quiz/Home" component={Home} />
            <Route path="/quiz/quizpage" exact>
              <QuizPage />
            </Route>
            <Route exact path="/quiz/results" component={Result} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Quiz;
