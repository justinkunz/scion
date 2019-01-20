import React from 'react';
import { Slider } from 'react-semantic-ui-range';

class Slide extends React.Component {
    render() {
        return (
            <div>
                <div className="qCont">
                    <div className=" ui qbox segment">
                        <div className="ui raised segment">
                            <div className="titleWrap">
                                <div className="ui form">
                                    <div className="sliderTitle">{this.props.question}</div>
                                    <Slider settings={this.props.settings} color={this.props.color} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Slide;