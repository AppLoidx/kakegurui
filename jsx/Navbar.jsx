const React = require('react')

class Navbar extends React.Component {
	render(){
		return (
			<div className="nav-scroller py-1 mb-2">
    			<nav className="nav d-flex justify-content-between">
			      <a className="p-2 text-muted main-navbar-link" href="#">Casino</a>
			      <a className="p-2 text-muted main-navbar-link" href="#">Poker</a>
			      <a className="p-2 text-muted main-navbar-link" href="#">Tournaments</a>
			      <a className="p-2 text-muted main-navbar-link" href="#">Other</a>
			      <a className="p-2 text-muted main-navbar-link" href="#">Ratings</a>
			      <a className="p-2 text-muted main-navbar-link" href="#">Friends</a>
			      <a className="p-2 text-muted main-navbar-link" href="#">My Profile</a>
			    </nav>
			 </div>
			)
	}
}

module.exports = Navbar