import React, { Component } from 'react';


class FilterDiv extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.filterDisplay);
    }

    render() {
        return (
            <div id="filterdiv" style={{display:"block"}}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className={"searchBar"} style={{display:this.props.filterDisplay}}>
                                <input type="text" id="acsel" className={"_chg"} placeholder="account"/>
                                <input type="text" id="d1sel" className={"_chg"} placeholder="date from"/>
                                <input type="text" id="d2sel" className={"_chg"} placeholder="date to"/>
                                <input type="text" id="amsel" className={"_chg"} placeholder="amount"/>
                                <input type="text" id="cdsel" className={"_chg"} placeholder="code"/>
                                <input type="text" id="desel" className={"_chg"} placeholder="description"/>
                                <button id="searchall">Go</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FilterDiv;