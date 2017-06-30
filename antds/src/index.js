import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Link,Router,Route,IndexRouter,browserHistory } from 'react-router';
import Home from './home';
import About from './about';
import Other from './other';


ReactDOM.render(<Router>
	<Route path="/" component={App}>
		<Route path="/home" component={Home}></Route>
		<Route path="/about" component={About}></Route>
		<Route path="/other" component={Other}></Route>
	</Route>	
</Router>, document.getElementById('root'));
registerServiceWorker();
