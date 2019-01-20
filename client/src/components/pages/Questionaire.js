import React from 'react';
import { Dropdown, EitherOr, RadioBtn, ToggleBtn, Slide } from '../form';

class Questionaire extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: "red", sliderValue: 5 }
    }

    render() {
        //setting for toggle
        const settings = {
            start: 5,
            min: 0,
            max: 10,
            step: 1,
            onChange: (value) => {
                this.setState({
                    sliderValue: value
                })
                if (value > 6) {
                    this.setState({
                        color: "green"
                    })
                }
                else if (value < 4) {
                    this.setState({
                        color: "red"
                    })
                }
                else {
                    this.setState({
                        color: "orange"
                    })
                }
            }
        }
        return (
            <div>
                <ToggleBtn toggleLeft="Left Toggle Choice" toggleRight="Right Toggle Choice" />
                <EitherOr question="Which do you prefer" btn1="HTML" btn2="CSS" />
                <RadioBtn question="Radio Button" answer1="first answer" answer2="second answer" answer3="third answer" answer4="forth answer" />
                <Dropdown />
                <Slide settings={settings} question="Test Slider Question" color={this.state.color} />
            </div>
        )
    };
};

export default Questionaire;