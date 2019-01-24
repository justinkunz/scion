import React from 'react';
class EitherOr extends React.Component {

    handleValueChange = (btn) => {
        this.props.onValueChange(this.props.fieldId, btn)
    }
    render() {

        const btn1Active = this.props.btn1 === this.props.activeAns ? "ui button positive" : "ui button"
        const btn2Active = this.props.btn2 === this.props.activeAns ? "ui button positive" : "ui button"

        return (
            <div className="qCont">
                <div className=" ui qbox segment">
                    <div className="ui raised segment">
                        <div className="titleWrap">
                            <span className="qTitle">{this.props.question}</span>
                            <div className="ui buttons">
                                <button onClick={() => this.props.onValueChange(this.props.fieldId, this.props.btn1)} className={btn1Active}>{this.props.btn1}</button>
                                <div className="or"></div>
                                <button onClick={() => this.props.onValueChange(this.props.fieldId, this.props.btn2)} className={btn2Active}>{this.props.btn2}</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    };
};

export default EitherOr;