import React from 'react';

class SurveyMath extends React.Component {
    

    constructor(props) {

        super(props);

        this.state = {

            user: {
                userSurvey: {
                    degree_type: 0,
                    PL_PC: 5,
                    religion: 0,
                    embryos_count: 2,
                    birthCenter: 5,
                    hospital: 0,
                    implant_timeline: 2,
                    location: 0,
                    haveChildren: 0,
                    previous_gc: 5,
                    relationshipStatus: 1,
                    desiredCompensation: 2,
                    insurance: 0,
                  }, 
                  userSurveyType: "IP"

            }, //End user

            

        } // End state

        this.DB = {
            users: [
                {
                    userSurvey: {
                    degree_type: 2,
                    PL_PC: 0,
                    religion: 1,
                    embryos_count: 3,
                    birthCenter: 0,
                    hospital: 0,
                    implant_timeline: 3,
                    location: 5,
                    haveChildren: 5,
                    previous_gc: 0,
                    relationshipStatus: 0,
                    desiredCompensation: 3,
                    insurance: 5,
                    }, 
                    userSurveyType: "IP"
                },
    
                {
                    userSurvey: {
                        degree_type: 3,
                        PL_PC: 0,
                        religion: 0,
                        embryos_count: 1,
                        birthCenter: 5,
                        hospital: 5,
                        implant_timeline: 1,
                        location: 5,
                        haveChildren: 5,
                        previous_gc: 0,
                        relationshipStatus: 2,
                        desiredCompensation: 3,
                        insurance: 5,
                    }, 
                    userSurveyType: "GC"
                }
            ]
        }

        this.matchMath = {};

        

    } // End constructor

