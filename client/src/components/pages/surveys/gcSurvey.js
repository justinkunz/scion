import React from "react";
import Navbar from "../../misc/Navbar";
import converter from "./Compare/compareLogic";
import {Redirect} from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';

import {
  Dropdown,
  EitherOr,
  RadioBtn,
  SubmitBtn,
} from "../../form";

class GCSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signedIn: true, redirect: false, show: false };
  }

  render() {


    //value change handler
    const onValueChange = (fieldId, val) => {
      this.setState({ [fieldId]: val });
    };

    //on cancel btn click
    const onCancel = () => {
      alert("Form cancelled");
    };

    //on survey submission
    const handleSubmission = () => {
      
      //data validation
      if(!this.state.PL_PC || 
        !this.state.religion  || 
        !this.state.embryos_count  || 
        !this.state.birthCenter || 
        !this.state.hospital || 
        !this.state.implant_timeline || 
        !this.state.location || 
        !this.state.haveChildren  || 
        !this.state.previous_gc  || 
        !this.state.relationshipStatus || 
        !this.state.desiredCompensation || 
        !this.state.insurance ){

        //if failed show alert
        this.setState({title: "Error", text: "Please fill out all fields before submitting your survey", show: true})
        return
        }

      converter(this.state)
      this.setState({redirect: true})
      
    }



    if(this.state.redirect){
      return <Redirect to="/results" />
    }

    const education_lvl = [
      "Please Select",
      "N/A",
      "High School Diploma",
      "Some College",
      "Associates Degree",
      "Bachelors Degree",
      "Masters Degree",
      "PhD"
    ];
    const religions = [
      "Please Select",
      "Not Religous/Agnostic/Atheist",
      "Christian",
      "Jewish",
      "Buddist",
      "Islamic"
    ];
    const embr_ct = ["1-3", "4-6", "7-10", ">10"];
    const relationshipStatus = ["Please Select", "Single", "Married", "Commmon Law Married"];
    const desiredCompensation = [
      "< $20,000",
      "$21,000 - 49,000",
      "$50,000 - 75,000",
      "$75,000 - $100,000",
      "> $100,000"
    ];
    const how_soon = [
      "0-3 months",
      "3-6 months",
      "6-12 months",
      "1-2 years",
      "2+ years from now"
    ];

    return (
      <div>
        <Navbar activePage="Preference Survey" signedIn={this.state.signedIn} />
        <br />
        <br />
        {/* Question 1 */}
        <Dropdown
          key="degree_type"
          fieldId="degree_type"
          onValueChange={onValueChange}
          question="What is your highest level of education?"
          listOptions={education_lvl}
        />
        {/* Question 2 */}
        <EitherOr
          fieldId="PL_PC"
          key="PL_PC"
          activeAns={this.state.PL_PC || ""}
          onValueChange={onValueChange}
          question="Are you pro-Life or pro-Choice?"
          btn1="Pro-Life"
          btn2="Pro-Choice"
        />
        {/* Questions 3 */}
        <Dropdown
          key="religion"
          fieldId="religion"
          onValueChange={onValueChange}
          question="What religion do you practice?"
          listOptions={religions}
        />
        {/* Question 4 */}
        <RadioBtn
          key="embryos_count"
          fieldId="embryos_count"
          onValueChange={onValueChange}
          question="How many embryos will you allow the intended parents to implant?"
          listOptions={embr_ct}
        />
        {/* Question 5 */}
        <EitherOr
          fieldId="birthCenter"
          key="birthCenter"
          activeAns={this.state.birthCenter || ""}
          onValueChange={onValueChange}
          question="Are you willing to give birth at a birthing center?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 6 */}
        <EitherOr
          fieldId="hospital"
          key="hospital"
          activeAns={this.state.hospital || ""}
          onValueChange={onValueChange}
          question="Are you willing to give birth at a hospital?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 7 */}
        <RadioBtn
          key="implant_timeline"
          fieldId="implant_timeline"
          onValueChange={onValueChange}
          question="How soon would you be ready to recieve an embryo for implantation?"
          listOptions={how_soon}
        />
        {/* Question 8 */}
        <EitherOr
          fieldId="location"
          key="location"
          activeAns={this.state.location || ""}
          onValueChange={onValueChange}
          question="Do you have a support system that lives within 30 miles?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 9 */}
        <EitherOr
          fieldId="haveChildren"
          key="haveChildren"
          activeAns={this.state.haveChildren || ""}
          onValueChange={onValueChange}
          question="Are you the legal parent or guardian of a person(s) under the age of 18 years old?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 10 */}
        <EitherOr
          fieldId="previous_gc"
          key="previous_gc"
          activeAns={this.state.previous_gc || ""}
          onValueChange={onValueChange}
          question="Do you have prior expeirence as a gestational carrier?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 11 */}
        <Dropdown
          key="relationshipStatus"
          fieldId="relationshipStatus"
          onValueChange={onValueChange}
          question="What is your relationship status?"
          listOptions={relationshipStatus}
        />
        {/* Question 12 */}
        <RadioBtn
          key="desiredCompensation"
          fieldId="desiredCompensation"
          onValueChange={onValueChange}
          question="What is your desired compensation?"
          listOptions={desiredCompensation}
        />
        {/* Question 13 */}
        <EitherOr
          fieldId="insurance"
          key="insurance"
          activeAns={this.state.insurance || ""}
          onValueChange={onValueChange}
          question="Are you currently insured?"
          btn1="Yes"
          btn2="No"
        />
        <SubmitBtn onCancel={onCancel} onSubmit={() => handleSubmission()} />
        <SweetAlert
          show={this.state.show}
          title={this.state.title}
          onConfirm={() => this.setState({ show: false })}
        >
          <div >
          {this.state.text}
          </div>
        </SweetAlert>
      </div>
    );
  }
}

export default GCSurvey;
