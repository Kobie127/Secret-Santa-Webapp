import React, { useState } from 'react';
import {
    Stepper, 
    Step, 
    Button,
    Typography,
    StepLabel,
    CircularProgress
} from '@mui/material';
import { Formik, Form } from 'formik';
import Container from '@mui/material/Container';
import Terms from './terms.component';
import validationSchema from './validation/validation-schema';
import Header from "../common/header.component";
import Footer from "../common/footer.component";

import "./styles/baseline-test.styles.css";

const steps = [0, 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]

const initalValues = {
    singleCheck: false, 
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: [],
    question7: "",
    question8: [],
    question9: "",
}

function _renderStepContent(step) {
    switch(step) {
        case 0:
            return <Terms/>;
        case 1:
            return <div>HERE</div>
        case 2:
            return <div>HERE</div>
        case 3:
            return <div>HERE</div>
        case 4:
            return <div>HERE</div>
        case 5:
            return <div>HERE</div>
        case 6:
            return <div>HERE</div>
        case 7:
            return <div>HERE</div>
        case 8:
            return <div>HERE</div>
        case 9:
            return <div>HERE</div>
        default:
            return <div>Not Found</div>;
    }
}

const BaselineForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = validationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function _submitForm(values, actions) {
        await _sleep(1000);
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    
        setActiveStep(activeStep + 1);
    }

    function _handleSubmit(values, actions) {
        if (isLastStep) {
            _submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }
    
    function _handleBack() {
        setActiveStep(activeStep - 1);
    }
    

    return (
        <Container>
             <div className="menu-screen">
                <div className="menu-screen--main">
                    <Header/>
                    <Typography component="h1" variant="h4" align="center">
                         Baseline Test
                    </Typography>
                    <Stepper activeStep={activeStep} className='stepper'>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel></StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                        <div>ffff</div>
                        ) : (
                            <Formik
                                initialValues={initalValues}
                                validationSchema={currentValidationSchema}
                                onSubmit={_handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form id='baselineTest'>
                                        {_renderStepContent(activeStep)}
                                            <div className='button'>
                                                {activeStep !== 0 && (
                                                    <Button onClick={_handleBack} className='button'>
                                                    Back
                                                    </Button>
                                                )}
                                                <div className='wrapper'>
                                                    <Button
                                                        disabled={isSubmitting}
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        className='button'
                                                    >
                                                        {isLastStep ? 'Submit' : 'Next'}
                                                    </Button>
                                                    {isSubmitting && (
                                                        <CircularProgress
                                                            size={24}
                                                            className='buttonProgress'
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                    </Form>
                                )}
                            </Formik>
                        )}
                    </div>
                  
                    <Footer/>
                </div>
             </div>
                
        </Container>
    )
}

export default BaselineForm;