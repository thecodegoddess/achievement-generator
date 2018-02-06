import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ICONS, COLORS } from './configs';
import CreateOne from './components/CreateOne';

// import logo from './logo.svg';
// import './App.css';



class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	        <ul>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/new">New</Link></li>
		        <li><Link to="/achievement/UNICORN/%2367a8da/Sprint%20Planning%20with%20out%20using%20points%20cards%20!!!"> test banner</Link></li>
	        </ul>
		      <main>
			      <Route path="/" exact render={()=> {
			      	return (
			      		<h1>home is here</h1>
				      );
			      }} />
			      <Route path="/new" component={ CreateOne } />
			      <Route path="/achievement/:icon/:color/:text" render={({ match }) => {
			      	const { icon, color, text } = match.params;
			      	return (
			      		<div style={ {backgroundColor : decodeURIComponent(color)} }>
						      hmm- { COLORS[decodeURIComponent(color)] } { decodeURIComponent(color) }
						      <div>{ ICONS[decodeURIComponent(icon)] }</div>
			      		  <p>here is where we will display achievement { decodeURIComponent(text) }
					        </p>
					      </div>

				      );
			      }}/>
		      </main>
	      </div>
	    </Router>
    );
  }
}

export default App;
