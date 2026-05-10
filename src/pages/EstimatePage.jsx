import React, { useState } from 'react';

export default function EstimatePage() {
    const [focusedInput, setFocusedInput] = useState(null);

    const inputStyle = (id) => ({
        width: '100%',
        background: 'rgba(255, 255, 255, 0.04)',
        border: `1px solid ${focusedInput === id ? '#00d4ff' : 'rgba(255, 255, 255, 0.12)'}`,
        borderRadius: '12px',
        color: '#ffffff',
        padding: '16px 20px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '15px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        outline: 'none',
        boxShadow: focusedInput === id ? '0 0 0 4px rgba(0, 212, 255, 0.1)' : 'none',
    });

    const labelStyle = {
        display: 'block',
        marginBottom: '10px',
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'rgba(255,255,255,0.4)',
        fontFamily: "'Inter', sans-serif",
    };

    const containerStyle = {
        marginBottom: '24px'
    };

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(20px, 5vw, 60px)',
            gap: '40px',
            position: 'relative'
        }}>
            
            {/* Split Layout Container */}
            <div className="premium-glass-card" style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                maxWidth: '1200px',
                borderRadius: '32px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 80px rgba(0, 212, 255, 0.05)',
                border: '1px solid rgba(255,255,255,0.06)'
            }}>
                
                {/* Left Side: Info & Image */}
                <div style={{
                    flex: '1 1 400px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 'clamp(30px, 5vw, 60px)',
                    minHeight: '500px'
                }}>
                    {/* Immersive Background Image */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0
                    }}>
                        <img 
                            src="/estimate/745196_4a6abfe38656427da9c030f2c8594342~mv2.png" 
                            alt="Solar Panel Team"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.7) contrast(1.15)',
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(15,16,17,0.95) 0%, rgba(15,16,17,0.6) 100%)',
                        }} />
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '8px 20px',
                            background: 'rgba(0, 212, 255, 0.05)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            borderRadius: '30px',
                            color: '#00D4FF',
                            fontSize: '13px',
                            fontWeight: 600,
                            letterSpacing: '1.5px',
                            marginBottom: '32px',
                            textTransform: 'uppercase',
                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)'
                        }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }} />
                            Free Consultation
                        </div>
                        
                        <h1 className="michroma-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', margin: '0 0 24px 0', lineHeight: 1.1 }}>
                            GET YOUR <br/>
                            <span style={{ 
                                background: 'linear-gradient(90deg, #00d4ff, #ffffff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitTextStroke: '0',
                                display: 'inline-block',
                                filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.3))'
                            }}>
                                ESTIMATE
                            </span>
                        </h1>
                        
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.6, maxWidth: '420px', marginBottom: '48px', fontWeight: 300 }}>
                            Take the first step towards energy independence. Fill out the form and our team will provide a <strong style={{ color: '#fff', fontWeight: 500 }}>customized quote</strong> tailored perfectly to your home's needs.
                        </p>

                        {/* Trust Signals */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {[
                                { title: 'No Commitment Required', desc: '100% free home analysis' },
                                { title: 'Expert Engineering', desc: 'Tier-1 solar technology' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                    <div style={{ 
                                        width: '48px', height: '48px', borderRadius: '16px', 
                                        background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        boxShadow: 'inset 0 0 20px rgba(0, 212, 255, 0.05)'
                                    }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '2px' }}>
                                        <h3 style={{ color: '#fff', fontSize: '16px', margin: 0, fontWeight: 600, letterSpacing: '0.5px' }}>{item.title}</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: 0, fontWeight: 400 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div style={{
                    flex: '1 1 400px',
                    padding: 'clamp(30px, 5vw, 60px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: 'rgba(15, 16, 18, 0.8)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.03)'
                }}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                            <div style={{ ...containerStyle, flex: '1 1 calc(50% - 12px)' }}>
                                <label style={labelStyle}>First Name</label>
                                <input 
                                    type="text" 
                                    required 
                                    style={inputStyle('firstName')}
                                    onFocus={() => setFocusedInput('firstName')}
                                    onBlur={() => setFocusedInput(null)}
                                    placeholder="John"
                                />
                            </div>
                            <div style={{ ...containerStyle, flex: '1 1 calc(50% - 12px)' }}>
                                <label style={labelStyle}>Last Name</label>
                                <input 
                                    type="text" 
                                    style={inputStyle('lastName')}
                                    onFocus={() => setFocusedInput('lastName')}
                                    onBlur={() => setFocusedInput(null)}
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div style={containerStyle}>
                            <label style={labelStyle}>Email Address</label>
                            <input 
                                type="email" 
                                required 
                                style={inputStyle('email')}
                                onFocus={() => setFocusedInput('email')}
                                onBlur={() => setFocusedInput(null)}
                                placeholder="john@example.com"
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                            <div style={{ ...containerStyle, flex: '1 1 calc(50% - 12px)' }}>
                                <label style={labelStyle}>Phone Number</label>
                                <input 
                                    type="tel" 
                                    required 
                                    style={inputStyle('phone')}
                                    onFocus={() => setFocusedInput('phone')}
                                    onBlur={() => setFocusedInput(null)}
                                    placeholder="(555) 000-0000"
                                />
                            </div>
                            <div style={{ ...containerStyle, flex: '1 1 calc(50% - 12px)' }}>
                                <label style={labelStyle}>City</label>
                                <input 
                                    type="text" 
                                    required 
                                    style={inputStyle('city')}
                                    onFocus={() => setFocusedInput('city')}
                                    onBlur={() => setFocusedInput(null)}
                                    placeholder="Los Angeles, CA"
                                />
                            </div>
                        </div>

                        <div style={containerStyle}>
                            <label style={labelStyle}>Area of Interest</label>
                            <div style={{ position: 'relative' }}>
                                <select 
                                    style={{
                                        ...inputStyle('work'),
                                        appearance: 'none',
                                        cursor: 'pointer'
                                    }}
                                    onFocus={() => setFocusedInput('work')}
                                    onBlur={() => setFocusedInput(null)}
                                    defaultValue=""
                                >
                                    <option value="" disabled style={{ color: 'rgba(255,255,255,0.3)' }}>Select a service</option>
                                    <option value="solar" style={{ color: '#000' }}>Solar Panel Installation</option>
                                    <option value="roofing" style={{ color: '#000' }}>Roof Replacement</option>
                                    <option value="windows" style={{ color: '#000' }}>New Windows</option>
                                    <option value="other" style={{ color: '#000' }}>Other / General Inquiry</option>
                                </select>
                                <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'rgba(255,255,255,0.4)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button 
                            className="michroma-title"
                            style={{
                                width: '100%',
                                marginTop: '16px',
                                padding: '20px',
                                background: 'rgba(0, 212, 255, 0.1)',
                                color: '#00d4ff',
                                border: '1px solid rgba(0, 212, 255, 0.5)',
                                borderRadius: '12px',
                                fontSize: '15px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                                position: 'relative',
                                overflow: 'hidden',
                                WebkitTextStroke: '0'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)';
                                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Image Gallery */}
            <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
            }}>
                {[
                    "/estimate/745196_bfe664e04d4543c085530e6eaae1c2b4~mv2.png",
                    "/estimate/745196_9d351ecf1a8d4b7bb44e423968cd1e9f~mv2.png",
                    "/estimate/745196_6e14d6834e45475eae9e4ed79ba6c816~mv2.png"
                ].map((src, idx) => (
                    <div key={idx} className="premium-glass-card magnetic-hover-effect" style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        aspectRatio: '16/10',
                        position: 'relative',
                    }}>
                        <img 
                            src={src} 
                            alt={`Team photo ${idx + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
