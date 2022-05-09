import React from "react";
import { Label } from "../Label/Label";

 function SelectField({label, name, onChange, list }) {
	const createOptionsState = () => {
		return list.map((item, index) => {
			return <option key={index} value={item.label}>{item.label}</option>;
		});
	};

	return (
		<form className="form input-wrapper">
			<Label >{label}</Label>
			<select  name={name}  onChange={onChange}>
				{createOptionsState()}
			</select>
		</form>
	);
}

export default SelectField