import React , {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/entry.nostyle';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

import $ from 'jquery';


import axios from 'axios';
import html2canvas from 'html2canvas';

import { render } from '@testing-library/react';

var outrowsss = [];
var outcolls = [];

$.ajax({
    type: "GET",

        url: "http://localhost:4000/inoutfulldetails/",
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
                      
                      $('#tblReport').DataTable({

                        data: outrowsss,

                        columns: [

                            { title: "Id" },

                            { title: "Date" },

                            { title: "Description" },

                            { title: "Serial Number" },

                            { title: "Department" },

                            { title: "User" },

                            { title: "User EPF"},

                            { title: "Officer" },

                            { title: "Officer EPF"},

                            { title: "Type"},

                        ]

                    });

                  })
      },

      error: function (jqXHR, exception) {

      }

});

export default class reportscomp extends Component{

    constructor(props)
    {
        super(props);

        this.onSubmitInbound = this.onSubmitInbound.bind(this);
        this.onSubmitOutbound = this.onSubmitOutbound.bind(this);
        

        this.state = {
            start_date : new Date(),
            end_date : new Date(),
            generate_outbound : false,
            generate_inbound : false,
            InboundOutboundData: [],
            inboundDT: []
        }
    }

    componentWillMount()
    {
        axios.get('http://localhost:4000/inoutfulldetails/')
        .then(data=> {
            this.setState({InboundOutboundData : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    renderInboundData(inboundDT){
        console.log("Inbound Data Rendering");
        let tableContent1 = (inboundDT === undefined || inboundDT === null || inboundDT.length === 0) ? null : (
            inboundDT.data.map((item1) => {
                return (
                    <tr key = {item1.inboundoutbound_id}>
                        <td>{item1.inboundoutbound_date}</td>
                        <td>{item1.inboundoutbound_description}</td>
                        <td>{item1.inboundoutbound_serialnumber}</td>
                        <td>{item1.inboundoutbound_departmentorbranch}</td>
                        <td>{item1.inboundoutbound_handoverusername}</td>
                        <td>{item1.inboundoutbound_handoveruserepf}</td>
                        <td>{item1.inboundoutbound_itofficername}</td>
                        <td>{item1.inboundoutbound_itofficerepf}</td>
                        <td>{item1.inboundoutbound_tr_type}</td>
                    </tr>
                );
            })
        );

        return (
            
                <table className="tableFixHead" style={{overflowX:"auto"}} id="inboundTable" cellPadding="6">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Item Description</th>
                            <th>Serial Number</th>
                            <th>Department</th>
                            <th>Hand over User</th>
                            <th>Hand Over EPF</th>
                            <th>It Officer</th>
                            <th>If Officer Epf</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent1}
                    </tbody>
                </table>
           
        );
    }

    onChangeStartDate = start_date => this.setState({ start_date })
    onChangeEndDate = end_date => this.setState({ end_date })

    
    onSubmitInbound(e)
    {
        e.preventDefault();

        console.log(`Report Strat Date : ${this.state.start_date}`);
        console.log(`Report End Date : ${this.state.end_date}`);

//         const input = document.getElementById('mytable');
// html2canvas(input)
//   .then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');

//     html2canvas(input)
//   .then((canvas) => {
//     const pdf = new jsPDF();
//     pdf.addSVG(canvas);
//     pdf.save("download.pdf");  
//   });

//   });

// var doc = new jsPDF();
// // You can use html:
// doc.autoTable({html: '#my-table'});

// // Or JavaScript:
// doc.autoTable({
//     head: [['date', 'description', 'department','user','itofficer']],
//     body: [this.state.renderInboundData]
// });

// doc.save('table.pdf');
        toast("Successfully Generated");
    }

    printDocument() {  
        

        toast("Pdf Generated");
        const input = document.getElementById('tblReport');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 200;  
            var pageHeight = 290;  
            var imgHeight = canvas.height * imgWidth / canvas.width;  
            var heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('l', 'mm', 'a4')  
            var position = 0;  
            var heightLeft = imgHeight;  
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });  
      }

    onSubmitOutbound(e)
    {
        e.preventDefault();

        console.log(`Report Strat Date : ${this.state.start_date}`);
        console.log(`Report End Date : ${this.state.end_date}`);
        toast("Successfully Generated");
    }

    render()
    {
        
    const notifySuccess = () => toast("Successfully Added");
    const notifyGenerated = () => toast("Successfully Generated");

    //let content = this.renderInboundData(this.state.InboundOutboundData);

        return(
            <div className="container">
                
                <div className = "row">
                    <div className="col-md-2">
                    </div>

                    <div className="col-md-10">
                    <h2>Report Generator</h2>
                    
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" >
                    {/* {content} */}

                    <table id="tblReport"></table>

                    </div>
                </div>

                <div className="row">
                <table cellPadding="20" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                    <tbody>
                        <tr>
                            <td>
                                <div className="form-group">
                                    {/* <label>Start Date :</label> */}
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    {/* <label>End Date :</label> */}
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <div className="form-group">
                                    {/* <input type="text" className="form-control" value={this.state.start_date} onChange={this.onChangeStartDate}></input> */}
                                    {/* <Calendar ></Calendar> */}
                                    {/* <DatePicker value={this.state.start_date} onChange={this.onChangeStartDate}></DatePicker> */}
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    {/* <input type="text" className="form-control" value={this.state.end_date} onChange={this.onChangeEndDate}></input> */}
                                    {/* <Calendar ></Calendar> */}
                                    {/* <DatePicker value={this.state.end_date} onChange={this.onChangeEndDate} onClick={this.onSubmitInbound}></DatePicker> */}
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="form-group">
                                <input type="submit" value="Create Report" className="btn btn-primary" onClick={this.onSubmitInbound} onClick={this.printDocument}></input>
                                {/* <ToastContainer 
                                position="top-center"
                                autoClose={10000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover/> */}
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                {/* <input type="submit" value="Create Report" className="btn btn-primary" onClick={this.onSubmitOutbound} onClick={notifyGenerated}></input> */}
                                <ToastContainer 
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover/>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
                </div>

                
            </div>
        )
    }
}