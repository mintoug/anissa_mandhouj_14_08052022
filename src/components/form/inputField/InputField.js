import { Label } from '../Label/Label';

export const InputField = ({
  label, type, value, onChange, placeholder,id,name
  }) => {
    return (
      <div className='input-wrapper'>
        <Label >{label}</Label>
        <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value= {value}
        />
      
      </div>
    );
  };