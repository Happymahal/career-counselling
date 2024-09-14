import React from "react";
import { Helmet } from "react-helmet";
import ThemeMenuThree from "../../../components/header/ThemeMenuThree";
import PageTitle from "../../../components/page-title/PageTitle";
import NewsletterTwo from "../../../components/call-to-action/NewsletterTwo";
import FooterThree from "../../../components/footer/FooterThree";
import ChatBox from "../../../components/chat/ChatBox"; // Update the import path if necessary

const Feature = () => {
    return (
        <div className="main-page-wrapper">
            <Helmet>
                <title>Career || Chat Career Counselling System</title>
            </Helmet>

            <ThemeMenuThree />
            <PageTitle title="Chat Career Counselling System" />

            <ChatBox /> {/* Add the ChatBox component here */}

            <NewsletterTwo />
            <FooterThree />
        </div>
    );
};

export default Feature;