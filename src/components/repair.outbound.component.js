import React , {Component} from 'react';
import $ from 'jquery';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var outcolls = [];
var outrowsss = [];

var col1;
var col2;
var col3;
var col4;
var col5;
var col6;
var col7;
var col8;
var col9;

var f;

var SendingItemForRepair = {};


$.ajax({
    type: "GET",

        url: "http://localhost:4000/inbound",
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
                      
                      $('#tblOutboundRepair').DataTable({

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

                        ]

                    });

                  })
      },

      error: function (jqXHR, exception) {

      }

});

$(document).ready(function(){
    $("#tblOutboundRepair").on('click','tr',function(){
    
        toast("Table Row Selected");

        var currentRow=$(this).closest("tr"); 
         
         col1=currentRow.find("td:eq(0)").html(); // get current row 1st TD value
         col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
         col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
         col4=currentRow.find("td:eq(3)").text(); // get current row 3rd TD
         col5=currentRow.find("td:eq(4)").text(); // get current row 3rd TD
         col6=currentRow.find("td:eq(5)").text(); // get current row 3rd TD
         col7=currentRow.find("td:eq(6)").text(); // get current row 3rd TD
         col8=currentRow.find("td:eq(7)").text(); // get current row 3rd TD
         col9=currentRow.find("td:eq(8)").text(); // get current row 3rd TD
         var data=col1+"\n"+col2+"\n"+col3+"\n"+col4;
         
        //  $('#inb_id').val(col1);
        //  $('#inb_des').val(col3);
        //  $('#inb_ser').val(col4);
        //  $('#inb_bra').val(col5);
        //  $('#inb_asstrec').val(col6);
        //  $('#inb_asstrecepf').val(col7);
        //  $('#inb_itofnm').val(col8);
        //  $('#inb_itofepf').val(col9);

         console.log(col2);
         f = new Date(col2);
         

         SendingItemForRepair = {

            asset_out_id: col1,
            asset_rec_date: f.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
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

export default class RepairOutbound extends Component
{
    constructor(props)
    {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e)
    {
        e.preventDefault();
    }
    
    render()
    {
        return(
            <div className = "container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                        <h2>Repair Outbound</h2>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-md-1"></div>
                    <div className = "col-md-11">
                        <table  id = "tblOutboundRepair" style = {{height:150}}>
                            
                        </table>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-md-1"></div>
                    <div className="col-md-11">
                        <br></br>
                    <input type="submit" value="Send to Repair" className="btn btn-primary" onClick={this.onSubmit} style={{width:"100%"}}></input>
                    </div>
                </div>
            </div>
        );
    }
}