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

export default function PellaInstallersPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        project: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! Your consultation request has been received.');
    };

    const inputStyle = {
        width: '100%',
        flex: '1 1 200px',
        padding: '16px 20px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        color: '#fff',
        fontSize: '15px',
        marginBottom: '16px',
        outline: 'none',
        transition: 'all 0.3s ease'
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
            {/* HERO SECTION with FORM */}
            <section style={{
                position: 'relative',
                width: '95%',
                margin: '0 auto',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 5% 40px',
                borderRadius: '40px',
                overflow: 'hidden'
            }}>
                {/* Hero Background */}
                <div style={{ 
                    position: 'absolute', 
                    inset: '0', 
                    zIndex: 0,
                }}>
                    <img 
                        src="/pella-certified-window-installers/e175bc_415c5c53dd0c4e75aa98a81d5306e20f~mv2.png" 
                        alt="Bright Pella Windows Interior"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }}
                        onError={(e) => {
                            // Fallback if that isn't the right image
                            e.target.src = "/windows/nsplsh_7238723249374673614945~mv2_d_6000_4000_s_4_2.png";
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, rgba(10,11,14,0.95) 0%, rgba(10,11,14,0.7) 50%, rgba(10,11,14,0.3) 100%)'
                    }} />
                </div>
                
                <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1400px', display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
                    
                    {/* Hero Left Content */}
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="right">
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '8px 24px',
                                background: 'rgba(255, 215, 0, 0.1)',
                                border: '1px solid rgba(255, 215, 0, 0.3)',
                                borderRadius: '30px',
                                color: '#FFD700',
                                fontSize: '14px',
                                fontWeight: 700,
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                marginBottom: '32px',
                                boxShadow: '0 0 20px rgba(255, 215, 0, 0.15)'
                            }}>
                                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFD700', marginRight: 12, boxShadow: '0 0 10px #FFD700' }} />
                                Certified Contractor
                            </div>

                            <h1 className="michroma-title" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1, margin: '0 0 24px 0', color: '#fff' }}>
                                FUTURE-PROOF <br />
                                <span style={{ 
                                    background: 'linear-gradient(90deg, #FFD700, #ffffff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    WebkitTextStroke: '0',
                                    filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.3))'
                                }}>YOUR HOME</span>
                            </h1>
                            
                            <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 0 40px 0', lineHeight: 1.5, fontWeight: 500 }}>
                                With Top-of-the-Line Pella Window Installation Services.
                            </p>

                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '20px', padding: '16px 24px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <img src="/pella-certified-window-installers/121efc_d7cf2bb6aebc4c7a80e2dac869672928~mv2.png" alt="Faraday Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
                                <div style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.2)' }} className="mobile-hide-divider" />
                                <img src="/pella-certified-window-installers/e175bc_30437c765cf149efbb5c59d3e54645cf~mv2.png" alt="Pella Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Hero Right Form */}
                    <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'flex-end' }}>
                        <FadeIn direction="left" delay={0.2}>
                            <div className="premium-glass-card" style={{
                                width: '100%', maxWidth: '550px',
                                padding: '40px',
                                borderRadius: '32px',
                                background: 'rgba(15, 16, 17, 0.7)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 215, 0, 0.2)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
                            }}>
                                <h3 className="michroma-title" style={{ fontSize: '24px', color: '#fff', textAlign: 'center', marginBottom: '32px' }}>
                                    SCHEDULE A <span style={{ color: '#FFD700' }}>FREE</span><br/>CONSULTATION TODAY
                                </h3>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        <input 
                                            type="text" name="firstName" placeholder="First Name *" required
                                            value={formData.firstName} onChange={handleChange}
                                            style={inputStyle}
                                            onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                        <input 
                                            type="text" name="lastName" placeholder="Last Name *" required
                                            value={formData.lastName} onChange={handleChange}
                                            style={inputStyle}
                                            onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        <input 
                                            type="tel" name="phone" placeholder="Phone Number *" required
                                            value={formData.phone} onChange={handleChange}
                                            style={inputStyle}
                                            onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                        <input 
                                            type="email" name="email" placeholder="Email *" required
                                            value={formData.email} onChange={handleChange}
                                            style={inputStyle}
                                            onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        <input 
                                            type="text" name="address" placeholder="Address *" required
                                            value={formData.address} onChange={handleChange}
                                            style={inputStyle}
                                            onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                        <input 
                                            type="text" name="city" placeholder="City *" required
                                            value={formData.city} onChange={handleChange}
                                            style={inputStyle}
                                            onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                    </div>
                                    <textarea 
                                        name="project" placeholder="Tell us about your project *" required
                                        value={formData.project} onChange={handleChange}
                                        style={{...inputStyle, minHeight: '100px', resize: 'vertical'}}
                                        onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />

                                    <button 
                                        type="submit"
                                        style={{
                                            marginTop: '16px',
                                            padding: '18px',
                                            background: '#FFD700',
                                            color: '#000',
                                            border: 'none',
                                            borderRadius: '12px',
                                            fontSize: '16px',
                                            fontWeight: 800,
                                            fontFamily: 'Inter, sans-serif',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.5)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
                                        }}
                                    >
                                        Get My FREE Consultation
                                    </button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </section>

            {/* ZIG ZAG 1: Select Few / Unbeatable Prices */}
            <section style={{ padding: '120px 5%', display: 'flex', flexDirection: 'column', gap: '140px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="right">
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '32px', lineHeight: 1.3 }}>
                                ONE OF A SELECT FEW PELLA CERTIFIED CONTRACTORS ON THE <span style={{ color: '#FFD700' }}>FRONT RANGE</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '32px' }}>
                                For a more energy-efficient home, trust only the best. At Faraday, we exclusively install Pella windows, the market leader in high-quality and innovative windows since 1925.
                            </p>
                            
                            <h3 className="michroma-title" style={{ fontSize: '24px', color: '#fff', marginBottom: '16px' }}>UNBEATABLE <span style={{ color: '#FFD700' }}>PRICES</span></h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                                Our pricing beats the competition, every time. We're committed to safeguarding your home's energy efficiency while saving you money. So, if you're seeking window services you can count on, look no further. Choose Faraday for flawless installation of Pella windows at unbeatable prices.
                            </p>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}>
                        <FadeIn direction="left">
                            <div className="premium-glass-card" style={{
                                width: '350px', height: '350px', borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 215, 0, 0.01) 100%)',
                                border: '1px solid rgba(255, 215, 0, 0.2)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 60px rgba(255, 215, 0, 0.05)', padding: '40px'
                            }}>
                                <img src="/pella-certified-window-installers/121efc_d7cf2bb6aebc4c7a80e2dac869672928~mv2.png" alt="Faraday Logo" style={{ width: '100%', objectFit: 'contain', opacity: 0.8 }} />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* FULL WIDTH PELLA BANNER */}
            <section style={{ padding: '40px 5% 120px', position: 'relative' }}>
                <FadeIn>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        borderRadius: '40px',
                        overflow: 'hidden',
                        minHeight: '600px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px'
                    }}>
                        <img 
                            src="/pella-certified-window-installers/e175bc_da7df18ae15b464b999a26c42ee2e125~mv2 (1).png" 
                            alt="Beautiful House Exterior"
                            style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.4)'
                            }}
                        />
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(10,11,14,0.8) 100%)'
                        }}/>
                        
                        <div className="premium-glass-card hover-lift" style={{ 
                            position: 'relative', zIndex: 1, 
                            maxWidth: '900px', width: '100%',
                            padding: '60px', 
                            borderRadius: '32px',
                            background: 'rgba(15, 16, 17, 0.85)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center'
                        }}>
                            <div style={{ flex: '0 0 200px', display: 'flex', justifyContent: 'center' }}>
                                <img src="/pella-certified-window-installers/e175bc_30437c765cf149efbb5c59d3e54645cf~mv2.png" alt="Pella Logo" style={{ width: '100%', filter: 'drop-shadow(0 10px 20px rgba(255,215,0,0.2))' }} />
                            </div>
                            <div style={{ flex: '1 1 300px' }}>
                                <p style={{ fontSize: '18px', color: '#fff', lineHeight: 1.8, marginBottom: '24px' }}>
                                    Pella believes that proper window installation is paramount to performance and customer satisfaction. That's why they only trust the process to a select few.
                                </p>
                                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                                    At Faraday, we're honored to be one of them. Our team of professionals has been specially trained to install Pella windows and doors; you won't find anyone who knows the products better.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* ZIG ZAG 2: Sustainability */}
            <section style={{ padding: '40px 5% 120px', display: 'flex', flexDirection: 'column', gap: '140px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px', position: 'relative' }}>
                        <FadeIn direction="right">
                            <div className="premium-glass-card" style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3' }}>
                                <img src="/pella-certified-window-installers/e175bc_311d4214d88245309e8448ecda4cf09e~mv2.png" alt="Dining Room Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="left">
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '32px', lineHeight: 1.3 }}>
                                SUSTAINABILITY AND STYLE TO FIT <span style={{ color: '#FFD700' }}>YOUR HOME</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px' }}>
                                Are you looking for elegant, traditional windows to complement your home? Or perhaps a sleek and modern selection?
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8 }}>
                                No matter your stylistic preference, we provide an unparalleled selection of Pella windows. Choose from an array of styles and options to elevate the sustainability of your home with flair. After you've found the windows that suit your taste, our team will ensure your new windows are expertly installed and set up for performance.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '0 5% 120px', position: 'relative' }}>
                <FadeIn>
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '32px' }}>
                            SCHEDULE YOUR FREE <span style={{ color: '#FFD700' }}>CONSULTATION</span> TODAY!
                        </h2>
                        <button 
                            className="michroma-title"
                            onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                            style={{
                                padding: '18px 40px',
                                background: 'transparent',
                                color: '#FFD700',
                                border: '2px solid #FFD700',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                letterSpacing: '1px'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
                                e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            BOOK NOW
                        </button>
                    </div>
                </FadeIn>
            </section>

        </div>
    );
}
