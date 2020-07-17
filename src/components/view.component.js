import React , {Component, useImperativeHandle} from 'react';
import axios from 'axios';

import DataTable from 'react-data-table-component';

import { ToastContainer, toast } from 'react-toastify';
import { render } from '@testing-library/react';


//https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Table%20Search&selectedStory=Basic%20Search%20Table&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

var rowsss = [];
var cols = [];

export default class ViewComp extends Component{
    constructor(props) {
        super(props);

        this.onchange_asset_id = this.onchange_asset_id.bind(this);
        this.on_ser_num = this.on_ser_num.bind(this);
        this.on_usrName = this.on_usrName.bind(this);
        this.on_user_id = this.on_user_id.bind(this);
        this.on_prov = this.on_prov.bind(this);
        this.on_bra_name = this.on_bra_name.bind(this);
        this.onSearch = this.onSearch.bind(this);

        this.state = {
            asset_id: '',
            ser_num:'',
            usrName:'',
            user_id:'',
            prov:'',
            bra_name:'',
            search_complete: false,
            inboundDT: [],
            outboundDT: [],
            inboundoutboundArr1: [],
            inboundoutboundArr2: [],
            SearchInbound: []
        }
    }

    componentWillMount()
    {
        axios.get('http://localhost:4000/inbound/')
        .then(data=> {
            this.setState({inboundoutboundArr1 : data.data});
            console.log(this.inboundoutboundArr1.data);
        })
        .catch(function (error){
            console.log(error);
        })

        axios.get('http://localhost:4000/outbound/')
        .then(data => {
            this.setState({inboundoutboundArr2 : data.data});
            console.log(data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    onchange_asset_id(e)
    {
        this.setState({
            asset_id : e.target.value
        });
    }

    on_ser_num(e)
    {
        this.setState({
            ser_num:e.target.value
        });
    }

    on_usrName(e)
    {
        this.setState({
            usrName:e.target.value
        });
    }

    on_user_id(e)
    {
        this.setState({
            user_id:e.target.value
        });
    }
   

    on_prov(e)
    {
        this.setState({
            prov:e.target.value
        });
    }


    on_bra_name(e)
    {
        this.setState({
            bra_name:e.target.value
        });
    }



    onSearch(e){
        
        e.preventDefault();

        console.log(`Searching Asset :`);
        console.log(`Asset ID : ${this.state.asset_id}`);
        console.log(`Serial Number : ${this.state.ser_num}`);
        console.log(`Username : ${this.state.usrName}`);
        console.log(`User ID : ${this.state.user_id}`);
        console.log(`Province : ${this.state.prov}`);
        console.log(`Branch Name : ${this.state.bra_name}`);
    

        this.setState ({
            asset_id: '5',
            ser_num:'',
            username:'',
            user_id:'',
            prov:'',
            bra_name:''
            
        });

        const userName = {
            usrName: this.state.usrName
        };

        axios.post('http://localhost:4000/view/search',userName)
        .then(data => {
            this.setState({SearchInbound : data.data});
            this.renderInboundData(this.state.SearchInbound);
            console.log(data);
        })
        .catch(function(error){
            console.log(error);
        })

    }

    renderInboundData(inboundDT){
        console.log("Inbound Data Rendering");
        let tableContent1 = (inboundDT === undefined || inboundDT === null || inboundDT.length === 0) ? null : (
            inboundDT.data.rows.map((item1,i) => {
                return (
                    <tr key = {item1[i+0]}>
                        <td>{item1[i+1]}</td>
                        <td>{item1[i+2]}</td>
                        <td>{item1[i+3]}</td>
                        <td>{item1[i+4]}</td>
                        <td>{item1[i+5]}</td>
                    </tr>
                    
                );
                i = i + 1;
            })
        );

        return (
            
                <table className="tableFixHead" style={{overflowX:"auto"}} id="inboundTable" cellPadding="6">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Item Description</th>
                            <th>Department</th>
                            <th>Hand over User</th>
                            <th>It Officer</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent1}
                    </tbody>
                </table>
           
        );
    }


    renderOutboundData(outboundDT){
        let tableContent2 = (outboundDT === undefined || outboundDT === null || outboundDT.length === 0) ? null : (
            outboundDT.data.map((item2) => {
                return (
                    <tr key = {item2.outbound_id}>
                    <td>{item2.outbound_date}</td>
                    <td>{item2.outbound_itemdescription}</td>
                    <td>{item2.outbound_departmentorbranch}</td>
                    <td>{item2.outbound_handoverusername}</td>
                    <td>{item2.outbound_itofficername}</td>
                </tr>
                );
            })
        );

        return (
            
                <table id="inboundTable" cellPadding="6">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Item Description</th>
                            <th>Department</th>
                            <th>Hand over User</th>
                            <th>It Officer</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent2}
                    </tbody>
                </table>
           
        );
    }

    onchange_username(e)
    {
        this.setState({
            username: e.target.value
        });
    }

    onchange_ser_num(e)
    {
        this.setState({
            ser_num: e.target.value
        });
    }

    onchange_user_id(e)
    {
        this.setState({
            user_id: e.target.value
        });
    }

    onchange_bra_name(e)
    {
        this.setState({
            bra_name: e.target.value
        });
    }

    render()
    {
        let content = this.renderInboundData(this.state.inboundoutboundArr1);
        let content2 = this.renderOutboundData(this.state.inboundoutboundArr2);

        return(

            <div className="row">
                <form className="form-group">
                    <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">
                        <h2>View Inbound Outbound Details</h2>
                    </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            Username:<input type ="text" value={this.state.usrName} onChange={this.on_usrName} className="form-control"/>
                        </div>
                        <div className="col-md-3">
                            User ID:<input type ="text" value={this.state.user_id} onChange={this.onchange_user_id} className="form-control"/>
                        </div>
                        <div className="col-md-3">
                            Department Name:<input type ="text" value={this.state.bra_name} onChange={this.onchange_bra_name} className="form-control"/>
                        </div>
                    </div>

                    <div className="row">
                        <br></br>
                    </div>

                    <div className="row">
                        <div className="col-md-3"></div>
                        
                        <div className="col-md-4">
                            <input type="button" value="Search" style={{width:"100%"}} className="btn btn-primary" onClick={this.onSearch}></input>
                        </div>

                        <div className="col-md-5" >
                            <a href="http://10.10.1.220/repair" target="_blank"><input type="button" value="Repair and Replacement" style={{width:"100%"}} className="btn btn-primary"></input></a>
                        </div>
        

                    </div>
                </form>


                <div className="row">
                
                    <div className="col-md-2">
                        
                    </div>
                        <div className="col-md-4">
                            <div className="leftside" className="tableFixHead">
                                {/* {content} */}
                                <DataTable
                                title="Inbound Data"
                                columns={cols}
                                data={rowsss}
                                ></DataTable>
                            </div>
                        </div>
                        <div className="col-md-5">
                        <div className="rightside" className="tableFixHead">
                                {content2}
                            </div>
                        </div>
                </div>
            </div>
            
            
                 

            
        )
    }
            
        
    
}
