import React, { useState } from 'react';
import { motion } from 'motion/react';

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
    const yOffset = direction === 'up' ? 30 : direction === 'down' ? -30 : 0;
    const xOffset = direction === 'left' ? 30 : direction === 'right' ? -30 : 0;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default function HailPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you! Your inspection request has been received.');
    };

    const inputStyle = {
        width: '100%',
        padding: '16px 20px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        color: '#fff',
        fontSize: '15px',
        marginBottom: '16px',
        outline: 'none',
        transition: 'all 0.3s ease',
        boxSizing: 'border-box'
    };

    return (
        <div style={{ 
            width: '100vw', 
            position: 'relative', 
            left: '50%', 
            right: '50%', 
            marginLeft: '-50vw', 
            marginRight: '-50vw',
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            background: 'transparent'
        }}>
            {/* Mobile responsive styles */}
            <style>{`
                .hail-section {
                    padding: 20px 5% 120px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 60px;
                    align-items: stretch;
                }
                .hail-left {
                    flex: 1 1 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .hail-right {
                    flex: 1 1 500px;
                    position: relative;
                }
                .hail-form-wrapper {
                    width: 100%;
                    min-height: 800px;
                    border-radius: 40px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                }
                .hail-form-card {
                    width: 100%;
                    max-width: 450px;
                    padding: 40px;
                    border-radius: 32px;
                    position: relative;
                    z-index: 2;
                    background: rgba(15, 16, 17, 0.7);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.1);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
                }
                .hail-name-row {
                    display: flex;
                    gap: 16px;
                }
                @media (max-width: 768px) {
                    .hail-section {
                        padding: 20px 3% 60px;
                        gap: 30px;
                    }
                    .hail-left,
                    .hail-right {
                        flex: 1 1 100%;
                    }
                    .hail-form-wrapper {
                        min-height: 600px;
                        border-radius: 24px;
                        padding: 20px 16px;
                    }
                    .hail-form-card {
                        max-width: 100%;
                        padding: 28px 20px;
                        border-radius: 20px;
                    }
                    .hail-name-row {
                        flex-direction: column;
                        gap: 0;
                    }
                }
                @media (max-width: 480px) {
                    .hail-section {
                        padding: 16px 2% 40px;
                        gap: 20px;
                    }
                    .hail-form-wrapper {
                        min-height: 500px;
                        border-radius: 20px;
                        padding: 16px 12px;
                    }
                    .hail-form-card {
                        padding: 24px 16px;
                        border-radius: 16px;
                    }
                }
            `}</style>

            <section className="hail-section">
                
                {/* LEFT SIDE - CONTENT */}
                <div className="hail-left">
                    <FadeIn direction="right">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '8px 24px',
                            background: 'rgba(0, 212, 255, 0.1)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            borderRadius: '30px',
                            color: '#00d4ff',
                            fontSize: '14px',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            marginBottom: '24px',
                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)'
                        }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00d4ff', marginRight: 12, boxShadow: '0 0 10px #00d4ff' }} />
                            Free House Inspection
                        </div>

                        <h1 className="michroma-title" style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1, margin: '0 0 20px 0', color: '#fff' }}>
                            COLORADO <br />
                            <span style={{ color: '#00d4ff' }}>HAILSTORM?</span>
                        </h1>
                        <p style={{ fontSize: '20px', color: '#fff', marginBottom: '40px', fontWeight: 500, lineHeight: 1.5 }}>
                            Don't Let Hail Damage Ruin Your Home.<br/>
                            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>Get a Free House Inspection Today.</span>
                        </p>
                    </FadeIn>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {[
                            {
                                num: '1',
                                title: 'Whole House Inspection',
                                desc: 'Many Companies will just replace your roof, but at Faraday we are here to take care of your whole house. Your gutters, siding, skylights, garage door, windows, and doors all withstand the same storm so ensure they get inspected as well!'
                            },
                            {
                                num: '2',
                                title: 'Protect Your Greatest Asset',
                                desc: 'All the recent hailstorms have wreaked havoc on Colorado homes. We will fix your house fast, handle all of the insurance claims to ensure you get compensated fairly, and get your peace of mind back.'
                            },
                            {
                                num: '3',
                                title: '10+ Years of Experience',
                                desc: 'Faraday has been in business in the Denver Metro area for over ten years with over thousands of roofs replaced and millions of dollars returned to homeowners from insurance. Get your house repaired hassle-free.'
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={0.2 + (i * 0.1)} direction="right">
                                <div className="premium-glass-card hover-lift" style={{ 
                                    padding: '30px', 
                                    borderRadius: '24px',
                                    display: 'flex',
                                    gap: '24px',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute', top: '-10px', right: '10px',
                                        fontSize: '120px', color: 'transparent',
                                        WebkitTextStroke: '1px rgba(0, 212, 255, 0.1)',
                                        fontFamily: 'Michroma', fontWeight: 800,
                                        pointerEvents: 'none', userSelect: 'none'
                                    }}>
                                        {item.num}
                                    </div>
                                    <div style={{
                                        width: '48px', height: '48px', flexShrink: 0,
                                        borderRadius: '50%', background: 'rgba(0, 212, 255, 0.1)',
                                        border: '1px solid rgba(0, 212, 255, 0.3)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#00d4ff', fontSize: '20px', fontWeight: 700, fontFamily: 'Michroma'
                                    }}>
                                        {item.num}
                                    </div>
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <h3 style={{ fontSize: '20px', color: '#fff', margin: '0 0 12px 0', fontWeight: 600 }}>{item.title}</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6, fontSize: '15px' }}>{item.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE - FORM & IMAGE */}
                <div className="hail-right">
                    <FadeIn direction="left" delay={0.3}>
                        <div className="hail-form-wrapper">
                            {/* Background Image with overlay */}
                            <img 
                                src="/roofing/121efc_f160b810ca9b4d84aceb5c360d2e8a97~mv2.png" 
                                alt="Hail Damage"
                                style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.5)'
                                }}
                            />
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,212,255,0.1) 100%)'
                            }}/>

                            {/* Floating Form */}
                            <div className="premium-glass-card hail-form-card">
                                <h3 className="michroma-title" style={{ fontSize: '24px', color: '#fff', textAlign: 'center', marginBottom: '32px' }}>
                                    FREE <span style={{ color: '#00d4ff' }}>INSPECTION</span>
                                </h3>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className="hail-name-row">
                                        <input 
                                            type="text" name="firstName" placeholder="First Name *" required
                                            value={formData.firstName} onChange={handleChange}
                                            style={inputStyle}
                                            onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                        <input 
                                            type="text" name="lastName" placeholder="Last Name"
                                            value={formData.lastName} onChange={handleChange}
                                            style={inputStyle}
                                            onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                    </div>
                                    <input 
                                        type="email" name="email" placeholder="Email *" required
                                        value={formData.email} onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                    <input 
                                        type="tel" name="phone" placeholder="Phone *" required
                                        value={formData.phone} onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                    <input 
                                        type="text" name="city" placeholder="City *" required
                                        value={formData.city} onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />

                                    <button 
                                        type="submit"
                                        style={{
                                            marginTop: '16px',
                                            padding: '16px',
                                            background: '#00d4ff',
                                            color: '#000',
                                            border: 'none',
                                            borderRadius: '12px',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            fontFamily: 'Inter, sans-serif',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                                            letterSpacing: '1px'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
                                        }}
                                    >
                                        LEARN MORE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
