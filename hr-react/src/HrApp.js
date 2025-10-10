import Container from "./components/common/container";
import Card from "./components/common/card";
import {useDepartments, useEmployee} from "./providers/hr-provider";
import InputText from "./components/common/input-text";
import React from "react";
import SelectBox from "./components/common/select-box";

function HrApp() {
    const employee = useEmployee();
    const departments = useDepartments();
    const handleChange = e => {

    };
    return (
        <>
            <p></p>
            <Container>
                <Card title={"Employee"}></Card>
                <InputText value={employee.identityNo}
                           label={"Identity No"}
                           form_id={"identityNo"}
                           placeholder={"Enter Identity No"}
                           onChange={handleChange}/>
                <InputText value={employee.fullname}
                           label={"FullName"}
                           form_id={"fullname"}
                           placeholder={"Enter Full name"}
                           onChange={handleChange}/>
                <InputText value={employee.salary}
                           label={"Salary"}
                           form_id={"salary"}
                           placeholder={"Enter Salary"}
                           onChange={handleChange}/>
                <InputText value={employee.iban}
                           label={"IBAN"}
                           form_id={"iban"}
                           placeholder={"Enter IBAN"}
                           onChange={handleChange}/>
                <SelectBox value={employee.department}
                           options={departments}
                           change={handleChange}/>
                <p></p>
                <Card title={"Employees"}></Card>
            </Container>
        </>
    );
}

export default HrApp;
