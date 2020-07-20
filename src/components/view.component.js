import React , {Component, useImperativeHandle} from 'react';
import axios from 'axios';

import DataTable from 'react-data-table-component';
import { MDBDataTableV5 } from 'mdbreact';
import $ from 'jquery';

import { ToastContainer, toast } from 'react-toastify';
import { render } from '@testing-library/react';

import "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";


//https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Table%20Search&selectedStory=Basic%20Search%20Table&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

var rowsss = [];
var colls = [];
let dataSet = {};


var object = [];

export default function Basic(){

    $.ajax({

        type: "GET",

        url: "http://localhost:4000/inbound",

        contentType: "application/json",

        beforeSend: function () {



        },



        success: function (data) {



              console.log(data);

                    $.each(data, function (index, value) {

                        colls = [];
                        rowsss= [];

                        var tempArray = new Array;

                        for (var o in value.metaData) {
                            colls.push(value.metaData[o]);
                        }

                        for (var i in value.rows) {
                            rowsss.push(value.rows[i]);
                        }

                        
                        for(var x of rowsss){

                            for(var y of rowsss[x]){
                                    let obj = {
                                        
                                            INBOUND_ID: rowsss[x].rowsss[y],
                                            INBOUND_DATE: rowsss[x].rowsss[y+1],
                                            INBOUND_DESCRIPTION: rowsss[x].rowsss[y+2],
                                            INBOUND_BRANCHORDEPARTMENT: rowsss[x].rowsss[y+3],
                                            INBOUND_HANDOVERUSERNAME: rowsss[x].rowsss[y+4],
                                            INBOUND_ITOFFICERNAME: rowsss[x].rowsss[y]+5,
                                        
                                    }

                                    object.push(obj);
                          
                            }

                        }

                        // if(index == "metaDeta")
                        // {
                        //     value.map(item => (
                        //         colls.push(item.metaData.name)
                        //     ));
                        // }
                        // else if(index == "rows")
                        // {
                        //     value.map(item1 => (
                        //         rowsss.push(item1.rows.name)
                        //     ));
                        // }


                        // console.log(data.result.metaData.name.key);
                        // Object.keys(data.result.metaData.name).map((key , i) => (
                        //     cols.push(data.result.metData.name[key])
                        // ))
                        // Object.keys(data.result.rows).map((key , i) => (
                        //     rowsss.push(data.result.rows.name[key])
                        // ))


                    })

                    console.log(colls);
                    console.log(rowsss);



          

        },

        error: function (jqXHR, exception) {





        }

    });

    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                        label: 'ID',
                        field: 'INBOUND_ID',
                        width: 150,
                        attributes: {
                          'aria-controls': 'DataTable',
                          'aria-label': 'Name',
                        },
                      },
                      {
                                label: 'Date',
                                field: 'INBOUND_DATE',
                                width: 150,
                                attributes: {
                                  'aria-controls': 'DataTable',
                                  'aria-label': 'Name',
                                },
                              },
                              {
                                        label: 'Description',
                                        field: 'INBOUND_DESCRIPTION',
                                        width: 150,
                                        attributes: {
                                          'aria-controls': 'DataTable',
                                          'aria-label': 'Name',
                                        },
                                      },
                                      {
                                                label: 'Branch',
                                                field: 'INBOUND_BRANCHORDEPARTMENT',
                                                width: 150,
                                                attributes: {
                                                  'aria-controls': 'DataTable',
                                                  'aria-label': 'Name',
                                                },
                                              },
                                              {
                                                        label: 'User',
                                                        field: 'INBOUND_HANDOVERUSERNAME',
                                                        width: 150,
                                                        attributes: {
                                                          'aria-controls': 'DataTable',
                                                          'aria-label': 'Name',
                                                        },
                                                      },
                                                      {
                                                                label: 'IT Officer',
                                                                field: 'INBOUND_ITOFFICERNAME',
                                                                width: 150,
                                                                attributes: {
                                                                  'aria-controls': 'DataTable',
                                                                  'aria-label': 'Name',
                                                                },
                                                              }
        ],
        rows: object,
      });
    

    // componentWillMount()
    // {
    //     axios.get('http://localhost:4000/inbound/')
    //     .then(data=> {
    //         this.setState({inboundoutboundArr1 : data.data});
    //         console.log(this.inboundoutboundArr1.data);
    //     })
    //     .catch(function (error){
    //         console.log(error);
    //     })

    //     axios.get('http://localhost:4000/outbound/')
    //     .then(data => {
    //         this.setState({inboundoutboundArr2 : data.data});
    //         console.log(data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    // }

    

    return(
            <div className="container">
                <div className="row">
                    <br/>
                    <br/>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                    <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />

                    </div>
                </div>
            </div>
        )
            
        
    
}
