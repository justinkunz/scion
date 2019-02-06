import React from 'react';

class Location extends React.Component {
    render() {

        return (
            <div>
                <div className="qCont" style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                    <div className=" ui qbox segment">
                        <div className="ui raised segment">
                            <div className="titleWrap">
                                <div className="ui form">
                                    <div className="field">
                                        <div>What is your zip code?</div>
                                        <input style={{ maxWidth: "30%", height: "1em" }} />
                                        <br />
                                        <button onClick={this.props.onSubmit} className="ui secondary button">
                                            Use My Location
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
};

export default Location;