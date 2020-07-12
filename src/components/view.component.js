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

        axios.get('http://localhost:4000/outbound')
        .then(data => {
            this.setState({inboundoutboundArr1 : data.data});
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
        let tableContent = (inboundDT === undefined || inboundDT === null || inboundDT.length === 0) ? null : (
            inboundDT.data.map((item) => {
                return (
                    <tr key = {item.outbound_id}>
                        <td>{item.inbound_id}</td>
                        <td>{item.inbound_date}</td>
                        <td>{item.inbound_itemdescription}</td>
                        <td>{item.inbound_serialnumber}</td>
                        <td>{item.inbound_departmentorbranch}</td>
                        <td>{item.inbound_handoverusername}</td>
                        <td>{item.inbound_handoveruserepf}</td>
                        <td>{item.inbound_itofficername}</td>
                        <td>{item.inbound_itofficerepf}</td>
                        <td><input type="submit" value="Recieve Item" className="btn btn-primary"></input></td>
                    </tr>
                );
            })
        );

        return (
            
                <table id="inboundTable" cellPadding="10">
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


    renderOutboundData(outboundDT){
        let tableContent = (outboundDT === undefined || outboundDT === null || outboundDT.length === 0) ? null : (
            outboundDT.data.map((item) => {
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
                </tr>
                );
            })
        );

        return (
            
                <table id="inboundTable" cellPadding="10">
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
            
            // Form elements :
            <div style={{margin:80}}>
                <h1>View Inventory</h1>

                <form>
                    <div className="row">
                        <div className="col-md-2">
                            Asset ID:<input type ="text" value={this.state.asset_id} onChange={this.onchange_asset_id} className="form-control"/>
                        </div>  
                        
                        <div className="col-md-2">
                            Username:<input type ="text" value={this.state.username} onChange={this.onchange_username} className="form-control"/>
                        </div>
                        
                        <div className="col-md-2">
                            Province :<select name="province" id="selectDivision" className="form-control" onChange={this.on_prov}>
                                        <option value={this.prov}>Select Province</option>
                                        <option value={this.prov}>Eastern Province</option>
                                        <option value={this.prov}>Nothern Province</option>
                                        <option value={this.prov}>Southern Province</option>
                                        <option value={this.prov}>Western Province</option>
                                        <option value={this.prov}>Central Province</option>
                                    </select>
                        
                        </div>
                    
                      {/* Simple Select */}

                      <div className="col-md-2">

                           <label>Region : 
                               <select name="province" className="form-control" id="province">
                            
                                <option value="cp">Select Region</option>
                                <option value="ep">*****</option>
                                <option value="np">*****</option>
                                <option value="sp">*****</option>
                                <option value="wp">*****</option>
                                </select>

                            </label> 
                        
                        </div>
                    
                    </div>
{/* -----------------------Second Row------------ */}
                     <div className="row">
                        <div className="col-md-2">
                            Serial Number:<input type ="text" value={this.state.ser_num} onChange={this.onchange_ser_num} className="form-control"/>
                        </div>

                        <div className="col-md-2">
                            User ID:<input type ="text" value={this.state.user_id} onChange={this.onchange_user_id} className="form-control"/>
                        </div>

                        <div className="col-md-2">
                            Branch Name:<input type ="text" value={this.state.bra_name} onChange={this.onchange_bra_name} className="form-control"/>
                        </div>
                        
                            <div className="col-md-2">
                                <button className="btn btn-primary">Repair and Replacement</button>
                        </div>

                        <div className="col-md-1">
                                <input type="button" value="Search" className="btn btn-primary" onClick={this.onSearch}></input>
                        </div>

                        {/* <div class="row">
                            
                            <div class="col-md-1">
                                <input type="button" value="Search" className="btn btn-primary" onClick={this.onSearch}></input>
                            </div>
                        </div> */}

                    </div>

{/* ------------------------------Table Elements------------------------- */}
                
                    <div className="leftside">
                        <h3>Ibound Details</h3>
                        {content}
                    </div>

                    <div className="rightside">
                        <h3>Outbound Details</h3>
                        {content2}
                    </div>
                 

                
                </form>

                 

            </div>
            


        )
    }
            
        
    
}
