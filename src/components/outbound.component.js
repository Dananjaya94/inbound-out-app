import React , {Component} from 'react';
import { render } from '@testing-library/react';

export default class outbound extends Component{

    constructor(props) {
        super(props)
        this.state={
            provice:'',
            branch:'',
            sender_ID:'',
            branch_code:'',
            tracking_no:'',
            EPF_number:'',
            outbound_date:''
        }
    }

   handleProviceChange = (event)=>{
       this.setState({
        provice: event.target.value
       })
   }
   handleBranchChange = (event)=>{
    this.setState({
        branch: event.target.value
    })
   }
   handlesenderIdChange = (event)=>{
    this.setState({
        sender_ID: event.target.value
    })
}


    render()
    {
        return(
           
            <div>
                <form>
                    <div>
                        <label>Provice</label>
                        <input type='text' value={this.state.provice} onchange={this.handleProviceChange}/>
                    </div>
                    <div>
                        <label>branch</label>
                        <input type='text' value={this.state.branch} onchange={this.handleBranchChange}/>
                    </div>
                    <div>
                        <label>sender_id</label>
                        <input type='text' value={this.state.sender_ID} onchange={this.handlesenderIdChange}/>
                    </div>
                    
                </form>
                
            </div>

                
    
             )
    }
}