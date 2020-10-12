import React from 'react';

//Routes
import Routes from './routes';

//CSS global
import './styles.css';

//Header
import Header from './components/Header';

function App() {
  return (
	<div className="App">
		<Header />
		<Routes />
	</div>
  );
}

export default App;