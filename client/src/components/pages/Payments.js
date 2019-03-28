import React, { Component } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import Navbar from "../misc/Navbar";
import "./Payment.css"

const stateList = [
  "AK",
  "AR",
  "AL",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY"
];

class Payments extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Navbar 
        activePage="Payments"
        UserHome="Back to Home"
        signedIn="tue"
        />
        <br />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={4} />
            <Grid.Column width={8}>
              <h4>Payment Information</h4>
              <br/>
              <Form width={10}>
              <label>Payment Amount</label>
              <hr />
                <Form.Group>
                  <Form.Input transparent placeholder="Payment Amount" width={10}/>
                </Form.Group>
                <br/>
                <label>Card Number</label>
                <hr/>
                <Form.Group>
                  <Form.Input transparent placeholder="Card Number" width={6} />
                  <Form.Input transparent placeholder="Month" width={2} />
                  <Form.Input transparent placeholder="Year" width={2} />
                  <Form.Input transparent placeholder="CCV" width={2} />
                </Form.Group>
                <Form.Group>
                  <Form.Input transparent placeholder="First Name" width={6} />
                  <Form.Input transparent placeholder="Last Name" width={6} />
                </Form.Group>

                <br />
                <label>Billing Address</label>
                <hr />
                <Form.Group>
                  <Form.Input transparent placeholder="Address" width={6} />
                  <Form.Input transparent placeholder="City" width={4} />
                  <Form.Input
                    transparent
                    list="state"
                    placeholder="State"
                    width={2}
                  />
                  <datalist id="state">
                    <option value="AK"/>
                    <option value="AR"/>
                    <option value="AL"/>
                    <option value="AZ"/>
                    <option value="CA"/>
                    <option value="CO"/>
                    <option value="CT"/>
                    <option value="DE"/>
                    <option value="FL"/>
                    <option value="GA"/>
                    <option value="HI"/>
                    <option value="IA"/>
                    <option value="ID"/>
                    <option value="IL"/>
                    <option value="IN"/>
                    <option value="KS"/>
                    <option value="KY"/>
                    <option value="LA"/>
                    <option value="MA"/>
                    <option value="MD"/>
                    <option value="ME"/>
                    <option value="MI"/>
                    <option value="MN"/>
                    <option value="MO"/>
                    <option value="MS"/>
                    <option value="MT"/>
                    <option value="NC"/>
                    <option value="ND"/>
                    <option value="NE"/>
                    <option value="NH"/>
                    <option value="NJ"/>
                    <option value="NJ"/>
                    <option value="NM"/>
                    <option value="NV"/>
                    <option value="NY"/>
                    <option value="OH"/>
                    <option value="OK"/>
                    <option value="OR"/>
                    <option value="PA"/>
                    <option value="RI"/>
                    <option value="SC"/>
                    <option value="SD"/>
                    <option value="TN"/>
                    <option value="TX"/>
                    <option value="UT"/>
                    <option value="VA"/>
                    <option value="VT"/>
                    <option value="WA"/>
                    <option value="WI"/>
                    <option value="WV"/>
                    <option value="WY"/>
                  </datalist>
                </Form.Group>
                <br />
                {/* <a href="scionmatch.com/userhome"> */}
                  <Button if="payment-submit-btn" color="pink" content="Submit" href="/userhome"/>
                {/* </a> */}
              </Form>
            </Grid.Column>
            <Grid.Column width={4} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Payments;
