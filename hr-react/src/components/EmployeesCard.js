import Card from "./common/card";
import {useEmployees, useHrDispatcher} from "../providers/hr-provider";
import Button from "./common/button";
import {useCallback} from "react";
import Photo from "./common/photo";
import callApi, {API_OPTIONS} from "../utils/api-utils";
import {ActionTypes} from "../reducers/hr-reducer";

export default function EmployeeCard(){
    const employees = useEmployees();
    const hrDispatcher = useHrDispatcher();
    const retrieveAllEmployees = useCallback(async ()=>{
            callApi("/",API_OPTIONS.GET).then(employees=>{
               hrDispatcher({type: ActionTypes.ON_EMPLOYEES_RETRIEVED, value: employees});
            });
    }, [hrDispatcher]);
    return(
        <Card title={"Employees"}>
            <Button label={"Retrieve All"}
                    color={"btn-success"}
                    click={retrieveAllEmployees} />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Identity No</th>
                        <th>Full Name</th>
                        <th>Salary</th>
                        <th>IBAN</th>
                        <th>Birth Year</th>
                        <th>Department</th>
                        <th>Job Style</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                {
                    employees.map((employee,index) => (
                        <tr key={employee.identityNo}>
                            <td>{index+1}</td>
                            <td><Photo value={employee.photo} readOnly={true}></Photo></td>
                            <td>{employee.identityNo}</td>
                            <td>{employee.fullname}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.iban}</td>
                            <td>{employee.birthYear}</td>
                            <td>{employee.department}</td>
                            <td>{employee.fulltime ? 'FULL TIME':'PART TIME'}</td>
                            <td></td>
                        </tr>
                       )
                    )
                }
                </tbody>
            </table>
        </Card>
    );
}