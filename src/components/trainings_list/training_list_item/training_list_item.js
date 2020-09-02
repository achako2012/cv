import React, {Component} from "react";



export default class TrainingListItem extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const {training} = this.props

        return (
            <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    {training}
                </span>
            </div>
        )
    }
}
