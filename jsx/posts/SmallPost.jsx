const React = require('react')
class SmallPost extends React.Component {
	render() { return (
		<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
	        <div className="col p-4 d-flex flex-column position-static">
	          <strong className={"d-inline-block mb-2 " + this.props.themeColor}>{this.props.theme}</strong>
	          <h3 className="mb-0">{this.props.title}</h3>
	          <div className="mb-1 text-muted">{this.props.date}</div>
	          <p className="card-text mb-auto">{this.props.text}</p>
	          <a href={this.props.link} className="stretched-link">{this.props.linkName}</a>
	        </div>
	        <div className="col-auto d-none d-lg-block">
	          <img className="bd-placeholder-img" width="200" height="250" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail" src={this.props.img}></img>
	        </div>
      </div>
		)}
}

module.exports = SmallPost