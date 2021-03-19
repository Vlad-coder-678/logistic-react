import React from "react";
import {TechnologySection, SafetySection, ComfortableSection, FunctionalitySection} from "./homePageComponents";

const HomePage = () => {
    return(
        <div>
            <TechnologySection/>
            <SafetySection/>
            <ComfortableSection/>
            <FunctionalitySection/>
        </div>
    )
};

export default HomePage;