import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const services = [
    {
        id: 'solar',
        title: 'SOLAR',
        subtitle: 'Own Your Power Today',
        image: '/coreservices/745196_d2169ed16c04432ea8211cd801b50f25~mv2.png',
        link: '/solar'
    },
    {
        id: 'windows',
        title: 'WINDOWS',
        subtitle: 'Pella Certified Installer',
        image: '/coreservices/745196_64628d04c930416180a7e361ed83db89~mv2.png',
        link: '/windows'
    },
    {
        id: 'roofing',
        title: 'ROOFING',
        subtitle: 'Professional Installations',
        image: '/coreservices/745196_f4425d1f46794378941c2171cb924664~mv2.png',
        link: '/roofing'
    }
];

const HomeServices = () => {
    return (
        <section style={{
            width: '100%',
            padding: '120px 5% 40px 5%',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '60px'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 24px',
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        borderRadius: '30px',
                        color: '#00D4FF',
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '2px'
                    }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }} />
                        WHAT WE DO
                    </div>
                    <h2 className="michroma-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', margin: 0, color: '#fff' }}>
                        CORE SERVICES
                    </h2>
                    <p style={{ color: 'var(--element-dim)', fontSize: '18px', maxWidth: '600px', margin: 0 }}>
                        End-to-end infrastructure tailored for high efficiency, seamless integration, and maximum durability.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    width: '100%'
                }}>
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link to={service.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                <div className="premium-glass-card hover-lift" style={{
                                    position: 'relative',
                                    aspectRatio: '3/4',
                                    borderRadius: '30px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '40px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                    height: '100%'
                                }}>
                                    {/* Background Image */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        zIndex: 0,
                                        overflow: 'hidden'
                                    }}>
                                        <img 
                                            src={service.image} 
                                            alt={service.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </div>
                                    
                                    {/* Elegant Dark Gradient Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(15,16,17,0.95) 0%, rgba(15,16,17,0.3) 50%, transparent 100%)',
                                        zIndex: 1,
                                        transition: 'background 0.5s ease'
                                    }} 
                                    onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(to top, rgba(15,16,17,1) 0%, rgba(15,16,17,0.5) 60%, transparent 100%)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(to top, rgba(15,16,17,0.95) 0%, rgba(15,16,17,0.3) 50%, transparent 100%)'}
                                    />

                                    {/* Content */}
                                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '12px', pointerEvents: 'none', transition: 'transform 0.3s ease' }} 
                                         className="service-card-content">
                                        <h3 className="michroma-title" style={{ 
                                            margin: 0, 
                                            fontSize: '32px', 
                                            color: '#fff',
                                            letterSpacing: '2px',
                                            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                                        }}>
                                            {service.title}
                                        </h3>
                                        <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', transition: 'background 0.3s ease' }} className="service-divider" />
                                        <p style={{ 
                                            margin: 0, 
                                            color: 'rgba(255,255,255,0.7)', 
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            letterSpacing: '1px'
                                        }}>
                                            {service.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
