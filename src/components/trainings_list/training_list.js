import React, {Component} from 'react';

import TrainingListItem from "./training_list_item";
import CvService from "../../services/CvService";
import WorkListItem from "../work_list/work_list_item";


export default class TrainingList extends Component {
    constructor(){
        super();
        this.updateTrainings()
    }

    cvService = new CvService()
    state = {
        trainings:[]
    }

    updateTrainings(){
        this.cvService.getTrainings()
            .then(arr =>{
                this.setState({trainings: arr})})
    }

    render(){
        const {trainings} = this.state
        const elements = trainings.map((item) => {

            const {id, ...training} = item;
            return (
                <li key={id} className="list-group-item">
                    <TrainingListItem {...training}/>
                </li>
            )
        })

        return (
            <div>
                <h1 className="app-list">
                    Training List
                </h1>
                <ul className="list-group">
                    {elements}
                </ul>
            </div>
        )
    }
}