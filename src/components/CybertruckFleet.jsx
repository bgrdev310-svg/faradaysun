import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

export default function CybertruckFleet() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section style={{
            width: '100%',
            padding: '120px 5%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
        }}>
            {/* Background elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{
                width: '100%',
                maxWidth: '1400px',
                position: 'relative',
                zIndex: 1
            }}>
                <FadeIn>
                    <div className="premium-glass-card" style={{
                        padding: 'clamp(30px, 5vw, 60px)',
                        borderRadius: '40px',
                        background: 'rgba(15, 16, 17, 0.6)',
                        border: '1px solid rgba(0, 212, 255, 0.15)',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '60px',
                        alignItems: 'center'
                    }}>
                        
                        {/* LEFT: TEXT CONTENT */}
                        <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'center', alignItems: 'center' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '10px 24px',
                                background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.15), rgba(0, 212, 255, 0.05))',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                borderRadius: '30px',
                                color: '#00D4FF',
                                fontSize: '13px',
                                fontWeight: 800,
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                alignSelf: 'center',
                                boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)'
                            }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }} />
                                OUR NEW FLEET
                            </div>

                            <h2 className="michroma-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#fff', lineHeight: 1.1, margin: 0 }}>
                                MEET THE <br />
                                <span style={{ 
                                    background: 'linear-gradient(90deg, #00D4FF, #ffffff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))'
                                }}>CYBERTRUCK</span>
                            </h2>

                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.8, margin: 0 }}>
                                The first vehicle in our new fleet has officially arrived! These trucks embody Faraday's forward-thinking approach to our work and our deep desire to be an environmentally sustainable company.
                            </p>
                            
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: 1.6, margin: 0, fontWeight: 500, textAlign: 'left' }}>
                                    Keep your eye out around the Denver Metro area for our wrapped trucks and follow them on Instagram <strong style={{ color: '#00D4FF', cursor: 'pointer' }}>@thatbluecybertruck</strong>
                                </p>
                            </div>

                            {/* LEARN MORE BUTTON */}
                            <Link to="/cybertruck" style={{ textDecoration: 'none' }}>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        background: 'linear-gradient(90deg, #00D4FF, #007BFF)',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '16px 40px',
                                        borderRadius: '30px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    LEARN MORE
                                </motion.button>
                            </Link>
                        </div>

                        {/* RIGHT: BENTO GALLERY */}
                        <div style={{ flex: '1 1 500px' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gridTemplateRows: '250px 200px',
                                gap: '20px'
                            }}>
                                {/* Large Image (spans 2 cols) */}
                                <div 
                                    style={{ gridColumn: '1 / -1', borderRadius: '24px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)', cursor: 'zoom-in' }} 
                                    className="magnetic-hover-effect"
                                    onClick={() => setSelectedImage("/cybertruck/745196_5266bc29a99d414a8832e0b446d64ad2~mv2.png")}
                                >
                                    <img src="/cybertruck/745196_5266bc29a99d414a8832e0b446d64ad2~mv2.png" alt="Cybertruck Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,16,17,0.8), transparent)', pointerEvents: 'none' }} />
                                    <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                        <h3 className="michroma-title" style={{ margin: 0, color: '#fff', fontSize: '20px', letterSpacing: '2px' }}>THE FARADAY FLEET</h3>
                                    </div>
                                </div>
                                
                                {/* Small Image 1 */}
                                <div 
                                    style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', cursor: 'zoom-in' }} 
                                    className="hover-lift"
                                    onClick={() => setSelectedImage("/cybertruck/745196_b0f36e628402468888f8886b14293485~mv2.png")}
                                >
                                    <img src="/cybertruck/745196_b0f36e628402468888f8886b14293485~mv2.png" alt="Cybertruck at Home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>

                                {/* Small Image 2 */}
                                <div 
                                    style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', cursor: 'zoom-in' }} 
                                    className="hover-lift"
                                    onClick={() => setSelectedImage("/cybertruck/745196_0fbeb64844f1442e8b7e7287f416b12b~mv2.png")}
                                >
                                    <img src="/cybertruck/745196_0fbeb64844f1442e8b7e7287f416b12b~mv2.png" alt="Cybertruck in Forest" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </FadeIn>
            </div>

            {/* LIGHTBOX MODAL */}
            {selectedImage && (
                <div 
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                        cursor: 'zoom-out'
                    }}
                >
                    <button 
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'absolute',
                            top: '24px',
                            right: '24px',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '50%',
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '24px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            zIndex: 10000
                        }}
                        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        &times;
                    </button>
                    <img 
                        src={selectedImage} 
                        alt="Enlarged view" 
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            borderRadius: '12px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0, 212, 255, 0.2)',
                            border: '1px solid rgba(0, 212, 255, 0.2)'
                        }} 
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
