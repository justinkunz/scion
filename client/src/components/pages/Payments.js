import React, { Component } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import Navbar from "../misc/Navbar";

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
  state = {};

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
              <hr />
              <Form width={10}>
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
                    <option value="map over state"/>
                  </datalist>
                </Form.Group>
                <br />
                <Button basic color="pink" content="Submit" />
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
