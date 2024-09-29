import React, {useContext} from 'react';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import {FakerContext} from "./FakerContext";

function ErrorComponent() {
  const { errors, setErrors } = useContext(FakerContext);
  const sliderMaxValue = 10;
  const textFieldMaxValue = 1000;

  const handleSliderChange = (event, newValue) => {
      setErrors(newValue);
  };

  const handleInputChange = (event) => {
      setErrors(Number(event.target.value));

  };

  return (
      <div className="row col-3 h-25 justify-content-center">
          <div className='col-5'>
              <Slider
                  id="slider"
                  value={Math.min(errors, sliderMaxValue)}
                  min={0}
                  max={sliderMaxValue}
                  step={0.25}
                  onChange={handleSliderChange}
                  aria-labelledby="error-slider"
              />
          </div>
          <div className='col-6'>
              <TextField
                  type="number"
                  value={errors}
                  min={0}
                  max={textFieldMaxValue}
                  step={0.1}
                  onChange={handleInputChange}
                  sx={{
                      '& .MuiInputBase-input': {
                          padding: '8px !important', // Работает в MUI
                      },
                  }}
              />
          </div>

      </div>
  )
};

export default ErrorComponent;