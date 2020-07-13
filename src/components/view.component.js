import React , {Component, useImperativeHandle} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';





export default class ViewComp extends Component{
    constructor(props) {
        super(props);

        this.onchange_asset_id = this.onchange_asset_id.bind(this);
        this.on_ser_num = this.on_ser_num.bind(this);
        this.on_username = this.on_username.bind(this);
        this.on_user_id = this.on_user_id.bind(this);
        this.on_prov = this.on_prov.bind(this);
        this.on_bra_name = this.on_bra_name.bind(this);
        this.onSearch = this.onSearch.bind(this);

        this.state = {
            asset_id: '',
            ser_num:'',
            username:'',
            user_id:'',
            prov:'',
            bra_name:'',
            search_complete: false,
            inboundDT: [],
            outboundDT: [],
            inboundoutboundArr1: [],
            inboundoutboundArr2: []
        }
    }

    componentWillMount()
    {
        axios.get('http://localhost:4000/inbound/')
        .then(data=> {
            this.setState({inboundoutboundArr1 : data.data});
            console.log(data);
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

    on_username(e)
    {
        this.setState({
            username:e.target.value
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
        console.log(`Username : ${this.state.username}`);
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
    }

    renderInboundData(inboundDT){
        let tableContent1 = (inboundDT === undefined || inboundDT === null || inboundDT.length === 0) ? null : (
            inboundDT.data.map((item1) => {
                return (
                    <tr key = {item1.inbound_id}>
                        <td>{item1.inbound_date}</td>
                        <td>{item1.inbound_itemdescription}</td>
                        <td>{item1.inbound_departmentorbranch}</td>
                        <td>{item1.inbound_handoverusername}</td>
                        <td>{item1.inbound_itofficername}</td>
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
                            Username:<input type ="text" value={this.state.username} onChange={this.onchange_username} className="form-control"/>
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
                            <input type="button" value="Repair and Replacement" style={{width:"100%"}} className="btn btn-primary"></input>
                        </div>
        

                    </div>
                </form>


                <div className="row">
                
                    <div className="col-md-2">
                        
                    </div>
                        <div className="col-md-4">
                            <div className="leftside" className="tableFixHead">
                                {content}
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
