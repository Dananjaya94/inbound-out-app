import React , {Component} from 'react';
import axios from 'axios';
import $ from 'jquery';
import dt from 'datatables.net';

var arr = {};
var inboundData = {};
var inrowsss = [];
var incolls = [];
var outrowsss = [];
var outcolls = [];

$.ajax({
    type: "GET",

        url: "http://localhost:4000/inbound",
        contentType: "application/json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                      incolls = [];
                      inrowsss= [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                          incolls.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                          inrowsss.push(value.rows[i]);
                      }
                      console.log(inrowsss);
                      
                      $('#tblinbound').DataTable({

                        data: inrowsss,

                        columns: [

                            { title: "Id" },

                            { title: "Date" },

                            { title: "Description" },

                            { title: "Department" },

                            { title: "User" },

                            { title: "Officer" },

                        ]

                    });

                  })
      },

      error: function (jqXHR, exception) {

      }

});

$.ajax({
    type: "GET",

        url: "http://localhost:4000/outbound",
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
                      
                      $('#tbloutbound').DataTable({

                        data: outrowsss,

                        columns: [

                            { title: "Id" },

                            { title: "Date" },

                            { title: "Description" },

                            { title: "Department" },

                            { title: "User" },

                            { title: "Officer" },

                        ]

                    });

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
            inboundDT: [],
            outboundRows: [],
            outboundDT:[]
        }
    }

    setInboundData(indt)
    {
        this.inboundRows = indt;
        console.log(indt);
    }

    setOutboundData(outdt)
    {
        this.outboundRows = outdt;
        console.log(outdt);
    }
    
    renderInboundData(inboundt)
    {
        console.log(inboundt);
    }

    render()
    {
        let cont = this.renderInboundData(this.inrowsss);
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
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <table id="tbloutbound">

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}