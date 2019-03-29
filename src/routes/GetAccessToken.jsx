import React from 'react'
import axios from "axios";
import M from "materialize-css";
import { withRouter } from 'react-router-dom'

class GetAccessToken extends React.Component {
    //Constructor to set all preset data such as apiUrl, packageID, clietReference

    constructor(props) {
        super(props);
        this.state = {
            tallyUp: 0,
            proofIt: 0,
            shortCuts: 0,
            resemble: 0,
            matchingFaces: 0,
            numBubbles: 0,
            gridLock: 0,
            emotionalTies: 0,
            languageID: '',
            getToken: '',
            getCandidateId:''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    // the select need to be initialize
    componentDidMount() {
        const elem = document.querySelector("select");
        const instances = M.FormSelect.init(elem);
    }

    /*
        Handle change function set the value of input form to new value
     */
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            languageID: e.target.value
        });
    };
    /*
        Handle click function perform api call, get accessToken then change to hub
     */
    handleClick = (e) => {
        const headers = {
            'x-client-id': '69696969-6969-6969-6969-696969696969',
            'x-api-key': 'r2zf4FdpQWaazJd1t9yj0aQ3vXXcfy7J1HYTfnIj',
            'content-type': 'application/json'
        }
        const adsUrl = 'http://dev-hub-2.0.s3-website-ap-southeast-2.amazonaws.com/ads/'
        const apiUrl = 'https://assessmentapi.dev.int.revelian.com/api/candidates'
        const packageId = 'aafd7992-dfbb-4cf1-9bd6-31ade8442b4e'
        const clientReference = 'bef5513d-e4aa-4c78-a497-41ba5f54872f'
        const gamesCompletedRedirectUrl = 'https://d1rcpmq66cu07i.cloudfront.net'
        const authenticateCandidateUrl = 'https://assessmentapi.dev.int.revelian.com/api/token/'
        const language = this.state.languageID;
        // In Axios headers info need to go in config and body info go to data
        if(language===''){
            axios.post(apiUrl, {
                //body in JSon API is the data in axios library
                'gamesCompletedRedirectUrl': gamesCompletedRedirectUrl,
                'packageId': packageId,
                'clientReference': clientReference,
                'timeScaleAdjustments': {
                    'TallyUp': this.state.tallyUp,
                    'ProofIt': this.state.proofIt,
                    'ShortCuts': this.state.shortCuts,
                    'Resemble': this.state.resemble,
                    'MatchingFaces': this.state.matchingFaces,
                    'NumBubbles': this.state.numBubbles,
                    'GridLock': this.state.gridLock,
                    'EmotionalTies': this.state.emotionalTies
                }
            }, {headers: headers}).then(res => {
                this.setState({
                    getToken: res.data.accessToken,
                    getCandidateId: res.data.candidateId
                });
                console.log(this.props);
                // passing candidateId data to app then app pass to report
                this.props.props.candidateId(this.state.getCandidateId);
                // authorize the candidate
                axios.post(authenticateCandidateUrl + this.state.getToken);

                console.log('candidate authenticated');
                // open game in new tab using the accessToken
                window.open(adsUrl + this.state.getToken);
                // redirect the current page to report
                // I don't think I should do this
                window.location.replace('/report');
            });

        } else {
            axios.post(apiUrl, {
                //body in JSon API is the data in axios library
                'packageId': packageId,
                'clientReference': clientReference,
                'languageId': this.state.languageID,
                'timeScaleAdjustments': {
                    'TallyUp': this.state.tallyUp,
                    'ProofIt': this.state.proofIt,
                    'ShortCuts': this.state.shortCuts,
                    'Resemble': this.state.resemble,
                    'MatchingFaces': this.state.matchingFaces,
                    'NumBubbles': this.state.numBubbles,
                    'GridLock': this.state.gridLock,
                    'EmotionalTies': this.state.emotionalTies
                }
            }, {headers: headers}).then(res => {
                this.setState({getToken: res.data.accessToken});
                window.location.replace(adsUrl + this.state.getToken);
            });

        }

        e.preventDefault();
    };


    render() {
        return (
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <div className="card">
                        <div className="card-action cyan lighten-2 white-text">
                            <h3 className={'center-align'}>Make Adjustment</h3>
                        </div>

                        <div className="section card-content center-align">
                            <div className="input-field">
                                <select value={this.state.languageID} onChange={this.handleChange}>
                                    <option value=''>Choose language later</option>
                                    <option value='zh_cn'>中文</option>
                                    <option value="fr_fr">Français</option>
                                    <option value="es_419">Español</option>
                                    <option value="ja">Japanese</option>
                                    <option value="pt_br">Português</option>
                                    <option value="en_au">English Australia</option>
                                    <option value="en_us">English US</option>
                                    <option value="en_uk">English UK</option>
                                </select>
                                <label htmlFor="language">Language:</label>
                            </div>

                            <div className="input-field">
                                <input type="number" name="tallyUp" step={0.1} value={this.state.tallyUp}  onChange={this.handleChange}/>
                                <label htmlFor="tallyUp">TallyUp</label>
                            </div>

                            <div className="input-field">
                                <input type="number" name="proofIt" step={0.1} value={this.state.proofIt} onChange={this.handleChange}/>
                                <label htmlFor="proofIt">ProofIt</label>
                            </div>

                            <div className="input-field">
                                <input type="number" name="shortCuts" step={0.1} value={this.state.shortCuts} onChange={this.handleChange}/>
                                <label htmlFor="shortCuts">ShortCuts</label>
                            </div>

                            <div className="input-field">
                                <input type="number" name="resemble" step={0.1} value={this.state.resemble} onChange={this.handleChange}/>
                                <label htmlFor="resemble">Resemble</label>
                            </div>

                            <div className="input-field">
                                <input type="number" name="matchingFace" step={0.1} value={this.state.matchingFaces} onChange={this.handleChange}/>
                                <label htmlFor="matchingFace">MatchingFaces</label>
                            </div>

                            <div className="input-field">
                                <input type="number" name="numBubbles" step={0.1} value={this.state.numBubbles} onChange={this.handleChange}/>
                                <label htmlFor="numBubbles">NumBubbles</label>
                            </div>

                            <div className="input-field">
                                <input type="number" name="gridLock" step={0.1} value={this.state.gridLock} onChange={this.handleChange}/>
                                <label htmlFor="gridLock">GridLock</label>
                            </div>

                            <div className="input-field">
                                <input type="number" name="emotionalTies" step={0.1} value={this.state.emotionalTies} onChange={this.handleChange}/>
                                <label htmlFor="emotionalTies">EmotionalTies</label>
                            </div>

                            <button onClick={this.handleClick} className="btn-large waves-red cyan lighten-2" style={{ width: '100%' }}>Get Access</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default withRouter(GetAccessToken);


