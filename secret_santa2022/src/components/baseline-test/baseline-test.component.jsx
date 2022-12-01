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
import Question1 from './questions/question1.component';
import Question2 from './questions/question2.component';
import Question3 from './questions/question3.component';
import Question4 from './questions/question4.component';
import Question5 from './questions/question5.component';
import Question6 from './questions/question6.component';
import Question7 from './questions/question7.component';
import Question8 from './questions/question8.component';
import Question9 from './questions/question9.component';
import Question10 from './questions/question10.component';
import Results from './result.component';
import validationSchema from './validation/validation-schema';
import Header from "../common/header.component";
import Footer from "../common/footer.component";

import "./styles/baseline-test.styles.css";

const steps = [0, 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10]

const initalValues = {
    singleCheck: false, 
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: ""
}

function _renderStepContent(step) {
    switch(step) {
        case 0:
            return <Terms/>;
        case 1:
            return <Question1/>;
        case 2:
            return <Question2/>;
        case 3:
            return <Question3/>;
        case 4:
            return <Question4/>;
        case 5:
            return <Question5/>;
        case 6:
            return <Question6/>;
        case 7:
            return <Question7/>;
        case 8:
            return <Question8/>;
        case 9:
            return <Question9/>;
        case 10:
            return <Question10/>;
        default:
            return <div>Not Found</div>;
    }
}

const BaselineForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [results, setResults] = useState({});
    const currentValidationSchema = validationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function _submitForm(values, actions) {
        await _sleep(1000);
        setResults(values);
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
                            <Results values={results}/>
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
                    <img 
                            src={require("../../assets/images/roc.png")} 
                            alt="ROC police logo"
                            className='logo'
                    />
                    <Footer/>
                </div>
             </div>
                
        </Container>
    )
}

export default BaselineForm;