import React from "react";

export default function SelectBox({value,change,options}) {
    return(
        <div className="form-text">
            <label className={"form-label"}
                   htmlFor={"department"}>Department:</label>
            <select id="department"
                    className={"form-select"}
                    value={value}
                    onChange={change}>
                {
                    options.map(option =>
                        (<option>{option}</option>)
                    )
                }
            </select>
        </div>
    );
}