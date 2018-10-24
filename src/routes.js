import React from 'react';
//import { Route, IndexRoute } from 'react-router';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Home from './Home';
import Contact from './Contact';

// export default (

  

//   <Route path='/' component={App}>
//     <IndexRoute component={Home} />
//     <Route path='contact' component={Contact} />
//     <Route path='*' component={Home} />
//   </Route>
// );


const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/contact" component={Contact}/>
			<Route component={Home}/>
		</Switch>
	</BrowserRouter>
	);
export default Router;