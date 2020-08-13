import React , {Component} from 'react';
import { render } from '@testing-library/react';
import DatePicker from 'react-date-picker';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import $ from 'jquery';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Downshift from 'downshift';
import { Button } from '@material-ui/core';
var Typeahead = require('react-typeahead').Typeahead;





var outrowsss = [];
var outcolls = [];

var utrowsss1 = [];
var outcolss1 = [];

var serialmeta = [];
var seraildata = [];

var itofficermeta = [];
var itofficeid = [];
var itofficername = [];

var usnm = localStorage.getItem('user');
var pw = localStorage.getItem('pass');


$(document).ready(function(){

   
     


    $("#submitOutbound").click(function(){

      var out_des = $("#out_des").val();

      var out_date = $("#out_date").val();
      var out_sernum = $("#out_sernum").val();
      var out_bra = $("#out_bra").val();
      var out_usrnm = $("#out_usrnm").val();
      var out_usrepf = $("#out_usrepf").val();
      var out_offnm = $("#out_offnm").val();
      var out_offepf = $("#out_offepf").val();

       var month = $('input[name$="month"]').val();
       var day = $('input[name$="day"]').val();
       var year = $('input[name$="year"]').val();

       var fullyear = year+"/"+month+"/"+day;




      

      var HtmlStr = '<tr><td>'+fullyear+'</td><td>'+out_des+'</td><td>'+out_sernum+'</td><td>'+out_bra+'</td><td>'+out_usrnm+'</td><td>'+out_offnm+'</td></tr>';

      $('table tbody').append(HtmlStr);
      

    });


});



$.ajax({
    type: "GET",

        url: "http://localhost:4000/outboundSelection",
        contentType: "application/json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                      outcolls = [];
                      outrowsss= [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                          outcolls.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                          outrowsss.push(value.rows[i]);
                      }
                      console.log(outrowsss);
                      
                      $('#tbloutbound2').DataTable({
                        "scrollY": "100px",
                        data: outrowsss,

                        columns: [

                            { title: "Id" },

                            { title: "Description" },

                            { title: "Serial Number" },

                            { title: "Department" },

                           

                        ]

                    });

                  })
      },

      error: function (jqXHR, exception) {

      }

});


$.ajax({
    type: "GET",

        url: "http://localhost:4000/loadBranchDescription",
        contentType: "application/json",
        dataType: "json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                    outcolss1 = [];
                      utrowsss1= [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                        outcolss1.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                          
                        utrowsss1.push(value.rows[i][0]);
                      }
                      console.log(utrowsss1);
                  })
      },

      error: function (jqXHR, exception) {

      }

});

$.ajax({
    type: "GET",

        url: "http://localhost:4000/serialnumber",
        contentType: "application/json",
        dataType: "json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                    seraildata = [];
                      serialmeta= [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                        serialmeta.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                          
                        seraildata.push(value.rows[i][0]);
                      }
                      console.log(seraildata);
                  })
      },

      error: function (jqXHR, exception) {

      }

});

$.ajax({
    type: "GET",

        url: "http://localhost:4000/itofficers",
        contentType: "application/json",
        dataType: "json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                    itofficermeta = [];
                      itofficername= [];
                      itofficeid = [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                        itofficermeta.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                          
                        itofficeid.push(value.rows[i][0]);
                        itofficername.push(value.rows[i][1]);
                      }
                      console.log(itofficeid);
                      console.log(itofficername);
                  })
      },

      error: function (jqXHR, exception) {

      }

});





