import React from "react";
import Navbar from "../../misc/Navbar";

import { Dropdown, EitherOr, RadioBtn, Slide, SubmitBtn } from "../../form";

class IPSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signedIn: true };
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

    // ------------------------------------------------------------
    // 1. What is the highest level of education you prefer your gestational carrier to have?
    // 2. Do you prefer your gestational carrier to be pro-life or pro choice?
    // 3. Do you have a preference to your gestational carriers religious preference?
    // 4. How many embryos would you like to implant?
    // 5. Would you allow your GC to give birth at a birthing center?
    // 6. Would you allow your GC to give birth at a hospital?
    // 7. How soon would you like to implant?
    // 8. Do you prefer your GC to have a support system within 30 miles of their address?
    // 9. Do you feel comfortable with a GC that is currently the parent or guardian of a child?
    // 10. Do you prefer your GC to have previous experience as a GC?
    // 11. Do you have a preference of your GC’s current relationship status?
    // 12. What amount are you willing to compensate the GC for their services?
    // 13. Do you require your GC to have insurance?
    // ------------------------------------------------------------

    const education_lvl = [
      "GED",
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
    const embryos_count = ["1-3", "4-6", "7-10", ">10"];
    const relationshipStatus = [
      "n/a",
      "Single",
      "Married",
      "Commmon Law Married"
    ];
    const how_soon = [
      "0-3 months",
      "3-6 months",
      "6-12 months",
      "1-2 years",
      "2+ years from now"
    ];
    const desiredCompensation = [
      "< $20,000",
      "$21,000 - 49,000",
      "$50,000 - 75,000",
      "$75,000 - $100,000",
      "$100,000 <"
    ];

    return (
      <div>
        <Navbar activePage="Intended Parents" />
        <Navbar activePage="Preference Survey" signedIn={this.state.signedIn} />
        {/* Question 1 */}
        <Dropdown
          key="degree_type"
          fieldId="degree_type"
          onValueChange={onValueChange}
          question="What is the highest level of education you would prefer your gestational carrier to have?"
          listOptions={education_lvl}
        />
        {/* Question 2 */}
        <EitherOr
          fieldId="PL_PC"
          key="PL_PC"
          activeAns={this.state.PL_PC || ""}
          onValueChange={onValueChange}
          question="Would you prefer your gestational carrier to be pro-life or pro-choice?"
          btn1="Pro-Life"
          btn2="Pro-Choice"
        />
        {/* Question 3 */}
        <Dropdown
          key="religion"
          fieldId="religion"
          onValueChange={onValueChange}
          question="Do you have a preference on your gestational carrier's religious preference?"
          listOptions={religions}
        />
        {/* Question 4 */}
        <RadioBtn
          key="embryos_count"
          fieldId="embryos_count"
          onValueChange={onValueChange}
          question="How many embryos would you like to implant?"
          listOptions={embryos_count}
        />
        {/* Question 5 */}
        <EitherOr
          fieldId="birthCenter"
          key="birthCenter"
          activeAns={this.state.birthCenter || ""}
          onValueChange={onValueChange}
          question="Are you willing to allow your gestational carrier to give birth at a birthing center?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 6 */}
        <EitherOr
          fieldId="hospital"
          key="hospital"
          activeAns={this.state.hosp_birth || ""}
          onValueChange={onValueChange}
          question="Do you prefer to have your gestational carrier give birth at a hospital?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 7 */}
        <RadioBtn
          key="implant_timeline"
          fieldId="implant_timeline"
          onValueChange={onValueChange}
          question="How soon do you want to implant?"
          listOptions={how_soon}
        />
        {/* Question 8 */}
        <EitherOr
          fieldId="location"
          key="location"
          activeAns={this.state.location || ""}
          onValueChange={onValueChange}
          question="Do you prefer your GC to have a support system that lives within 30 miles?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 9 */}
        <EitherOr
          fieldId="haveChildren"
          key="haveChildren"
          activeAns={this.state.haveChildren || ""}
          onValueChange={onValueChange}
          question="Do you feel comfertable with a GC that is the legal parent/ guardian of a person(s) under the age of 18 years old?"
          btn1="Yes"
          btn2="No"
        />
        {/* Question 10 */}
        <EitherOr
          fieldId="previous_gc"
          key="previous_gc"
          activeAns={this.state.previous_gc || ""}
          onValueChange={onValueChange}
          question="do you prefer your GC to have prior expeirence as a gestational carrier?"
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
          question="Would you require your GC to have insurance prior to implantation?"
          btn1="Yes"
          btn2="No"
        />
        <SubmitBtn onCancel={onCancel} onSubmit={onFormSubmit} />
      </div>
    );
  }
}

export default IPSurvey;
