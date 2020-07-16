import React , {Component} from 'react';
import { render } from '@testing-library/react';
import DatePicker from 'react-date-picker';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import $ from 'jquery';
 

$(document).ready(function(){


    $("#submitOutbound").click(function(){

      var out_des = $("#out_des").val();

      var out_date = $("#out_date").val();
      var out_sernum = $("#out_sernum").val();
      var out_bra = $("#out_bra").val();
      var out_usrnm = $("#out_usrnm").val();
      var out_usrepf = $("#out_usrepf").val();
      var out_offnm = $("#out_offnm").val();
      var out_offepf = $("#out_offepf").val();

       var month = $('input[name$="month"]').val();
       var day = $('input[name$="day"]').val();
       var year = $('input[name$="year"]').val();

       var fullyear = year+"/"+month+"/"+day;




      

      var HtmlStr = '<tr><td>'+fullyear+'</td><td>'+out_des+'</td><td>'+out_sernum+'</td><td>'+out_bra+'</td><td>'+out_usrnm+'</td><td>'+out_offnm+'</td></tr>';

      $('table tbody').append(HtmlStr);
      

    });


});


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
       
        OutboundAllData: [],
        OutBoundDT: [],
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

componentDidMount()
{
    axios.get('http://localhost:4000/outbound/')
        .then(data=> {
            this.setState({OutboundAllData : data.data});
            console.log(data);
        })
        .catch(function (error){
            console.log(error);
        })
}

renderOutboundData(OutBoundDT){
    let tableContent = (OutBoundDT === undefined || OutBoundDT === null || OutBoundDT.length === 0) ? null : (
        OutBoundDT.data.map((item) => {
            return (
                <tr key = {item.outbound_id}>
                    {/* <td>{item.outbound_id}</td> */}
                    <td>{item.outbound_date}</td>
                    <td>{item.outbound_itemdescription}</td>
                    <td>{item.outbound_serialnumber}</td>
                    <td>{item.outbound_departmentorbranch}</td>
                    <td>{item.outbound_handoverusername}</td>
                    {/* <td>{item.outbound_handoveruserepf}</td> */}
                    <td>{item.outbound_itofficername}</td>
                    {/* <td>{item.outbound_itofficerepf}</td> */}
                </tr>
            );
        })
    );

    return (
            <table id="inboundTable" cellPadding="10">
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Date</th>
                        <th>Item Description</th>
                        <th>Serial Number</th>
                        <th>Department</th>
                        <th>Hand over User</th>
                        {/* <th>Hand Over EPF</th> */}
                        <th>It Officer</th>
                        {/* <th>It Officer EPF</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
       
    );
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

    const AddingOutBound = {
        date: this.state.date,
        outbound_Item_Description:this.state.outbound_Item_Description,
        outbound_Serial_No:this.state.outbound_Serial_No,
        outbound_Dept_Branch:this.state.outbound_Dept_Branch,
        outbound_Handover_Username:this.state.outbound_Handover_Username,
        outbound_epf_no:this.state.outbound_epf_no,
        outbound_It_Officername: this.state.outbound_It_Officername,
        outbound_it_officer_id:this.state.outbound_it_officer_id
    }

    axios.post('http://localhost:4000/outbound/add',AddingOutBound)
        .then(res => toast(res.data));



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
        let content = this.renderOutboundData(this.state.OutboundAllData);
        const notifySuccess = () => toast("Successfully Added");
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
                             Outbound date : 
                            </div>
              </div>      

                    <div className="col-md-4">  

                        
                            <div className="form-group">
                            <DatePicker id="out_date" onChange={this.onChangeDate} value={this.state.date} timezone={'SL/Asia'}></DatePicker>
                            
                            </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                             Item Description : 
                            </div>
                        </div>
                    <div className="col-md-4">  
                        <div className="form-group">
                        <input id="out_des" type="text" className="form-control" value={this.state.outbound_Item_Description} onChange={this.onchange_outbound_Item_Description}></input>
                        </div> 
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                             Serial No : 
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="form-group">
                            <input id="out_sernum" type="text" className="form-control" value={this.state.outbound_Serial_No} onChange={this.onchange_outbound_Serial_No}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                             Dept/Branch Code: 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input id="out_bra" type="text" onChange={this.onchange_outbound_Dept_Branch} value={this.state.outbound_Dept_Branch} className="form-control"></input>
                            {/* <b><select onChange={this.onchange_outbound_Dept_Branch} className="form-control">
                                <option value={this.state.outbound_Dept_Branch}>COLOMBO</option>
                                <option value={this.state.outbound_Dept_Branch}>KEGALLE</option>
                                <option value={this.state.outbound_Dept_Branch}>KANDY</option>
                                <option value={this.state.outbound_Dept_Branch}>KADUWELA</option>
                                <option value={this.state.outbound_Dept_Branch}>KELANIYA</option>
                            </select> */}

                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                             Hand over User Name : 
                            </div>
                        </div>
                    
                    
                    
                        <div className="col-md-4">
                            <div className="form-group">
                            <input id="out_usrnm" type="text" className="form-control" value={this.state.outbound_Handover_Username} onChange={this.onchange_outbound_Handover_Username}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                 Hand Over User EPF : 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input id="out_usrepf" type="text" className="form-control" value={this.state.outbound_epf_no} onChange={this.onchange_outbound_epf_no}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="form-group">                          
                                 IT Officer Name : 
                            
                            </div></div>
                            <div className="col-md-4">
                            <div className="form-group">
                               {/* <input type="text" ></input>  */}
                               <input id="out_offnm" type="text" className="form-control" value={this.state.outbound_It_Officername} onChange={this.onchange_outbound_It_Officername}></input>
                            </div>
                            </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="form-group">                          
                                 IT Officer ID : 
                            
                            </div></div>
                            <div className="col-md-4">
                            <div className="form-group">
                               {/* <input type="text" ></input>  */}
                               <input id="out_offepf" type="text" className="form-control" value={this.state.outbound_it_officer_id} onChange={this.onchange_outbound_it_officer_id}></input>
                            </div>
                            </div>
                    </div>

                    
                    <div className="row">
                    <div className="col-md-4"></div>
                            <div className="col-md-4"> 
                            <div className="btn-group mr-2"> 
                            <input id="submitOutbound" type="submit" value="Add Outbound" className="btn btn-primary" onClick={this.onSubmit}></input>{}
                            </div>
                
                    </div>
                    </div>
                </div></div></div>

                
                <div className="col">
                    <div className="rightside">
                    <div style={{margin:20, height:500}} className="tableFixHead">
            <br></br>
            <br></br>
            <h2>Outbound Items</h2>
            {content}
                </div>
                
                </div>
                
                </div>
                </div>
               
               

        )
    }
}
