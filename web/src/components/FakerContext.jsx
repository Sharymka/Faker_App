import React, {createContext, useEffect, useState} from 'react';

 export const FakerContext = createContext({});

function FakerProvider({children}) {

	const [region, setRegion] = useState('EN');
	const [persons, setPersons] = useState([]);
	const [errors, setErrors] = useState(0);
	const [seed, setSeed] = useState(0);
	const [page, setPage] = useState(1);


	useEffect(()=> {
		fetchFakeData();
	}, [region, page, errors, seed])

	const fetchFakeData = async () => {
		console.log('request from selector component');
		try {
			const response = await fetch(`api/generate?region=${region}&errors=${errors}&seed=${seed}&page=${page}`, {
				method: 'GET',
			});
			const data = await response.json();
			if (response.ok) {
				setPersons(data);
			} else {
				console.error('Failed to fetch data:', );
			}
		} catch (err) {
			// setError(err.message);
		}
	};
  return (
	  <FakerContext.Provider value={{
		  region,
		  setRegion,
		  setSeed,
		  seed,
		  fetchFakeData,
		  persons,
		  errors,
		  setErrors,
		  page,
		  setPage
	  }}>
		  {children}
	  </FakerContext.Provider>
  );
}
export default FakerProvider;