import React from "react";
import Navbar from "../../misc/Navbar";

import { Dropdown, EitherOr, RadioBtn, Slide, SubmitBtn } from "../../form";

class IPSurvey extends React.Component {
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

    // ------------------------------------------------------------
    // PL_PC: "Pro Life"
    // birthCenter: "Yes"
    // cyro_presrv_ind: "Yes"
    // degree_type: "Associates Degree"
    // donor_req: "No"
    // embryos_ct: "4-6"
    // fert_treat: "Yes"
    // fertility_frequency: "not yet"
    // hosp_birth: "Yes"
    // implant_timeline: "Within the next 3 months"
    // married_ind: "Yes"
    // relationship_ind: "No"
    // religion: "Jewish"
    // ------------------------------------------------------------

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
    const fertility_frequency = [
      "not yet",
      "1-3 months",
      "4-6 months",
      "7-10 months",
      ">10 months"
    ];
    const how_soon = [
      "Within the next 3 months",
      "In 3-6 months",
      "In 6-12 months",
      "In 1-2 years",
      "2+ years from now"
    ];

    return (
      <div>
        <Navbar activePage="Intended Parents" />
        <Dropdown
          key="degree_type"
          fieldId="degree_type"
          onValueChange={onValueChange}
          question="What is the highest level of education you would prefer your gestational carrier to have?"
          listOptions={education_lvl}
        />
        <EitherOr
          fieldId="PL_PC"
          key="PL_PC"
          activeAns={this.state.PL_PC || ""}
          onValueChange={onValueChange}
          question="Would you prefer your gestational carrier to be pro-life or pro-choice?"
          btn1="Pro Life"
          btn2="Pro Choice"
        />
        <Dropdown
          key="religion"
          fieldId="religion"
          onValueChange={onValueChange}
          question="Do you have a preference on your gestational carrier's religious preference?"
          listOptions={religions}
        />
        <RadioBtn
          key="embryos_ct"
          fieldId="embryos_ct"
          onValueChange={onValueChange}
          question="How many embryos would you like to implant?"
          listOptions={embr_ct}
        />
        <EitherOr
          fieldId="married_ind"
          key="married_ind"
          activeAns={this.state.married_ind || ""}
          onValueChange={onValueChange}
          question="Are you married and/or common law married?"
          btn1="Yes"
          btn2="No"
        />
        <EitherOr
          fieldId="relationship_ind"
          key="relationship_ind"
          activeAns={this.state.relationship_ind || ""}
          onValueChange={onValueChange}
          question="Are you currently in a commited relationship?"
          btn1="Yes"
          btn2="No"
        />
        <EitherOr
          fieldId="birthCenter"
          key="birthCenter"
          activeAns={this.state.birthCenter || ""}
          onValueChange={onValueChange}
          question="Are you willing to allow your gestational carrier to give birth at a birthing center?"
          btn1="Yes"
          btn2="No"
        />
        <EitherOr
          fieldId="hosp_birth"
          key="hosp_birth"
          activeAns={this.state.hosp_birth || ""}
          onValueChange={onValueChange}
          question="Do you prefer to have your gestational carrier give birth at a hospital?"
          btn1="Yes"
          btn2="No"
        />
        <EitherOr
          fieldId="fert_treat"
          key="fert_treat"
          activeAns={this.state.fert_treat || ""}
          onValueChange={onValueChange}
          question="Have you ever received any kind of fertility treatment?"
          btn1="Yes"
          btn2="No"
        />
        <RadioBtn
          key="fertility_frequency"
          fieldId="fertility_frequency"
          onValueChange={onValueChange}
          question="If so, how long ago did you recieve this treatment?"
          listOptions={fertility_frequency}
        />
        <EitherOr
          fieldId="cyro_presrv_ind"
          key="cyro_presrv_ind"
          activeAns={this.state.cyro_presrv_ind || ""}
          onValueChange={onValueChange}
          question="Do you have any specimens and/or eggs and/or embryos currently cryo-preserved?"
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
          question="Do you require an embryo donor?"
          btn1="Yes"
          btn2="No"
        />
        <SubmitBtn onCancel={onCancel} onSubmit={onFormSubmit} />
      </div>
    );
  }
}

export default IPSurvey;
