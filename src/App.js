import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CreateOne from './components/CreateOne';
import BannerDisplay from './components/BannerDisplay';
import withShortenUrl from './hoc/withShortenUrl';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    	<Router basename="/achieve">
	      <div className="App">
		      <nav className="c-site-header">
			      <h1 className="c-site-header__title">Achievement Generator</h1>
			      <ul className="c-nav">
				      <li className="c-nav__item"><Link className="o-btn c-nav__link" to="/">Home</Link></li>
				      <li className="c-nav__item"><Link className="o-btn c-nav__link" to="/new">New</Link></li>
			      </ul>
		      </nav>

		      <main className="o-main-content">
			      <Route path="/" exact render={()=> {
			      	return (
					      <p style={ {textAlign : 'center'} }>Created this Achievement Generator for fun. Just wanted to play with a few techs for fun. Create <Link to="/new">one</Link> and share it</p>
				      );
			      }} />
			      <Route path="/new" component={ CreateOne } />
			      <Route path="/achievement/:icon/:color/:text" component={ withShortenUrl(BannerDisplay) } />

		      </main>
		      <footer className="c-footer">&copy; { (new Date()).getFullYear() } thecodegoddess</footer>
	      </div>
	    </Router>
    );
  }
}

export default App;
