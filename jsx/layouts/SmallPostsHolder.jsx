const React = require('react')

class SmallPostsHolder extends React.Component{
	render(){
		return (
			<div className="row mb-2">
			    <div className="col-md-6">
			      		{this.props.children[0]}
			    </div>
			    <div className="col-md-6">
			      		{this.props.children[1]}
			    </div>
			  </div>
			)
	}
}

module.exports = SmallPostsHolder