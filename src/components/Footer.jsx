import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            {/* Gradient accent bar at the very top */}
            <div className="footer-accent-bar" />

            {/* CTA Banner */}
            <div className="footer-cta-banner">
                <div className="footer-cta-inner">
                    <div className="footer-cta-text">
                        <h3>Ready to Go Solar?</h3>
                        <p>Get a free consultation and start saving on energy today.</p>
                    </div>
                    <button onClick={() => window.dispatchEvent(new Event('openContactModal'))} className="footer-cta-button" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                        Contact Us
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main footer content */}
            <div className="footer-main">
                <div className="footer-columns">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="19.36" x2="19.78" y2="20.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            </div>
                            <span className="michroma-title footer-logo-text">SOLAR PANEL</span>
                        </div>
                        <p className="footer-brand-desc">
                            Professional solar installation and sustainable energy solutions tailored for Texas homes.
                        </p>
                        {/* Trust badges */}
                        <div className="footer-trust-row">
                            <div className="footer-trust-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                <span>Licensed & Insured</span>
                            </div>
                            <div className="footer-trust-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <span>NABCEP Certified</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Navigation</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/services" className="footer-link">Services</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                            <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                            <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                            <li><Link to="/estimate" className="footer-link">Free Estimate</Link></li>
                        </ul>
                    </div>

                    {/* Pages Column */}
                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Explore</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/solar" className="footer-link">Solar</Link></li>
                            <li><Link to="/roofing" className="footer-link">Roofing</Link></li>
                            <li><Link to="/windows" className="footer-link">Windows & Doors</Link></li>
                            <li><Link to="/hail" className="footer-link">Hail Damage</Link></li>
                            <li><Link to="/pella-certified-window-installers" className="footer-link">Pella Installers</Link></li>
                            <li><Link to="/cybertruck" className="footer-link">Cybertruck Fleet</Link></li>
                            <li><Link to="/request-status" className="footer-link">Request Tracker</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Social Column */}
                    <div className="footer-connect-col">
                        <h4 className="footer-col-title">Connect</h4>
                        <div className="footer-contact-info">
                            <div className="footer-contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>Dallas, Austin, Houston</span>
                            </div>
                            <div className="footer-contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                <span>contact@solarpanel.tx</span>
                            </div>
                            <div className="footer-contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                <span>(512) 555-0199</span>
                            </div>
                        </div>

                        <div className="footer-social-row">
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p className="footer-copyright">&copy; {new Date().getFullYear()} Solar Panel TX. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <span className="footer-legal-dot" />
                        <a href="#" className="footer-link">Terms of Service</a>
                    </div>
                </div>
            </div>

            <style>{`
                /* ===== FOOTER REDESIGN ===== */
                .site-footer {
                    position: relative;
                    width: 100vw;
                    margin-left: calc(50% - 50vw);
                    margin-top: 100px;
                    background: #080a0d;
                    color: var(--element-dim);
                    font-family: 'Inter', sans-serif;
                    overflow: hidden;
                }

                /* Decorative background glow */
                .site-footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 600px;
                    height: 400px;
                    background: radial-gradient(ellipse, rgba(0, 212, 255, 0.06) 0%, transparent 70%);
                    pointer-events: none;
                }

                /* Gradient accent bar */
                .footer-accent-bar {
                    height: 3px;
                    width: 70%;
                    background: linear-gradient(90deg, #007a8c, #00D4FF 30%, #00f0ff 50%, #00D4FF 70%, #007a8c);
                    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.15);
                    border-radius: 4px;
                    animation: slideBar 4s infinite linear;
                }

                @keyframes slideBar {
                    0% { margin-left: -70%; }
                    100% { margin-left: 100%; }
                }

                /* ===== CTA BANNER ===== */
                .footer-cta-banner {
                    padding: 0 40px;
                }

                .footer-cta-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    padding: 40px 48px;
                    margin-top: 48px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(0, 120, 140, 0.06) 100%);
                    border: 1px solid rgba(0, 212, 255, 0.12);
                    backdrop-filter: blur(10px);
                }

                .footer-cta-text h3 {
                    font-family: 'Michroma', sans-serif;
                    font-size: 22px;
                    color: #fff;
                    letter-spacing: 0.5px;
                    margin-bottom: 8px;
                }

                .footer-cta-text p {
                    font-size: 15px;
                    color: var(--element-dim);
                    margin: 0;
                    line-height: 1.5;
                }

                .footer-cta-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: linear-gradient(135deg, #00D4FF, #00a8cc);
                    color: #000;
                    font-weight: 700;
                    font-size: 15px;
                    padding: 14px 32px;
                    border-radius: 12px;
                    text-decoration: none;
                    white-space: nowrap;
                    transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
                }

                .footer-cta-button:hover {
                    transform: translateY(-2px) scale(1.03);
                    box-shadow: 0 8px 30px rgba(0, 212, 255, 0.45);
                }

                .footer-cta-button svg {
                    transition: transform 0.3s ease;
                }

                .footer-cta-button:hover svg {
                    transform: translateX(4px);
                }

                /* ===== MAIN FOOTER GRID ===== */
                .footer-main {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 56px 40px 0 40px;
                }

                .footer-columns {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
                    gap: 48px;
                }

                /* Brand column */
                .footer-brand-col {
                    padding-right: 24px;
                }

                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-bottom: 20px;
                }

                .footer-logo-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #00D4FF 0%, #007a8c 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 16px rgba(0, 212, 255, 0.25);
                }

                .footer-logo-text {
                    font-size: 18px !important;
                    letter-spacing: 1.5px !important;
                    -webkit-text-stroke: 0 !important;
                    font-weight: 700 !important;
                }

                .footer-brand-desc {
                    font-size: 14px;
                    line-height: 1.7;
                    color: var(--element-dim);
                    max-width: 280px;
                    margin: 0 0 24px 0;
                }

                .footer-trust-row {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .footer-trust-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    color: rgba(255,255,255,0.5);
                    letter-spacing: 0.3px;
                }

                /* Column titles */
                .footer-col-title {
                    font-size: 13px;
                    font-weight: 700;
                    color: #fff;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    position: relative;
                    padding-bottom: 12px;
                }

                .footer-col-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 28px;
                    height: 2px;
                    background: linear-gradient(90deg, #00D4FF, transparent);
                    border-radius: 2px;
                }

                /* Links list */
                .footer-links-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .footer-link {
                    color: var(--element-dim);
                    text-decoration: none;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    position: relative;
                    display: inline-block;
                    padding-bottom: 2px;
                }

                .footer-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, #00D4FF, transparent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }

                .footer-link:hover {
                    color: #fff;
                }

                .footer-link:hover::after {
                    transform: scaleX(1);
                }

                /* Contact info */
                .footer-contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    margin-bottom: 24px;
                }

                .footer-contact-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    color: var(--element-dim);
                }

                .footer-contact-item svg {
                    flex-shrink: 0;
                }

                /* Social icons */
                .footer-social-row {
                    display: flex;
                    gap: 12px;
                }

                .social-icon {
                    color: var(--element-dim);
                    width: 42px;
                    height: 42px;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.03);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    border: 1px solid rgba(255,255,255,0.06);
                    position: relative;
                    overflow: hidden;
                    text-decoration: none;
                }

                .social-icon::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(0, 212, 255, 0.35) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .social-icon svg {
                    position: relative;
                    z-index: 1;
                    transition: transform 0.3s ease;
                }

                .social-icon:hover {
                    color: #fff;
                    border-color: rgba(0, 212, 255, 0.35);
                    background: rgba(0, 212, 255, 0.08);
                    box-shadow: 0 8px 24px -4px rgba(0, 212, 255, 0.25);
                    transform: translateY(-3px);
                }

                .social-icon:hover::before {
                    opacity: 1;
                }

                .social-icon:hover svg {
                    transform: scale(1.12);
                }

                /* ===== BOTTOM BAR ===== */
                .footer-bottom {
                    margin-top: 56px;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    background: rgba(0,0,0,0.25);
                }

                .footer-bottom-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 24px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .footer-copyright {
                    font-size: 13px;
                    color: var(--element-darker);
                    margin: 0;
                }

                .footer-legal-links {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .footer-legal-links .footer-link {
                    font-size: 13px;
                    color: var(--element-darker);
                }

                .footer-legal-dot {
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    background: var(--element-darker);
                }

                /* ===== RESPONSIVE - TABLET ===== */
                @media (max-width: 768px) {
                    .site-footer {
                        margin-top: 60px;
                    }

                    .footer-cta-banner {
                        padding: 0 20px;
                    }

                    .footer-cta-inner {
                        flex-direction: column;
                        text-align: center;
                        padding: 32px 24px;
                        margin-top: 36px;
                        border-radius: 16px;
                    }

                    .footer-cta-text h3 {
                        font-size: 18px;
                    }

                    .footer-cta-text p {
                        font-size: 14px;
                    }

                    .footer-main {
                        padding: 40px 24px 0 24px;
                    }

                    .footer-columns {
                        grid-template-columns: 1fr 1fr;
                        gap: 36px;
                    }

                    .footer-brand-col {
                        grid-column: 1 / -1;
                        padding-right: 0;
                    }

                    .footer-brand-desc {
                        max-width: 100%;
                    }

                    .footer-trust-row {
                        flex-direction: row;
                        gap: 20px;
                    }

                    .footer-bottom-inner {
                        padding: 20px 24px;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                }

                /* ===== RESPONSIVE - MOBILE ===== */
                @media (max-width: 480px) {
                    .site-footer {
                        margin-top: 40px;
                    }

                    .footer-cta-banner {
                        padding: 0 12px;
                    }

                    .footer-cta-inner {
                        padding: 28px 20px;
                        margin-top: 28px;
                    }

                    .footer-cta-text h3 {
                        font-size: 16px;
                    }

                    .footer-cta-button {
                        width: 100%;
                        justify-content: center;
                        padding: 14px 24px;
                    }

                    .footer-main {
                        padding: 32px 16px 0 16px;
                    }

                    .footer-columns {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }

                    .footer-trust-row {
                        flex-direction: column;
                        gap: 10px;
                    }

                    .footer-connect-col {
                        border-top: 1px solid rgba(255,255,255,0.05);
                        padding-top: 32px;
                    }

                    .footer-bottom-inner {
                        padding: 20px 16px;
                    }

                    .footer-legal-links {
                        gap: 12px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default React.memo(Footer);
