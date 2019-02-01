const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IPresultSchema = new Schema({
    PL_PC: { type: Boolean, unique: true, require: true },
    birthCenter: { type: Boolean, unique: true, require: true },
    cryo_presrv_ind: { type: Boolean, unique: true, require: true },
    degree_type: { type: String, unique: true, require: true },
    donor_req: { type: Boolean, unique: true, require: true },
    embryos_ct: { type: String, unique: true, require: true },
    fert_treat: { type: Boolean, unique: true, require: true },
    fertilitiy_frequency: { type: String, unique: true, require: true },
    hosp_birth: { type: Boolean, unique: true, require: true },
    implant_timeline: { type: Boolean, unique: true, require: true },
    married_ind: { type: Boolean, unique: true, require: true },
    relationship_ind: { type: Boolean, require: true },
    religion: { type: Boolean, unique: true, require: true }
})

var IPSurveyResults = mongoose.model("IP", IPresultSchema);
module.exports = IPSurveyResults