import React from 'react';

const GridIndependence = () => {
    return (
        <section className="grid-independence" style={{
            position: 'relative',
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)', // Break out of container to be full width
            marginTop: '0px', // Removed top margin to close the gap with FAQ
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Cinematic Background Mockup */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, #050608 0%, #10151f 100%)',
                zIndex: 0
            }}>
                {/* Simulated house lights / lightning flashes in the background */}
                <div className="animate-pulse-slow" style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: '200px',
                    background: 'radial-gradient(ellipse at bottom, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
                    filter: 'blur(50px)'
                }} />

                {/* Dark Overlay for text readability */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(15, 16, 17, 1) 0%, rgba(15, 16, 17, 0.6) 20%, rgba(15, 16, 17, 0.6) 80%, rgba(15, 16, 17, 1) 100%)',
                    zIndex: 1
                }} />
            </div>

            {/* Content Container */}
            <div className="premium-glass-card hover-lift grid-independence-content" style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '800px',
                width: '90%',
                padding: '60px 40px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(20, 20, 22, 0.6) 0%, rgba(10, 10, 12, 0.4) 100%)',
                backdropFilter: 'blur(20px) saturate(150%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)'
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 20px',
                    background: 'rgba(255, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 0, 0, 0.2)',
                    borderRadius: '20px',
                    color: '#ff4444',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '24px'
                }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4444', boxShadow: '0 0 10px #ff4444' }} />
                    COLORADO GRID INDEPENDENCE
                </div>

                <h2 className="michroma-title" style={{
                    fontSize: 'clamp(32px, 5vw, 56px)',
                    lineHeight: 1.1,
                    marginBottom: '24px',
                    letterSpacing: '-1px'
                }}>
                    NEVER BE LEFT IN <br /> <span style={{ color: '#00D4FF', WebkitTextStroke: '0' }}>THE DARK.</span>
                </h2>

                <p style={{
                    color: 'var(--element-light)',
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    margin: '0 auto 32px auto',
                    fontWeight: 400
                }}>
                    Our intelligent battery systems keep your lights on, your food cold, and your family safe when the Colorado grid goes down.
                </p>

                <button 
                  className="cta-button" 
                  onClick={() => window.dispatchEvent(new Event('openContactModal'))}
                >
                    start with us
                </button>
            </div>

            {/* Ambient Background Noise/Texture */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.1,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                mixBlendMode: 'overlay',
                pointerEvents: 'none',
                zIndex: 1
            }} />
        </section>
    );
};

export default GridIndependence;
