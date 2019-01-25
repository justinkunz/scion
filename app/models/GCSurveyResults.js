var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GCresultSchema = new Schema({
  PL_PC: { type: Boolean, unique: true, require: true },
  birthCenter: { type: Boolean, unique: true, require: true },
  degree_type: { type: String, unique: true, require: true },
  desiredCompensation: { type: String, unique: true, require: true },
  embryos_ct: { type: String, unique: true, require: true },
  ethnicity: { type: String, unique: true, require: true },
  haveChildren: { type: Boolean, unique: true, require: true },
  havePets: { type: Boolean, unique: true, require: true }, 
  hosp_birth: { type: Boolean, unique: true, require: true },
  insurance: { type: Boolean, unique: true, require: true },
  location: { type: Boolean, unique: true, require: true },
  previous_gc: { type: Boolean, unique: true, require: true },
  relationshipStatus: { type: Boolean, unique: true, require: true },
  religion: { type: Boolean, unique: true, require: true }
});

var GCSurveyResults = mongoose.model("GCSurveyResults", GCresultSchema);
module.exports = GCSurveyResults;
