import Container from "./components/common/container";
import Card from "./components/common/card";
import {useDepartments, useEmployee, useHr, useHrDispatcher} from "./providers/hr-provider";
import InputText from "./components/common/input-text";
import React, {useCallback} from "react";
import SelectBox from "./components/common/select-box";
import Photo from "./components/common/photo";
import CheckBox from "./components/common/check-box";
import {ActionTypes} from "./reducers/hr-reducer";

function HrApp() {
    const employee = useEmployee();
    const departments = useDepartments();
    const hrDispatcher = useHrDispatcher();

    const handleChange = useCallback(e => {
        hrDispatcher({type: ActionTypes.ON_CHANGE, value: e.target.value, name: e.target.name});
    }, [hrDispatcher]);

    const handlePhotoChange = useCallback(value => {
        hrDispatcher({type: ActionTypes.ON_PHOTO_CHANGE, value, name: 'photo'})
    }, [hrDispatcher]);
    
    const handleFullTimeChange = useCallback(e => {
        hrDispatcher({type: ActionTypes.ON_FULLTIME_CHANGE, value: e.target.checked, name: 'fulltime'})
    }, [hrDispatcher]);

    return (
        <>
            <p></p>
            <Container>
                <Card title={"Employee"}>

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
                    <InputText value={employee.birthYear}
                               label={"Birth Year"}
                               form_id={"birthYear"}
                               placeholder={"Enter Birth Year"}
                               onChange={handleChange}/>
                    <SelectBox value={employee.department}
                               id={"department"}
                               label={"Department"}
                               options={departments}
                               change={handleChange}/>
                    <Photo id={"photo"}
                           label={"Photo"}
                           handleChange={handlePhotoChange}
                           value={employee.photo}/>
                    <CheckBox value={employee.fulltime}
                              label={"Full Time"}
                              handleChange={handleFullTimeChange}
                              id={"fulltime"}
                    />
                </Card>
                <p></p>
                <Card title={"Employees"}></Card>
            </Container>
        </>
    );
}

export default HrApp;
