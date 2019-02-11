import React from 'react';
import Navbar from '../misc/Navbar';
import axios from 'axios';
import Loader from '../misc/Loader';

class ResultsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            signedIn: false,
            grabbedData: false,
            results: null,
            userId: null
        };
    };

    componentDidUpdate() {
        console.log(this.state)
    }
    verifyUser = async () => {

        const token = localStorage.getItem("token")
    
        if (!token) {
          this.setState({ signedIn: false, grabbedData: true })
        }
        else {
          const request = await axios.post('/api/currentUser', { token: localStorage.getItem("token") })
          if (request.data === "redirect") {
            this.setState({ signedIn: false, grabbedData: true })
          } else {
    
            if (request.data[0]) {
              this.setState({userId: request.data[0]._id,signedIn: false, grabbedData: true})
              this.getResults()

            }
            else {
              this.setState({ signedIn: false, grabbedData: true })
            }
          }
        }
    
      }

      getResults = async () => {
        const results = await axios.get("/api/get/results/" + this.state.userId)
        console.log(results.data)
        this.setState({results: results.data})
      }

    render() {
        if(!this.state.grabbedData){
            this.verifyUser()
            return <Loader />
        }
        return (
            <div>
            <Navbar />
            </div>
            
        );
    };
};

export default ResultsPage;