import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ThemeMenuThree from "../../../components/header/ThemeMenuThree";
import PageTitle from "../../../components/page-title/PageTitle";
import NewsletterTwo from "../../../components/call-to-action/NewsletterTwo";
import FooterThree from "../../../components/footer/FooterThree";

// Skill labels and levels remain unchanged
const skillLabels = [
    "Database Fundamentals",
    "Computer Architecture",
    "Distributed Computing Systems",
    "Cyber Security",
    "Networking",
    "Software Development",
    "Programming Skills",
    "Project Management",
    "Computer Forensics Fundamentals",
    "Technical Communication",
    "AI ML",
    "Software Engineering",
    "Business Analysis",
    "Communication skills",
    "Data Science",
    "Troubleshooting skills",
    "Graphics Designing"
];

const skillLevels = [
    "Not Interested",
    "Poor",
    "Beginner",
    "Average",
    "Intermediate",
    "Advanced",
    "Professional"
];

// Loader Component
const Loader = () => (
    <div style={{ textAlign: "center", marginTop: "3em" }}>
        <div className="spinner" style={{
            width: "50px",
            height: "50px",
            border: "6px solid #f3f3f3",
            borderTop: "6px solid #3498db",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
        }}></div>
        <p style={{ color: "white", fontSize: "1.5em", marginTop: "1em" }}>Processing...</p>
        <style>{
            `@keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }`
        }</style>
    </div>
);

const Career = () => {
    const [skills, setSkills] = useState(Array(skillLabels.length).fill(null));
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [career, setCareer] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSkillSelection = (level) => {
        const newSkills = [...skills];
        newSkills[currentSkillIndex] = level;
        setSkills(newSkills);

        // Apply animation class for smooth transition
        document.querySelectorAll('.skill-button').forEach((button, index) => {
            if (index === currentSkillIndex) {
                button.classList.add('selected');
                setTimeout(() => button.classList.remove('selected'), 1000); // Remove class after animation
            }
        });

        if (currentSkillIndex < skillLabels.length - 1) {
            setTimeout(() => {
                setCurrentSkillIndex(currentSkillIndex + 1);
            }, 300); // Smooth transition delay
        } else {
            // Directly proceed to submission if all skills are rated
            handleSubmit();
        }
    };

    const handleReset = () => {
        setSkills(Array(skillLabels.length).fill(null));
        setCurrentSkillIndex(0);
        setCareer("");
        setImageUrl("");
        setError(null);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Validate skills data
            const validLevels = new Set(skillLevels);
            const sanitizedSkills = skills.map(skill => validLevels.has(skill) ? skill : "Not Interested");

            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ skills: sanitizedSkills }), // Ensure skills is in the expected format
            });

            if (!response.ok) {
                const errorData = await response.json(); // Get more details from the server
                throw new Error(`Failed to fetch prediction: ${errorData.error}`);
            }

            const data = await response.json();
            setCareer(data.career);
            setImageUrl(data.image_url);
        } catch (error) {
            setError("There was a problem processing your request. Please try again.");
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="main-page-wrapper">
            <Helmet>
                <title>Career || Career Counselling System</title>
            </Helmet>

            <ThemeMenuThree />
            <PageTitle title="Career Counselling System" />

            <div className="container">
                <h2 style={{ textAlign: "center", marginTop: "2em", marginBottom: "1em", fontSize: "2em", color: "white" }}>
                    Rate Your Skills
                </h2>
                <p style={{ textAlign: "center", fontSize: "1.2em", color: "white", marginBottom: "2em" }}>
                    Please rate your skills in the following areas. Based on your ratings, this model will suggest a career path that suits your skill set.
                </p>

                {error && (
                    <div style={{ textAlign: "center", color: "red", marginBottom: "1.5em" }}>
                        {error}
                    </div>
                )}

                {isLoading ? (
                    <Loader />
                ) : currentSkillIndex < skillLabels.length ? (
                    <div style={{
                        textAlign: "center",
                        padding: "2em",
                        backgroundColor: "#061443",
                        borderRadius: "8px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease-in-out",
                        marginBottom: '1em'
                    }}>
                        <h3 style={{ color: "white", fontSize: "1.5em", marginBottom: "1em" }}>
                            How would you rate your skill in "{skillLabels[currentSkillIndex]}"?
                        </h3>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1em",
                            flexWrap: "wrap",
                            animation: "fadeIn 0.5s"
                        }}>
                            {skillLevels.map((level, idx) => (
                                <button
                                    key={level}
                                    className="skill-button"
                                    onClick={() => handleSkillSelection(level)}
                                    style={{
                                        padding: "0.8em 1.5em",
                                        backgroundColor: `hsl(${(idx * 60) % 360}, 70%, 60%)`,
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        fontSize: "1em",
                                        transition: "transform 0.5s, background-color 0.5s, box-shadow 0.5s",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div style={{ textAlign: "center", marginTop: "2em" }}>
                        <button
                            onClick={handleSubmit}
                            style={{
                                padding: "1em 2em",
                                backgroundColor: "#28a745",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "1.2em",
                                cursor: "pointer",
                                transition: "transform 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            disabled={isLoading}
                        >
                            Submit Your Skill Ratings
                        </button>
                        <button
                            onClick={handleReset}
                            style={{
                                padding: "1em 2em",
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "1.2em",
                                cursor: "pointer",
                                transition: "transform 0.3s ease",
                                marginLeft: "1em"
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            Reset
                        </button>
                    </div>
                )}

                {career && (
                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "3em",
                            marginBottom: "3em",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            color: "#fff",
                            backgroundColor: "#007BFF",
                            padding: "1em",
                            borderRadius: "8px",
                            boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        Based on your skills, the predicted career path is:
                        <span style={{ color: "#050D36", fontSize: "1.8em", marginLeft: "0.5em" }}>
                            {career}
                        </span>
                    </div>
                )}

                {imageUrl && (
                    <div style={{ textAlign: "center", marginTop: "2em" }}>
                        <img
                            src={imageUrl}
                            alt="Career Path"
                            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)" }}
                        />
                    </div>
                )}
            </div>

            <NewsletterTwo />
            <FooterThree />
        </div>
    );
};

export default Career;
