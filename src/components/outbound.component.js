import React , {Component} from 'react';
import { render } from '@testing-library/react';
import DatePicker from 'react-date-picker';



export default class reportscomp extends Component{
    constructor(props) {
        super(props);
        this.onchange_outbound_Item_Description = this.onchange_outbound_Item_Description.bind(this);
        this.onchange_outbound_Serial_No = this.onchange_outbound_Serial_No.bind(this);
        this.onchange_outbound_Dept_Branch = this.onchange_outbound_Dept_Branch.bind(this);
        this.onchange_outbound_Handover_Username = this.onchange_outbound_Handover_Username.bind(this);
        this.onchange_outbound_It_Officername = this.onchange_outbound_It_Officername.bind(this);
        this.onchange_outbound_epf_no = this.onchange_outbound_epf_no.bind(this);
        this.onchange_outbound_it_officer_id = this.onchange_outbound_it_officer_id.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
       // this.onchange_outbound_outbounddate = this.onchange_outbound_outbounddate.bind(this);
       this.onSubmit = this.onSubmit.bind(this);


    this.state = {
       
        
        date : new Date(),
        outbound_Item_Description: '',
        outbound_Serial_No:'',
        outbound_Dept_Branch: '',
        outbound_Handover_Username: '',
        outbound_It_Officername: '',
        outbound_epf_no: '',
        outbound_it_officer_id: ''
    }
}

onChangeDate = date => this.setState({ date })

onchange_outbound_Item_Description(e)
{
    this.setState({
        outbound_Item_Description: e.target.value
    });
}
onchange_outbound_Serial_No(e)
{
    this.setState({
        outbound_Serial_No: e.target.value
    });
}
onchange_outbound_Dept_Branch(e)
{
    this.setState({
        outbound_Dept_Branch: e.target.value
    });
}
onchange_outbound_Handover_Username(e)
{
    this.setState({
        outbound_Handover_Username: e.target.value
    });
}
onchange_outbound_It_Officername(e)
{
    this.setState({
        outbound_It_Officername: e.target.value
    });
}
onchange_outbound_epf_no(e)
{
    this.setState({
        outbound_epf_no: e.target.value
    });
}
onchange_outbound_it_officer_id(e)
{
    this.setState({
        outbound_it_officer_id: e.target.value
    });
}



onSubmit(e){
        
    e.preventDefault();
    
    console.log(`Form Submitted :`);
    console.log(`outbound_Item_Description : ${this.state.outbound_Item_Description}`);
    console.log(`utbound_Serial_No : ${this.state.outbound_Serial_No}`);
    console.log(`utbound_Dept_Branch : ${this.state.outbound_Dept_Branch}`);
    console.log(`outbound_Handover_Username : ${this.state.outbound_Handover_Username}`);
    console.log(`outbound_It_Officername : ${this.state.outbound_It_Officername}`);
    console.log(`outbound_epf_no : ${this.state.outbound_epf_no}`);
    console.log(`outbound_it_officer_id : ${this.state.outbound_it_officer_id}`);





        this.setState ({
        date: new Date(),
        outbound_Item_Description: '',
        outbound_Serial_No:'',
        outbound_Dept_Branch: '',
        outbound_Handover_Username: '',
        outbound_It_Officername: '',
        outbound_epf_no: '',
        outbound_it_officer_id:''
        
        });

}
    render()
    {
        return(
            <div className="row">
             <div className="col">
                    <div className="leftside">
            <div style={{margin:20}}>
            <br></br>
            <br></br>
            <div className="row">
            <div className="col-md-4"></div>

            
                    
            <h2>Outbound Interface</h2>
                   
            
            <div className="col-md-4"></div>
            </div>
            <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                            <div className="form-group">
                            <label>Outbound date :</label>
                            </div>
              </div>      

                    <div classname="col-md-4">  

                        
                            <div className="form-group">
                            <DatePicker onChange={this.onChangeDate} value={this.state.asset_recieved_date} timezone={'SL/Asia'}></DatePicker>
                            
                            </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Item Description :</label>
                            </div>
                        </div>
                    <div className="col-md-4">  
                        <div className="form-group">
                        <input type="text" className="form-control" value={this.state.outbound_Item_Description} onChange={this.onchange_outbound_Item_Description}></input>
                        </div> 
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Serial No :</label>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="form-group">
                            <input type="text" className="form-control" value={this.state.outbound_Serial_No} onChange={this.onchange_outbound_Serial_No}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Dept/Branch Code:</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <b><select onChange={this.onchange_outbound_Dept_Branch} className="form-control">
                                <option value={this.state.outbound_Dept_Branch}>COLOMBO</option>
                                <option value={this.state.outbound_Dept_Branch}>KEGALLE</option>
                                <option value={this.state.outbound_Dept_Branch}>KANDY</option>
                                <option value={this.state.outbound_Dept_Branch}>KADUWELA</option>
                                <option value={this.state.outbound_Dept_Branch}>KELANIYA</option>
                            </select>

                            {}
                            </b>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Hand over User Name :</label>
                            </div>
                        </div>
                    
                    
                    
                        <div className="col-md-4">
                            <div className="form-group">
                            <input type="text" className="form-control" value={this.state.outbound_Handover_Username} onChange={this.onchange_outbound_Handover_Username}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Hand Over User EPF :</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.outbound_epf_no} onChange={this.onchange_outbound_epf_no}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="form-group">                          
                                <label>IT Officer Name :</label>
                            
                            </div></div>
                            <div className="col-md-4">
                            <div className="form-group">
                               {/* <input type="text" ></input>  */}
                               <input type="text" className="form-control" value={this.state.outbound_It_Officername} onChange={this.onchange_outbound_It_Officername}></input>
                            </div>
                            </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="form-group">                          
                                <label>IT Officer ID :</label>
                            
                            </div></div>
                            <div className="col-md-4">
                            <div className="form-group">
                               {/* <input type="text" ></input>  */}
                               <input type="text" className="form-control" value={this.state.outbound_it_officer_id} onChange={this.onchange_outbound_it_officer_id}></input>
                            </div>
                            </div>
                    </div>

                    
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="form-group"> 
                            <div className="btn-group mr-2"> 
                            <input type="submit" value="Add Outbound" className="btn btn-primary" onClick={this.onSubmit}></input>{}
                            </div>
                            </div>
                
                    </div>
                    </div>
                </div></div></div>

                
                <div className="col">
                    <div className="rightside">
                    <div style={{margin:20}}>
            <br></br>
            <br></br>
            <h2>Pending Items</h2>
            <table className="table table-striped" cellPadding="30">
            <thead>
    <tr>
      <th>sender ID</th>
      <th>branch code</th>
      <th>tracking No</th>
      <th>EPF No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>A0001</td>
      <td>ES45678</td>
      <td>9865</td>
    </tr>
    <tr>
    <td>2</td>
      <td>A0002</td>
      <td>ES45608</td>
      <td>9895</td>
    </tr>
    <tr>
    <td>3</td>
      <td>A0003</td>
      <td>ES15678</td>
      <td>9815</td>
    </tr>
  </tbody>
            </table>
                </div>
                
                </div>
                
                </div>
                </div>
               
               

        )
    }
}
