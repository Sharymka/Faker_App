import React, {useContext} from 'react';
import {FakerContext} from "./FakerContext";

const SeedComponent = () => {

	const {setSeed, seed} = useContext(FakerContext);

	// Генерация случайного seed
	const generateRandomSeed = () => {
		setSeed(Math.floor(Math.random() * 1000000));
	};

	const handleInputChange = (event) => {
		setSeed(Number(event.target.value));
	};

	return (
		<div className='row col-3 h-25 justify-content-center'>
			<div className='col-6'>
					{/*<h1>Seed:<h1/>*/}
					<input
						type="text"
						className="form-control h-100"
						aria-label="Username"
						aria-describedby="basic-addon1"
						value={seed}
						onChange={handleInputChange}
						placeholder="Enter seed value"
					/>
			</div>
			<div
				className='col-4'
				onClick={generateRandomSeed}
			>
				<img
					className="h-100"
					src='img/random.svg'
					alt='random'/>
			</div>
		</div>
	);
};

export default SeedComponent;