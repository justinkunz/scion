import React from 'react';
import { Dropdown, EitherOr, RadioBtn, ToggleBtn, Slide, SubmitBtn } from '../../form';

class Questionaire extends React.Component {
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
        const dropdownListOpts = ["A", "B", "C", "D"]

        return (
            <div>
                <EitherOr
                    fieldId="HTMLORCSS"
                    key="HTMLORCSS"
                    activeAns={this.state.HTMLORCSS || ""}
                    onValueChange={onValueChange}

                    question="Which do you prefer?"
                    btn1="HTML"
                    btn2="CSS"
                />

                <RadioBtn
                    key="dayQ"
                    fieldId="dayQ"
                    onValueChange={onValueChange}

                    question="How is your day?"
                    listOptions={["Good", "Okay", "Bad"]}
                />

                <Dropdown
                    key="Fav_letter"
                    fieldId="Fav_letter"
                    onValueChange={onValueChange}

                    question="Whats your favorite letter?"
                    listOptions={dropdownListOpts} />

                <Slide
                    key="sliderQ"
                    fieldId="sliderQ"
                    settings={settings}
                    onValueChange={onValueChange}
                    color="blue"

                    question="How much do you enjoy this slider?"
                />

                <SubmitBtn onCancel={onCancel} onSubmit={onFormSubmit} />
            </div >
        )
    };
};


export default Questionaire;