    render() {

        const matchMaker = () => {

            console.log(this.DB.users);
            console.log("User survey type: ", this.state.user.userSurveyType);
            console.log("User survey answers: ", this.state.user.userSurvey);

            this.DB.users.forEach(person => {
                
                // console.log("DB user survey: ", person.userSurvey);
                // console.log("DB user type: ", person.userSurveyType);

                // Seperate groups to give differant responses based on the users type

                ///////////////////////////////////////////////////////////////////////////////////////////

                // If the user is a IP
                if(this.state.user.userSurveyType === "IP" && person.userSurveyType === "GC") {
                    console.log("My GC filter match: ", person);

                    // make score to hold info for each until i figure out how to put it in matchMath object
                    let score = 0;
                    // make shorthand for objects
                    const mySurvey = this.state.user.userSurvey;
                    const thierSurvey = person.userSurvey;

                    //////////////////////////// Degree ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose N/A for degree
                    if(mySurvey.degree_type === 0){
                        if(thierSurvey.degree_type === 0) {
                            score += 0
                        }
                        else {
                            score -= (thierSurvey.degree_type)
                        }
                    }

                    // If user chose High School Diploma
                    if(mySurvey.degree_type === 1){

                        if(thierSurvey.degree_type === 0) {
                            score = 1
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 0
                        }
            
                        else {
                            score -= (thierSurvey.degree_type - 1)
                        }
                    }

                    // If user chose Some College
                    if(mySurvey.degree_type === 2){

                        if(thierSurvey.degree_type === 0) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.degree_type - 2) 
                        }
                    }

                    // If user chose Associates Degree
                    if(mySurvey.degree_type === 3){

                        if(thierSurvey.degree_type === 0) {
                            score += 3
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 3) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.degree_type - 3) 
                        }
                    }

                    // If user chose Bachelors Degree
                    if(mySurvey.degree_type === 4){

                        if(thierSurvey.degree_type === 0) {
                            score += 4
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 3
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 3) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 4) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.degree_type - 4) 
                        }
                    }

                    // If user chose Masters Degree
                    if(mySurvey.degree_type === 5){

                        if(thierSurvey.degree_type === 0) {
                            score += 5
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 4
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 3
                        }

                        if(thierSurvey.degree_type === 3) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 4) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 5) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.degree_type - 5) 

                        }
                    }

                    // If user chose PhD
                    if(mySurvey.degree_type === 6){

                        if(thierSurvey.degree_type === 0) {
                            score += 6
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 5
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 4
                        }

                        if(thierSurvey.degree_type === 3) {
                            score += 3
                        }

                        if(thierSurvey.degree_type === 4) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 5) {
                            score += 1
                        }
                        if(thierSurvey.degree_type === 6) {
                            score += 0
                        }
                    }
                    //////////////////////////// End Degree ifs \\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Pro life ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.PL_PC === 0){
                        if(thierSurvey.PL_PC === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 5
                    }

                    // If user chose No 
                    if(mySurvey.PL_PC === 5){
                        if(thierSurvey.PL_PC === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 5
                    }


                    ////////////////////////// End Pro Life ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Religion if \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If users religon does not match raise differance
                    if(mySurvey.religion === thierSurvey.religion){
                            score += 0
                    }
                    else {
                        score += 5
                    }

                    //////////////////////////// End Religion if \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Embro Count ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose 1-3
                    if(mySurvey.embryos_count === 0){
                        if(thierSurvey.embryos_count === 0) {
                            score += 0
                        }
                        else {
                            score += thierSurvey.embryos_count
                        }
                    }

                    // If user chose 4-6
                    if(mySurvey.embryos_count === 1){

                        if(thierSurvey.embryos_count === 0) {
                            score += 1
                        }

                        if(thierSurvey.embryos_count === 1) {
                            score += 0
                        }
            
                        else {
                            score -= (thierSurvey.embryos_count- 1)
                        }
                    }

                    // If user chose 7-10
                    if(mySurvey.embryos_count === 2){

                        if(thierSurvey.embryos_count === 0) {
                            score += 2
                        }

                        if(thierSurvey.embryos_count === 1) {
                            score += 1
                        }

                        if(thierSurvey.embryos_count === 2) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.embryos_count - 2) 
                        }
                    }

                    // If user chose >10
                    if(mySurvey.embryos_count === 3){

                        if(thierSurvey.embryos_count === 0) {
                            score += 3
                        }

                        if(thierSurvey.embryos_count === 1) {
                            score += 2
                        }

                        if(thierSurvey.embryos_count === 2) {
                            score += 1
                        }

                        if(thierSurvey.embryos_count === 3) {
                            score += 0
                        }
                    }

                    //////////////////////////// End Embro Count ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Birth Center ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.birthCenter === 0){
                        if(thierSurvey.birthCenter === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.birthCenter === 5){
                        if(thierSurvey.birthCenter === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }


                    ////////////////////////// End Birth Center ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Hospital ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.hospital === 0){
                        if(thierSurvey.hospital === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.hospital === 5){
                        if(thierSurvey.hospital === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }


                    ////////////////////////// End Hospital ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    ///////////////////////// Timeline ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose 0-3 months
                    if(mySurvey.implant_timeline === 0){
                        if(thierSurvey.implant_timeline === 0) {
                            score += 0
                        }
                        else {
                            score += (thierSurvey.implant_timeline)
                        }
                    }

                    // If user chose 3-6 months
                    if(mySurvey.implant_timeline === 1){

                        if(thierSurvey.implant_timeline === 0) {
                            score += 1
                        }

                        if(thierSurvey.implant_timeline === 1) {
                            score += 0
                        }
            
                        else {
                            score += (thierSurvey.implant_timeline - 1)
                        }
                    }

                    // If user chose 6-12 months
                    if(mySurvey.implant_timeline === 2){

                        if(thierSurvey.implant_timeline === 0) {
                            score += 2
                        }

                        if(thierSurvey.implant_timeline === 1) {
                            score += 1
                        }

                        if(thierSurvey.implant_timeline === 2) {
                            score += 0
                        }

                        else {
                            score += (thierSurvey.implant_timeline - 2) 
                        }
                    }

                    // If user chose 1-2 years
                    if(mySurvey.implant_timeline === 3){

                        if(thierSurvey.implant_timeline === 0) {
                            score += 3
                        }

                        if(thierSurvey.implant_timeline === 1) {
                            score += 2
                        }

                        if(thierSurvey.implant_timeline === 2) {
                            score += 1
                        }

                        if(thierSurvey.implant_timeline === 3) {
                            score += 0
                        }

                        else {
                            score += (thierSurvey.implant_timeline - 3) 
                        }
                    }

                    // If user chose 2+ years from now
                    if(mySurvey.implant_timeline === 4){

                        if(thierSurvey.implant_timeline === 0) {
                            score += 4
                        }

                        if(thierSurvey.implant_timeline === 1) {
                            score += 3
                        }

                        if(thierSurvey.implant_timeline === 2) {
                            score += 2
                        }

                        if(thierSurvey.implant_timeline === 3) {
                            score += 1
                        }

                        if(thierSurvey.implant_timeline === 4) {
                            score += 0
                        }
                    }

                    ////////////////////////// End Timeline ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Location ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.location === 0){
                        if(thierSurvey.location === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.location === 5){
                        if(thierSurvey.location === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    ////////////////////////// End Location ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    //////////////////////////// Childern ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.haveChildren === 0){
                        if(thierSurvey.haveChildren === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.haveChildren === 5){
                        if(thierSurvey.haveChildren === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    ////////////////////////// End Children ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    //////////////////////////// Previous GC ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.previous_gc === 0){
                        if(thierSurvey.previous_gc === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.previous_gc === 5){
                        if(thierSurvey.previous_gc === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    ////////////////////////// End Previous GC ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    ////////////////////////// Relationship ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // Ask group on how to value this question

                    // If users religon does not match raise differance
                    if(mySurvey.relationshipStatus === thierSurvey.relationshipStatus){
                        score += 0
                    }
                    else {
                        score += 3
                    }

                    ////////////////////////// End Relationship ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    ////////////////////////// Compensation ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose < $20,000
                    if(mySurvey.desiredCompensation === 0){
                        if(thierSurvey.desiredCompensation === 0) {
                            score += 0
                        }
                        else {
                            score += (thierSurvey.desiredCompensation)
                        }
                    }

                    // If user chose $21,000 - 49,000
                    if(mySurvey.desiredCompensation === 1){

                        if(thierSurvey.desiredCompensation === 0) {
                            score -= 1
                        }

                        if(thierSurvey.desiredCompensation === 1) {
                            score += 0
                        }
            
                        else {
                            score += (thierSurvey.desiredCompensation - 1)
                        }
                    }

                    // If user chose $50,000 - 75,000
                    if(mySurvey.desiredCompensation === 2){

                        if(thierSurvey.desiredCompensation === 0) {
                            score -= 2
                        }

                        if(thierSurvey.desiredCompensation === 1) {
                            score -= 1
                        }

                        if(thierSurvey.desiredCompensation === 2) {
                            score += 0
                        }

                        else {
                            score += (thierSurvey.desiredCompensation - 2) 
                        }
                    }

                    // If user chose $75,000 - $100,000
                    if(mySurvey.desiredCompensation === 3){

                        if(thierSurvey.desiredCompensation === 0) {
                            score -= 3
                        }

                        if(thierSurvey.desiredCompensation === 1) {
                            score -= 2
                        }

                        if(thierSurvey.desiredCompensation === 2) {
                            score -= 1
                        }

                        if(thierSurvey.desiredCompensation === 3) {
                            score += 0
                        }

                        else {
                            score += (thierSurvey.desiredCompensation - 3) 
                        }
                    }

                    // If user chose > $100,000
                    if(mySurvey.desiredCompensation === 4){

                        if(thierSurvey.desiredCompensation === 0) {
                            score -= 4
                        }

                        if(thierSurvey.desiredCompensation === 1) {
                            score -= 3
                        }

                        if(thierSurvey.desiredCompensation === 2) {
                            score -= 2
                        }

                        if(thierSurvey.desiredCompensation === 3) {
                            score -= 1
                        }

                        if(thierSurvey.desiredCompensation === 4) {
                            score += 0
                        }
                    }

                    ////////////////////////// End Compensation ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    //////////////////////////// Insurance ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.insurance === 0){
                        if(thierSurvey.insurance === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 5
                    }

                    // If user chose No 
                    if(mySurvey.insurance === 5){
                        if(thierSurvey.insurance === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 5
                    }

                    ////////////////////////// End Insurance ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    console.log("Match score: ", score)

                    if(score <= 25) {
                        console.log("It's a match!!")
                    }

                } //End of user IP if

                /////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////

                // If the user is a GC
                if(this.state.user.userSurveyType === "GC" && person.userSurveyType === "IP") {
                    console.log("My IP filter match: ", person);

                    // make score to hold info for each until i figure out how to put it in matchMath object
                    let score = 0;
                    // make shorthand for objects
                    const mySurvey = this.state.user.userSurvey;
                    const thierSurvey = person.userSurvey;

                    //////////////////////////// Degree ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose N/A for degree
                    if(mySurvey.degree_type === 0){
                        if(thierSurvey.degree_type === 0) {
                            score += 0
                        }
                        else {
                            score -= (thierSurvey.degree_type)
                        }
                    }

                    // If user chose High School Diploma
                    if(mySurvey.degree_type === 1){

                        if(thierSurvey.degree_type === 0) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 0
                        }
            
                        else {
                            score -= (thierSurvey.degree_type - 1)
                        }
                    }

                    // If user chose Some College
                    if(mySurvey.degree_type === 2){

                        if(thierSurvey.degree_type === 0) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.degree_type - 2) 
                        }
                    }

                    // If user chose Associates Degree
                    if(mySurvey.degree_type === 3){

                        if(thierSurvey.degree_type === 0) {
                            score += 3
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 3) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.degree_type - 3) 
                        }
                    }

                    // If user chose Bachelors Degree
                    if(mySurvey.degree_type === 4){

                        if(thierSurvey.degree_type === 0) {
                            score += 4
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 3
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 3) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 4) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.degree_type - 4) 
                        }
                    }

                    // If user chose Masters Degree
                    if(mySurvey.degree_type === 5){

                        if(thierSurvey.degree_type === 0) {
                            score += 5
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 4
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 3
                        }

                        if(thierSurvey.degree_type === 3) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 4) {
                            score += 1
                        }

                        if(thierSurvey.degree_type === 5) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.degree_type - 5) 

                        }
                    }

                    // If user chose PhD
                    if(mySurvey.degree_type === 6){

                        if(thierSurvey.degree_type === 0) {
                            score += 6
                        }

                        if(thierSurvey.degree_type === 1) {
                            score += 5
                        }

                        if(thierSurvey.degree_type === 2) {
                            score += 4
                        }

                        if(thierSurvey.degree_type === 3) {
                            score += 3
                        }

                        if(thierSurvey.degree_type === 4) {
                            score += 2
                        }

                        if(thierSurvey.degree_type === 5) {
                            score += 1
                        }
                        if(thierSurvey.degree_type === 6) {
                            score += 0
                        }
                    }
                    //////////////////////////// End Degree ifs \\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Pro life ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.PL_PC === 0){
                        if(thierSurvey.PL_PC === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 5
                    }

                    // If user chose No 
                    if(mySurvey.PL_PC === 5){
                        if(thierSurvey.PL_PC === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 5
                    }


                    ////////////////////////// End Pro Life ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Religion if \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If users religon does not match raise differance
                    if(mySurvey.religion === thierSurvey.religion){
                            score += 0
                    }
                    else {
                        score += 5
                    }

                    //////////////////////////// End Religion if \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Embro Count ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose 1-3
                    if(mySurvey.embryos_count === 0){
                        if(thierSurvey.embryos_count === 0) {
                            score += 0
                        }
                        else {
                            score += thierSurvey.embryos_count
                        }
                    }

                    // If user chose 4-6
                    if(mySurvey.embryos_count === 1){

                        if(thierSurvey.embryos_count === 0) {
                            score += 1
                        }

                        if(thierSurvey.embryos_count === 1) {
                            score += 0
                        }
            
                        else {
                            score -= (thierSurvey.embryos_count- 1)
                        }
                    }

                    // If user chose 7-10
                    if(mySurvey.embryos_count === 2){

                        if(thierSurvey.embryos_count === 0) {
                            score += 2
                        }

                        if(thierSurvey.embryos_count === 1) {
                            score += 1
                        }

                        if(thierSurvey.embryos_count === 2) {
                            score += 0
                        }

                        else {
                            score -= (thierSurvey.embryos_count - 2) 
                        }
                    }

                    // If user chose >10
                    if(mySurvey.embryos_count === 3){

                        if(thierSurvey.embryos_count === 0) {
                            score += 3
                        }

                        if(thierSurvey.embryos_count === 1) {
                            score += 2
                        }

                        if(thierSurvey.embryos_count === 2) {
                            score += 1
                        }

                        if(thierSurvey.embryos_count === 3) {
                            score += 0
                        }
                    }

                    //////////////////////////// End Embro Count ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Birth Center ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.birthCenter === 0){
                        if(thierSurvey.birthCenter === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.birthCenter === 5){
                        if(thierSurvey.birthCenter === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }


                    ////////////////////////// End Birth Center ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Hospital ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.hospital === 0){
                        if(thierSurvey.hospital === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.hospital === 5){
                        if(thierSurvey.hospital === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }


                    ////////////////////////// End Hospital ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    ///////////////////////// Timeline ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose 0-3 months
                    if(mySurvey.implant_timeline === 0){
                        if(thierSurvey.implant_timeline === 0) {
                            score += 0
                        }
                        else {
                            score += (thierSurvey.implant_timeline)
                        }
                    }

                    // If user chose 3-6 months
                    if(mySurvey.implant_timeline === 1){

                        if(thierSurvey.implant_timeline === 0) {
                            score += 1
                        }

                        if(thierSurvey.implant_timeline === 1) {
                            score += 0
                        }
            
                        else {
                            score += (thierSurvey.implant_timeline - 1)
                        }
                    }

                    // If user chose 6-12 months
                    if(mySurvey.implant_timeline === 2){

                        if(thierSurvey.implant_timeline === 0) {
                            score += 2
                        }

                        if(thierSurvey.implant_timeline === 1) {
                            score += 1
                        }

                        if(thierSurvey.implant_timeline === 2) {
                            score += 0
                        }

                        else {
                            score += (thierSurvey.implant_timeline - 2) 
                        }
                    }

                    // If user chose 1-2 years
                    if(mySurvey.implant_timeline === 3){

                        if(thierSurvey.implant_timeline === 0) {
                            score += 3
                        }

                        if(thierSurvey.implant_timeline === 1) {
                            score += 2
                        }

                        if(thierSurvey.implant_timeline === 2) {
                            score += 1
                        }

                        if(thierSurvey.implant_timeline === 3) {
                            score += 0
                        }

                        else {
                            score += (thierSurvey.implant_timeline - 3) 
                        }
                    }

                    // If user chose 2+ years from now
                    if(mySurvey.implant_timeline === 4){

                        if(thierSurvey.implant_timeline === 0) {
                            score += 4
                        }

                        if(thierSurvey.implant_timeline === 1) {
                            score += 3
                        }

                        if(thierSurvey.implant_timeline === 2) {
                            score += 2
                        }

                        if(thierSurvey.implant_timeline === 3) {
                            score += 1
                        }

                        if(thierSurvey.implant_timeline === 4) {
                            score += 0
                        }
                    }

                    ////////////////////////// End Timeline ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    //////////////////////////// Location ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.location === 0){
                        if(thierSurvey.location === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.location === 5){
                        if(thierSurvey.location === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    ////////////////////////// End Location ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    //////////////////////////// Childern ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.haveChildren === 0){
                        if(thierSurvey.haveChildren === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.haveChildren === 5){
                        if(thierSurvey.haveChildren === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    ////////////////////////// End Children ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    //////////////////////////// Previous GC ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.previous_gc === 0){
                        if(thierSurvey.previous_gc === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    // If user chose No 
                    if(mySurvey.previous_gc === 5){
                        if(thierSurvey.previous_gc === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 2
                    }

                    ////////////////////////// End Previous GC ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    ////////////////////////// Relationship ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // Ask group on how to value this question

                    // If users religon does not match raise differance
                    if(mySurvey.relationshipStatus === thierSurvey.relationshipStatus){
                        score += 0
                    }
                    else {
                        score += 3
                    }

                    ////////////////////////// End Relationship ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


                    ////////////////////////// Compensation ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose < $20,000
                    if(mySurvey.desiredCompensation === 0){
                        if(thierSurvey.desiredCompensation === 0) {
                            score += 0
                        }
                        else {
                            score += (thierSurvey.desiredCompensation)
                        }
                    }

                    // If user chose $21,000 - 49,000
                    if(mySurvey.desiredCompensation === 1){

                        if(thierSurvey.desiredCompensation === 0) {
                            score -= 1
                        }

                        if(thierSurvey.desiredCompensation === 1) {
                            score += 0
                        }
            
                        else {
                            score += (thierSurvey.desiredCompensation - 1)
                        }
                    }

                    // If user chose $50,000 - 75,000
                    if(mySurvey.desiredCompensation === 2){

                        if(thierSurvey.desiredCompensation === 0) {
                            score -= 2
                        }

                        if(thierSurvey.desiredCompensation === 1) {
                            score -= 1
                        }

                        if(thierSurvey.desiredCompensation === 2) {
                            score += 0
                        }

                        else {
                            score += (thierSurvey.desiredCompensation - 2) 
                        }
                    }

                    // If user chose $75,000 - $100,000
                    if(mySurvey.desiredCompensation === 3){

                        if(thierSurvey.desiredCompensation === 0) {
                            score -= 3
                        }

                        if(thierSurvey.desiredCompensation === 1) {
                            score -= 2
                        }

                        if(thierSurvey.desiredCompensation === 2) {
                            score -= 1
                        }

                        if(thierSurvey.desiredCompensation === 3) {
                            score += 0
                        }

                        else {
                            score += (thierSurvey.desiredCompensation - 3) 
                        }
                    }

                    // If user chose > $100,000
                    if(mySurvey.desiredCompensation === 4){

                        if(thierSurvey.desiredCompensation === 0) {
                            score -= 4
                        }

                        if(thierSurvey.desiredCompensation === 1) {
                            score -= 3
                        }

                        if(thierSurvey.desiredCompensation === 2) {
                            score -= 2
                        }

                        if(thierSurvey.desiredCompensation === 3) {
                            score -= 1
                        }

                        if(thierSurvey.desiredCompensation === 4) {
                            score += 0
                        }
                    }

                    ////////////////////////// End Compensation ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    //////////////////////////// Insurance ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    // If user chose Yes 
                    if(mySurvey.insurance === 0){
                        if(thierSurvey.insurance === 0) {
                            score += 0
                        }
                    }
                    else {
                        score += 5
                    }

                    // If user chose No 
                    if(mySurvey.insurance === 5){
                        if(thierSurvey.insurance === 5) {
                            score += 0
                        }
                    }
                    else {
                        score += 5
                    }

                    ////////////////////////// End Insurance ifs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

                    console.log("Match score: ", score)

                    if(score <= 25) {
                        console.log("It's a match!!")
                    }




                } //End of user GC if

            });

        }

        return (
            <button onClick={() => matchMaker()}>Match Maker</button>
        );
    }


} // End surveyMath

export default SurveyMath;