import React from 'react'
import Cards from './Cards.js'
import Controls from './Controls.js'
import Feedback from './Feedback.js'

class Game extends React.Component {
    constructor (props) {
        super(props)

        this.colors = ['R', 'G', 'P']
        this.shapes = ['D', 'S', 'W']
        this.patterns = ['E', 'F', 'S']
        this.numbers = ['1', '2', '3']

        this.randomNumber = () => {
            const randomNumber = Math.floor((Math.random() * 3))
            return randomNumber
        }
    
        this.randomCard =  () => {
            const color = this.colors[this.randomNumber()]
            const shape = this.shapes[this.randomNumber()]
            const pattern = this.patterns[this.randomNumber()]
            const number = this.numbers[this.randomNumber()]
            return color + shape + pattern + number
        }

        this.randomSet = () => {
            return {
                card1: this.randomCard(),
                card2: this.randomCard(),
                card3: this.randomCard()
            }
        }

        this.isValidSet = () => {
            const {card1, card2, card3} = this.state.set
            const colors = [card1.substr(0,1), card2.substr(0,1), card3.substr(0,1)]
            const shapes = [card1.substr(1,1), card2.substr(1,1), card3.substr(1,1)]
            const patterns = [card1.substr(2,1), card2.substr(2,1), card3.substr(2,1)]
            const numbers = [card1.substr(3,1), card2.substr(3,1), card3.substr(3,1)]
            return this.validAttribute(colors) && this.validAttribute(shapes) && this.validAttribute(patterns) && this.validAttribute(numbers)
        }

        this.validAttribute = (attributes) => this.allTheSameAttributes(attributes) || this.allDifferentAttributes(attributes)

        this.allTheSameAttributes = (attributes) => {
            const [attribute1, attribute2, attribute3] = attributes
            return attribute1 === attribute2 && attribute2 === attribute3
        }

        this.allDifferentAttributes = (attributes) => {
            const [attribute1, attribute2, attribute3] = attributes
            return attribute1 !== attribute2 && attribute2 !== attribute3
        }

        this.state = {
            set: this.randomSet()
        }
    }

    refresh = () => {
        this.setState({
            answered: false
        })
        this.setState({
            set: this.randomSet()
        })
    }

    answerSet = () => {
        if(this.isValidSet()) {
            this.answeredCorrect()
        } else {
            this.answeredIncorrect()
        }
    }

    answerNotSet = () => {
        if(this.isValidSet()) {
            this.answeredIncorrect()
        } else {
            this.answeredCorrect()
        }
    }

    answeredCorrect = () => {
        this.setState({
            answeredCorrect: true,
            answered: true
        })
    }

    answeredIncorrect = () => {
        this.setState({
            answeredCorrect: false,
            answered: true
        })
    }

    render() {
        return (
            <div>
                <Cards set={this.state.set}/>
                <Feedback answered={this.state.answered} answeredCorrect={this.state.answeredCorrect}/>
                <Controls refresh={this.refresh} answerSet={this.answerSet} answerNotSet={this.answerNotSet} answered={this.state.answered}/>
            </div>
        )
    }
}

export default Game