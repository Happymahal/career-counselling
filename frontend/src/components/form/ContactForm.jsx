import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ContactForm = () => {
    // State to manage submission status
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // For validation
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is Required'),
        email: Yup.string().required('Email is Required').email('Entered value does not match email format'),
        sendMessage: Yup.string().required('Please, leave us a message.'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data, e) {
        // Display form data on success
        console.log("Message submitted: " + JSON.stringify(data));

        // Send form data to backend
        fetch('http://127.0.0.1:5000/submit_contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.sendMessage  // Change this to 'message'
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            setSubmissionStatus('success');  // Set status to success
            e.target.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            setSubmissionStatus('error');  // Set status to error
        });
    }

    return (
        <Fragment>
            <style>
                {`
                    .success-message {
                        color: green;
                        margin-top: 10px;
                    }

                    .error-message {
                        color: red;
                        margin-top: 10px;
                    }
                `}
            </style>
            <form className="widget-form" action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-4 gx-xxl-5 px-0">
                    <div className="col-md-6 mb-10">
                        <div className="form-input-box">
                            <label className="fs-16 text-white">Name</label>
                            <input type="text" name="name" placeholder="Enter Name" {...register('name')}
                                className={`${errors.name ? 'is-invalid' : ''}`}
                            />
                            {errors.name && (
                                <div className="invalid-feedback">{errors.name?.message}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6 mb-10">
                        <div className="form-input-box">
                            <label className="fs-16 text-white">Email Id</label>
                            <input type="email" name="email" placeholder="Email" {...register('email')}
                                className={`${errors.email ? 'is-invalid' : ''}`}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12 mb-20">
                        <div className="form-input-box">
                            <label className="fs-16 text-white">Comments</label>
                            <textarea name="message" placeholder="Write Message" defaultValue={""} {...register('sendMessage')}
                                className={`${errors.sendMessage ? 'is-invalid' : ''}`} />
                            {errors.sendMessage && (
                                <div className="invalid-feedback">{errors.sendMessage?.message}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="theme_btn">Submit Now</button>
                    </div>
                </div>
            </form>
            {/* Render success or error message */}
            {submissionStatus === 'success' && <div className="success-message">Submission successful!</div>}
            {submissionStatus === 'error' && <div className="error-message">Something went wrong. Please try again.</div>}
        </Fragment>
    );
};

export default ContactForm;
