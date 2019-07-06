const React = require('react')
const ReactDOM = require('react-dom')

const MainPage = require('./MainPage.jsx')
const GameCardsHolder = require('./layouts/GameCardsHolder.jsx')
import { HashRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {
	render(){
		return (
			<div></div>
			)
	}
}

ReactDOM.render(
	<Router >
		<div>
			<Route exact path="/" component={MainPage} />
			<Route exact path="/games" component={GameCardsHolder} />
		</div>
	</Router >,
	document.getElementById('react-content')
)