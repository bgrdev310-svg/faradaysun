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

export default function SolarPage() {
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
                        src="/solar/745196_a88fa7a4546645da953419be50cd5b8b~mv2.png" 
                        alt="Solar installation"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at center, transparent 0%, rgba(10,11,14,0.9) 100%), linear-gradient(to bottom, rgba(10,11,14,0.4) 0%, rgba(10,11,14,1) 100%)'
                    }} />
                </div>
                
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', textAlign: 'center', padding: '0 5%' }}>
                    <FadeIn>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '6px 16px',
                            background: 'rgba(255, 60, 60, 0.1)',
                            border: '1px solid rgba(255, 60, 60, 0.3)',
                            borderRadius: '30px',
                            color: '#FF4D4D',
                            fontSize: 'clamp(10px, 3vw, 14px)',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '24px',
                            boxShadow: '0 0 20px rgba(255, 60, 60, 0.15)'
                        }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF4D4D', marginRight: 8, boxShadow: '0 0 10px #FF4D4D' }} />
                            Expiring Soon: Dec 31, 2025
                        </div>
                    </FadeIn>
                    
                    <FadeIn delay={0.1}>
                        <h1 className="michroma-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', lineHeight: 1.2, margin: '0 0 24px 0', color: '#fff' }}>
                            SECURE YOUR 30% <br />
                            <span style={{ 
                                background: 'linear-gradient(90deg, #00d4ff, #ffffff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitTextStroke: '0',
                                filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.3))'
                            }}>SOLAR TAX CREDIT</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                            Take control of your energy future. Upgrade to a premium solar system before the federal tax incentives drop.
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
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    {[
                        { title: 'Match Your Utility Bill', desc: 'Swap unpredictable utility rates for a locked-in solar payment.', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
                        { title: 'Own Your Power', desc: 'Generate your own electricity and become energy independent.', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
                        { title: 'Help The Environment', desc: 'Reduce your carbon footprint with 100% clean, renewable energy.', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' }
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
                                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* HARDWARE / COMPONENTS */}
            <section style={{ padding: '80px 5%', background: 'transparent' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <FadeIn>
                        <h2 className="michroma-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'center', color: '#fff', marginBottom: '60px' }}>
                            PREMIUM <span style={{ color: '#00d4ff' }}>COMPONENTS</span>
                        </h2>
                    </FadeIn>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {[
                            { title: 'Q CELLS 400', subtitle: 'Tier-1 Monocrystalline Solar Panel', img: '/solar/121efc_59f816c23f004e5cb0e66c35ddf237d2~mv2.png' },
                            { title: 'ENPHASE IQ8M', subtitle: 'Advanced Microinverter Technology', img: '/solar/121efc_7d50993a7e4e4a8ea30c10d968cb7d8f~mv2.png' },
                            { title: 'ENPHASE IQ10', subtitle: 'Intelligent Battery Storage', img: '/solar/121efc_4ad195e6181d4f44bc91be244f4733d9~mv2.png' }
                        ].map((comp, i) => (
                            <FadeIn key={i} delay={i * 0.1} direction="up">
                                <div className="premium-glass-card magnetic-hover-effect" style={{
                                    borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%',
                                    border: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.2) 100%)'
                                }}>
                                    <div style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}>
                                        <img src={comp.img} alt={comp.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }} />
                                    </div>
                                    <div style={{
                                        padding: '24px', background: 'rgba(0, 212, 255, 0.03)', borderTop: '1px solid rgba(0, 212, 255, 0.1)', textAlign: 'center', marginTop: 'auto'
                                    }}>
                                        <h3 className="michroma-title" style={{ fontSize: '20px', color: '#fff', margin: '0 0 8px 0' }}>{comp.title}</h3>
                                        <p style={{ color: '#00d4ff', fontSize: '14px', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{comp.subtitle}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ZIG-ZAG SECTIONS */}
            <section style={{ padding: '120px 5%', display: 'flex', flexDirection: 'column', gap: '140px' }}>
                
                {/* Why Solar */}
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px', position: 'relative' }}>
                        <FadeIn direction="right">
                            <div className="premium-glass-card" style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3' }}>
                                <img src="/solar/121efc_1dac813084cb496d8f596ac01ce0af1d~mv2.png" alt="Why Solar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="left">
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '24px' }}>WHY <span style={{ color: '#00d4ff' }}>SOLAR</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8 }}>
                                Utility rates are constantly rising. By switching to solar, you lock in your energy costs for decades, increase your property value, and help transition the world to sustainable energy. 
                                Faraday Enterprises makes the switch seamless, handling all permits, design, and installation so you can sit back and watch your savings grow.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Installation */}
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="right">
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '24px' }}>FLAWLESS <span style={{ color: '#00d4ff' }}>INSTALLATION</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8 }}>
                                Our master journeymen treat your roof like it's their own. We use proprietary flashing techniques and hidden conduit routing to ensure your solar array isn't just powerful—it's aesthetically perfect. No exposed wires, no cutting corners.
                            </p>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px', position: 'relative' }}>
                        <FadeIn direction="left">
                            <div className="premium-glass-card" style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3' }}>
                                <img src="/solar/121efc_acc46968602f460e85f729d02104bb42~mv2.png" alt="Installation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Costs and Savings */}
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px', position: 'relative' }}>
                        <FadeIn direction="right">
                            <div className="premium-glass-card" style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3' }}>
                                <img src="/cybertruck/745196_5266bc29a99d414a8832e0b446d64ad2~mv2.png" alt="Costs and Savings" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="left">
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '24px' }}>COSTS & <span style={{ color: '#00d4ff' }}>SAVINGS</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8 }}>
                                With zero-down financing options, the 30% Federal Tax Credit, and net metering, solar pays for itself. 
                                Stop renting your power and start owning your energy production. Most of our clients see an immediate reduction in their monthly expenses from day one.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Maintenance */}
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '80px' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <FadeIn direction="right">
                            <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '24px' }}>LONG-TERM <span style={{ color: '#00d4ff' }}>MAINTENANCE</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8 }}>
                                Solar arrays are essentially solid-state with no moving parts, meaning maintenance is practically zero. However, to give you complete peace of mind, we back every installation with our ironclad 6-Year Workmanship Warranty. If there's ever a roof leak or an installation issue, we fix it—free of charge.
                            </p>
                        </FadeIn>
                    </div>
                    <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}>
                        <FadeIn direction="left">
                            <div style={{
                                width: '250px', height: '250px', borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.02) 100%)',
                                border: '2px solid rgba(0, 212, 255, 0.3)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 40px rgba(0, 212, 255, 0.1)', textAlign: 'center', padding: '20px'
                            }}>
                                <h3 className="michroma-title" style={{ color: '#fff', fontSize: '24px', margin: '0 0 10px 0' }}>6 YEAR</h3>
                                <p style={{ color: '#00d4ff', margin: 0, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Workmanship<br/>Warranty</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

            </section>

            {/* PAST WORK GALLERY */}
            <section style={{ padding: '80px 5%', background: 'transparent' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <FadeIn>
                        <h2 className="michroma-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', textAlign: 'center', color: '#fff', marginBottom: '60px' }}>
                            PAST <span style={{ color: '#00d4ff' }}>WORK</span>
                        </h2>
                    </FadeIn>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {[
                            "/solar/121efc_2ac78ec69511469cb570daa792643b9b~mv2.png",
                            "/solar/121efc_2b79e039ce5c4b1eb234115a502dd591~mv2.png",
                            "/solar/121efc_8ec99095c1f34e7ea5abaf609f53e710~mv2.png"
                        ].map((src, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="premium-glass-card magnetic-hover-effect" style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3' }}>
                                    <img src={src} alt="Past work" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL / CTA */}
            <section style={{ padding: '80px 5%', position: 'relative' }}>
                <div style={{
                    maxWidth: '900px', margin: '0 auto', padding: '60px',
                    background: 'linear-gradient(145deg, rgba(0, 212, 255, 0.05) 0%, rgba(0,0,0,0.5) 100%)',
                    borderRadius: '32px', border: '1px solid rgba(0, 212, 255, 0.2)',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                    marginBottom: '80px'
                }}>
                    <FadeIn>
                        <div style={{
                            position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
                            fontSize: '120px', color: 'rgba(0, 212, 255, 0.05)', fontFamily: 'serif', lineHeight: 1
                        }}>
                            "
                        </div>
                        <p style={{ fontSize: '22px', color: '#fff', fontStyle: 'italic', lineHeight: 1.6, position: 'relative', zIndex: 1, marginBottom: '32px' }}>
                            "I have completed several projects, both at my residence and at the business I run, and I couldn't be happier with the results. Brent Vaughn, the owner of Faraday Enterprises, and his team are responsible, attentive, and easy to work with... they are truly honest and honorable people."
                        </p>
                        <h4 className="michroma-title" style={{ color: '#00d4ff', margin: 0, fontSize: '16px' }}>- Arliegh L.</h4>
                    </FadeIn>
                </div>

                <FadeIn>
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '32px' }}>
                            READY TO GO <span style={{ color: '#00d4ff' }}>SOLAR?</span>
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
