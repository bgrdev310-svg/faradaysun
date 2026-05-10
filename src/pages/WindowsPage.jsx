import React from 'react';
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

export default function WindowsPage() {
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
            {/* HERO SECTION */}
            <section style={{
                position: 'relative',
                width: '100%',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '120px 20px',
                overflow: 'hidden'
            }}>
                <div style={{ 
                    position: 'absolute', 
                    inset: '10px 3%', 
                    zIndex: 0,
                    borderRadius: '40px',
                    overflow: 'hidden'
                }}>
                    <img 
                        src="/windows/9ab881a357ec4dc3ac4264a8ab8c6ea2.png" 
                        alt="Premium Windows & Doors"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at center, transparent 0%, rgba(10,11,14,0.95) 100%), linear-gradient(to bottom, rgba(10,11,14,0.4) 0%, rgba(10,11,14,1) 100%)'
                    }} />
                </div>
                
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', textAlign: 'center', padding: '0 5%' }}>
                    <FadeIn>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '6px 16px',
                            background: 'rgba(255, 165, 0, 0.1)',
                            border: '1px solid rgba(255, 165, 0, 0.3)',
                            borderRadius: '30px',
                            color: '#FFA500',
                            fontSize: 'clamp(10px, 3vw, 14px)',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '24px',
                            boxShadow: '0 0 20px rgba(255, 165, 0, 0.15)'
                        }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFA500', marginRight: 8, boxShadow: '0 0 10px #FFA500' }} />
                            FALL SALE - LIMITED TIME OFFER
                        </div>
                    </FadeIn>
                    
                    <FadeIn delay={0.1}>
                        <h1 className="michroma-title" style={{ fontSize: 'clamp(32px, 8vw, 64px)', lineHeight: 1.2, margin: '0 0 24px 0', color: '#fff' }}>
                            WINDOWS & <span style={{ 
                                background: 'linear-gradient(90deg, #00d4ff, #ffffff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitTextStroke: '0',
                                filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.3))'
                            }}>DOORS</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                            Future-proof your home with top-of-the-line Pella window installation services. Exceptional energy efficiency meets timeless design.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <Link to="/estimate" style={{ textDecoration: 'none' }}>
                            <button 
                                style={{
                                    padding: 'clamp(12px, 3vw, 18px) clamp(24px, 5vw, 40px)',
                                    background: '#00d4ff',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    fontSize: 'clamp(14px, 3vw, 16px)',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)',
                                    letterSpacing: '1px',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.6)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.4)';
                                }}
                            >
                                GET A FREE QUOTE
                            </button>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* ZIG-ZAG SECTION: Pella Partnership */}
            <section style={{ padding: '80px 5%', display: 'flex', flexDirection: 'column', gap: '140px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px', position: 'relative' }}>
                        <FadeIn direction="right">
                            <div className="premium-glass-card" style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3' }}>
                                <img src="/windows/nsplsh_7238723249374673614945~mv2_d_6000_4000_s_4_2.png" alt="Pella Partnership" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="left">
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '24px' }}>
                                PELLA <span style={{ color: '#00d4ff' }}>PARTNERSHIP</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8 }}>
                                Faraday Enterprises partners with Pella to provide the highest quality windows and doors since 1925. Our strong partnership provides every homeowner peace of mind knowing your home's energy efficiency will drastically increase. Pella offers leading products in vinyl, fiberglass, and traditional wood.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* PELLA WINDOW SERIES */}
            <section style={{ padding: '80px 5%', background: 'transparent' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <FadeIn>
                        <h2 className="michroma-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'center', color: '#fff', marginBottom: '60px' }}>
                            PELLA <span style={{ color: '#00d4ff' }}>SERIES</span>
                        </h2>
                    </FadeIn>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {[
                            { 
                                title: '250 Series Windows', 
                                subtitle: 'Premium Vinyl Windows',
                                desc: 'Pella 250 Series vinyl windows offer innovative, enhanced security and privacy. Hidden screens, integrated blinds, and exceptional energy efficiency.', 
                                img: '/windows/121efc_2a328dbff9474823bbcd440914cc26de~mv2.png' 
                            },
                            { 
                                title: 'Lifestyle Series', 
                                subtitle: 'Wood Craftsmanship',
                                desc: 'Pella Lifestyle Series wood windows offer the beauty of wood combined with energy efficiency. Available with integrated blinds and shades.', 
                                img: '/windows/121efc_bdf1df5dbfca4c208b30bae665d3b697~mv2.png' 
                            },
                            { 
                                title: 'Impervia Series', 
                                subtitle: 'Extreme Fiberglass Durability',
                                desc: 'Pella Impervia fiberglass windows deliver unmatched strength and durability. They withstand extreme heat and cold, ensuring long-lasting performance.', 
                                img: '/windows/121efc_fd7ea84b98f947778bf9a7d40ce8b45f~mv2.png' 
                            }
                        ].map((comp, i) => (
                            <FadeIn key={i} delay={i * 0.1} direction="up">
                                <div className="premium-glass-card magnetic-hover-effect" style={{
                                    borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%',
                                    border: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.2) 100%)'
                                }}>
                                    <div style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '280px', background: 'rgba(255,255,255,0.02)' }}>
                                        <img src={comp.img} alt={comp.title} style={{ maxWidth: '80%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.4))' }} />
                                    </div>
                                    <div style={{
                                        padding: '30px 24px', background: 'rgba(0, 212, 255, 0.03)', borderTop: '1px solid rgba(0, 212, 255, 0.1)', flexGrow: 1, display: 'flex', flexDirection: 'column'
                                    }}>
                                        <h3 className="michroma-title" style={{ fontSize: '20px', color: '#fff', margin: '0 0 8px 0' }}>{comp.title}</h3>
                                        <p style={{ color: '#00d4ff', fontSize: '13px', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>{comp.subtitle}</p>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{comp.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section style={{ padding: '80px 5%', background: 'transparent' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                    {[
                        { 
                            title: 'Pella Windows', 
                            desc: "We are an authorized Pella dealer, bringing you the finest selection of premium windows and doors tailored perfectly to your home's unique style.", 
                            icon: 'M4 4h16v16H4V4zm2 2v5h5V6H6zm7 0v5h5V6h-5zm5 7h-5v5h5v-5zm-7 5v-5H6v5h5z' 
                        },
                        { 
                            title: 'Certified Installers', 
                            desc: "Our highly trained experts are fully certified to install Pella products, guaranteeing flawless execution, complete warranty coverage, and peace of mind.", 
                            icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' 
                        },
                        { 
                            title: 'Energy Efficient', 
                            desc: "Upgrading your windows pays for itself. Lock in your home's temperature, lower your utility bills, and reduce your carbon footprint starting today.", 
                            icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' 
                        }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="premium-glass-card" style={{ padding: '40px', borderRadius: '24px', textAlign: 'center', height: '100%' }}>
                                <div style={{
                                    width: 80, height: 80, margin: '0 auto 24px',
                                    borderRadius: '50%', background: 'rgba(0, 212, 255, 0.05)',
                                    border: '1px solid rgba(0, 212, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={item.icon} />
                                    </svg>
                                </div>
                                <h3 className="michroma-title" style={{ fontSize: '20px', color: '#fff', marginBottom: '16px' }}>{item.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0, fontSize: '15px' }}>{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* FULL WIDTH IMAGE BANNER CTA */}
            <section style={{ padding: '80px 5% 120px', position: 'relative' }}>
                <FadeIn>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        minHeight: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px'
                    }}>
                        <img 
                            src="/windows/11062b_f6dd2e6c67fc4ee18ba3818c0c6caf3f~mv2.png" 
                            alt="Window Installation"
                            style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.3)'
                            }}
                        />
                        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '24px', lineHeight: 1.3 }}>
                                READY TO UPGRADE YOUR <span style={{ color: '#00d4ff' }}>HOME?</span>
                            </h2>
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link to="/pella-certified-window-installers" style={{ textDecoration: 'none' }}>
                                    <button 
                                        style={{
                                            padding: '16px 40px',
                                            background: 'transparent',
                                            color: '#00d4ff',
                                            border: '2px solid #00d4ff',
                                            borderRadius: '12px',
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            letterSpacing: '1px'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
                                            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.2)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        MORE INFO
                                    </button>
                                </Link>
                                <Link to="/estimate" style={{ textDecoration: 'none' }}>
                                    <button 
                                        style={{
                                            padding: '16px 40px',
                                            background: '#00d4ff',
                                            color: '#000',
                                            border: 'none',
                                            borderRadius: '12px',
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            letterSpacing: '1px'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.4)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        CONTACT US TODAY
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

        </div>
    );
}
