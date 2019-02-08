import axios from "axios";

const BASEURL = "https://www.zipcodeapi.com/rest/"
const APIKEY = "gO3D01JvCG9vDS6cR7F0hBCJAKiu4a9TSk0hc12oaxT26IPBfAonjxHyTl1mJih5/"
const RADIUS = "radius.json/"
const END = "miles?minimal"

// zipcode is the zipocode we pull from user object, withing is the mile radius within the given zip code, which will return all zipcodes with in "X" mile radius
export default  {
    search: (zipcode, within) => {
        const searchQuery = BASEURL + APIKEY + RADIUS + zipcode + "/" + within + "/" + END;
        return axios.get(searchQuery)
        },
}