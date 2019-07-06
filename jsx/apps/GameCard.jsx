const React = require('react')

class GameCard extends React.Component {
	render(){
		return (
			<a href={this.props.link} className='text-decoration-none text-dark row'>
				<div>
					<img className="col align-self-start bd-placeholder-img" width="100px" height="100px" src="http://kazan.pokers-shop.ru/image/cache/data/500/lux-400/lux-400-777-950x750.jpg" alt='image here!'></img>
					<div className="w-100"></div>
					<div className="col align-self-end">
						<h3 className="display-4">{this.props.title}</h3>
						<p>{this.props.description}</p>
					</div>
				</div>
			</a>
		)
	}
}

module.exports = GameCard