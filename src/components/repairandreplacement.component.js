import React , {Component} from 'react';
import $ from 'jquery';


var repairOutcolls = [];
var repairOutrows = [];

var replacementcolls = [];
var replacementOutrows = [];

$.ajax({
    type: "GET",

        url: "http://localhost:4000/getrepair",
        contentType: "application/json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                    repairOutcolls = [];
                      repairOutrows= [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                        repairOutcolls.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                        repairOutrows.push(value.rows[i]);
                      }
                      console.log(repairOutrows);
                      
                      $('#repairtable').DataTable({
                        "scrollY": "100px",
                        data: repairOutrows,

                        columns: [

                            { title: "Repair Seq" },

                            { title: "Asset Seq" },

                            { title: "Asset Serial" },

                            { title: "Sent Date" },

                            { title: "Recived Date"},

                            { title: "Repair Remarks"},

                            { title: "Cost"},

                            { title: "Vendor"}

                           

                        ]

                    });

                  })
      },

      error: function (jqXHR, exception) {

      }

});

$.ajax({
    type: "GET",

        url: "http://localhost:4000/getrepair",
        contentType: "application/json",
        beforeSend: function () {
        },

        success: function (data) {



            //console.log(data);

                  $.each(data, function (index, value) {

                    replacementcolls = [];
                    replacementOutrows= [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                        replacementcolls.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                        replacementOutrows.push(value.rows[i]);
                      }
                      console.log(replacementOutrows);
                      
                      $('#replacementtable').DataTable({
                        "scrollY": "100px",
                        data: replacementOutrows,

                        columns: [

                            { title: "Replace Seq" },

                            { title: "Previos Asset Seq" },

                            { title: "Previous Asset Serial" },

                            { title: "New Asset Seq" },

                            { title: "New Asset Seq"}

                           

                        ]

                    });

                  })
      },

      error: function (jqXHR, exception) {

      }

});

export default class RepairAndReplacements extends Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="container">
                <div className = "row">
                    <div className = "col-md-3"></div>
                    <div className = "col-md-9">
                    <h2>Repair and Replacements</h2>  
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-md-2" id = "inner">
                    <h4>Repair Details</h4>
                    </div>
                    <div className="col-md-10" style = {{width:"100%"}}>
                      
                        
                        <table id="repairtable">

                        </table>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-3" id = "inner">
                    <h4>Replacement Details</h4>
                    </div>
                    <div className="col-md-9">
                        <table id="replacementtable">

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}