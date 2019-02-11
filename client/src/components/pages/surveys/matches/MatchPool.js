import React, { Component } from 'react';
import styled from 'styled-components';

class MatchPool extends Component {

    constructor(props) {

        super(props);

        this.state = { signedIn: true }

        this.matchPool = {
            users: [
                {
                    email: "mine@eamil.com",
                    password: "password",
                    user_type: "GC",
                    first_name: "Ben",
                    last_name: "Dover",
                    phone_num: 420247365,
                    zipcode: 69365,
                    created_at: "9/10/1934",
                    survery_answered: true,
                    survey_results: { 
                        degree_type: "Associates Degree",
                        PL_PC: "Pro-Life",
                        religion: "Christian",
                        embryos_count: "7-10",
                        birthCenter: "No",
                        hospital: "Yes",
                        implant_timeline: "6-12 months",
                        location: "Yes",
                        haveChildren: "Yes",
                        previous_gc: "Yes",
                        relationshipStatus: "Married",
                        desiredCompensation: "$50,000 - 75,000",
                        insurance: "Yes"
                    },
                    numerical_survery: { 
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
                        insurance: 5
                    }
                },
                {
                    email: "yours@eamil.com",
                    password: "getMoney",
                    user_type: "IP",
                    first_name: "Tyrone",
                    last_name: "Biggums",
                    phone_num: 45454554,
                    zipcode: 75070,
                    created_at: "9/10/1986",
                    survery_answered: true,
                    survey_results: { 
                        degree_type: "PhD",
                        PL_PC: "Yes",
                        religion: "Not Religous/Agnostic/Atheist",
                        embryos_count: "4-6",
                        birthCenter: "Yes",
                        hospital: "No",
                        implant_timeline: "0-3 months",
                        location: "No",
                        haveChildren: "No",
                        previous_gc: "No",
                        relationshipStatus: "Single",
                        desiredCompensation: "> $100,000",
                        insurance: "No"
                    },
                    numerical_survery: { 
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
                        insurance: 5
                    }
                }

            ] //End user array

        }//End matchPool

    } //End constructor

    render() {

        // tried to make a svg of image it allow for clip pathing
        // const Divider = styled.svg`
        //     background: https://www.intouchweekly.com/wp-content/uploads/2018/05/how-long-was-casey-anthony-in-jail.jpg;
        //     clip-path: circle(50% at 50% 50%);
        // `;

        return (

            <div className="container">

                {this.matchPool.users.length ? (
                    <ul style={{margin: "0 auto", overflow: "auto"}}>
                        {this.matchPool.users.map(match => {
                            console.log(match);
                            let emailer = ("mailto:"+ match.email);
                            return (
                                <li style={{float: "left", listStyle:"none"}} key={match.password}>

                                    <div className="card m-1" style={{height:"auto", width:"auto", backgroundColor:"rgb(87, 139, 139)"}}>

                                        <img className="card-img m-3" 
                                            style={{ height:"auto", width:"300px" }} 
                                            src="https://www.intouchweekly.com/wp-content/uploads/2018/05/how-long-was-casey-anthony-in-jail.jpg" 
                                            alt="Ur mum iz hawt"
                                        />

                                        <div className="card-body">

                                            <div className="row">

                                                <div className="col">

                                                    <h3 className="card-title">
                                                        {match.first_name}
                                                    </h3>

                                                    <h3 className="card-subtitle">
                                                        {match.last_name}
                                                    </h3>

                                                    <div className="mt-2">

                                                        <a href="#" className="btn btn-primary">Go somewhere</a>

                                                        <form className="m-2" action={emailer} encType="text/plain" method="post" id="email-form">
                                                            <input type="submit" id="email" className="text-bold rounded" value="Email this user" />
                                                        </form>

                                                    </div>

                                                </div>

                                                <div className="card-text mb-2">

                                                    <h6 style={{width:"50%", margin:"auto"}} className="border-bottom border-dark pb-2">
                                                        What they bring to the table
                                                    </h6>

                                                    <ul style={{listStyle:"none", width:"65%", margin:"auto"}}>
                                                        <li>Degree: {match.survey_results.degree_type}</li>
                                                        <li>Compensation: {match.survey_results.desiredCompensation}</li>
                                                        <li>Religon: {match.survey_results.religion}</li>
                                                        <li>Embryos: {match.survey_results.embryos_count}</li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )})}
                    </ul>
                ) : (
                        <div>
                            <h3>No Results to Display</h3>
                            <p>Perhaps you are a asking a bit much?</p>
                        </div>
                    )}

            </div>

        ); // End return 

    } //End render

} //End MainPage component

export default MatchPool;