import React, { Component } from "react";
import { Image, List } from "semantic-ui-react";
import "./UserHome.css";

class UserHome extends Component {
  render() {
    const sizes = ["massive"];
    return (
      <div>
        <div className="ui secondary pointing menu">
          <a href="/userhome">Home</a>
          <a href="/survey">Preference Survey</a>
          <div className="right menu">
            <a href="/sign_out" className="ui item">
              Sign Out
            </a>
          </div>
        </div>
        <div className="profile-container">
          <div class="ui card">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class="ui image"
            />
            <div class="content">
              <div class="header">Jessica</div>
              <div class="meta">Joined in 2019</div>
              <div class="description">Welcome to your account</div>
            </div>
            <div class="extra content">
              <a>
                <i aria-hidden="true" class="user icon" />3 Matches
              </a>
            </div>
          </div>
          <div className="match-panel">
            <h1 className="match-text">Matches</h1>
            {sizes.map(size => (
              <div key={size}>
                <List divided horizontal size={size}>
                  <List.Item>
                    <Image
                      avatar
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                    <List.Content>
                      <List.Header>Match #1</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image
                      avatar
                      src="https://images.pexels.com/photos/814053/pexels-photo-814053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                    <List.Content>
                      <List.Header>Match #2</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image
                      avatar
                      src="https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=500&w=500"
                    />
                    <List.Content>
                      <List.Header>Match #3</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserHome;
