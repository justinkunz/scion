import React from 'react';

class SubmitBtn extends React.Component {
    render() {
        return (
            <div>
                <div className="qCont">
                    <div className=" ui qbox segment">
                        <div className="ui raised segment">
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