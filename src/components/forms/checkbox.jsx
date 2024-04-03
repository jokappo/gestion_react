/**
 * 
 */
import React from "react";

export default function Checkbox({checked, onChange, label,id}) {
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id={id}
        className="form-checkbox rounded text-blue-900 focus:accent-red-500"
        onChange={(e)=>onChange(e.target.checked)}
      />
      <label htmlFor={id} className=" form-check-label ml-2 text-black-700">{label}</label>
    </div>
  );
}
