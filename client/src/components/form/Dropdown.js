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
                                        <span>Question </span>
                                        <select className="ui search dropdown ui qbox segment">
                                            <option value="">Default Dropdown Setting</option>
                                            <option >Choice A</option>
                                            <option >Choice B</option>
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