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

export default function RoofingPage() {
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
                        src="/roofing/121efc_0101c6408f1b4832a511abb001067a2a~mv2.png" 
                        alt="Premium Roofing"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at center, transparent 0%, rgba(10,11,14,0.95) 100%), linear-gradient(to bottom, rgba(10,11,14,0.5) 0%, rgba(10,11,14,1) 100%)'
                    }} />
                </div>
                
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', textAlign: 'center', padding: '0 5%' }}>
                    <FadeIn>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '6px 16px',
                            background: 'rgba(0, 212, 255, 0.1)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            borderRadius: '30px',
                            color: '#00d4ff',
                            fontSize: 'clamp(10px, 3vw, 14px)',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '24px',
                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)'
                        }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00d4ff', marginRight: 8, boxShadow: '0 0 10px #00d4ff' }} />
                            Expert Roof Services You Can Trust
                        </div>
                    </FadeIn>
                    
                    <FadeIn delay={0.1}>
                        <h1 className="michroma-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', lineHeight: 1.2, margin: '0 0 24px 0', color: '#fff' }}>
                            PREMIUM <span style={{ 
                                background: 'linear-gradient(90deg, #00d4ff, #ffffff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitTextStroke: '0',
                                filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.3))'
                            }}>ROOFING</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                            Protect your house and improve the aesthetic with a new top of the line roof that is leak proof guaranteed with Faraday. 10+ Years of Excellence.
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

            {/* BENEFITS SECTION */}
            <section style={{ padding: '80px 5%', background: 'transparent' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                    {[
                        { 
                            title: 'Roofing Services', 
                            desc: "We specialize in roofing replacements and repairs. Our team of experts is dedicated to providing high-quality services to ensure the safety and durability of your roof. Whether you need a complete roof replacement or just a minor repair, we've got you covered. Trust us to protect your home or business from the elements.", 
                            icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' 
                        },
                        { 
                            title: 'Owens Corning', 
                            desc: "At Faraday we take pride in our workmanship. We use top quality materials and follow industry best practices to ensure that your roof is built to last. Our partnership with Owens Corning furthers that promise. With our expertise and attention to detail, you can have peace of mind knowing that your roof is in good hands.", 
                            icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' 
                        },
                        { 
                            title: 'Customer Satisfaction', 
                            desc: "Customer satisfaction is our top priority. We understand the importance of a happy customer and strive to exceed your expectations. With our 30-day guarantee, we ensure that you are completely satisfied with our roofing services. If you have any concerns or issues, we will work with you to make it right. Your satisfaction is our success.", 
                            icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' 
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

            {/* ZIG-ZAG SECTIONS */}
            <section style={{ padding: '120px 5%', display: 'flex', flexDirection: 'column', gap: '140px' }}>
                
                {/* Installation */}
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px', position: 'relative' }}>
                        <FadeIn direction="right">
                            <div className="premium-glass-card" style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3' }}>
                                <img src="/roofing/121efc_f160b810ca9b4d84aceb5c360d2e8a97~mv2.png" alt="Roofing Installation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="left">
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '24px' }}><span style={{ color: '#00d4ff' }}>INSTALLATION</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8 }}>
                                After a thorough inspection ensures the strength of your roof deck, the old roof is discarded and underlayment is installed. The new roof is then meticulously laid for optimized performance and aesthetic. This process is completed by our trained professionals in 1-2 days time.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Hail Damage */}
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="right">
                            <p style={{ color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 10px 0', fontWeight: 'bold' }}>Our Annual</p>
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '24px' }}>HAIL <span style={{ color: '#00d4ff' }}>DAMAGE</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8, marginBottom: '32px' }}>
                                Call or reach out today to see if you can get your roof replaced for free. Let our experts inspect your property for hidden storm damage before it causes leaks.
                            </p>
                            <button 
                                className="michroma-title"
                                onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                                style={{
                                    padding: '16px 32px',
                                    background: '#00d4ff',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    letterSpacing: '1px'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 212, 255, 0.4)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                MORE INFO
                            </button>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px', position: 'relative' }}>
                        <FadeIn direction="left">
                            <div className="premium-glass-card" style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3' }}>
                                <img src="/roofing/121efc_4ecffecba22e476fbae6c6ea5a4829ea~mv2.png" alt="Hail Damage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeIn>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <section style={{ padding: '80px 5% 120px', position: 'relative' }}>
                <FadeIn>
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '32px' }}>
                            READY FOR A <span style={{ color: '#00d4ff' }}>NEW ROOF?</span>
                        </h2>
                        <Link to="/estimate" style={{ textDecoration: 'none' }}>
                            <button 
                                style={{
                                    padding: '18px 40px',
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
                                GET YOUR ESTIMATE
                            </button>
                        </Link>
                    </div>
                </FadeIn>
            </section>

        </div>
    );
}
