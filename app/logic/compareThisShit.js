const m = {
    degree_type: 1,
    PL_PC: 0,
    embryos_count: 3,
    birthCenter: 5,
    hospital: 5,
    implant_timeline: 2,
    location: 5,
    previous_gc: 1,
    relationshipStatus: 2,
    desiredCompensation: 2,
    haveChildren: 5,
    religion: 2,
    insurance: 5
}

const surveyCompare = (me, allSurveys) => {
  console.log(me)

// "signedIn": true,
// "degree_type": "GED",
// "PL_PC": "Pro-Choice",
// "religion": "Christian",
// "embryos_count": "4-6",
// "birthCenter": "Yes",
// "hospital": "Yes",
// "implant_timeline": "6-12 months",
// "location": "No",
// "haveChildren": "Yes",
// "previous_gc": "Yes",
// "relationshipStatus": "Single",
// "desiredCompensation": "$50,000 - 75,000",
// "insurance": "Yes"
    results = []
    for(i=0;i<allSurveys.length;i++){
        
        let them = allSurveys[i].numerical_survery
        let diff = 0;

        if(them){

            //standard calculations
            diff += findDiff(me.PL_PC, them.PL_PC)
            console.log(diff)
            diff += findDiff(me.embryos_count, them.embryos_count)
            diff += findDiff(me.birthCenter, them.birthCenter)
            diff += findDiff(me.hospital, them.hospital)
            diff += findDiff(me.location, them.location)
            diff += findDiff(me.desiredCompensation, them.desiredCompensation)
            console.log(diff)
            diff += findDiff(me.previous_gc, them.previous_gc)
            diff += findDiff(me.haveChildren, them.haveChildren)
            diff += findDiff(me.insurance, them.insurance)
            console.log(diff)
            diff += findDiff(me.relationshipStatus, them.relationshipStatus)
            diff += findDiff(me.implant_timeline, them.implant_timeline)
            console.log(diff)
            
            //custom calculations
            diff += me.degree_type - them.degree_type
            console.log(diff)
            diff += exactMatchOnly(me.religion, them.religion)
            console.log(diff)

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
            })
    }
    }

    return bubbleSort(results)


}

//determine grade by difference
const getGrade = diff => {
    if(diff<14) return "A"
    if(diff<25) return "B"
    if(diff<35) return "C"
    return "D"
}

//bubble sort algorithm
const bubbleSort = (arr) => {
   let changed = false
    for(i=0; i<arr.length -1; i++){
        if(arr[i].score > arr[i + 1].score){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            changed = true
        }
    }
        if(changed){
            return bubbleSort(arr)
        }
       return arr
}

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


const all = [
    {
    "survery_answered": true,
    "_id": "5c5ceee02045401b387b164b",
    "email": "1@2.com",
    "password": "$2b$10$71a572gQNwnao9er1mIk8OQEX7HpHpMJX.J1TCOlC2xkOVjHeOKPu",
    "first_name": "Justin",
    "last_name": "Kunz",
    "phone_num": "3238035669",
    "user_type": "IP",
    "created_at": "2019-02-08T02:52:16.609Z",
    "__v": 0,
    "numerical_survery": {
        "degree_type": 5,
        "PL_PC": 5,
        "religion": 5,
        "embryos_count": 5,
        "birthCenter": 5,
        "hospital": 5,
        "implant_timeline": 5,
        "location": 5,
        "haveChildren": 5,
        "previous_gc": 5,
        "relationshipStatus": 5,
        "insurance": 5,
        "desiredCompensation": 5
    },
    "survey_results": {
        "signedIn": true,
        "degree_type": "Associates Degree",
        "PL_PC": "Pro-Choice",
        "religion": "Buddist",
        "embryos_count": "4-6",
        "birthCenter": "Yes",
        "hospital": "No",
        "implant_timeline": "2+ years from now",
        "location": "Yes",
        "haveChildren": "Yes",
        "previous_gc": "No",
        "relationshipStatus": "Commmon Law Married",
        "desiredCompensation": "$100,000 <",
        "insurance": "Yes"
    }
    },
    {
    "survery_answered": true,
    "_id": "5c5d22bf64a8521bb0f4a057",
    "email": "lol@lol.com",
    "password": "$2b$10$71a572gQNwnao9er1mIk8OXkS/L5WePPcNamdckcOB2Tpi6f.6/mm",
    "first_name": "Justin",
    "last_name": "Kunz",
    "phone_num": "3238035669",
    "user_type": "IP",
    "created_at": "2019-02-08T06:33:35.440Z",
    "__v": 0,
    "numerical_survery": {
        "degree_type": 0,
        "PL_PC": 0,
        "religion": 0,
        "embryos_count": 0,
        "birthCenter": 0,
        "hospital": 0,
        "implant_timeline": 0,
        "location": 0,
        "haveChildren": 0,
        "previous_gc": 0,
        "relationshipStatus": 0,
        "desiredCompensation": 0,
        "insurance": 0
    },
    "survey_results": {
        "signedIn": true,
        "degree_type": "GED",
        "PL_PC": "Pro-Choice",
        "religion": "Christian",
        "embryos_count": "4-6",
        "birthCenter": "Yes",
        "hospital": "Yes",
        "implant_timeline": "6-12 months",
        "location": "No",
        "haveChildren": "Yes",
        "previous_gc": "Yes",
        "relationshipStatus": "Single",
        "desiredCompensation": "$50,000 - 75,000",
        "insurance": "Yes"
    }
    },
    {
    "survery_answered": true,
    "_id": "5c5d25498a6a1e21acd3f869",
    "email": "app@test.com",
    "password": "$2b$10$71a572gQNwnao9er1mIk8OR6mayO59WAgW/O0P1DI2LE38wLmVPMa",
    "first_name": "Amanda",
    "last_name": "Tharp",
    "phone_num": "123123123",
    "user_type": "GC",
    "created_at": "2019-02-08T06:44:25.399Z",
    "__v": 0,
    "numerical_survery": {
        "degree_type": 2,
        "PL_PC": 5,
        "religion": 2,
        "embryos_count": 2,
        "birthCenter": 0,
        "hospital": 5,
        "implant_timeline": 3,
        "location": 0,
        "haveChildren": 0,
        "previous_gc": 5,
        "relationshipStatus": 2,
        "desiredCompensation": 4,
        "insurance": 5
    },
    "survey_results": {
        "signedIn": true,
        "degree_type": "Some College",
        "PL_PC": "Pro-Choice",
        "religion": "Jewish",
        "embryos_count": "7-10",
        "birthCenter": "Yes",
        "hospital": "No",
        "implant_timeline": "1-2 years",
        "haveChildren": "Yes",
        "location": "Yes",
        "previous_gc": "No",
        "relationshipStatus": "Commmon Law Married",
        "desiredCompensation": "> $100,000",
        "insurance": "No"
    }
}
    ]

    //surveyCompare(m,all)

module.exports =  surveyCompare;