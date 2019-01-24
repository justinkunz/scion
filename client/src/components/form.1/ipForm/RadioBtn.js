import React from 'react';
import { Radio } from 'semantic-ui-react';

class RadioBtn extends React.Component {

    render() {
        const mapRadioBtns = () => {
            return this.props.listOptions.map(opt => {
                const uniqueId = this.props.fieldId + "-" + opt
                return (
                    <Radio
                        id={uniqueId}
                        label={opt}
                        className="ui radio checkbox radioBtn"
                        name={this.props.fieldId}
                        value={opt}
                        onChange={() => {
                            this.props.onValueChange(this.props.fieldId, opt)
                        }
                        }

                    />
                );
            });
        };

        return (
            <div>
                <div className="qCont">
                    <div className=" ui qbox segment">
                        <div className="ui raised segment">
                            <div className="ui form">
                                <div className="titleWrap">
                                    <label for={this.fieldId}>{this.props.question}</label>
                                    <div className="field radioBtnCont">
                                        {mapRadioBtns()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    };
};

export default RadioBtn;