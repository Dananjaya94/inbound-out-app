import React , {Component, useImperativeHandle} from 'react';
import { render } from '@testing-library/react';





export default class ViewComp extends Component{
    render()
    {
        return(
            <div className="container">
                <p>View Inventry</p>
                    <p><button>Repair and Replacement</button></p>
                    <p><button>Search</button></p>
                
                    <p>Asset ID: </p> <input type ="text"/>  
                    <p>Username: </p> <input type ="text"/> 

                    <br></br>
                    <label for="prov">Province :</label> <br></br>

                    <select name="province" id="province">
                            <option value="cp">Central Province </option>
                            <option value="ep">Eastern Province</option>
                            <option value="np">Nothern Province</option>
                            <option value="sp">Southern Province</option>
                            <option value="wp">Western Province</option>

                    </select>
                    

                    <p>Serial Number: </p> <input type ="number"/>
                    <p>User ID: </p> <input type ="text"/> 
                    <p>Branch Name: </p> <input type ="text"/>  



               

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

            </div>
            


        )
    }
            
        
    
}
