import React , {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/entry.nostyle';
import axios from 'axios';
import {Link} from 'react-router-dom';
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
        this.onchange_asset_reciever_name = this.onchange_asset_reciever_name.bind(this);
        this.onchange_asset_it_officer_name = this.onchange_asset_it_officer_name.bind(this);
        this.onchange_asset_it_officer_epf = this.onchange_asset_it_officer_epf.bind(this);
        this.onchange_asset_recieved_location = this.onchange_asset_recieved_location.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        

        this.state = {
            inboundoutboundArr: [],
            inboundDT: [],
            asset_outbound_tracking_num:'',
            asset_seq_no: '',
            asset_make:'',
            asset_model:'',
            asset_sender_epf:'',
            asset_branch_code:'',
            asset_tracking_num:'',
            asset_description:'',
            asset_reciever_name:'',
            asset_reciever_epf:'',
            asset_it_office_name:'',
            asset_it_office_epf:'',
            asset_recieved_location:'',
            asset_expected_outbound_date:'',
            asset_rec_date: new Date(),
            asset_inbound_completed: false,
            inboundDetails: []
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:4000/inbound/')
        .then(data=> {
            this.setState({inboundoutboundArr : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    // loadOutbounds()
    // {
    //     return this.state.inboundoutboundArr.map(function(currentInbound,i){
    //         return <TotableInout intout={currentInbound} key={i} />;
    //     });
    // }
    
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

    onchange_asset_it_officer_name(e)
    {
        this.setState({
            asset_it_office_name: e.target.value
        })
    }

    onchange_asset_outbound_tracking_num(e)
    {
        this.setState({
            asset_outbound_tracking_num: e.target.value
        })
    }

    onchange_asset_it_officer_epf(e)
    {
        this.setState({
            asset_it_office_epf: e.target.value
        })
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

    onchange_asset_reciever_name(e)
    {
        this.setState({
            asset_reciever_name: e.target.value
        })
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
        console.log(`Date Recieved : ${this.state.asset_rec_date}`);
        console.log(`Description : ${this.state.asset_description}`);
        console.log(`Sequence Number : ${this.state.asset_seq_no}`);
        console.log(`Brnach code : ${this.state.asset_branch_code}`);
        console.log(`Hand Over User Name : ${this.state.asset_reciever_name}`);
        console.log(`Hand Over EPF : ${this.state.asset_reciever_epf}`);
        console.log(`IT Office Name : ${this.state.asset_it_office_name}`);
        console.log(`IT Officer ID : ${this.state.asset_it_office_epf}`);

        const newInbound = {

            asset_rec_date: this.state.asset_rec_date,
            asset_description:this.state.asset_description,
            asset_seq_no: this.state.asset_seq_no,
            asset_branch_code:this.state.asset_branch_code,
            asset_reciever_name: this.state.asset_reciever_name,
            asset_reciever_epf:this.state.asset_reciever_epf,
            asset_it_office_name:this.state.asset_it_office_name,
            asset_it_office_epf:this.state.asset_it_office_epf
        }

        axios.post('http://localhost:4000/inbound/add',newInbound)
        .then(res => toast(res.data));

    //     axios.post('http://localhost:3000', employee)
    //   .then(res => {
    //       const persons = res.data;
    //       this.setState({ persons });
    //     }) 

        this.renderInboundData(this.state.inboundoutboundArr);

        this.setState ({
            inboundDetails: [],
            asset_rec_date : new Date(),
            asset_description : '',
            asset_seq_no: '',
            asset_branch_code: '',
            asset_reciever_name: '',
            asset_reciever_epf: '',
            asset_it_office_name: '',
            asset_it_office_epf: '',
            asset_inbound_completed: false
        })
        

    }

    renderInboundData(inboundDT){
        let tableContent = (inboundDT === undefined || inboundDT === null || inboundDT.length === 0) ? null : (
            inboundDT.data.map((item) => {
                return (
                    <tr key = {item.inbound_id}>
                        <td>{item.inbound_id}</td>
                        <td>{item.inbound_date}</td>
                        <td>{item.inbound_itemdescription}</td>
                        <td>{item.inbound_serialnumber}</td>
                        <td>{item.inbound_departmentorbranch}</td>
                        <td>{item.inbound_handoverusername}</td>
                        <td>{item.inbound_handoveruserepf}</td>
                        <td>{item.inbound_itofficername}</td>
                        <td>{item.inbound_itofficerepf}</td>
                        <td><input type="submit" value="Recieve Item" className="btn btn-primary"></input></td>
                    </tr>
                );
            })
        );

        return (
            
                <table className="tableFixHead" style={{overflowX:"auto"}} id="inboundTable" cellPadding="6">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Item Description</th>
                            <th>Serial Number</th>
                            <th>Department</th>
                            <th>Hand over User</th>
                            <th>Hand Over EPF</th>
                            <th>It Officer</th>
                            <th>It Officer EPF</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
           
        );
    }

    render()
    {
        let content = this.renderInboundData(this.state.inboundoutboundArr);
        
        const notifySuccess = () => toast("Successfully Added");
        const { inboundDetails } =this.state;
        return(
            <div style={{margin:20}}>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        
                    </div>
                    <div className="col-md-5">
                        <h2>Inbound Interface</h2>
                    </div>
                </div>

                
                <div className="row">
                    
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Date :</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                        <DatePicker onChange={this.onChangeDate} value={this.state.asset_rec_date} timezone={'SL/Asia'}></DatePicker>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Item Description :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_description} onChange={this.onchange_asset_description}></input>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Serial Number :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_seq_no} onChange={this.onchange_asset_seq_no}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Dep. / Branch :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_branch_code} onChange={this.onchange_asset_branch_code}></input>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Hand Over User Name : </label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_reciever_name} onChange={this.onchange_asset_reciever_name}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Hand Over User Epf :</label>
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
                            <label>IT Officer Name :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_it_office_name} onChange={this.onchange_asset_it_officer_name}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>IT Officer ID :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.asset_it_office_epf} onChange={this.onchange_asset_it_officer_epf}></input>
                            {/* <input type="text" className="form-control" value={this.state.asset_recieved_date} onChange={this.onchange_asset_recieved_date}></input> */}
                            
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

                <div className="row">
                        <div className="col-md-2"></div>
                        <div className="tableFixHead">
                        {content}
                        </div>
                </div>

                
            </div>
        )
    }
}