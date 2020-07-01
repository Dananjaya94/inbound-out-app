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
            
            
            <div className="container">
                <p>View Inventry</p>

                <form>
                <table cellPadding = "10">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><p>Asset ID: </p> <input type ="text" value={this.state.asset_id} onChange={this.onchange_asset_id} className="form-control"/></td>
                            <td><p>Username: </p> <input type ="text" id="ussrnm" className="form-control"/></td>
                            <td><label>Province : <select name="province" id="selectDivision" className="form-control" id="province">
                                <option value="cp">Central Province </option>
                                <option value="ep">Eastern Province</option>
                                <option value="np">Nothern Province</option>
                                <option value="sp">Southern Province</option>
                                <option value="wp">Western Province</option>
                                                             </select>
                                </label> 
                             </td>
                             <td><button className="btn btn-primary">Repair and Replacement</button></td>
                        </tr>

                       
                                               <tr>
                            <td><p>Serial Number: </p> <input type ="number" id="sernum" className="form-control"/></td>
                            <td><p>User ID: </p> <input type ="text" id="usrid" className="form-control"/></td>
                            <td><p>Branch Name: </p> <input type ="text" id="brnnm" className="form-control"/></td>
                            

                            <td><label>Region : <select name="province" className="form-control" id="province">
                                <option value="cp">XD</option>
                                <option value="ep">XD</option>
                                <option value="np">XD</option>
                                <option value="sp">XD</option>
                                <option value="wp">XD</option>
                                                             </select>
                                </label> 
                             </td>



                             {/* <td><button className="btn btn-primary">Repair and Replacement</button></td> */}

                            {/* <td><button className="btn btn-primary">Search</button></td> */}
                            <td>
                            <input type="button" value="Search" className="btn btn-primary" onClick={this.onSearch}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>

                
                    <table className ="form-control" cellPadding="20" >
                        <tbody>
                        <tr>
                            <th>
                                Item ID
                            </th>
                            <th>
                                Branch Code
                            </th>
                            <th>
                                Sender EPF
                            </th>
                            <th>
                                Location
                            </th>
                        
                        </tr>
                        </tbody>
                        
       
                    </table>
                 

                
                    </form>

                 

            </div>
            


        )
    }
            
        
    
}
