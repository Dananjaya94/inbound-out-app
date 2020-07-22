import React , {Component} from 'react';
import axios from 'axios';
import $ from 'jquery';
import dt from 'datatables.net';

var arr = {};
var inboundData = {};
var rowsss = [];
var colls = [];

$.ajax({
    type: "GET",

        url: "http://localhost:4000/inbound",
        contentType: "application/json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                      colls = [];
                      rowsss= [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                          colls.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                          rowsss.push(value.rows[i]);
                      }
                      console.log(rowsss);
                      
                      $('#tblinbound').DataTable({

                        data: rowsss,

                        columns: [

                            { title: "Id" },

                            { title: "Date" },

                            { title: "Description" },

                            { title: "Department" },

                            { title: "User" },

                            { title: "Officer" },

                        ]

                    });

                    //   //console.log(rowsss);
                    //   obj = {};
                    //   objects = [];
                    //   for(var x in rowsss){
                    //     //console.log(x);
                    //     let y = 0;
                    //               obj = {
                    //                       INBOUND_ID:rowsss[x][y],
                    //                       INBOUND_DATE:rowsss[x][y+1],
                    //                       INBOUND_DESCRIPTION:rowsss[x][y+2],
                    //                       INBOUND_BRANCHORDEPARTMENT:rowsss[x][y+3],
                    //                       INBOUND_HANDOVERUSERNAME:rowsss[x][y+4],
                    //                       INBOUND_ITOFFICERNAME:rowsss[x][y+5]
                    //                     }
                    //               //console.log(obj);

                    //               objects.push(obj);
                        
                          

                    //   }
                    //  console.log(objects);
                  })
      },

      error: function (jqXHR, exception) {

      }

});

export default class ViewComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            inboundRows: [],
            inboundDT: []
        }
    }

    setInboundData(indt)
    {
        this.inboundRows = indt;
        console.log(indt);
    }
    
    renderInboundData(inboundt)
    {
        console.log(inboundt);
    }

    render()
    {
        let cont = this.renderInboundData(this.rowsss);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9"></div>"
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <h2>View Component</h2>
                        <table id="tblinbound">

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}