import React from 'react';

class Dropdown extends React.Component {
    render() {

        return (
            <div>
                <div className="qCont">
                    <div className=" ui qbox segment">
                        <div className="ui raised segment">
                            <div className="titleWrap">
                                <div className="ui form">
                                    <div className="field">
                                        <span>{this.props.question}</span>
                                        <select onChange={(e) => this.props.onValueChange(this.props.fieldId, e.target.value)} className="valuegrab ui search dropdown ui qbox segment">
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