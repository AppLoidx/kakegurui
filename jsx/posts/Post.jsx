const React = require('react')
class Post extends React.Component {
	render() {
		return (
			<div className="blog-post">
        		<h2 className="blog-post-title">{this.props.title}</h2>
        		<p className="blog-post-meta">{this.props.date} by <a href={this.props.authorLink}>{this.props.author}</a></p>
        		<div className='post-content'>{this.props.children}</div>
      		</div>
		)
	}
}

module.exports = Post