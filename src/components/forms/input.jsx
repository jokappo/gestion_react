/**
 * 
 * @param {string} placehoder
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns 
 */
export default function Input({placeholder, value, onChange}) {
  return (
    <div>
      <input 
        type="text" 
        name=""  
        className="form-form-input px-4 py-3 rounded-full" 
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}

