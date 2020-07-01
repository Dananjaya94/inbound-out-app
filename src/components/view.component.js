import React , {Component, useImperativeHandle} from 'react';
import { render } from '@testing-library/react';





export default class ViewComp extends Component{
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
                            <td><p>Asset ID: </p> <input type ="text" className="form-control"/></td>
                            <td><p>Username: </p> <input type ="text" className="form-control"/></td>
                            <td><label for="prov">Province : <select name="province" className="form-control" id="province">
                            <option value="cp">Central Province </option>
                            <option value="ep">Eastern Province</option>
                            <option value="np">Nothern Province</option>
                            <option value="sp">Southern Province</option>
                            <option value="wp">Western Province</option>

                    </select></label> </td>
                    <td><button className="btn btn-primary">Repair and Replacement</button></td>
                        </tr>

                        <tr>
                            <td><p>Serial Number: </p> <input type ="number" className="form-control"/></td>
                            <td><p>User ID: </p> <input type ="text" className="form-control"/></td>
                            <td><p>Branch Name: </p> <input type ="text" className="form-control"/></td>

                            <td><button className="btn btn-primary">Search</button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <div> 
                    <table classname ="form-control" borderWidth="10" cellPadding="20">
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
                        
       
                    </table>
                 </div>

                </form>
               

                 

            </div>
            


        )
    }
            
        
    
}
