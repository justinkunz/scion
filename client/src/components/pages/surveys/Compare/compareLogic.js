import axios from 'axios';

 const converter = (surveyAnswer) => {
   let matchMath = {}

    // Degree 
    if (surveyAnswer.degree_type === "GED") {
        matchMath.degree_type = 0;
    }
    if (surveyAnswer.degree_type === "High School Diploma") {
        matchMath.degree_type = 1
    }
    if (surveyAnswer.degree_type === "Some College") {
        matchMath.degree_type = 2;
    }
    if (surveyAnswer.degree_type === "Associates Degree") {
        matchMath.degree_type = 3;
    }
    if (surveyAnswer.degree_type === "Bachelors Degree") {
        matchMath.degree_type = 4;
    }
    if (surveyAnswer.degree_type === "Masters Degree") {
        matchMath.degree_type = 4;
    }
    if (surveyAnswer.degree_type === "PhD") {
        matchMath.degree_type = 5;
    }
    // End degree ifs

    // Pro life  **Important boolean keep 0 or 5**
    if(surveyAnswer.PL_PC === "Pro Life") {
        matchMath.PL_PC = 0;
    } else {
        matchMath.PL_PC = 5;
    }
    // End pro life if

    // Religon  
    if (surveyAnswer.religion === "Not Religous/Agnostic/Atheist") {
            matchMath.religion = 0;
    }
    if (surveyAnswer.religion === "Christian") {
        matchMath.religion = 1;
    }
    if (surveyAnswer.religion === "Jewish") {
        matchMath.religion = 2;
    }
    if (surveyAnswer.religion === "Buddist") {
        matchMath.religion = 3;
    }
    if (surveyAnswer.religion === "Islamic") {
        matchMath.religion = 4;
    }
    // End religon ifs

    // Embro Count 
    if(surveyAnswer.embryos_count === "1-3") {
        matchMath.embryos_count = 0;
    }
    if(surveyAnswer.embryos_count === "4-6") {
        matchMath.embryos_count = 1;
    }
    if(surveyAnswer.embryos_count === "7-10") {
        matchMath.embryos_count = 2;
    }
    if(surveyAnswer.embryos_count === ">10") {
        matchMath.embryos_count = 3;
    }
    // End embroyo ifs

    // Birth Center 
    if(surveyAnswer.birthCenter === "Yes") {
        matchMath.birthCenter = 0;
    }else {
        matchMath.birthCenter = 5;
    }
    // End Pro life if

    // Hospital  
    if(surveyAnswer.hospital === "Yes") {
        matchMath.hospital = 0;
    }else {
        matchMath.hospital = 5;
    }
    // End hospital if

    // Timeline **Needs work needs same type of flex that degree_type has
    if(surveyAnswer.implant_timeline === "0-3 months") {
        matchMath.implant_timeline = 0;
    }
    if(surveyAnswer.implant_timeline === "3-6 months") {
        matchMath.implant_timeline = 1;
    }
    if(surveyAnswer.implant_timeline === "6-12 months") {
        matchMath.implant_timeline = 2;
    }
    if(surveyAnswer.implant_timeline === "1-2 years") {
        matchMath.implant_timeline = 3;
    }
    if(surveyAnswer.implant_timeline === "2+ years from now") {
        matchMath.implant_timeline = 4;
    }
    // End timeline ifs

    // Location
    if(surveyAnswer.location === "Yes") {
        matchMath.location = 0;
    }else {
        matchMath.location = 5;
    }
    // End location if

    // Children
    if(surveyAnswer.haveChildren === "Yes") {
        matchMath.haveChildren = 0;
    }else {
        matchMath.haveChildren = 5;
    }
    // End children if

    // Previous GC
    if(surveyAnswer.previous_gc=== "Yes") {
        matchMath.previous_gc = 0;
    }else {
        matchMath.previous_gc = 5;
    }
    // End previous gc if

    // Relationship
    if(surveyAnswer.relationshipStatus === "Single") {
        matchMath.relationshipStatus = 0;
    }
    if(surveyAnswer.relationshipStatus === "Married") {
        matchMath.relationshipStatus = 1;
    }
    if(surveyAnswer.relationshipStatus === "Commmon Law Married") {
        matchMath.relationshipStatus = 2;
    }
    // End relationship ifs

    // Compensation
    if(surveyAnswer.desiredCompensation === "< $20,000") {
        matchMath.desiredCompensation = 0;
    }
    if(surveyAnswer.desiredCompensation === "$21,000 - 49,000") {
        matchMath.desiredCompensation = 1;
    }
    if(surveyAnswer.desiredCompensation === "$50,000 - 75,000") {
        matchMath.desiredCompensation = 2;
    }
    if(surveyAnswer.desiredCompensation === "$75,000 - $100,000") {
        matchMath.desiredCompensation = 3;
    }
    if(surveyAnswer.desiredCompensation === "> $100,000") {
        matchMath.desiredCompensation = 4;
    }
    // End compensation ifs

    // Insurance
    if(surveyAnswer.insurance=== "Yes") {
        matchMath.insurance = 0;
    }else {
        matchMath.insurance = 5;
    }
    // End insurance ifs
    console.log("RESULTS TO PUSH TO API")
    console.log("Match Match: ", matchMath);
    console.log(surveyAnswer)

   const results = {
      numerical: matchMath,
      text: surveyAnswer,
      token: localStorage.getItem("token")
    }
    axios.post("/api/post/survey", results)
} // End converter

export default converter;