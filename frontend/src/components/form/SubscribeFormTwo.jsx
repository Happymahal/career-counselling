import React, { Fragment, useState } from 'react';

const SubscribeFormTwo = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://127.0.0.1:5000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmissionSuccess(true);
                setEmail('');  // Clear the input field
            } else {
                console.error('Error:', result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Fragment>
            <form className="sub-form" action="#" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" disabled={isSubmitting}>
                    <i className="bi bi-arrow-right" />
                </button>
            </form>
            {submissionSuccess && <p className="success-message">Subscription successful!</p>}
        </Fragment>
    );
};

export default SubscribeFormTwo;