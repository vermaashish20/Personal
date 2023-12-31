import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Stack } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?fit=crop&w=250&h=250',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7',
  },
  {
    label: 'Bali, often referred to as the "Island of Gods," blend of vibrant cultural heritage, lush landscapes, and pristine beaches. Renowned for its majestic temples, traditional dance performances, and warm hospitality, Bali offers a unique and spiritual experience for travelers from around the world. Whether you seek relaxation on serene beaches or adventure amidst lush rice terraces, Bali promises an unforgettable journey into paradise.',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8',
  },
];

function Testimonial() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Stack direction='column' sx={{paddingX:'110px',paddingY:'50px'}}>
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <Typography sx={{width:'60%',overflow:'hidden'}}>{images[activeStep].label}</Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents        
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              component="img"
              sx={{
                height: 255,
                display: 'block',
                maxWidth: 400,
                
                width: '100%',
              }}
              src={step.imgPath}
              alt={step.label}
            />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      </Stack>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        // nextButton={
        //   <Button
        //     size="small"
        //     onClick={handleNext}
        //     disabled={activeStep === maxSteps - 1}
        //   >
        //     Next
        //     {theme.direction === 'rtl' ? (
        //       <KeyboardArrowLeft />
        //     ) : (
        //       <KeyboardArrowRight />
        //     )}
        //   </Button>
        // }
        // backButton={
        //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        //     {theme.direction === 'rtl' ? (
        //       <KeyboardArrowRight />
        //     ) : (
        //       <KeyboardArrowLeft />
        //     )}
        //     Back
        //   </Button>
        // }
      />
    </Stack>
  );
}

export default Testimonial;
