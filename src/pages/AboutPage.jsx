import React, { useEffect } from 'react';

// Reusing Checkmark from SmartMonitoring for consistent design language
const GlowingCheck = () => (
    <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px rgba(0, 212, 255, 0.2)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);

const StatCard = ({ number, label }) => (
    <div className="premium-glass-card hover-lift" style={{
        padding: '32px 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        border: '1px solid rgba(0, 212, 255, 0.15)',
        background: 'linear-gradient(135deg, rgba(20, 25, 30, 0.6) 0%, rgba(10, 12, 15, 0.4) 100%)',
        boxShadow: '0 10px 40px -10px rgba(0, 212, 255, 0.1), inset 0 0 20px rgba(0, 212, 255, 0.03)'
    }}>
        <div className="michroma-title" style={{
            fontSize: '40px',
            color: '#00D4FF',
            textShadow: '0 0 15px rgba(0, 212, 255, 0.4)'
        }}>
            {number}
        </div>
        <div style={{
            color: '#fff',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase'
        }}>
            {label}
        </div>
    </div>
);

const AboutPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px 20px 60px 20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '80px'
        }}>
            {/* HER0 HEADER */}
            <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
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
                    OUR STORY
                </div>
                <h1 className="michroma-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px', lineHeight: 1.2 }}>
                    PIONEERING COLORADO SOLAR
                </h1>
                <p style={{ color: 'var(--element-light)', fontSize: '18px', lineHeight: 1.6 }}>
                    We didn't just adapt to the solar revolution; we helped build it in Colorado. Born from a desire to provide absolute energy security against an unpredictable grid, our mission is to empower every homeowner with absolute grid independence.
                </p>
            </section>

            {/* MISSION GRID */}
            <section style={{
                display: 'flex',
                gap: '40px',
                alignItems: 'center'
            }} className="about-mission-section">

                {/* Image / Visual Representation */}
                <div className="premium-glass-card" style={{ flex: 1, height: '400px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                        src="/built-to-last.png" 
                        alt="High-quality solar panel installation" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            filter: 'brightness(0.8) contrast(1.1)' 
                        }} 
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(13, 14, 16, 0.4), transparent)',
                        zIndex: 1
                    }} />
                </div>

                {/* Text Content */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <h2 className="michroma-title" style={{ fontSize: '32px', margin: 0 }}>BUILT TO LAST</h2>
                    <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6 }}>
                        Colorado weather is unforgiving. That’s why we refuse to compromise on hardware. We partner exclusively with Tier 1 manufacturers, utilizing monocrystalline black-on-black panels and intelligent micro-inverter technology.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <GlowingCheck />
                            <span style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>Uncompromising Tier 1 Quality</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <GlowingCheck />
                            <span style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>Master Journeyman Installers</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <GlowingCheck />
                            <span style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>25-Year Ironclad Warranty</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* BY THE NUMBERS */}
            <section style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <h2 className="michroma-title" style={{ fontSize: '28px', textAlign: 'center', margin: 0 }}>BY THE NUMBERS</h2>
                <div className="about-stats-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px'
                }}>
                    <StatCard number="10+" label="Years Active" />
                    <StatCard number="5k+" label="Installs" />
                    <StatCard number="100k" label="Happy Clients" />
                    <StatCard number="24/7" label="Monitoring" />
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
