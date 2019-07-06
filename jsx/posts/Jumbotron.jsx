const React = require('react')

class Jumbotron extends React.Component {
	render(){
		return (
			 <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
			    <div className="col-md-6 px-0">
			      <h1 className="display-4 font-italic">{this.props.title}</h1>
			      <p className="lead my-3">{this.props.text}</p>
			      <p className="lead mb-0"><a href={this.props.link} className="text-white font-weight-bold">{this.props.linkName}</a></p>
			    </div>
			  </div>
			)
	}
}

module.exports = Jumbotron