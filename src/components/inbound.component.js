import React , {Component} from 'react';
import { render } from '@testing-library/react';

export default class inbound extends Component{
    
    constructor(props) {
        super(props);

        this.onchange_asset_seq_no = this.onchange_asset_seq_no.bind(this);
        this.onchange_asset_make = this.onchange_asset_make.bind(this);
        this.onchange_asset_model = this.onchange_asset_model.bind(this);
        this.onchange_asset_sender_epf = this.onchange_asset_sender_epf.bind(this);
        this.onchange_asset_branch_code = this.onchange_asset_branch_code.bind(this);
        this.onchange_asset_tracking_num = this.onchange_asset_tracking_num.bind(this);
        this.onchange_asset_description = this.onchange_asset_description.bind(this);
        this.onchange_asset_reciever_epf = this.onchange_asset_reciever_epf.bind(this);
        this.onchange_asset_recieved_location = this.onchange_asset_recieved_location.bind(this);
        this.onchange_asset_recieved_date = this.onchange_asset_recieved_date.bind(this);
        this.onchange_asset_expected_outbound_date = this.onchange_asset_expected_outbound_date.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            asset_seq_no: '',
            asset_make:'',
            asset_model:'',
            asset_sender_epf:'',
            asset_branch_code:'',
            asset_tracking_num:'',
            asset_description:'',
            asset_reciever_epf:'',
            asset_recieved_location:'',
            asset_recieved_date:'',
            asset_expected_outbound_date:'',
            asset_inbound_completed: false
        }
    }
    

    onchange_asset_seq_no(e)
    {
        this.setState({
            asset_seq_no: e.target.value
        });
    }

    onchange_asset_make(e)
    {
        this.setState({
            asset_make: e.target.value
        });
    }
    
    onchange_asset_model(e)
    {
        this.setState({
            asset_model: e.target.value
        });
    }

    onchange_asset_sender_epf(e)
    {
        this.setState({
            asset_sender_epf: e.target.value
        });
    }

    onchange_asset_branch_code(e)
    {
        this.setState({
            asset_branch_code: e.target.value
        });
    }

    onchange_asset_tracking_num(e)
    {
        this.setState({
            asset_tracking_num: e.target.value
        });
    }

    onchange_asset_description(e)
    {
        this.setState({
            asset_description: e.target.value
        });
    }

    onchange_asset_reciever_epf(e)
    {
        this.setState({
            asset_reciever_epf: e.target.value
        });
    }

    onchange_asset_recieved_location(e)
    {
        this.setState({
            asset_recieved_location: e.target.value
        });
    }

    onchange_asset_recieved_date(e)
    {
        this.setState({
            asset_recieved_date: e.target.value
        });
    }

    onchange_asset_expected_outbound_date(e)
    {
        this.setState({
            asset_expected_outbound_date: e.target.value
        });
    }

    onSubmit(e){
        
        e.preventDefault();

        console.log(`Form Submitted :`);
        console.log(`Sequence Number : ${this.state.asset_seq_no}`);
        console.log(`Asset Make : ${this.state.asset_make}`);
        console.log(`Asset model : ${this.state.asset_model}`);
        console.log(`Sender EPF : ${this.state.asset_sender_epf}`);
        console.log(`Brnach code : ${this.state.asset_branch_code}`);
        console.log(`Tracking Number : ${this.state.asset_tracking_num}`);
        console.log(`Description : ${this.state.asset_description}`);
        console.log(`Reciever EPF : ${this.state.asset_reciever_epf}`);
        console.log(`Recieved Location : ${this.state.asset_recieved_location}`);
        console.log(`Recieved date : ${this.state.asset_recieved_date}`);
        console.log(`Expected Outbound Date : ${this.state.asset_expected_outbound_date}`);

        this.setState ({
            asset_seq_no: '',
            asset_make:'',
            asset_model:'',
            asset_sender_epf:'',
            asset_branch_code:'',
            asset_tracking_num:'',
            asset_description:'',
            asset_reciever_epf:'',
            asset_recieved_location:'',
            asset_recieved_date:'',
            asset_expected_outbound_date:'',
            asset_inbound_completed: false
        })
    }

    render()
    {
        return(
            <div style={{margin:20}}>
                <br></br>
                <br></br>
                <h2>Inbound Interface</h2>
                
                <form>

                    <table cellPadding="10">
                        <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="form-group">
                                <label>Asset Sequence Number :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                <input type="text" className="form-control" value={this.state.asset_seq_no} onChange={this.onchange_asset_seq_no}></input>
                                </div>
                            </td>
                        
                            <td>
                                <div className="form-group">
                                <label>Asset Make :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                <input type="text" className="form-control" value={this.state.asset_make} onChange={this.onchange_asset_make}></input>
                                </div>
                            </td>
                        </tr>
                        

                        <tr>
                            <td>
                                <div className="form-group">
                                <label>Asset Model :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                <input type="text" className="form-control" value={this.state.asset_model} onChange={this.onchange_asset_model}></input>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                <label>Asset Sender EPF Number :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                <input type="text" className="form-control" value={this.state.asset_sender_epf} onChange={this.onchange_asset_sender_epf}></input>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="form-group">
                                    <label>Asset Tracking Number :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={this.state.asset_tracking_num} onChange={this.onchange_asset_tracking_num}></input>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    <label>Asset Description :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={this.state.asset_description} onChange={this.onchange_asset_description}></input>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="form-group">
                                    <label>Asset Reciever EPF :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={this.state.asset_reciever_epf} onChange={this.onchange_asset_reciever_epf}></input>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    <label>Asset Recived Location :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                <input type="text" className="form-control" value={this.state.asset_recieved_location} onChange={this.onchange_asset_recieved_location}></input>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="form-group">
                                    <label>Asset Recieved Date :</label>
                                </div>
                            </td>

                            <td>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.asset_recieved_date} onChange={this.onchange_asset_recieved_date}></input>
                            </div>
                            </td>

                            <td>
                                
                            </td>
                            <td>
                                <input type="submit" value="Create Inbound" className="btn btn-primary" onClick={this.onSubmit}></input>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    
                </form>

                
            </div>
        )
    }
}