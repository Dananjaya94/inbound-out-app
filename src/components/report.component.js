import React , {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/entry.nostyle';
import { render } from '@testing-library/react';



export default class reportscomp extends Component{

    constructor(props)
    {
        super(props);

        this.onSubmitInbound = this.onSubmitInbound.bind(this);
        this.onSubmitOutbound = this.onSubmitOutbound.bind(this);
        

        this.state = {
            start_date : new Date(),
            end_date : new Date(),
            generate_outbound : false,
            generate_inbound : false
        }
    }

    
    onChangeStartDate = start_date => this.setState({ start_date })
    onChangeEndDate = end_date => this.setState({ end_date })
    
    onSubmitInbound(e)
    {
        e.preventDefault();

        console.log(`Report Strat Date : ${this.state.start_date}`);
        console.log(`Report End Date : ${this.state.end_date}`);
        toast("Successfully Generated");
    }

    onSubmitOutbound(e)
    {
        e.preventDefault();

        console.log(`Report Strat Date : ${this.state.start_date}`);
        console.log(`Report End Date : ${this.state.end_date}`);
        toast("Successfully Generated");
    }

    render()
    {
        
    const notifySuccess = () => toast("Successfully Added");
    const notifyGenerated = () => toast("Successfully Generated");
        return(
            <div className="container">
                <h2>Report Generator</h2>
                <table cellPadding="20" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="form-group">
                                    <label>Start Date :</label>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    <label>End Date :</label>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <div className="form-group">
                                    {/* <input type="text" className="form-control" value={this.state.start_date} onChange={this.onChangeStartDate}></input> */}
                                    {/* <Calendar ></Calendar> */}
                                    <DatePicker value={this.state.start_date} onChange={this.onChangeStartDate}></DatePicker>
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                    {/* <input type="text" className="form-control" value={this.state.end_date} onChange={this.onChangeEndDate}></input> */}
                                    {/* <Calendar ></Calendar> */}
                                    <DatePicker value={this.state.end_date} onChange={this.onChangeEndDate}></DatePicker>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="form-group">
                                <input type="submit" value="Create Inbound Report" className="btn btn-primary" onClick={this.onSubmitInbound}></input>
                                {/* <ToastContainer 
                                position="top-center"
                                autoClose={10000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover/> */}
                                </div>
                            </td>

                            <td>
                                <div className="form-group">
                                <input type="submit" value="Create Outbound Report" className="btn btn-primary" onClick={this.onSubmitOutbound} onClick={notifyGenerated}></input>
                                <ToastContainer 
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover/>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}