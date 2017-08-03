import React from 'react'

class Controls extends React.Component {
    constructor(props) {
        super(props)
    }

    refresh = () => {
        this.props.refresh()
    }

    answerSet = () => {
        this.props.answerSet()
    }

    answerNotSet = () => {
        this.props.answerNotSet()
    }

    render() {
        if (this.props.answered) {
            return ( 
                    <div>
                        <input type="button" value="Continue" onClick={this.refresh}/>
                    </div>
                )
        } else {
            return (
                <div>
                    <input type="button" value="It's a set" onClick={this.answerSet}/>
                    <input type="button" value="It's not a set" onClick={this.answerNotSet}/>
                </div>
            )
        }
    }
}
export default Controls