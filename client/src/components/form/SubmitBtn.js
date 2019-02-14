import React from 'react';

class SubmitBtn extends React.Component {
    render() {
        return (
            <div>
                <div className="qCont">
                <div className=" ui qbox segment" style={{backgroundColor: "rgb(241, 240, 240)"}}>
                        <div className="ui raised segment" style={{backgroundColor: "rgb(244, 245, 245)"}}>
                            <div className="titleWrap">
                                <button onClick={this.props.onSubmit} className="ui secondary button">
                                    Submit Answers
                                </button>
                                <button onClick={this.props.onCancel} className="ui button">
                                    Cancel
                                 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default SubmitBtn;