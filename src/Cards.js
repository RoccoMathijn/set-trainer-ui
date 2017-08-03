import React from 'react'

class Cards extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const card1 = require('./svg-cards/' + this.props.set.card1 + '.svg')
        const card2 = require('./svg-cards/' + this.props.set.card2 + '.svg')
        const card3 = require('./svg-cards/' + this.props.set.card3 + '.svg')
        return (
            <div>
                <div>
                    <img src={card1} width="145" height="225" alt="card1"/>
                    <img src={card2} width="145" height="225" alt="card2"/>
                    <img src={card3} width="145" height="225" alt="card3"/>
                </div>
            </div>
            )
    }
}

export default Cards