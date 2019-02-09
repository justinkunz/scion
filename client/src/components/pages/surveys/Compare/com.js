const m = {
    PL_PC: 0,
    embryos_count: 3,
    birthCenter: 5
}

const t = {
    PL_PC: 5,
    embryos_count: 2,
    birthCenter: 5
}

surveyCompare(m,t)

const surveyCompare = (me, allSurveys) => {
    for(i=0;i<allSurveys.length;i++){
        let diff = 0;
        let them = allSurveys[i]

        diff =+ diff(me.PL_PC, them.PL_PC)
        diff =+ diff(me.embryos_count, them.embryos_count)
        diff =+ diff(me.birthCenter, them.birthCenter)
        console.log(diff)
    }
}

const findDiff = (val1, val2) => {
    let dif = val1-val2
    if(dif<0){
        dif = dif * -1
    }
    return diff
}
// signedIn: true,
// [0]      degree_type: 'Some College',
// [0]      PL_PC: 'Pro-Choice',
// [0]      religion: 'Buddist',
// [0]      embryos_count: '7-10',
// [0]      birthCenter: 'Yes',
// [0]      hospital: 'Yes',
// [0]      implant_timeline: '6-12 months',
// [0]      location: 'No',
// [0]      haveChildren: 'Yes',
// [0]      previous_gc: 'Yes',
// [0]      relationshipStatus: 'Married',
// [0]      desiredCompensation: '$100,000 <',
// [0]      insurance: 'Yes' },