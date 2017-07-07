import {HashRouter as Router,Route, Link, Switch } from 'react-router-dom'
import { MainApp } from './MainApp'
import { PageNotFound } from './PageNotFound'


export const SiteRoute = () => (
  <Router>
    <div> 
	  <Switch>
        <Route exact path="/" component={MainApp}/>
		<Route exact path="/adduser" component={MainApp}/>
		<Route exact path="/dashboard" component={MainApp}/>
		<Route path="*" component={PageNotFound}/>
      </Switch>
    </div>
  </Router>
)



