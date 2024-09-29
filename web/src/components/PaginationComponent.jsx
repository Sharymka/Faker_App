import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useContext} from "react";
import {FakerContext} from "./FakerContext";

 function PaginationComponent() {
	const { page, setPage } = useContext(FakerContext);
	const totalPages = 20;

	const handlePageChange = (event, value) => {
		setPage(value);
		console.log(`Текущая страница: ${value}`);
	};
	return (
		<div className="mt-4 d-flex justify-content-center align-items-center">
			<Stack spacing={3}>
				<Pagination
					count={totalPages}
					page={page}
					onChange={handlePageChange}
					variant="outlined"
					color="primary"
				/>
			</Stack>
		</div>
	);
}

export default  PaginationComponent;