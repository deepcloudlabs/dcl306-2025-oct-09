import Card from "./common/card";
import {useEmployees, useHrDispatcher} from "../providers/hr-provider";
import Button from "./common/button";
import {useCallback, useMemo} from "react";
import Photo from "./common/photo";
import callApi, {API_OPTIONS} from "../utils/api-utils";
import {ActionTypes} from "../reducers/hr-reducer";
import Badge from "./common/badge";

export default function EmployeeCard() {
    const employees = useEmployees();
    const hrDispatcher = useHrDispatcher();
    const retrieveAllEmployees = useCallback(async () => {
        callApi("/", API_OPTIONS.GET).then(employees => {
            hrDispatcher({type: ActionTypes.ON_EMPLOYEES_RETRIEVED, value: employees});
        });
    }, [hrDispatcher]);
    const copyRow =  useCallback(
        (row) => hrDispatcher({type: ActionTypes.ON_ROW_CLICKED, value: row}),
        [hrDispatcher]
    )
    const fireEmployee = useCallback(async (identityNo) => {
        callApi(`/${identityNo}`, API_OPTIONS.DELETE).then(employee => {
            hrDispatcher({type: ActionTypes.ON_EMPLOYEE_FIRED_ON_ROW, value: employee});
        });
    }, [hrDispatcher]);
    const tableRows = useMemo(() =>
        employees.map((employee, index) => (
                <tr key={employee.identityNo}
                    onClick={() => copyRow(employee) }>
                    <td>{index + 1}</td>
                    <td><Photo value={employee.photo} readOnly={true}></Photo></td>
                    <td>{employee.identityNo}</td>
                    <td>{employee.fullname}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.iban}</td>
                    <td>{employee.birthYear}</td>
                    <td><Badge label="" value={employee.department} color={"bg-info"} displayOnly={true}></Badge></td>
                    <td>{
                        employee.fulltime &&
                        <Badge value={'FULL TIME'} color={"bg-warning"} displayOnly={true} label={""}/>
                    }
                        {
                            !employee.fulltime &&
                            <Badge value={'PART TIME'} color={"bg-success"} displayOnly={true} label={""}/>
                        }
                    </td>
                    <td>
                        <Button label={"Fire Employee"}
                                click={() => fireEmployee(employee.identityNo)}
                                color={"bg-danger"} />
                    </td>
                </tr>
            )
        ), [employees, copyRow]
    );
    return (
        <Card title={"Employees"}>
            <Button label={"Retrieve All"}
                    color={"btn-success"}
                    click={retrieveAllEmployees}/>
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
                    tableRows
                }
                </tbody>
            </table>
        </Card>
    );
}