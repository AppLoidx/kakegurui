const React = require('react')
const Post = require('./Post.jsx')
class MainBlog extends React.Component {
	render ( ){
		return (
				<div>
			      <h3 className="pb-4 mb-4 font-italic border-bottom">
			        Latest news
			      </h3>

			      <Post title="Poker - it's easy!" author="Tom Billican" authorLink="#" date="June 06">
			      	<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p><hr/><p>Cum sociis natoque penatibus et magnis <a href=''>dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><blockquote/><p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			      </Post>

			      <Post title="Large tournaments" author="Arthur Kupriyanov" authorLink="https://vk.com/apploidxxx" date="June 03">
			      	<p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
				        <blockquote>
				          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				        </blockquote>
				        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
				        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			      </Post>

			      <nav className="blog-pagination">
			        <a className="btn btn-outline-primary" href="#">Older</a>
			        <a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Newer</a>
			      </nav>

			    </div>
			)
}
}

module.exports = MainBlog
