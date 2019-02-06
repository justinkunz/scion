import React from 'react';


class Compare extends React.Component {

    constructor(props) {

        super(props);
    
        // This will hold all specific user answers
        this.state = {
          // // When connected values
          // userSurvey: models.users.survey,
          // userSurveyType: models.users.user_type

          // GC Tester
          userSurvey: {
            PL_PC: "Pro Life",
            birthCenter: "Yes",
            degree_type: "High School Diploma",
            desiredCompensation: "< $20,000",
            embryos_ct: "1-3",
            ethnicity: "Middle Eastern",
            haveChildren: "Yes",
            havePets: "Yes",
            hosp_birth: "Yes",
            insurance: "Yes",
            location: "Yes",
            previous_gc: "Yes",
            relationshipStatus: "Married",
            religion: "Christian"
          }, 
          userSurveyType: "GC" 

          // IP tester
          // userSurvey: {
          //   PL_PC: "Pro Life",  
          //   birthCenter: "Yes", 
          //   cyro_presrv_ind: "Yes",
          //   degree_type: "High School Diploma",
          //   donor_req: "Yes",
          //   embryos_count: "1-3",
          //   fert_treat: "Yes",
          //   fertility_frequency: "not yet",
          //   hosp_birth: "Yes",
          //   implant_timeline: "Within the next 3 months",
          //   married_ind: "Yes",
          //   relationship_ind: "Yes"
          // },
          // userSurveyType: "IP" 
          


        };
    
        // This will hold the db info for all users GC answers
        this.GCsurveyValues = {
          PL_PC: "Pro Life",
          birthCenter: "Yes",
          degree_type: "High School Diploma",
          desiredCompensation: "< $20,000",
          embryos_ct: "1-3",
          ethnicity: "Middle Eastern",
          haveChildren: "Yes",
          havePets: "Yes",
          hosp_birth: "Yes",
          insurance: "Yes",
          location: "Yes",
          previous_gc: "Yes",
          relationshipStatus: "Married",
          religion: "Christian"
        }
    
        // This will hold the db info for all users IP answers
        this.IPsurveyValues= {
          PL_PC: "Pro Life",  
          birthCenter: "Yes", 
          cyro_presrv_ind: "Yes",
          degree_type: "High School Diploma",
          donor_req: "Yes",
          embryos_count: "1-3",
          fert_treat: "Yes",
          fertility_frequency: "not yet",
          hosp_birth: "Yes",
          implant_timeline: "Within the next 3 months",
          married_ind: "Yes",
          relationship_ind: "Yes"
        }
    
        this.matchMath = {
          PL_PC: 0,  
          birthCenter: 0, 
          embryos_count: 0,
          hosp_birth: 0,
          relationship_ind: 0
        }
    
        this.isMatch = false;
    
      } // End constructor
    
      render() {
    
        const compareAnswers = () => {

          if(this.state.userSurveyType === "GC"){

            // Pro life
            if(this.state.userSurvey.PL_PC === this.IPsurveyValues.PL_PC) {
              this.matchMath.PL_PC = 0;
            }else {
              this.matchMath.PL_PC = 5;
            }

            // Birth Center
            if(this.state.userSurvey.birthCenter === this.IPsurveyValues.birthCenter) {
              this.matchMath.birthCenter = 0;
            }else {
              this.matchMath.birthCenter = 5;
            }

            // Embro Count
            if(this.state.userSurvey.embryos_ct === this.IPsurveyValues.embryos_count) {
              this.matchMath.embryos_count = 0;
            }else {
              this.matchMath.embryos_count = 5;
            }

            // Hospital
            if(this.state.userSurvey.hosp_birth === this.IPsurveyValues.hosp_birth) {
              this.matchMath.hosp_birth = 0;
            }else {
              this.matchMath.hosp_birth = 5;
            }

            // Relationship
            if(this.state.userSurvey.relationshipStatus === this.IPsurveyValues.relationship_ind) {
              this.matchMath.relationship_ind = 0;
            }else {
              this.matchMath.relationship_ind = 5;
            }

            console.log("GC Match Match: ", this.matchMath);



          } //End if GC
          

          //////////////////////////////////////////////////

          if(this.state.userSurveyType === "IP"){

            // Pro life
            if(this.state.userSurvey.PL_PC === this.GCsurveyValues.PL_PC) {
              this.matchMath.PL_PC = 0;
            }else {
              this.matchMath.PL_PC = 5;
            }

            // Birth Center
            if(this.state.userSurvey.birthCenter === this.GCsurveyValues.birthCenter) {
              this.matchMath.birthCenter = 0;
            }else {
              this.matchMath.birthCenter = 5;
            }

            // Embro Count
            if(this.state.userSurvey.embryos_count === this.GCsurveyValues.embryos_ct) {
              this.matchMath.embryos_count = 0;
            }else {
              this.matchMath.embryos_count = 5;
            }

            // Hospital
            if(this.state.userSurvey.hosp_birth === this.GCsurveyValues.hosp_birth) {
              this.matchMath.hosp_birth = 0;
            }else {
              this.matchMath.hosp_birth = 5;
            }

            // Relationship
            if(this.state.userSurvey.relationship_ind === this.GCsurveyValues.relationshipStatus) {
              this.matchMath.relationship_ind = 0;
            }else {
              this.matchMath.relationship_ind = 5;
            }

            console.log("IP Match Match: ", this.matchMath);



          } //End if IP
          
                
        }

        return(
          <button onClick={() => compareAnswers()}>Test</button>
        );
    
      } //End compare Answers

      

}

export default Compare;