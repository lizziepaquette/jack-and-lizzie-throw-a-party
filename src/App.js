import './App.css'
import React from 'react'
import Playlist from './components/Playlist'
import SwapHome from './components/SwapHome'
import AirbnbPreview from './components/AirbnbPreview'
import Jobs from './components/Jobs'
import Info from './components/Info'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import Logistics from './components/Logistics';
import ReactGA from 'react-ga';
import Schedule from './components/Schedule';
import JacksTwentyNinthBday from './components/JacksTwentyNinthBday';

function App () {
  ReactGA.initialize("UA-202521087-1");

  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div id="outer-container">
      <HashRouter>
        <Menu pageWrapId={ 'page-wrap' } outerContainerId={ 'outer-container' } />
        <main id="page-wrap">
          <Switch>
            <Route
              exact
              path='/'
              component={SwapHome}
            />
            <Route
              exact
              path='/playlist'
              component={Playlist}
            />
            <Route
              exact
              path='/airbnb-preview'
              component={AirbnbPreview}
            />
            <Route
              exact
              path='/jobs'
              component={Jobs}
            />
            <Route
              exact
              path='/info'
              component={Info}
            />
            <Route
              exact
              path='/running-updates'
              component={Logistics}
            />
            <Route
              exact
              path='/schedule'
              component={Schedule}
            />
            <Route
              exact
              path='/jacks-29th-bday'
              component={JacksTwentyNinthBday}
            />
          </Switch>
        </main>
      </HashRouter>
    </div>
  )
}

export default App
