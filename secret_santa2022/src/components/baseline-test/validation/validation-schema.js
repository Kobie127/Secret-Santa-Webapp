import * as Yup from "yup";

const validationSchema = [

    Yup.object().shape({
        singleCheck: Yup.bool().oneOf([true], "Must agree to continue"),
    }),
    Yup.object().shape({
        radioGroup: Yup.string().required("Please select an option"),
    }),
    Yup.object().shape({
        checkboxGroup: Yup.array().required("One checkbox is required")
    }),
];


export default validationSchema;
