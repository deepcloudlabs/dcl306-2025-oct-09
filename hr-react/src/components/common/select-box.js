import React from "react";

export default function SelectBox({id,value,label,change,options}) {
    return(
        <div className="mb-3">
            <label className={"form-label"}
                   htmlFor={id}>{label}:</label>
            <select id={id}
                    name={id}
                    className={"form-control form-select"}
                    value={value}
                    onChange={change}>
                {
                    options.map(option =>
                        (<option key={option}>{option}</option>)
                    )
                }
            </select>
        </div>
    );
}