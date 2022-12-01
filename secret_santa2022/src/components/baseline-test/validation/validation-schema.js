import * as Yup from "yup";

const validationSchema = [

    Yup.object().shape({
        singleCheck: Yup.bool().oneOf([true], "Must agree to continue"),
    }),
    Yup.object().shape({
        question1: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question2: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question3: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question4: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question5: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question6: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question7: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question8: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question9: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        question10: Yup.string().required("Please select an option"),
    }),
];


export default validationSchema;
