import React from 'react';

class RadioBtn extends React.Component {
    render() {
        return (
            <div>
                <div className="qCont">
                    <div className=" ui qbox segment">
                        <div className="ui raised segment">
                            <div className="ui form">
                                <div className="titleWrap">
                                    <div className="inline fields titleWrap">
                                        <label for="fruit">{this.props.question}</label>
                                        <div className="field">
                                            <div className="ui radio checkbox">
                                                <input type="radio" checked="" tabindex="0" className="hidden" />
                                                <label>{this.props.answer1}</label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui radio checkbox">
                                                <input type="radio" tabindex="1" className="hidden" />
                                                <label>{this.props.answer2}</label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui radio checkbox">
                                                <input type="radio" tabindex="2" className="hidden" />
                                                <label>{this.props.answer3}</label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui radio checkbox">
                                                <input type="radio" tabindex="3" className="hidden" />
                                                <label>{this.props.answer4}</label>
                                            </div>
                                        </div>
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

export default RadioBtn;