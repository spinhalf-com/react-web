import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import Functions from './../../functions/functions';
import TableHead from "./table-head";
import TableFoot from "./table-foot";
import config from './../../config/config';
import axios from "axios";
import headers from "../../config/headers";

class FitbitPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUrl: this.fitbitAuthUrl()
        };
    }

    componentDidMount() {
        this.queryToState();
    }

    queryToState() {
        let params = Functions.parseQuery(window.location.hash);
        Object.entries(params).map(([key, value]) => {
            this.setState({[key]: value});
            return null;
        });
    }

    log() {
        // console.log(this.state)
    }

    saveTokenData() {
        let postUrl = config.API_URL + config.API_PREFIX + config.fitbitAuth.token_url;

        let data = this.state;

        console.log(headers);

        axios({
            method: 'POST',
            url: postUrl,
            headers: headers,
            data
        }).then(
            (result) => {
                alert('Saved');
            },
            (error) => {
                alert('Error');
                console.log(error);
            }
        );
    }
    
    fitbitAuthUrl() {
        let authUrl = config.fitbitAuth.url + "?response_type=token&client_id=" + config.fitbitAuth.client_id + "&redirect_uri=" + config.SELF_URL + config.fitbitAuth.callback_url + "&scope=" + config.fitbitAuth.scope + "&expires_in=31536000";
        return authUrl;
    }

    redirectRequest () {
        console.log(this.state);
        window.location.href = this.state.authUrl;
    }

    switchForm() {
        if(this.state.access_token && this.state.access_token.length) {
            return (<table id="rounded-corner" summary="">
                <thead>
                <TableHead headertext={"Save Fitbit Integration"}/>
                </thead>
                <tbody>
                <tr>
                    <td className="alt">
                        Scope
                    </td>
                    <td className="alt">
                        <textarea type="text" readOnly name="date" className={"inputCell"} value={this.state.scope}/>
                    </td>
                </tr>

                <tr>
                    <td className="alt disableDate">
                        Token Type
                    </td>
                    <td className="alt" id="dc">
                        <input type="text" readOnly name="date" className={"inputCell"} value={this.state.token_type}/>
                    </td>
                </tr>

                <tr>
                    <td className="alt">
                        Fitbit User Id
                    </td>
                    <td className="alt">
                        <input type="text" readOnly id="amount" name="amount" className={"inputCell"} value={this.state.user_id}/>
                    </td>
                </tr>

                <tr>
                    <td className="alt">
                        Expires In
                    </td>
                    <td className="alt">
                        <input type="text" readOnly name="expires_in" value={this.state.expires_in}/>
                    </td>
                </tr>

                <tr>
                    <td className="alt">
                        Access Token
                    </td>
                    <td className="alt">
                        <textarea readOnly name="token" cols="20" rows="3" className="prompt inputCell" value={this.state.access_token}></textarea>
                    </td>
                </tr>

                <tr>
                    <td className="alt">
                        <button value="Cancel" id="cancel" style={{width:"117px"}}>Cancel</button>
                    </td>
                    <td className="alt">
                        <button value="Save" id="save" style={{width:"120px"}} onClick={this.state.authUrl}>Save</button>
                    </td>
                </tr>
                <TableFoot/>
                </tbody>
            </table>)
        } else {
            return (<table id="rounded-corner" summary="">
                <thead>
                <TableHead headertext={"Request Fitbit Integration"}/>
                </thead>
                <tbody>
                <tr>
                    <td className="alt">
                        Fitbit Redirect
                    </td>
                    <td className="alt">
                        <textarea type="text" rows="10" readOnly name="date" className={"inputCell"} value={this.fitbitAuthUrl()}/>
                    </td>
                </tr>

                <tr>
                    <td className="alt" colSpan="2">
                        <button onClick={() => this.redirectRequest()} name="request" style={{width:"100%"}}>Request</button>
                    </td>
                </tr>
                <TableFoot/>
                </tbody>
            </table>);
        }
    }

    render() {
        return (
            <div id="left-m" className={"left-m"}>
                {this.switchForm()}
            </div>
        );
    }
}

export default FitbitPage;


//https://jfr.zapple.co/fitbitcallback#access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkJIRFAiLCJzdWIiOiIyVzNEQkwiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjE3NjA1NTE5LCJpYXQiOjE1ODYwNjk1MTl9.CldYN0Kxp-2ffxTkQfpphVGlUbaLlDyaXbTIA-xQ4Bw&user_id=2W3DBL&scope=sleep+profile+weight+location+social+nutrition+heartrate+activity+settings&token_type=Bearer&expires_in=31536000