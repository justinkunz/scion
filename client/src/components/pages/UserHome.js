foscat







Message List

Kyle Patrick Foster [6:05 PM]
Untitled 
import React, { Component } from "react";
import Loader from "../misc/Loader";
import axios from "axios";
import "./UserHome.css";
import Navbar from "../misc/Navbar";
import { Modal } from 'semantic-ui-react';
import PopUp from "../misc/PopUp";
import {PopFunct} from "../misc/pop";
​
class UserHome extends Component {
 constructor(props) {
  super(props);
  this.state = {
   signedIn: true,
   grabbedData: false,
   results: null,
   userId: null,
   firstName: null,
   lastName: null,
   userDate: null
  };
 }
​
 componentDidUpdate() {
  console.log(this.state);
 }
 verifyUser = async () => {
  const token = localStorage.getItem("token");
​
  if (!token) {
   this.setState({ signedIn: false, grabbedData: true });
  } else {
   const request = await axios.post("/api/currentUser", {
    token: localStorage.getItem("token")
   });
   console.log(request.data);
   if (request.data === "redirect") {
    this.setState({ signedIn: false, grabbedData: true });
   } else {
    if (request.data[0]) {
     this.setState({ 
      userId: request.data[0]._id, 
      signedIn: false, 
      firstName: request.data[0].first_name, 
      lastName: request.data[0].last_name,
      userDate: request.data[0].created_at
     });
     this.getResults();
    } else {
     this.setState({ signedIn: false, grabbedData: true });
    }
   }
  }
 };
​
​
 getResults = async () => {
  const results = await axios.get("/api/get/results/" + this.state.userId);
  // console.log(results.data);
  this.setState({ results: results.data, grabbedData: true });
  console.log("State check: ", this.state);
​
 };
​
 render() {
  if (!this.state.grabbedData) {
   this.verifyUser();
   return <Loader />;
  }
  const sizes = ["massive"];
  let formDate = (this.state.userDate).substring(0, 10);
  console.log("Form Date: ", formDate)
​
  return (
   <div>
    <Navbar />
    <div className="match-panel">
     <div style={{backgroundColor: "lightgrey", overflow: "auto", height:"450px", width: "50%"}} className="match-generator rounded border border-dark">
      <h1 className="match-text">Matches</h1>
​
      {this.state.results.length ? (
       <ul style={{ margin: "0 auto", overflow: "auto" }}>
        {this.state.results.map(connection => {
         // console.log("Connection: ", connection);
​
         let emailer = "mailto:" + connection.email;
​
         let gradeColor
        if(connection.grade === "A") {
         gradeColor = "rgb(7,122,42)"
        }
        if(connection.grade === "B") {
         gradeColor = "rgb(7,115,159)"
        }
        if(connection.grade === "C") {
         gradeColor = "rgb(241,200,11)"
        }
        if(connection.grade === "D") {
         gradeColor = "rgb(146,26,28)"
        }
         return (
          <li
           style={{ float: "left", listStyle: "none" }}
           key={connection.email}
          >
           <div
            className="card m-2"
            style={{
             height: "auto",
             backgroundColor: "rgb(87, 139, 139)"
            }}
           >
           {/* Grade image on connection card */}
           <div 
            className="card-image mt-2" 
            style={{
             margin: "0 auto",
             height: "100px", 
             width: "100px", 
             backgroundColor: gradeColor,
             clipPath: "circle(50% at 50% 50%)"}}
            >
​
            <h1 className="text-center" style={
             {
              fontSize: "450%",
              fontFamily: "Baloo Bhaijaan, cursive",
              transform: "translateY(-50%)",
              position: "relative",
              top:"50%",
              color:"white"
            }
             }>{connection.grade}</h1>
            
           </div>
​
           {/* Connection card body */}
            <div className="card-body">
             <div className="row">
              <div className="col">
               <h3 className="card-title">
                {connection.first_name}
               </h3>
​
               <h3 className="card-subtitle">
                {connection.last_name}
               </h3>
​
               <div className="mt-2">
                <a href="#" className="btn btn-primary">
                 Go somewhere
                </a>
​
                <PopUp key={connection.userId}>
                 <div className="row">
                  <h2>Name: {connection.first_name} {connection.last_name}</h2>
                  <h3>Match %: {connection.matchPercent}</h3>
                 </div>
                </PopUp>
​
                <PopFunct onClick={Modal.open}>
                 <div className="row">
                  <h2>Name: {connection.first_name} {connection.last_name}</h2>
                  <h3>Match %: {connection.matchPercent}</h3>
                 </div>
                </PopFunct>
​
                <form
                 className="m-2"
                 action={emailer}
                 encType="text/plain"
                 method="post"
                 id="email-form"
                >
                 <input
                  type="submit"
                  id="email"
                  className="text-bold btn btn-info rounded"
                  value="Email this user"
                 />
                </form>
               </div>
              </div>
             </div>
            </div>
           </div>
          </li>
         );
        })}
       </ul>
      ) : (
       <h1>FUCK YOU!!!!!</h1>
      )}
     </div>
     <div className="col ui card">
      <img
       src="http://4.bp.blogspot.com/-xhztiK_lRX0/VZxwVYQh__I/AAAAAAABARU/MS1Y_FldP8U/s1600/baby-money-1.jpg"
       className="ui image"
      />
      <div className="content">
       <div className="header">{this.state.firstName} {this.state.lastName}</div>
       <div className="meta">Joined {formDate}</div>
       <div className="description">Welcome to your account</div>
      </div>
​
​
      <div className="extra content">
      
       <a>
        <i aria-hidden="true" className="user icon" />{this.state.results.length} Connections
       </a>
​
      </div>
​
​
     </div>
    </div>
   </div>
  );
 }
}
​
export default UserHome;
