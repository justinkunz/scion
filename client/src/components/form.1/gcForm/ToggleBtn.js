import React from 'react';
import Toggle from './Toggle'

class ToggleBtn extends React.Component {
    render() {
        return (
            <div>
                <div className="qCont">
                    <div className=" ui qbox segment">
                        <div className="ui raised segment">
                            <div className="titleWrap">
                                <span className="qTitle">{this.props.toggleLeft}</span>
                                <Toggle className="toggleComp" />
                                <span>{this.props.toggleRight}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
};

export default ToggleBtn;