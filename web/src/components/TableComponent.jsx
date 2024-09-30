import React, {useContext} from 'react';
import {FakerContext} from "./FakerContext";

function TableComponent() {

	const { persons } = useContext(FakerContext);
  return (
	  <div className="mt-5" style={{ maxHeight: '300px', overflowY: 'auto' }}>
		  <table className="table table-striped">
			  <thead>
			  <tr>
				  <th scope="col">number</th>
				  <th scope="col">ID</th>
				  <th scope="col">Name</th>
				  <th scope="col">Address</th>
				  <th scope="col">Phone number</th>
			  </tr>
			  </thead>
			  <tbody>
			  {
				  persons.map((person, index) => (
					  <tr>
						  <th scope="row">{index + 1}</th>
						  <td>{person.id}</td>
						  <td>{person.fullName}</td>
						  <td>{person.address}</td>
						  <td>{person.phone}</td>
					  </tr>
				  ))
			  }
			  </tbody>
		  </table>
	  </div>
  );
}

export default TableComponent;