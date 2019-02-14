

        var converter = (userSurvey) => {

            this.matchMath = {}
            // Degree 
            if (userSurvey.degree_type === "N/A") {
                this.matchMath.degree_type = 0;
            }
            if (userSurvey.degree_type === "High School Diploma") {
                this.matchMath.degree_type = 1
            }
            if (userSurvey.degree_type === "Some College") {
                this.matchMath.degree_type = 2;
            }
            if (userSurvey.degree_type === "Associates Degree") {
                this.matchMath.degree_type = 3;
            }
            if (userSurvey.degree_type === "Bachelors Degree") {
                this.matchMath.degree_type = 4;
            }
            if (userSurvey.degree_type === "Masters Degree") {
                this.matchMath.degree_type = 4;
            }
            if (userSurvey.degree_type === "PhD") {
                this.matchMath.degree_type = 5;
            }
            // End degree ifs

            // Pro life  **Important boolean keep 0 or 5**
            if(userSurvey.PL_PC === "Yes") {
                this.matchMath.PL_PC = 0;
            }else {
                this.matchMath.PL_PC = 5;
            }
            // End pro life if

            // Religon  
            if (userSurvey.religion === "Not Religous/Agnostic/Atheist") {
                    this.matchMath.religion = 0;
            }
            if (userSurvey.religion === "Christian") {
                this.matchMath.religion = 1;
            }
            if (userSurvey.degree_type === "Jewish") {
                this.matchMath.religion = 2;
            }
            if (userSurvey.degree_type === "Buddist") {
                this.matchMath.religion = 3;
            }
            if (userSurvey.degree_type === "Islamic") {
                this.matchMath.religion = 4;
            }
            // End religon ifs

            // Embro Count 
            if(userSurvey.embryos_count === "1-3") {
                this.matchMath.embryos_count = 0;
            }
            if(userSurvey.embryos_count === "4-6") {
                this.matchMath.embryos_count = 1;
            }
            if(userSurvey.embryos_count === "7-10") {
                this.matchMath.embryos_count = 2;
            }
            if(userSurvey.embryos_count === ">10") {
                this.matchMath.embryos_count = 3;
            }
            // End embroyo ifs

            // Birth Center 
            if(userSurvey.birthCenter === "Yes") {
                this.matchMath.birthCenter = 0;
            }else {
                this.matchMath.birthCenter = 5;
            }
            // End Pro life if

            // Hospital  
            if(userSurvey.hospital === "Yes") {
                this.matchMath.hospital = 0;
            }else {
                this.matchMath.hospital = 5;
            }
            // End hospital if

            // Timeline **Needs work needs same type of flex that degree_type has
            if(userSurvey.implant_timeline === "0-3 months") {
                this.matchMath.implant_timeline = 0;
            }
            if(userSurvey.implant_timeline === "3-6 months") {
                this.matchMath.implant_timeline = 1;
            }
            if(userSurvey.implant_timeline === "6-12 months") {
                this.matchMath.implant_timeline = 2;
            }
            if(userSurvey.implant_timeline === "1-2 years") {
                this.matchMath.implant_timeline = 3;
            }
            if(userSurvey.implant_timeline === "2+ years from now") {
                this.matchMath.implant_timeline = 4;
            }
            // End timeline ifs

            // Location
            if(userSurvey.location === "Yes") {
                this.matchMath.location = 0;
            }else {
                this.matchMath.location = 5;
            }
            // End location if

            // Children
            if(userSurvey.haveChildren === "Yes") {
                this.matchMath.haveChildren = 0;
            }else {
                this.matchMath.haveChildren = 5;
            }
            // End children if

            // Previous GC
            if(userSurvey.previous_gc=== "Yes") {
                this.matchMath.previous_gc = 0;
            }else {
                this.matchMath.previous_gc = 5;
            }
            // End previous gc if

            // Relationship
            if(userSurvey.relationshipStatus === "Single") {
                this.matchMath.relationshipStatus = 0;
            }
            if(userSurvey.relationshipStatus === "Married") {
                this.matchMath.relationshipStatus = 1;
            }
            if(userSurvey.relationshipStatus === "Commmon Law Married") {
                this.matchMath.relationshipStatus = 2;
            }
            // End relationship ifs

            // Compensation
            if(userSurvey.desiredCompensation === "< $20,000") {
                this.matchMath.desiredCompensation = 0;
            }
            if(userSurvey.desiredCompensation === "$21,000 - 49,000") {
                this.matchMath.desiredCompensation = 1;
            }
            if(userSurvey.desiredCompensation === "$50,000 - 75,000") {
                this.matchMath.desiredCompensation = 2;
            }
            if(userSurvey.desiredCompensation === "$75,000 - $100,000") {
                this.matchMath.desiredCompensation = 3;
            }
            if(userSurvey.desiredCompensation === "> $100,000") {
                this.matchMath.desiredCompensation = 4;
            }
            // End compensation ifs

            // Insurance
            if(userSurvey.insurance=== "Yes") {
                this.matchMath.insurance = 0;
            }else {
                this.matchMath.insurance = 5;
            }
            // End insurance ifs

            return this.matchMath;
            console.log("Match Match: ", this.matchMath);

        } // End converter



        

module.exports = converter;

// zipCodes = []
//     for(i=0; i<results.length;i++){
//         zipCodes.push(results[i].zipCode)
//     }