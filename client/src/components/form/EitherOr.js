import React from 'react';
class EitherOr extends React.Component {
    render() {
        return (
            <div className="qCont">
                <div className=" ui qbox segment">
                    <div className="ui raised segment">
                        <div className="titleWrap">
                            <span className="qTitle">{this.props.question}</span>
                            <div className="ui buttons">
                                <button className="ui button active">{this.props.btn1}</button>
                                <div className="or"></div>
                                <button className="ui positive button">{this.props.btn2}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    };
};

export default EitherOr;