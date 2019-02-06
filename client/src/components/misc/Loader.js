import React from 'react';

class Loader extends React.Component {
    render() {
        return (
            <div>
                <div className="ui segment" style={{ height: "100vh" }} >
                    <p></p>
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Loader;