export const ActionTypes = {
    ON_CHANGE: "on_change",
    ON_PHOTO_CHANGE: "on_photo_change",
    ON_FULLTIME_CHANGE: "on_fultime_change"
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
    }

    return {...state}; // shallow
}