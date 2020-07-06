import React , {Component, useImperativeHandle} from 'react';
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
            search_complete: false
        }
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


    render()
    {
        return(
            
            // Form elements :
            <div style={{margin:80}}>
                <h1>View Inventry</h1>

                <form>
                    <div class="row">
                        <div class="col-md-2">
                            Asset ID:<input type ="text" value={this.state.asset_id} onChange={this.onchange_asset_id} className="form-control"/>
                        </div>  
                        
                        <div class="col-md-2">
                            Username:<input type ="text" value={this.state.username} onChange={this.onchange_username} className="form-control"/>
                        </div>
                        
                        <div class="col-md-2">
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

                      <div class="col-md-2">

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
                     <div class="row">
                        <div class="col-md-2">
                            Serial Number:<input type ="text" value={this.state.ser_num} onChange={this.onchange_ser_num} className="form-control"/>
                        </div>

                        <div class="col-md-2">
                            User ID:<input type ="text" value={this.state.user_id} onChange={this.onchange_user_id} className="form-control"/>
                        </div>

                        <div class="col-md-2">
                            Branch Name:<input type ="text" value={this.state.bra_name} onChange={this.onchange_bra_name} className="form-control"/>
                        </div>
                        
                            <div class="col-md-2">
                                <button className="btn btn-primary">Repair and Replacement</button>
                        </div>

                        <div class="col-md-1">
                                <input type="button" value="Search" className="btn btn-primary" onClick={this.onSearch}></input>
                        </div>

                        {/* <div class="row">
                            
                            <div class="col-md-1">
                                <input type="button" value="Search" className="btn btn-primary" onClick={this.onSearch}></input>
                            </div>
                        </div> */}

                    </div>

{/* ------------------------------Table Elements------------------------- */}
                
                    <table cellPadding="30" >
                        <tbody>
                            <tr>
                                <th>
                                    Item ID |
                                </th>
                                <th>
                                    Branch Code |
                                </th>
                                <th>
                                    Sender EPF |
                                </th>
                                <th>
                                    Location |
                                </th>
                            
                            </tr>
                        </tbody>
                        
       
                    </table>
                 

                
                </form>

                 

            </div>
            


        )
    }
            
        
    
}
