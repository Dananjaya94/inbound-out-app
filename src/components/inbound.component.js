import React , {Component} from 'react';
import { render } from '@testing-library/react';

export default class inbound extends Component{
    
    constructor(pros)
    {
        super(pros);

        this.state = {
            asset_seq_no: '',
            asset_make:'',
            aaset_model:'',
            asset_sender_epf:'',
            asset_branch_code:'',
            asset_tracking_num:'',
            asset_description:'',
            asset_reciever_epf:'',
            asset_recieved_location:'',
            asset_recieved_date:'',
            asset_expected_outbound_date:'',
            asset_inbound_completed:''
        }
    }
    

    onchangeasset_seq_no(e)
    {
        this.setState({
            asset_seq_no: e.target.value
        })
    }

    onchangeasset_seq_no(e)
    {
        this.setState({
            asset_seq_no: e.target.value
        })
    }

    onchangeasset_seq_no(e)
    {
        this.setState({
            asset_seq_no: e.target.value
        })
    }

    onchangeasset_seq_no(e)
    {
        this.setState({
            asset_seq_no: e.target.value
        })
    }
    

    render()
    {
        return(
            <div>
                <p>Welcom to Inbound</p>
            </div>
        )
    }
}