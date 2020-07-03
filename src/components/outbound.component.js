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
}
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
            <div style={{margin:10}}>
            <br></br>
            <br></br>
            <h2>Outbound Interface</h2>
            <form>

                <table cellPadding="5">

                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="form-group">
                            <label>Province :</label>
                            
                            </div>
                        </td>

                        <td>
                            <div className="form-group">
                            <b><select onChange={this.onchange_outbound_province} className="form-control">
                                <option value={this.state.outbound_provice}>WESTERN</option>
                                <option value={this.state.outbound_provice}>SOUTHERN</option>
                                <option value={this.state.outbound_provice}>NOTHERN</option>
                                <option value={this.state.outbound_provice}>UVA</option>
                                <option value={this.state.outbound_provice}>CENTRAL</option>
                            </select>
                            </b>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="form-group">
                            <label>Branch :</label>
                            </div>
                        </td>

                        <td>
                            <div className="form-group">
                            <b><select value={this.state.topic} onchange={this.handleTopicChange}>
                                <option value="select">select</option>
                                <option value="colombo">WESTERN</option>
                                <option value="hambanthota">SOUTHERN</option>
                                <option value="jaffna">NOTHERN</option>
                                <option value="badullla">UVA</option><option value="kandy
                                ">CENTRAL</option>
                            </select>
                            </b>
                                                        </div>
                        </td>
                    </tr>
                    

                    <tr>
                        <td>
                            <div className="form-group">
                            <label>Sender ID :</label>
                            </div>
                        </td>

                        <td>
                            <div className="form-group">
                            <input type="text" className="form-control" value={this.state.outbound_sender_id} onChange={this.onchange_outbound_sender_id}></input>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="form-group">
                            <label>Branch Code:</label>
                            </div>
                        </td>

                        <td>
                            <div className="form-group">
                            <input type="text" className="form-control" value={this.state.outbound_branch_code} onChange={this.onchange_outbound_branch_code}></input>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="form-group">
                                <label>Tracking Number :</label>
                            </div>
                        </td>

                        <td>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.outbound_tracking_no} onChange={this.onchange_outbound_tracking_no}></input>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="form-group">
                                <label>EPF no :</label>
                            </div>
                        </td>

                        <td>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.outbound_epf_no} onChange={this.onchange_outbound_epf_no}></input>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="form-group">
                                <label>Outbound date :</label>
                            </div>
                        </td>

                        <td>
                           <div className="form-group">
                               {/* <input type="text" ></input>  */}
                               <DatePicker className="form-control" value={this.state.date} onChange={this.onChangeDate}></DatePicker>
                            </div>
                        </td>

                        <td></td>
                        <td></td>
                        <td></td>
                        <tr></tr>
                        <tr></tr>
                        <td></td>

                        <td>

                        </td>
                            
                        
                        <td>
                            <input type="submit" value="Add Outbound" className="btn btn-primary" onClick={this.onSubmit}></input>{}
                        </td>
                    </tr>
                    </tbody>
                </table>
                </form>
                </div>
                </div>
                </div>
                <div className="col">
                    <div className="rightside">
                    <div style={{margin:10}}>
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
