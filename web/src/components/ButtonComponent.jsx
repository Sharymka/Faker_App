import React, {useContext} from 'react';
import { FakerContext } from "./FakerContext";

function ButtonComponent() {
	const { fetchFakeData } = useContext(FakerContext);
  return (
	  <div className=' col-2 h-25'>
		  <button type="button "
		          className="btn btn-secondary btn-lg"
		          onClick={fetchFakeData}
		  >
			  Export
		  </button>
	  </div>

  );
}

export default ButtonComponent;