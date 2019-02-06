import React from 'react';
import Navbar from '../misc/Navbar';
class HomePage extends React.Component {
    render() {
        return (
            <div className="homePage">
                <Navbar activePage="home" style={{ height: "10vh" }} />
                <div className="background">
                    <div className="title">Matching Intended Parents with Gestational Carriers
                    <br />
                        <br />
                        <span className="smallTitle">Sign up as a </span>
                        <div className="ui buttons">
                            <button className="ui button" >Gestational Carrier</button>
                            <div className="or"></div>
                            <button className="ui button" >Intended Parent</button>
                        </div>
                        {/* <button onClick={() => this.props.onValueChange(this.props.fieldId, this.props.btn2)} className={btn2Active}>{this.props.btn2}</button> */}

                    </div>
                </div>
            </div>
        );
    };
};

export default HomePage;