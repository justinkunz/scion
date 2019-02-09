import React from 'react';

class Converter extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            user: {
                userSurvey: {
                    degree_type: "Associates Degree",
                    PL_PC: "Pro-Life",
                    religion: "Christian",
                    embryos_count: "7-10",
                    birthCenter: "No",
                    hospital: "Yes",
                    implant_timeline: "6-12 months",
                    location: "Yes",
                    haveChildren: "Yes",
                    previous_gc: "Yes",
                    relationshipStatus: "Married",
                    desiredCompensation: "$50,000 - 75,000",
                    insurance: "No",
                  }, 
                  userSurveyType: "GC"
            }, //End user

            

        } // End state

        this.matchMath = {
            degree_type: 0,
            PL_PC: 0,
            religion: 0,
            embryos_count: 0,
            birthCenter: 0,
            hospital: 0,
            implant_timeline: 0,
            location: 0,
            haveChildren: 0,
            previous_gc: 0,
            relationshipStatus: 0,
            desiredCompensation: 0,
            insurance: 0
        }

        

    } // End constructor

    render() {

        const converter = () => {

            // Degree 
            if (this.state.user.userSurvey.degree_type === "N/A") {
                this.matchMath.degree_type = 0;
            }
            if (this.state.user.userSurvey.degree_type === "High School Diploma") {
                this.matchMath.degree_type = 1
            }
            if (this.state.user.userSurvey.degree_type === "Some College") {
                this.matchMath.degree_type = 2;
            }
            if (this.state.user.userSurvey.degree_type === "Associates Degree") {
                this.matchMath.degree_type = 3;
            }
            if (this.state.user.userSurvey.degree_type === "Bachelors Degree") {
                this.matchMath.degree_type = 4;
            }
            if (this.state.user.userSurvey.degree_type === "Masters Degree") {
                this.matchMath.degree_type = 4;
            }
            if (this.state.user.userSurvey.degree_type === "PhD") {
                this.matchMath.degree_type = 5;
            }
            // End degree ifs

            // Pro life  **Important boolean keep 0 or 5**
            if(this.state.user.userSurvey.PL_PC === "Yes") {
                this.matchMath.PL_PC = 0;
            }else {
                this.matchMath.PL_PC = 5;
            }
            // End pro life if

            // Religon  
            if (this.state.user.userSurvey.religion === "Not Religous/Agnostic/Atheist") {
                    this.matchMath.religion = 0;
            }
            if (this.state.user.userSurvey.religion === "Christian") {
                this.matchMath.degree_type = 1;
            }
            if (this.state.user.userSurvey.degree_type === "Jewish") {
                this.matchMath.degree_type = 2;
            }
            if (this.state.user.userSurvey.degree_type === "Buddist") {
                this.matchMath.degree_type = 3;
            }
            if (this.state.user.userSurvey.degree_type === "Islamic") {
                this.matchMath.degree_type = 4;
            }
            // End religon ifs

            // Embro Count 
            if(this.state.user.userSurvey.embryos_count === "1-3") {
                this.matchMath.embryos_count = 0;
            }
            if(this.state.user.userSurvey.embryos_count === "4-6") {
                this.matchMath.embryos_count = 1;
            }
            if(this.state.user.userSurvey.embryos_count === "7-10") {
                this.matchMath.embryos_count = 2;
            }
            if(this.state.user.userSurvey.embryos_count === ">10") {
                this.matchMath.embryos_count = 3;
            }
            // End embroyo ifs

            // Birth Center 
            if(this.state.user.userSurvey.birthCenter === "Yes") {
                this.matchMath.birthCenter = 0;
            }else {
                this.matchMath.birthCenter = 5;
            }
            // End Pro life if

            // Hospital  
            if(this.state.user.userSurvey.hospital === "Yes") {
                this.matchMath.hospital = 0;
            }else {
                this.matchMath.hospital = 5;
            }
            // End hospital if

            // Timeline **Needs work needs same type of flex that degree_type has
            if(this.state.user.userSurvey.implant_timeline === "0-3 months") {
                this.matchMath.implant_timeline = 0;
            }
            if(this.state.user.userSurvey.implant_timeline === "3-6 months") {
                this.matchMath.implant_timeline = 1;
            }
            if(this.state.user.userSurvey.implant_timeline === "6-12 months") {
                this.matchMath.implant_timeline = 2;
            }
            if(this.state.user.userSurvey.implant_timeline === "1-2 years") {
                this.matchMath.implant_timeline = 3;
            }
            if(this.state.user.userSurvey.implant_timeline === "2+ years from now") {
                this.matchMath.implant_timeline = 4;
            }
            // End timeline ifs

            // Location
            if(this.state.user.userSurvey.location === "Yes") {
                this.matchMath.location = 0;
            }else {
                this.matchMath.location = 5;
            }
            // End location if

            // Children
            if(this.state.user.userSurvey.location === "Yes") {
                this.matchMath.location = 0;
            }else {
                this.matchMath.location = 5;
            }
            // End children if

            // Previous GC
            if(this.state.user.userSurvey.previous_gc=== "Yes") {
                this.matchMath.previous_gc = 0;
            }else {
                this.matchMath.previous_gc = 5;
            }
            // End previous gc if

            // Relationship
            if(this.state.user.userSurvey.relationshipStatus === "Single") {
                this.matchMath.relationshipStatus = 0;
            }
            if(this.state.user.userSurvey.relationshipStatus === "Married") {
                this.matchMath.relationshipStatus = 1;
            }
            if(this.state.user.userSurvey.relationshipStatus === "Commmon Law Married") {
                this.matchMath.relationshipStatus = 2;
            }
            // End relationship ifs

            // Compensation
            if(this.state.user.userSurvey.desiredCompensation === "< $20,000") {
                this.matchMath.desiredCompensation = 0;
            }
            if(this.state.user.userSurvey.desiredCompensation === "$21,000 - 49,000") {
                this.matchMath.desiredCompensation = 1;
            }
            if(this.state.user.userSurvey.desiredCompensation === "$50,000 - 75,000") {
                this.matchMath.desiredCompensation = 2;
            }
            if(this.state.user.userSurvey.desiredCompensation === "$75,000 - $100,000") {
                this.matchMath.desiredCompensation = 3;
            }
            if(this.state.user.userSurvey.desiredCompensation === "> $100,000") {
                this.matchMath.desiredCompensation = 4;
            }
            // End compensation ifs

            // Insurance
            if(this.state.user.userSurvey.insurance=== "Yes") {
                this.matchMath.previous_gc = 0;
            }else {
                this.matchMath.previous_gc = 5;
            }
            // End insurance ifs

            console.log("Match Match: ", this.matchMath);

        } // End converter


        return(
            <button onClick={() => converter()}>Test</button>
          );

    } // End render


} // End Converter

export default Converter;

// zipCodes = []
//     for(i=0; i<results.length;i++){
//         zipCodes.push(results[i].zipCode)
//     }