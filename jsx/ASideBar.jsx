const React = require('react')
const ReactDOM = require('react-dom')

class ASideBar extends React.Component {
	render(){
		return (
			<aside className="blog-sidebar">
		      <div className="p-4">
		        <h4 className="font-italic">Tournaments</h4>
		        <ol className="list-unstyled mb-0">

		          <li><a href="#">Moscow-2019</a></li>
		          <li><a href="#">SPb Cup - 2019</a></li>
		          <li><a href="#">Summer Season Qualifers</a></li>
		          <li><a href="#">Siberian Cup</a></li>
		          <li><a href="#">Poker Ykt`19</a></li>
		          <li><a href="#">Europe League Finals</a></li>

		        </ol>
		      </div>
		    </aside>
		)
	}
}

module.exports = ASideBar