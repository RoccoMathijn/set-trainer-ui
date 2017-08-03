import React from 'react'

class Feedback extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.answered) {
            if (this.props.answeredCorrect) {
                return (<span>Correct!</span>)
            } else {
                return (<span>Incorrect!</span>)
            }
        } else {
            return (<span></span>)
        }
    }
}

export default Feedback