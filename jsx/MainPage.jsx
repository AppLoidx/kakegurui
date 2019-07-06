const React = require('react')
const ASideBar = require('./ASideBar.jsx')
const MainBlog = require('./posts/MainBlog.jsx')
const SmallPost = require('./posts/SmallPost.jsx')
const Navbar = require('./Navbar.jsx')
const SmallPostsHolder = require('./layouts/SmallPostsHolder.jsx')
const Jumbotron = require('./posts/Jumbotron.jsx')
const Header = require('./Header.jsx')

class MainPage extends React.Component {
	render(){

		return(
			<div>
				<div className="container">
		    		<div className="container-all d-sm-none d-md-block pl-5 pr-5">
					<Header/>
					<Navbar/>
						<Jumbotron title='We are opened' text="Are you want to play poker?" linkName="Read more..." link='#'/>
						<SmallPostsHolder>
						<SmallPost title="Interview with Sanji" img="http://cn1.nevsedoma.com.ua/images/2009/217/3/Winner_1.jpg" link="#" linkName="Read more..."
						text="It was too easy! Interview with the winner europe league" theme="Poker" themeColor="text-danger"/>
						<SmallPost title="Interview with Sanji" img="http://cn1.nevsedoma.com.ua/images/2009/217/3/Winner_1.jpg" link="#" linkName="Read more..."
						text="It was too easy! Interview with the winner europe league" theme="Poker" themeColor="text-danger"/>
						</SmallPostsHolder>
						<div className='row'>
						<div className='col-md-9 blog-main'>
							<MainBlog/>
						</div>
						<div className='col-md-3 '>
							<ASideBar/>
						</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = MainPage