import React from "react";

export default function InputText({label,form_id,handleChange,value,placeholder}) {
    return (
        <div className="mb3">
            <label className={"form-label"}
                   htmlFor={form_id}>{label}:</label>
            <input className={"form-control"}
                   type="text"
                   name={form_id}
                   id={form_id}
                   onChange={handleChange}
                   value={value}
                   placeholder={placeholder}/>
        </div>
    );
}