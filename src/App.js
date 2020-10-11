import React, {Component} from 'react';

//CSS global
import './styles.css';

//Header
import Header from './components/Header';

//Main
import Main from './pages/main/index';

function App() {
  return (
	<div className="App">
		<Header />
		<Main/>
	</div>
  );
}

export default App;