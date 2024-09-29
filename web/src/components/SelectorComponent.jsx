import {useContext} from "react";
import {FakerContext} from "./FakerContext";

function SelectorComponent() {

	const {setRegion} = useContext(FakerContext);
	const handelSelector = (value) => {
		setRegion(value);
	}

	return (
		<div className="col-2 h-25">
			<select
				className="form-select"
				aria-label="Default select example"
				onChange={(e) => {handelSelector(e.target.value)}}>
			>
				<option value="ES">Испания</option>
				<option value="UK">Украина</option>
				<option selected value="EN">США</option>
			</select>
		</div>

	);
}

export default SelectorComponent;