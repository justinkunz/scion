import React from "react";
import Navbar from '../../misc/Navbar';
import {
    Dropdown,
    EitherOr,
    RadioBtn,
    Slide,
    SubmitBtn
} from "../../form";

class GCSurvey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //setting for slider
        const settings = {
            start: 5,
            min: 0,
            max: 10,
            step: 1
        };

        //value change handler
        const onValueChange = (fieldId, val) => {
            this.setState({ [fieldId]: val });
        };

        //on cancel btn click
        const onCancel = () => {
            alert("Form cancelled");
        };

        //on submit btn click
        const onFormSubmit = () => {
            alert(
                "DEV ALERT - Current application state has been logged in the console"
            );
            console.log("We will push this to an API once the questions are set up");
            console.log(this.state);
        };
        // PL_PC: "Pro Choice" 0 or 1
        // birth_cntr: "Yes" 0 or 1
        // degree_type: "Bachelors Degree" 0 1 2 3 4 . . .
        // desiredCompensation: "$50,000 - 75,000" 0 1 2 3 4 . . .
        // embryos_ct: "4-6" 0 1 2 3
        // ethnicity: "Caucasian" 0 or 1
        // haveChildren: "Yes" 0 or 1
        // havePets: "Yes" 0 or 1
        // hosp_birth: "Yes" 0 or 1
        // insurance: "No" 0 or 1
        // location: "Yes" 0 or 1
        // previous_gc: "No" 0 or 1
        // relationshipStatus: "Married" 0 or 1
        // religion: "Christian" 0 or 1

        const education_lvl = [
            "N/A",
            "High School Diploma",
            "Some College",
            "Associates Degree",
            "Bachelors Degree",
            "Masters Degree",
            "PhD"
        ];
        const religions = [
            "Not Religous/Agnostic/Atheist",
            "Christian",
            "Jewish",
            "Buddist",
            "Islamic"
        ];
        const embr_ct = ["1-3", "4-6", "7-10", ">10"];
        const how_soon = [
            "Within the next 3 months",
            "In 3-6 months",
            "In 6-12 months",
            "In 1-2 years",
            "2+ years from now"
        ];
        const ethnicity = [
            "Of Africian decent",
            "Caucasian",
            "Middle Eastern",
            "Indengenous Peoples",
            "Pacific Islander",
            "Prefer not to say"
        ];
        const relationshipStatus = ["Single", "Married", "Commmon Law Married"];
        const desiredCompensation = [
            "< $20,000",
            "$21,000 - 49,000",
            "$50,000 - 75,000",
            "$75,000 - $100,000",
            "$100,000 <"
        ];


        return (
            <div>
                <Navbar activePage="Gestational Carriers" />
                <Dropdown
                    key="degree_type"
                    fieldId="degree_type"
                    onValueChange={onValueChange}
                    question="What is your highest level of education?"
                    listOptions={education_lvl}
                />
                <EitherOr
                    fieldId="PL_PC"
                    key="PL_PC"
                    activeAns={this.state.PL_PC || ""}
                    onValueChange={onValueChange}
                    question="Are you Pro Life or Pro Choice?"
                    btn1="Pro Life"
                    btn2="Pro Choice"
                />
                <Dropdown
                    key="religion"
                    fieldId="religion"
                    onValueChange={onValueChange}
                    question="What is your religion?"
                    listOptions={religions}
                />
                <Dropdown
                    key="ethnicity"
                    fieldId="ethnicity"
                    onValueChange={onValueChange}
                    question="What is your ethnicity?"
                    listOptions={ethnicity}
                />
                <RadioBtn
                    key="embryos_ct"
                    fieldId="embryos_ct"
                    onValueChange={onValueChange}
                    question="How many embryos will you allow the intended parents to implant?"
                    listOptions={embr_ct}
                />
                <Dropdown
                    key="relationshipStatus"
                    fieldId="relationshipStatus"
                    onValueChange={onValueChange}
                    question="What is your relationship status?"
                    listOptions={relationshipStatus}
                />
                <EitherOr
                    fieldId="location"
                    key="location"
                    activeAns={this.state.location || ""}
                    onValueChange={onValueChange}
                    question="Do you have a support system that lives within 30 miles?"
                    btn1="Yes"
                    btn2="No"
                />
                <EitherOr
                    fieldId="birth_cntr"
                    key="birth_cntr"
                    activeAns={this.state.birth_cntr || ""}
                    onValueChange={onValueChange}
                    question="Are you willing to give birth at a birthing center?"
                    btn1="Yes"
                    btn2="No"
                />
                <EitherOr
                    fieldId="hosp_birth"
                    key="hosp_birth"
                    activeAns={this.state.hosp_birth || ""}
                    onValueChange={onValueChange}
                    question="Are you willing to give birth at a hospital?"
                    btn1="Yes"
                    btn2="No"
                />
                <EitherOr
                    fieldId="previous_gc"
                    key="previous_gc"
                    activeAns={this.state.previous_gc || ""}
                    onValueChange={onValueChange}
                    question="Do you have prior expeirence as a gestational carrier?"
                    btn1="Yes"
                    btn2="No"
                />
                <RadioBtn
                    key="desiredCompensation"
                    fieldId="desiredCompensation"
                    onValueChange={onValueChange}
                    question="What is your desired compensation?"
                    listOptions={desiredCompensation}
                />
                <EitherOr
                    fieldId="insurance"
                    key="insurance"
                    activeAns={this.state.insurance || ""}
                    onValueChange={onValueChange}
                    question="Are you currently insured?"
                    btn1="Yes"
                    btn2="No"
                />
                <EitherOr
                    fieldId="haveChildren"
                    key="haveChildren"
                    activeAns={this.state.haveChildren || ""}
                    onValueChange={onValueChange}
                    question="Do you have any children of your own, or are you responsible for any minors under the age of 18 years old (this includes split custody)?"
                    btn1="Yes"
                    btn2="No"
                />
                <EitherOr
                    fieldId="havePets"
                    key="havePets"
                    activeAns={this.state.havePets || ""}
                    onValueChange={onValueChange}
                    question="Do you have any pets of your own, or are you responsible for anyone elses pets?"
                    btn1="Yes"
                    btn2="No"
                />
                <SubmitBtn onCancel={onCancel} onSubmit={onFormSubmit} />
            </div>
        );
    }
}


export default GCSurvey;
