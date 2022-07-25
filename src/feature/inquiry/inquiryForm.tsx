import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ErrorMessage, Formik, FormikValues } from "formik";
import * as Yup from 'yup';
import FieldErrorMessage from 'common/error';
import { COUNTRY, STATES } from 'common/constants';
import { isEmpty } from 'lodash';

const InquiryForm: React.FC<{}> = () => {
    const [size, SetSize] = useState(0);
    const [states, setStates] = useState([{}]);
    const [country, setCountry] = useState("");
    const [emailCheck, setEmailCheck] = useState(true);
    const [phoneCheck, setPhoneCheck] = useState(true);
    const [SelectedState, setSelectedState] = useState("");

    useLayoutEffect(() => {
        function updateSize() {
            SetSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);

    }, []);

    const resetPasswordValidationSchema = () => Yup.object().shape({
        firstName: Yup.string().min(3, 'Please enter name which contains at least 3 characters*')
            .required('Please enter First name*').strict(true).max(30, "First name should be atmost of 30 characters*"),
        lastName: Yup.string().min(3, 'Please enter name which contains at least 3 characters*')
            .required('Please enter Last name*').strict(true).max(30, "Last name should be atmost of 30 characters*"),
        email: Yup.string().email().min(3, 'Please enter email which contains at least 3 characters*')
            .required('Please enter your Email*').strict(true),
        phno: Yup.string().required("Please enter Phone number").matches(/^\d+$/, "Phone number must be a Numeric Value")
            .max(10, 'Phone number must contains at max 10 digits.'),

    });

    useEffect(() => {
        getStates(1);
    }, [])


    const handleCountry = (event: any) => {
        getStates(parseInt(event.target.value));
        setCountry(event.target.value.split(":")[1]);
        console.log('Country', event.target.value.split(":")[1])
    }

    const getStates = (cntryId: number) => {
        setStates(STATES.filter((data) => data.country_id === cntryId));
    }

    const handleStatesDropdown = (e: any) => {
        setSelectedState(e.target.value);
    }

    return (<div className='form-main-wrapper'>
        {/* Primary Form */}
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "", phno: "", gender: "" }}
            onSubmit={(values: FormikValues) => {
                const params = {
                    country: isEmpty(country) ? "India" : country,
                    states: isEmpty(SelectedState) ? "Delhi" : "",
                    emailCheck: `${emailCheck}`,
                    phoneCheck: `${phoneCheck}`,
                    phno: values.phno,
                    email: values.email,
                    lastName: values.lastName,
                    firstName: values.firstName,
                    gender: isEmpty(values.gender) ? "Male" : values.gender,
                }
                console.log('Form values>>', params)
            }}
            validateOnChange={true}
            validateOnBlur={true}
            validationSchema={resetPasswordValidationSchema}>
            {({ handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit} className='form-wrapper'>
                    <div className="primary-form-wrapper">
                        <h1>Primary form</h1>
                        <div className='pb--20'>
                            <label
                                htmlFor='firstName'
                                className=''>
                                First Name
                                <div className=''>
                                    <input type="text" name='firstName' id='firstName'
                                        onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                                    />
                                </div>
                                <ErrorMessage name='firstName' component={FieldErrorMessage} />
                            </label>
                        </div>
                        <div className='pb--20'>
                            <label
                                htmlFor='lastName'
                                className=''>
                                Last Name
                                <div className=''>
                                    <input type={"text"} name='lastName' id='lastName'
                                        onChange={(e) => setFieldValue(e.target.name, e.target.value)} />
                                </div>
                                <ErrorMessage name='lastName' component={FieldErrorMessage} />
                            </label>
                        </div>
                        <div className='pb--20'>
                            <label htmlFor='country' className='flex flex--column pass-title'>
                                Select Country
                                <div className='pb--20'>
                                    <select name='country' id='country' onChange={handleCountry}>
                                        {COUNTRY.map((data, index: number) => <option key={index} value={`${data.id}:${data.name}`}>
                                            {data.name}</option>)}
                                    </select>
                                </div>
                                <ErrorMessage name='country' component={FieldErrorMessage} />
                            </label>
                        </div>
                        <div className='pb--20'>
                            <label
                                htmlFor='email'
                                className='flex flex--column pass-title'>
                                Email
                                <div className=''>
                                    <input type={"text"} name='email' id='email'
                                        onChange={(e) => setFieldValue(e.target.name, e.target.value)} />
                                </div>
                                <ErrorMessage name='email' component={FieldErrorMessage} />
                            </label>
                        </div>
                        <div className='pb--20'>
                            <label htmlFor='phno'>
                                Phone Number
                                <div className=''>
                                    <input type={"text"} name='phno' id='phno'
                                        onChange={(e) => setFieldValue(e.target.name, e.target.value)} />
                                </div>
                                <ErrorMessage name='phno' component={FieldErrorMessage} />
                            </label>
                        </div>
                        <div className='pb--20'>
                            <label htmlFor='gender'>
                                Select Gender
                                <div>
                                    <input type="radio" value="Male" defaultChecked={true} name="gender" onChange={(e) => setFieldValue(e.target.name, e.target.value)} /> Male
                                    <input type="radio" value="Female" name="gender" onChange={(e) => setFieldValue(e.target.name, e.target.value)} /> Female
                                    <input type="radio" value="Other" name="gender" onChange={(e) => setFieldValue(e.target.name, e.target.value)} /> Other
                                </div>
                                <ErrorMessage name='gender' component={FieldErrorMessage} />
                            </label>
                        </div>
                        {size >= 600 && <div className="btn-wrapper">
                            <button type='submit' className='submit--button'>
                                Submit
                            </button>
                        </div>}
                    </div>
                    {/* Secondary Form */}
                    <div className="secondary-form-wrapper">
                        <h1>Secondary form</h1>
                        <div className='pb--20'>
                            <label>
                                States
                                <div>
                                    <select onChange={handleStatesDropdown}>
                                        {states.map((data: any, index: number) =>
                                            <option key={index} value={data.name} >
                                                {data.name}</option>)}
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div className='pb--20 form-notification'>
                            Send Email notification
                            <label className="switch">
                                <input type="checkbox" defaultChecked={true} onChange={() => setEmailCheck(!emailCheck)} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='form-notification pb--20'>
                            Send Mobile notification
                            <label className="switch">
                                <input type="checkbox" defaultChecked={true} onChange={() => setPhoneCheck(!phoneCheck)} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        {size <= 599 && <div className="btn-wrapper mob-submit-btn">
                            <button type='submit' className='submit--button'>
                                Submit
                            </button>
                        </div>}
                    </div>

                </form>
            )}
        </Formik>
    </div>);
}

export default InquiryForm;