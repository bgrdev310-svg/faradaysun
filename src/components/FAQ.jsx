import React from 'react';
import { Link } from 'react-router-dom';

const QAItem = ({ question, answer }) => {
    return (
        <div style={{ width: '100%', marginBottom: '24px' }}>
            <div className="premium-glass-card hover-lift home-qa-card" style={{
                padding: '32px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                textAlign: 'left',
                boxShadow: '0 10px 40px -10px rgba(0, 212, 255, 0.1), inset 0 0 20px rgba(0, 212, 255, 0.03)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                background: 'linear-gradient(135deg, rgba(20, 25, 30, 0.6) 0%, rgba(10, 12, 15, 0.4) 100%)'
            }}>
                <h3 style={{
                    color: '#fff',
                    fontSize: '20px',
                    fontWeight: 600,
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    <span style={{
                        color: '#00D4FF',
                        fontFamily: "'Michroma', sans-serif",
                        fontSize: '24px',
                        textShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
                    }}>Q.</span>
                    {question}
                </h3>
                <p style={{
                    color: 'rgba(255, 255, 255, 0.85)', // Brighter text for legibility
                    fontSize: '16px',
                    lineHeight: 1.7,
                    margin: 0,
                    fontWeight: 400,
                    paddingLeft: '40px' // Align with text, not the 'Q'
                }}>
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="home-faq-section" style={{
            marginTop: '120px',
            marginBottom: '40px', // Reduced from 80px
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 40px',
            maxWidth: '1000px',
            margin: '120px auto 40px auto' // Center the section, reduced bottom margin
        }}>

            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 20px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    borderRadius: '20px',
                    color: '#00D4FF',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '24px'
                }}>
                    KNOWLEDGE BASE
                </div>
                <h2 className="michroma-title" style={{ fontSize: '42px', margin: 0, textTransform: 'uppercase', lineHeight: 1.2 }}>
                    FREQUENTLY ASKED<br />QUESTIONS
                </h2>
            </div>

            {/* QA Items */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <QAItem
                    question="How much will I really save on my Colorado energy bill?"
                    answer="While savings vary based on your home’s energy consumption and the size of your solar system, most of our Colorado customers see a 60% to 100% reduction in their monthly electric bills. With our integrated battery systems, you can even avoid peak rate charges altogether."
                />
                <QAItem
                    question="Do your solar panels withstand Colorado hail and severe weather?"
                    answer="Absolutely. We exclusively install Tier 1, monocrystalline silicon panels that are rigorously tested against severe weather. Our storm-proof mounting systems and impact-resistant glass are specifically engineered to endure 130+ MPH winds and extreme Colorado hail storms."
                />
                <QAItem
                    question="What happens during a grid blackout?"
                    answer="If you have our intelligent battery storage system installed, your home will automatically isolate from the grid during an outage. Your critical loads (like refrigerators, lights, and medical equipment) will be seamlessly powered by the battery, and your solar panels will continue to recharge the battery during the day."
                />
            </div>

            {/* CTA Button */}
            <div style={{ marginTop: '32px' }}>
                <Link to="/faq" style={{ textDecoration: 'none' }}>
                    <button className="cta-button">
                        MORE INFORMATIONS
                    </button>
                </Link>
            </div>

        </section>
    );
};

export default FAQ;
