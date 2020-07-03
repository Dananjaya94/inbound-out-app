import React , {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/entry.nostyle';
import axios from 'axios';
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
        this.onChangeDate = this.onChangeDate.bind(this);
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
            asset_expected_outbound_date:'',
            asset_recieved_date: new Date(),
            asset_inbound_completed: false
        }
    }
    
    onChangeDate = asset_recieved_date => this.setState({ asset_recieved_date })

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
        console.log(`Date Recieved : ${this.state.asset_recieved_date}`);
        console.log(`Insert Completed : ${this.state.asset_inbound_completed}`)

        const newInbound = {
            asset_seq_no: this.state.asset_seq_no,
            asset_make:this.state.asset_make,
            asset_model:this.state.asset_model,
            asset_sender_epf:this.state.asset_sender_epf,
            asset_branch_code:this.state.asset_branch_code,
            asset_tracking_num:this.state.asset_tracking_num,
            asset_description:this.state.asset_description,
            asset_reciever_epf:this.state.asset_reciever_epf,
            asset_recieved_location:this.state.asset_recieved_location,
            asset_recieved_date:this.state.asset_recieved_date,
            asset_inbound_completed:this.state.asset_inbound_completed 
        }

        axios.post('http://localhost:4000/inboundout/create',newInbound)
        .then(res => console.log(res.data));

        toast("Successfully Added");

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
            date: new Date(),
            asset_inbound_completed: false
        })
        

    }

    render()
    {
        const notifySuccess = () => toast("Successfully Added");
        return(
            <div style={{margin:20}}>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <h2>Inbound Interface</h2>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Sequence Number :</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_seq_no} onChange={this.onchange_asset_seq_no}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Make :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_make} onChange={this.onchange_asset_make}></input>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Model :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_model} onChange={this.onchange_asset_model}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Sender EPF Number :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_sender_epf} onChange={this.onchange_asset_sender_epf}></input>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Brach Code :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_branch_code} onChange={this.onchange_asset_branch_code}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Tracking Number :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_tracking_num} onChange={this.onchange_asset_tracking_num}></input>
                        </div>
                    </div>
                
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Description :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_description} onChange={this.onchange_asset_description}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Reciever EPF :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_reciever_epf} onChange={this.onchange_asset_reciever_epf}></input>
                        </div>
                    </div>
                
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Recived Location :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_recieved_location} onChange={this.onchange_asset_recieved_location}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Asset Recieved Date :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            {/* <input type="text" className="form-control" value={this.state.asset_recieved_date} onChange={this.onchange_asset_recieved_date}></input> */}
                            <DatePicker onChange={this.onChangeDate} value={this.state.asset_recieved_date} timezone={'SL/Asia'}></DatePicker>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <input type="submit" value="Create Inbound" className="btn btn-primary" onClick={this.onSubmit}></input>
                        <ToastContainer />
                    </div>
                </div>

                
            </div>
        )
    }
}