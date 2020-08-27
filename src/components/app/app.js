import React from 'react'
import AppHeader from "../app_header";
import WorkList from "../work_list";
import Objective from "../objective";
import CoreSkills from "../core_skills";
import TrainingList from "../trainings_list";
import Education from "../education";
import Interests from "../interests";
import Languages from "../languages";

const App = () => {
    return (
        <div>
            <AppHeader/>
            <Objective/>
            <CoreSkills/>
            <TrainingList/>
            <Education/>
            <WorkList/>
            <Interests/>
            <Languages/>
        </div>
        )
}

export default App;