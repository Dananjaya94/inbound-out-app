import React , {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/entry.nostyle';
import axios from 'axios';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

var newInbound = {};
$(document).ready(function(){

    // code to read selected table row cell data (values).
    $("#inboundTable").on('click','.btnSelect',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         
         var col1=currentRow.find("td:eq(0)").html(); // get current row 1st TD value
         var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
         var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
         var col4=currentRow.find("td:eq(3)").text(); // get current row 3rd TD
         var col5=currentRow.find("td:eq(4)").text(); // get current row 3rd TD
         var col6=currentRow.find("td:eq(5)").text(); // get current row 3rd TD
         var col7=currentRow.find("td:eq(6)").text(); // get current row 3rd TD
         var col8=currentRow.find("td:eq(7)").text(); // get current row 3rd TD
         var col9=currentRow.find("td:eq(8)").text(); // get current row 3rd TD
         var data=col1+"\n"+col2+"\n"+col3+"\n"+col4;
         
         $('#inb_id').val(col1);
         $('#inb_des').val(col3);
         $('#inb_ser').val(col4);
         $('#inb_bra').val(col5);
         $('#inb_asstrec').val(col6);
         $('#inb_asstrecepf').val(col7);
         $('#inb_itofnm').val(col8);
         $('#inb_itofepf').val(col9);


         newInbound = {

            asset_out_id: col1,
            asset_rec_date: col2,
            asset_description:col3,
            asset_seq_no: col4,
            asset_branch_code:col5,
            asset_reciever_name: col6,
            asset_reciever_epf:col7,
            asset_it_office_name:col8,
            asset_it_office_epf:col9
        }

    });
});

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
        this.onChange_asset_outid = this.onChange_asset_outid.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        

        this.state = {
            inboundoutboundArr: [],
            inboundDT: [],
            asset_out_id: '',
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
        axios.get('http://localhost:4000/outbound/')
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
        console.log(e.target.value);
    }

    onChange_asset_outid(e)
    {
        this.setState({
            asset_out_id: e.target.value
        });
    }

    onSubmit(e){
        
        e.preventDefault();

        console.log(`Form Submitted :`);
        console.log(`id : ${this.state.asset_out_id}`);
        console.log(`Date Recieved : ${this.state.asset_rec_date}`);
        console.log(`Description : ${this.state.asset_description}`);
        console.log(`Sequence Number : ${this.state.asset_seq_no}`);
        console.log(`Brnach code : ${this.state.asset_branch_code}`);
        console.log(`Hand Over User Name : ${this.state.asset_reciever_name}`);
        console.log(`Hand Over EPF : ${this.state.asset_reciever_epf}`);
        console.log(`IT Office Name : ${this.state.asset_it_office_name}`);
        console.log(`IT Officer ID : ${this.state.asset_it_office_epf}`);

        // const newInbound = {

        //     asset_out_id: this.state.asset_out_id,
        //     asset_rec_date: this.state.asset_rec_date,
        //     asset_description:this.state.asset_description,
        //     asset_seq_no: this.state.asset_seq_no,
        //     asset_branch_code:this.state.asset_branch_code,
        //     asset_reciever_name: this.state.asset_reciever_name,
        //     asset_reciever_epf:this.state.asset_reciever_epf,
        //     asset_it_office_name:this.state.asset_it_office_name,
        //     asset_it_office_epf:this.state.asset_it_office_epf
        // }

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
                    <tr key = {item.outbound_id}>
                        <td>{item.outbound_id}</td>
                        <td>{item.outbound_date}</td>
                        <td>{item.outbound_itemdescription}</td>
                        <td>{item.outbound_serialnumber}</td>
                        <td>{item.outbound_departmentorbranch}</td>
                        <td>{item.outbound_handoverusername}</td>
                        <td>{item.outbound_handoveruserepf}</td>
                        <td>{item.outbound_itofficername}</td>
                        <td>{item.outbound_itofficerepf}</td>
                        <td><input type="submit" value="Recieve Item" className="btnSelect"></input></td>
                    </tr>
                );
            })
        );

        return (
            
                <table id="myTable" className="tableFixHead" style={{overflowX:"auto"}} id="inboundTable" cellPadding="6">
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
                            <input id="inb_des" type="text" className="form-control" value={this.state.asset_description} onChange={this.onchange_asset_description}></input>
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
                            <input id="inb_ser" type="text" className="form-control" value={this.state.asset_seq_no} onChange={this.onchange_asset_seq_no}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Dep. / Branch :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input id="inb_bra" type="text" className="form-control" value={this.state.asset_branch_code} onChange={this.onchange_asset_branch_code}></input>
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
                            <input id="inb_asstrec" type="text" className="form-control" value={this.state.asset_reciever_name} onChange={this.onchange_asset_reciever_name}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Hand Over User Epf :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input id="inb_asstrecepf" type="text" className="form-control" value={this.state.asset_reciever_epf} onChange={this.onchange_asset_reciever_epf}></input>
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
                            <input id="inb_itofnm" type="text" className="form-control" value={this.state.asset_it_office_name} onChange={this.onchange_asset_it_officer_name}></input>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label>IT Officer ID :</label>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <input id="inb_itofepf" type="text" className="form-control" value={this.state.asset_it_office_epf} onChange={this.onchange_asset_it_officer_epf}></input>
                            {/* <input type="text" className="form-control" value={this.state.asset_recieved_date} onChange={this.onchange_asset_recieved_date}></input> */}
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <label>Outbound ID</label>
                    </div>
                    <div className="col-md-2">
                        <input id="inb_id" type = "text" className="form-control" value={this.state.asset_out_id} onChange={this.onChange_asset_outid}></input>
                    </div>
                    <div className="col-md-2"><br></br></div>
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