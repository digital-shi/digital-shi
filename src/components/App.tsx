import React from "react";
import { useTranslation } from 'react-i18next';
import { PageHeader, Button } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import "antd/dist/antd.css";
import Home from './Home';
import Consent from './Consent';
import Questionaire from './Questionnaire';
import './App.scss';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <PageHeader
        className=""
        title="SHI Questionaire"
        subTitle="A questionaire to help you identify your speech problem"
        extra={[
          <Button className="localeButton" size="small" key="en" onClick={() => changeLanguage('en')}> English</Button>,
          <Button className="localeButton" size="small" key="ko" onClick={() => changeLanguage('ko')}> Korean </Button>,
          <Button className="localeButton" size="small" key="it" onClick={() => changeLanguage('it')}> Italian </Button>,
          <Button className="localeButton" size="small" key="zh" onClick={() => changeLanguage('zh')}> Cantonese (Chinese)</Button>,
          <Button className="localeButton" size="small" key="fr" onClick={() => changeLanguage('fr')}> French </Button>
        ]}
      />
      <Router>
        <Switch>
          <Route path="/shi-questionnaire/questionnaire">
            <Questionaire />
          </Route>
          <Route path="/shi-questionnaire/consent">
            <Consent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
