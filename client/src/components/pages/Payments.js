import React, { Component } from "react";
import { Input, Button, Form } from "semantic-ui-react";

const stateList = [
  'AK',
  'AR',
  'AL',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'IA',
  'ID',
  'IL',
  'IN',
  'KS',
  'KY',
  'LA',
  'MA',
  'MD',
  'ME',
  'MI',
  'MN',
  'MO',
  'MS',
  'MT',
  'NC',
  'ND',
  'NE',
  'NH',
  'NJ',
  'NM',
  'NV',
  'NY',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VA',
  'VT',
  'WA',
  'WI',
  'WV',
  'WY'
];

class Payments extends Component {
  state = {};

  render() {
    return (
    //   <div className="payment-page">
        <div className="container">
          <div className="row">
            {/* <div className="picture-column">
              <p>picture goes here</p>
            </div> */}
            <div className="form-column" width={16}>
              <Form>
                <Form.Group>
                  <Form.Input transparent placeholder="Card Number" width={6} />
                  <Form.Input
                    type="date"
                    transparent
                    placeholder="expiration date"
                    width={4}
                  />
                  <Form.Input transparent placeholder="CCV" width={2} />
                </Form.Group>
                <Form.Group>
                  <Form.Input transparent placeholder="First Name" width={6} />
                  <Form.Input transparent placeholder="Last Name" width={6} />
                </Form.Group>
                <hr />
                <label>Billing Address</label>
                <br />
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
                    <option value="map over state list" />
                  </datalist>
                </Form.Group>
                <Button basic color='pink' content='Submit' />
              </Form>
            </div>
          </div>
        </div>
    //   </div>
    );
  }
}

export default Payments;
