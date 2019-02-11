
const surveyCompare = (me, allSurveys) => {

    results = []
    for(i=0;i<allSurveys.length;i++){
        
        let them = allSurveys[i].numerical_survery
        let diff = 0;

        if(them){

            //standard calculations
            diff += findDiff(me.PL_PC, them.PL_PC)
            diff += findDiff(me.embryos_count, them.embryos_count)
            diff += findDiff(me.birthCenter, them.birthCenter)
            diff += findDiff(me.hospital, them.hospital)
            diff += findDiff(me.location, them.location)
            diff += findDiff(me.desiredCompensation, them.desiredCompensation)
            diff += findDiff(me.previous_gc, them.previous_gc)
            diff += findDiff(me.haveChildren, them.haveChildren)
            diff += findDiff(me.insurance, them.insurance)
            diff += findDiff(me.relationshipStatus, them.relationshipStatus)
            diff += findDiff(me.implant_timeline, them.implant_timeline)
            
            //custom calculations
            diff += me.degree_type - them.degree_type
            diff += exactMatchOnly(me.religion, them.religion)

            //push to results array
            results.push({
                score: diff,
                matchPercent: 100-diff + "%",
                grade: getGrade(diff),
                first_name: allSurveys[i].first_name,
                last_name: allSurveys[i].last_name,
                phone_num:  allSurveys[i].phone_num,
                email: allSurveys[i].email,
                zip: allSurveys[i].zip_cd,
                txt_answers: allSurveys[i].survey_results
            });
        };
    };
    return bubbleSort(results);
};

//determine grade by difference
const getGrade = diff => {
    if(diff<14) return "A"
    if(diff<25) return "B"
    if(diff<35) return "C"
    return "D"
}

//bubble sort algorithm
const bubbleSort = arr => {
   let changed = false;
    for(i=0; i<arr.length -1; i++){
        if(arr[i].score > arr[i + 1].score){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            changed = true
        };
    };
        if(changed){
            return bubbleSort(arr)
        };
       return arr
};

//standard difference finder
const findDiff = (val1, val2) => {
    let dif = val1-val2
    if(dif<0){
        dif = dif * -1
    }
    return dif
}

//for exact matches only
const exactMatchOnly = (val1, val2) => val1 === val2? 0 : 5 

module.exports =  surveyCompare;