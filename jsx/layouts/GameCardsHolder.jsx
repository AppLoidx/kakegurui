const React = require('react')
const GameCard = require('../apps/GameCard.jsx')

class GameCardsHolder extends React.Component {
	constructor(props){
		super(props)
		this.state = {"loading": true, "games" : []}
	}

	componentDidMount(){
		this.setState({"loading" : false, "games": [<GameCard title="Poker" description="Simple holdem poker" link="#"/>, 
																		<GameCard title="Casino" description="Play the kakegurui's casino" link="#"/>,
																		<GameCard title="21" description="National game ranking" link="#"/>
																		]})
	}

	render() {
		return (
			<div className="row mb-2 w-100">
					{
						this.state.loading?
						<p className="justify-content-center display-4">Loading...</p>
						:
						this.state.games.map((x,i) => {return <div key={i} className='col-md-4 no-gutters bg-light border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-0' >{x}</div>})
					}
			</div>
		)
	}
}

module.exports = GameCardsHolder