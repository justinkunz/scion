import React from 'react';
import { Dropdown, EitherOr, RadioBtn, ToggleBtn, Slide, SubmitBtn } from '../../form';

class IP_Quest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        //setting for slider
        const settings = {
            start: 5,
            min: 0,
            max: 10,
            step: 1,

        };

        //value change handler
        const onValueChange = (fieldId, val) => {
            this.setState({ [fieldId]: val })
        }

        //on cancel btn click
        const onCancel = () => {
            alert("Form cancelled")
        };

        //on submit btn click
        const onFormSubmit = () => {
            alert("DEV ALERT - Current application state has been logged in the console")
            console.log("We will push this to an API once the questions are set up")
            console.log(this.state)
        }

        //sample dropdown list array
        const education_lvl = ["N/A", "High School Diploma / GED", "Some College", "Associates Degree", "Bachelors Degree", "Masters Degree", "PhD"]
        const religions = ["Not Religous/Agnostic/Atheist", "Christian", "Jewish"]
        const embr_ct = ["1-3", "4-6", "7-10", ">10"]
        const how_soon = ["Within the next 3 months", "In 3-6 months", "In 6-12 months", "In 1-2 years", "2+ years from now"]

        return (
            <div>
                <Dropdown
                    key="degree_type"
                    fieldId="degree_type"
                    onValueChange={onValueChange}

                    question="What is your highest level of education?"
                    listOptions={education_lvl}
                />

                <Slide
                    key="health_lvl"
                    fieldId="health_lvl"
                    settings={settings}
                    onValueChange={onValueChange}
                    color="blue"

                    question="Generally speaking, how healthy would you say you are?"
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
                    key="eth"
                    fieldId="enth"
                    onValueChange={onValueChange}

                    question="What ethnicity are you?"
                    listOptions={education_lvl}
                />

                <Dropdown
                    key="religion"
                    fieldId="religion"
                    onValueChange={onValueChange}

                    question="What is your religion?"
                    listOptions={religions}
                />

                <RadioBtn
                    key="embryos_ct"
                    fieldId="embryos_ct"
                    onValueChange={onValueChange}

                    question="How many embryos will you allow?"
                    listOptions={embr_ct}
                />

                <EitherOr
                    fieldId="married_ind"
                    key="married_ind"
                    activeAns={this.state.married_ind || ""}
                    onValueChange={onValueChange}

                    question="Are you Married?"
                    btn1="Yes"
                    btn2="No"
                />

                <Slide
                    key="birth_hosp"
                    fieldId="birth_hosp"
                    settings={settings}
                    onValueChange={onValueChange}
                    color="blue"

                    question="Would you rather give birth "
                />
                <EitherOr
                    fieldId="hosp_birth"
                    key="hosp_birth"
                    activeAns={this.state.hosp_birth || ""}
                    onValueChange={onValueChange}

                    question="Do you want your Surrogate or Gestational Carrier to give birth at a hospital?"
                    btn1="Yes"
                    btn2="No"
                />
                <EitherOr
                    fieldId="fert_treat"
                    key="fert_treat"
                    activeAns={this.state.fert_treat || ""}
                    onValueChange={onValueChange}

                    question="Have you received fertility treatment?"
                    btn1="Yes"
                    btn2="No"
                />

                <EitherOr
                    fieldId="cyro_presrv_ind"
                    key="cyro_presrv_ind"
                    activeAns={this.state.cyro_presrv_ind || ""}
                    onValueChange={onValueChange}

                    question="Do you have any specimens and/or eggs and/or embryos currently cryo preserved?"
                    btn1="Yes"
                    btn2="No"
                />
                <RadioBtn
                    key="implant_timeline"
                    fieldId="implant_timeline"
                    onValueChange={onValueChange}

                    question="How soon do you want to implant?"
                    listOptions={how_soon}
                />
                <EitherOr
                    fieldId="donor_req"
                    key="donor_req"
                    activeAns={this.state.donor_req || ""}
                    onValueChange={onValueChange}

                    question="Do you require a donor?"
                    btn1="Yes"
                    btn2="No"
                />
                <SubmitBtn onCancel={onCancel} onSubmit={onFormSubmit} />
            </div >
        )
    };
};

//Do you have any specimens and/or eggs  and/or embryos currently cryo preserved?
//If you have embryos, are at least some of them  PGS tested?
//Profession?
//Referral Source?
//How soon do you want to implant?
//Do you require a donor?
export default IP_Quest;