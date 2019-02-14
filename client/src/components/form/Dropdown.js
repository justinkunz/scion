import React from 'react';
import "./Dropdown.css";

class Dropdown extends React.Component {
    render() {

        return (
            <div>
                <div className="qCont">
                    <div className=" ui qbox segment" style={{backgroundColor: "rgb(241, 240, 240)"}}>
                        <div className="ui raised segment" style={{backgroundColor: "rgb(244, 245, 245)"}}>
                            <div className="titleWrap">
                                <div className="ui form">
                                    <div className="field">
                                        <span>{this.props.question}</span>
                                        <select style={{backgroundColor: "#efefef"}} onChange={(e) => this.props.onValueChange(this.props.fieldId, e.target.value)} className="valuegrab ui search dropdown ui qbox segment">
                                            {this.props.listOptions.map(e => <option >{e}</option>)}
                                        </select>
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

export default Dropdown;