export default class OutboundComp extends Component{
    constructor(props) {
        super(props);
        this.onchange_outbound_Item_Description = this.onchange_outbound_Item_Description.bind(this);
        this.onchange_outbound_Serial_No = this.onchange_outbound_Serial_No.bind(this);
        this.onchange_outbound_Dept_Branch = this.onchange_outbound_Dept_Branch.bind(this);
        this.onchange_outbound_Handover_Username = this.onchange_outbound_Handover_Username.bind(this);
        this.onchange_outbound_It_Officername = this.onchange_outbound_It_Officername.bind(this);
        this.onchange_outbound_epf_no = this.onchange_outbound_epf_no.bind(this);
        this.onchange_outbound_it_officer_id = this.onchange_outbound_it_officer_id.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
       // this.onchange_outbound_outbounddate = this.onchange_outbound_outbounddate.bind(this);
       this.onSubmit = this.onSubmit.bind(this);


    this.state = {
       
        OutboundAllData: [],
        OutBoundDT: [],
        date : new Date,
        outbound_Item_Description: '',
        outbound_Serial_No:'',
        outbound_Dept_Branch: '',
        outbound_Handover_Username: '',
        outbound_It_Officername: '',
        outbound_epf_no: '',
        outbound_it_officer_id: ''
    }
}


componentDidMount()
{
    axios.get('http://localhost:4000/outbound/')
        .then(data=> {
            this.setState({OutboundAllData : data.result});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })
}

renderOutboundData(OutBoundDT){
    let tableContent = (OutBoundDT === undefined || OutBoundDT === null || OutBoundDT.length === 0) ? null : (
        OutBoundDT.data.map((item) => {
            return (
                <tr key = {item.outbound_id}>
                    {/* <td>{item.outbound_id}</td> */}
                    <td>{item.outbound_date}</td>
                    <td>{item.outbound_itemdescription}</td>
                    <td>{item.outbound_serialnumber}</td>
                    <td>{item.outbound_departmentorbranch}</td>
                    <td>{item.outbound_handoverusername}</td>
                    {/* <td>{item.outbound_handoveruserepf}</td> */}
                    <td>{item.outbound_itofficername}</td>
                    {/* <td>{item.outbound_itofficerepf}</td> */}
                </tr>
            );
        })
    );

    return (
            <table id="inboundTable" cellPadding="10">
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Date</th>
                        <th>Item Description</th>
                        <th>Serial Number</th>
                        <th>Department</th>
                        <th>Hand over User</th>
                        {/* <th>Hand Over EPF</th> */}
                        <th>It Officer</th>
                        {/* <th>It Officer EPF</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
       
    );
}

onChangeDate = date => this.setState({ date })

onchange_outbound_Item_Description(e)
{
    this.setState({
        outbound_Item_Description: e.target.value
    });
}
onchange_outbound_Serial_No(e)
{
    this.setState({
        outbound_Serial_No: e.target.value
    });
}
onchange_outbound_Dept_Branch(e)
{
    this.setState({
        outbound_Dept_Branch: e.target.value
    });
}
onchange_outbound_Handover_Username(e)
{
    this.setState({
        outbound_Handover_Username: e.target.value
    });
}
onchange_outbound_It_Officername(e)
{
    this.setState({
        outbound_It_Officername: e.target.value
    });
}
onchange_outbound_epf_no(e)
{
    this.setState({
        outbound_epf_no: e.target.value
    });
}
onchange_outbound_it_officer_id(e)
{
    this.setState({
        outbound_it_officer_id: e.target.value
    });
}



onSubmit(e){
        
    e.preventDefault();
    
    console.log(`Form Submitted :`);
    console.log(`outbound_Item_Description : ${this.state.outbound_Item_Description}`);
    console.log(`utbound_Serial_No : ${this.state.outbound_Serial_No}`);
    console.log(`utbound_Dept_Branch : ${this.state.outbound_Dept_Branch}`);
    console.log(`outbound_Handover_Username : ${this.state.outbound_Handover_Username}`);
    console.log(`outbound_It_Officername : ${this.state.outbound_It_Officername}`);
    console.log(`outbound_epf_no : ${this.state.outbound_epf_no}`);
    console.log(`outbound_it_officer_id : ${this.state.outbound_it_officer_id}`);
    console.log(this.state.date);
    
    const AddingOutBound = {
        date:this.state.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        outbound_Item_Description:this.state.outbound_Item_Description,
        outbound_Serial_No:this.state.outbound_Serial_No,
        outbound_Dept_Branch:this.state.outbound_Dept_Branch,
        outbound_Handover_Username:this.state.outbound_Handover_Username,
        outbound_epf_no:this.state.outbound_epf_no,
        outbound_It_Officername: this.state.outbound_It_Officername,
        outbound_it_officer_id:this.state.outbound_it_officer_id
    }

    axios.post('http://localhost:4000/outbound/add',AddingOutBound)
        .then(res => toast(res.data));

        window.location.reload(false);


        this.setState ({
        date: new Date(),
        outbound_Item_Description: '',
        outbound_Serial_No:'',
        outbound_Dept_Branch: '',
        outbound_Handover_Username: '',
        outbound_It_Officername: '',
        outbound_epf_no: '',
        outbound_it_officer_id:'',
        OutboundAllData: [],
        OutBoundDT: []
        
        });
        

}
    render()
    {
        
        let content = this.renderOutboundData(this.state.OutboundAllData);

        const notifySuccess = () => toast("Successfully Added");
        return(
            <div className="row">
             <div className="col">
                    <div className="leftside">
            <div style={{margin:20}}>
            <div className="row">
            <div className="col-md-4"></div>

            
                    
            <h2>Outbound Interface</h2>
                   
            
            <div className="col-md-4"></div>
            </div>
            <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                            <div className="form-group">
                             Outbound date : 
                            </div>
              </div>      

                    <div className="col-md-4">  

                        
                            <div className="form-group">

                            
                            <DatePicker id="out_date" onChange={this.onChangeDate} value={this.state.date} timezone={'SL/Asia'}></DatePicker>
                            
                            </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                             Item Description : 
                            </div>
                        </div>
                    <div className="col-md-4">  
                        <div className="form-group">
                        <input id="out_des" type="text" className="form-control" value={this.state.outbound_Item_Description} onChange={this.onchange_outbound_Item_Description}></input>
                        </div> 
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                             Serial No : 
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="form-group">
                                <Autocomplete
                                id = "combo-box-demo1"
                                options = {seraildata}
                                style = {{ width: 190}}
                                onChange={(event, newInputValue) => {
                                    this.setState({
                                        outbound_Serial_No: newInputValue
                                    })
                                  }}
                                renderInput={(params1) => <TextField {...params1} label="Combo Box" variant="outlined"></TextField>}></Autocomplete>
                            {/* <input id="out_sernum" type="text" className="form-control" value={this.state.outbound_Serial_No} onChange={this.onchange_outbound_Serial_No}></input> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                             Dept/Branch Code: 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <Autocomplete
                            id="combo-box-demo2"
                            options={utrowsss1}
                            style={{ width: 190 }}
                            onChange={(event, newInputValue1) => {
                                this.setState({
                                    outbound_Dept_Branch: newInputValue1
                                })
                              }}
                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                             Hand over User Name : 
                            </div>
                        </div>
                    
                    
                    
                        <div className="col-md-4">
                            <div className="form-group">
                                
                            <input id="out_usrnm" type="text" className="form-control" value={this.state.outbound_Handover_Username} onChange={this.onchange_outbound_Handover_Username}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                 Hand Over User EPF : 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input id="out_usrepf" type="text" className="form-control" value={this.state.outbound_epf_no} onChange={this.onchange_outbound_epf_no}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="form-group">                          
                                 IT Officer Name : 
                            
                            </div></div>
                            <div className="col-md-4">
                            <div className="form-group">
                               {/* <input type="text" ></input>  */}
                               <Autocomplete
                                id = "combo-box-demo3"
                                options = {itofficername}
                                style = {{width: 190}}
                                onChange={(event, newInputValue2) => {
                                    this.setState({
                                        outbound_It_Officername: newInputValue2
                                    })
                                  }}
                                renderInput={(params2) => <TextField {...params2} label="Combo box" variant="outlined"></TextField>}
                                ></Autocomplete>
                               {/* <input id="out_offnm" type="text" className="form-control" value={this.state.outbound_It_Officername} onChange={this.onchange_outbound_It_Officername}></input> */}
                            </div>
                            </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="form-group">                          
                                 IT Officer ID : 
                            
                            </div></div>
                            <div className="col-md-4">
                            <div className="form-group">
                               {/* <input type="text" ></input>  */}
                               <input id="out_offepf" type="text" className="form-control" value={this.state.outbound_it_officer_id} onChange={this.onchange_outbound_it_officer_id}></input>
                            </div>
                            </div>
                    </div>

                    
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="btn-group mr-2"> 
                            <input id="submitOutbound" type="submit" value="Add Outbound" className="btn btn-primary" onClick={this.onSubmit}></input>{}
                            </div>
                
                    </div>
                    </div>
                </div></div></div>

                
                <div className="col">
                    <div className="rightside">
                    <div style={{margin:20, height:500}} className="tableFixHead">
            <br></br>
            <br></br>
            <h2>Outbound Items</h2>
            <table id = "tbloutbound2"></table>
                </div>
                <div className = "row">
                    <div className = "col-md-11">
                    {/* <Autocomplete
                                id = "combo-box-demo4"
                                options = {vendorrows}
                                style = {{width: 190}}
                                onChange={(event, newInputValue4) => {
                                    this.setState({
                                        seleted_vendor_name: newInputValue4
                                    })
                                  }}
                                renderInput={(params4) => <TextField {...params4} label="Select Vendor" variant="outlined"></TextField>}
                                ></Autocomplete> */}
                    <a href = "http://10.10.1.220/repair/login.aspx" target = "_blank" className = "btn btn-primary" style = {{width:"100%"}}>Send to Repair</a>
                    </div>
                </div>
                
                </div>
                
                </div>
                </div>
               
               

        )
    }
}
