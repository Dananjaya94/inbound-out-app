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

const TotableInout = props => (
    <tr>
        <td>{props.totblinout.inbound_id}</td>
        <td>{props.totblinout.inbound_date}</td>
        <td>{props.totblinout.inbound_itemdescription}</td>
        <td>{props.totblinout.inbound_serialnumber}</td>
        <td>{props.totblinout.inbound_departmentorbranch}</td>
        <td>{props.totblinout.inbound_handoverusername}</td>
        <td>{props.totblinout.inbound_handoveruserepf}</td>
        <td>{props.totblinout.inbound_itofficername}</td>
        <td>{props.totblinout.inbound_itofficerid}</td>
    </tr>
)
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

        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        
        

        this.state = {
            InboundData: [{
                inbound_id : '',
                inbound_date: '',
                inbound_itemdescription: '',
                inbound_serialnumber: '',
                inbound_departmentorbranch: '',
                inbound_handoverusername: '',
                inbound_handoveruserepf: '',
                inbound_itofficername: '',
                inbound_itofficerid: ''
            }],
            inboundoutboundArr: [],
            inboundDetails: [],
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
            asset_inbound_completed: false
        }
    }

    componentDidMount()
    {
        // axios.get('http://localhost:4000/inbound/')
        // .then(response=> {
        //     this.setState({inboundDetails : response.data});
        // })
        // .catch(function (error){
        //     console.log(error);
        // })

        // axios.get('http://localhost:4000/inbound/')
        // .then(resp => {
            
        //     console.log(resp.data);
        // });


        axios.get('http://localhost:4000/inbound/', { responseType: 'json' }).
        then(response => {
                this.setState({ inboundDetails: response.json });
                console.log(response.data);
            });
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        
        //this.getInboundDetails();

        // axios({
        //     method: "get",
        //     url: "http://localhost:4000/inbound/",
        //     withCredentials: true,
        //     headers: {
        //       "Access-Control-Allow-Origin": "127.0.0.1:4000",
        //       "Content-Type": "application/json",
        //       "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
        //       "Access-Control-Allow-Headers": "authorization",
        //       Accept: "application/json"
        //     }
        //   })
        //   .then(response => {
        //     if (response && response.data) {
        //       this.setState({ inboundDetails: response.data });
        //     }
        //   })
        //   .catch(error => console.log(error));


//           const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "http://localhost:4000/inbound/"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url)
// .then(response => {
//     if (response && response.data) {
//       this.setState({ inboundDetails: response.data });
//       console.log(this.state.inboundDetails);
//     }
//   })
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    }

    // getOutbounds = _ => {
    //     fetch('http://localhost:4000/inbound/')
    //     .then(response => response.json())
    //     .then(({ data }) => {
    //         console.log(data)
    //     })
    //     .catch(err => console.error(err))
    // }

    loadOutbounds()
    {
        return this.state.inboundDetails.map(function(currntitm , i){
            return <TotableInout totblinout = {currntitm} key={i}/>
        })
    }
    
// renderOutBounds = ({inbound_id ,inbound_date,inbound_itemdescription,inbound_serialnumber,
//     inbound_departmentorbranch,inbound_handoverusername,inbound_handoveruserepf,inbound_itofficername,
//     inbound_itofficerid}) => <div key={inbound_id}>{inbound_id}</div>

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
            asset_it_office_epf:this.state.asset_it_office_epf,
            asset_inbound_completed:this.state.asset_inbound_completed 
        }

        axios.post('http://localhost:4000/inboundout/create',newInbound)
        .then(res => console.log(res.data));

        toast("Successfully Added");

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

    

    getInboundDetails = _ => {
        fetch('http/localhost:4000/inbound')
        .then(response => response.json())
        .then(response => this.setState({ inboundDetails : response.json}))
        .then(( {data }) => {
            console.log(data)
        })
        .catch(err => console.error(err))
    }

    getKeys = function(){
        return Object.keys(this.props.inboundDetails[0]);
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
 })
    }
    
    getRowsData = function(){
        var items = this.props.inboundDetails;
        var keys = this.getKeys();
        return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        }) 
    }

    render()
    {
        const data = this.state.inboundDetails;
        const notifySuccess = () => toast("Successfully Added");
        const { inboundDetails } = this.state;
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
                        <div className="col-md-2"></div>
                        <div className="col-md-9">
                        <table className="table table-striped" style={{marginTop:20}}>
                        <thead>
                            <tr>
                            {/* {this.getHeader()} */}
                                {/* <th>ID</th>
                                <th>Date</th>
                                <th>Item Description</th>
                                <th>Serial Number</th>
                                <th>Department</th>
                                <th>Hand Over User</th>
                                <th>Hand Over EPF</th>
                                <th>IT Officer Name</th>
                                <th>IT officer EPF</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {/* {this.getRowsData()} */}
                            {/* <tr><td key={data.inbound_id}>{data.inbound_id}</td>
                            <td key={data.inbound_id}>{data.inbound_date}</td>
                            <td key={data.inbound_id}>{data.inbound_itemdescription}</td>
                            <td key={data.inbound_id}>{data.inbound_serialnumber}</td>
                            <td key={data.inbound_id}>{data.inbound_departmentorbranch}</td>
                            <td key={data.inbound_id}>{data.inbound_handoverusername}</td>
                            <td key={data.inbound_id}>{data.inbound_handoveruserepf}</td>
                            <td key={data.inbound_id}>{data.inbound_itofficername}</td>
                            <td key={data.inbound_id}>{data.inbound_itofficerid}</td></tr>
                             */}
                            
                            
                            
                            
                            
                            
                            
                            
                            {/* {this.loadOutbounds()} */}
                        </tbody>
                    </table>
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

                
            </div>
        )
    }
    
}
const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.inboundDetails[key]}>{props.inboundDetails[key]}</td>
        })
}