export const ActionTypes = {
    ON_CHANGE: "on_change",
    ON_PHOTO_CHANGE: "on_photo_change",
    ON_FULLTIME_CHANGE: "on_fultime_change",
    ON_EMPLOYEE_RECEIVED: "on_employee_received",
    ON_EMPLOYEE_HIRED: "on_employee_hired",
    ON_EMPLOYEE_UPDATED: "on_employee_updated",
    ON_EMPLOYEE_FIRED: "on_employee_fired",
    ON_EMPLOYEES_RETRIEVED: "on_employees_retrieved",
    ON_ERROR: "on_error"
}
export default function HrReducer(state, action) {
    let employee = {...state.employee};
    switch (action.type) {
        case ActionTypes.ON_CHANGE:
            employee[action.name] = action.value;
            return {...state, employee};
        case ActionTypes.ON_PHOTO_CHANGE:
            employee[action.name] = action.value;
            return {...state, employee};
        case ActionTypes.ON_FULLTIME_CHANGE:
            employee[action.name] = !employee[action.name];
            return {...state, employee};
        case ActionTypes.ON_EMPLOYEE_RECEIVED:
            employee = action.value;
            return {...state, employee};
        case ActionTypes.ON_EMPLOYEE_FIRED:
            employee = action.value;
            return {...state, employee};
        case ActionTypes.ON_EMPLOYEES_RETRIEVED:
            let employees = action.value;
            return {...state, employees};
        case ActionTypes.ON_EMPLOYEE_HIRED:
            alert("Employee is hired!")
            break;
        case ActionTypes.ON_EMPLOYEE_UPDATED:
            alert("Employee is updated!")
            break;
        case ActionTypes.ON_ERROR:
            break;
    }

    return {...state}; // shallow
}