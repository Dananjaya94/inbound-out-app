import React , {Component} from 'react';
import { render } from '@testing-library/react';
import DatePicker from 'react-date-picker';



export default class reportscomp extends Component{
    constructor(props) {
        super(props);
        this.onchange_outbound_province = this.onchange_outbound_province.bind(this);
        this.onchange_outbound_branch = this.onchange_outbound_branch.bind(this);
        this.onchange_outbound_sender_id = this.onchange_outbound_sender_id.bind(this);
        this.onchange_outbound_branch_code = this.onchange_outbound_branch_code.bind(this);
        this.onchange_outbound_tracking_no = this.onchange_outbound_tracking_no.bind(this);
        this.onchange_outbound_epf_no = this.onchange_outbound_epf_no.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
       // this.onchange_outbound_outbounddate = this.onchange_outbound_outbounddate.bind(this);
       this.onSubmit = this.onSubmit.bind(this);


    this.state = {
        outbound_province: '',
        outbound_branch: '',
        outbound_sender_id: '',
        outbound_branch_code: '',
        outbound_tracking_no: '',
        outbound_epf_no: '',
        //outbound_outbounddate: '',
        date : new Date()
        
    }
}

onChangeDate = date => this.setState({ date })

onchange_outbound_province(e)
{
    this.setState({
        outbound_province: e.target.value
    });
}
onchange_outbound_branch(e)
{
    this.setState({
        outbound_branch: e.target.value
    });
}
onchange_outbound_sender_id(e)
{
    this.setState({
        outbound_sender_id: e.target.value
    });
}
onchange_outbound_branch_code(e)
{
    this.setState({
        outbound_branch_code: e.target.value
    });
}
onchange_outbound_tracking_no(e)
{
    this.setState({
        outbound_tracking_no: e.target.value
    });
}
onchange_outbound_epf_no(e)
{
    this.setState({
        outbound_epf_no: e.target.value
    });
}s
// onchange_outbound_outbounddate(e)
// {
//     this.setState({
//         outbound_outbounddate: e.target.value
//     });
// }


onSubmit(e){
        
    e.preventDefault();
    
    console.log(`Form Submitted :`);
    console.log(`Outbound Province : ${this.state.outbound_province}`);
    console.log(`Outbound Branch : ${this.state.outbound_branch}`);
    console.log(`Outbound Sender ID : ${this.state.outbound_sender_id}`);
    console.log(`Outbound Sender ID : ${this.state.outbound_branch_code}`);
    console.log(`Outbound Sender ID : ${this.state.outbound_tracking_no}`);
    console.log(`Outbound Sender ID : ${this.state.outbound_epf_no}`);





        this.setState ({
        outbound_province: '',
        outbound_branch:'',
        outbound_sender_id: '',
        outbound_branch_code: '',
        outbound_tracking_no: '',
        outbound_epf_no: '',
        date: new Date(),
        //asset_inbound_completed: false
        //outbound_outbounddate: ''
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
                            <label>Province :</label>
                            </div>
              </div>      
              
                    <div classname="col-md-3">  

                        
                            <div className="form-group">
                            <b><select onChange={this.onchange_outbound_province} className="form-control">
                                <option value={this.state.outbound_provice}>WESTERN</option>
                                <option value={this.state.outbound_provice}>SOUTHERN</option>
                                <option value={this.state.outbound_provice}>NOTHERN</option>
                                <option value={this.state.outbound_provice}>UVA</option>
                                <option value={this.state.outbound_provice}>CENTRAL</option>
                            </select>{}
                            </b>
                            </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Branch :</label>
                            </div>
                        </div>
                    <div className="col-md-3">  
                        <div className="form-group">
                             <b><select onChange={this.onchange_outbound_branch} className="form-control">
                                <option value={this.state.outbound_branch}>COLOMBO</option>
                                <option value={this.state.outbound_branch}>KEGALLE</option>
                                <option value={this.state.outbound_branch}>KANDY</option>
                                <option value={this.state.outbound_branch}>KADUWELA</option>
                                <option value={this.state.outbound_branch}>KELANIYA</option>
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
                            <label>Sender ID :</label>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="form-group">
                            <input type="text" className="form-control" value={this.state.outbound_sender_id} onChange={this.onchange_outbound_sender_id}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Branch Code:</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <input type="text" className="form-control" value={this.state.outbound_branch_code} onChange={this.onchange_outbound_branch_code}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Tracking Number :</label>
                            </div>
                        </div>
                    
                    
                    
                        <div className="col-md-4">
                            <div className="form-group">
                            <input type="text" className="form-control" value={this.state.outbound_tracking_no} onChange={this.onchange_outbound_tracking_no}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>EPF no :</label>
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
                            <div className="form-group">                          <div className="form-group">
                                <label>Outbound date :</label>
                            </div>
                            </div></div>
                            <div className="col-md-4">
                            <div className="form-group">
                               {/* <input type="text" ></input>  */}
                               <DatePicker onChange={this.onChangeDate} value={this.state.asset_recieved_date} timezone={'SL/Asia'}></DatePicker>
                            </div>
                            </div>
                    </div>
                    
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="form-group">  
                            <input type="submit" value="Add Outbound" className="btn btn-primary" onClick={this.onSubmit}></input>{}
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
            <table className="table-control" cellPadding="30">
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
