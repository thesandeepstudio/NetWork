import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Faq.css";

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    { question: "How do I reset my password?", answer: "Go to your profile settings and click on 'Reset Password'." },
    { question: "How do I update my profile information?", answer: "Navigate to your profile page and edit your personal details." },
    { question: "How can I apply for a job?", answer: "Browse the job listings and click 'Apply Now' on any job that matches your skills." },
    { question: "How can I post a candidate?", answer: "Employers can post candidates through their dashboard after logging in." },
    { question: "How do I contact support?", answer: "Go to the Customer Support page and fill out the contact form." },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="faq-page">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="faq-search"
        />

        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h2 className="faq-question">{faq.question}</h2>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))
          ) : (
            <p className="no-results">No FAQs found. Try another search term.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
