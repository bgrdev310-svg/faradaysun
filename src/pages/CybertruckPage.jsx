import React, { useEffect, useState } from 'react';

const CybertruckPage = () => {
    // State for image lightbox
    const [selectedImage, setSelectedImage] = useState(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper to open modal
    const openImage = (src) => {
        setSelectedImage(src);
    };

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
            {/* HERO SECTION */}
            <section style={{
                display: 'flex',
                gap: '40px',
                alignItems: 'stretch',
                flexWrap: 'wrap'
            }}>
                {/* Text Content */}
                <div style={{ flex: '1 1 min(100%, 400px)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                        alignSelf: 'flex-start'
                    }}>
                        OUR NEW FLEET
                    </div>
                    
                    <h1 className="michroma-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', margin: 0, lineHeight: 1.2 }}>
                        THE FIRST VEHICLE HAS ARRIVED
                    </h1>

                    {/* Desktop Description */}
                    <div className="desktop-break">
                        <div className="premium-glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
                            <p style={{ color: 'var(--element-light)', fontSize: '16px', lineHeight: 1.6 }}>
                                The first vehicle in our new fleet has arrived!
                            </p>
                            <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6 }}>
                                Keep your eye out around the area for our wrapped trucks and follow them on instagram <strong style={{ color: '#00D4FF' }}>@thatbluecybertruck</strong>
                            </p>
                            <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6 }}>
                                These trucks embody our forward thinking approach to our work and the desire to be environmentally sustainable as a company.
                            </p>
                            <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6 }}>
                                We hope you are as excited as we are for this fleet as we strive to continue to show why you should choose us for all of your home's renovations and energy needs!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div 
                    className="premium-glass-card magnetic-hover-effect" 
                    onClick={() => openImage("/cybertruck/745196_5266bc29a99d414a8832e0b446d64ad2~mv2.png")}
                    style={{ 
                        flex: '1 1 min(100%, 500px)', 
                        minHeight: '350px',
                        overflow: 'hidden', 
                        position: 'relative', 
                        borderRadius: 'var(--radius-lg)',
                        cursor: 'zoom-in',
                        maxWidth: '100%'
                    }}
                >
                    <img 
                        src="/cybertruck/745196_5266bc29a99d414a8832e0b446d64ad2~mv2.png" 
                        alt="Cybertruck in field" 
                        style={{ 
                            position: 'absolute',
                            inset: 0,
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(15, 16, 17, 0.8), transparent)',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }} />
                </div>

                {/* Mobile Description */}
                <div className="mobile-break" style={{ width: '100%' }}>
                    <div className="premium-glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '-16px' }}>
                        <p style={{ color: 'var(--element-light)', fontSize: '16px', lineHeight: 1.6 }}>
                            The first vehicle in our new fleet has arrived!
                        </p>
                        <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6 }}>
                            Keep your eye out around the area for our wrapped trucks and follow them on instagram <strong style={{ color: '#00D4FF' }}>@thatbluecybertruck</strong>
                        </p>
                        <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6 }}>
                            These trucks embody our forward thinking approach to our work and the desire to be environmentally sustainable as a company.
                        </p>
                        <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6 }}>
                            We hope you are as excited as we are for this fleet as we strive to continue to show why you should choose us for all of your home's renovations and energy needs!
                        </p>
                    </div>
                </div>
            </section>

            {/* GALLERY SECTION */}
            <section style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2 className="michroma-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', margin: 0 }}>
                        MORE THAN MEETS THE EYE
                    </h2>
                    <p style={{ color: 'var(--element-dim)', fontSize: '18px', marginTop: '16px' }}>
                        A closer look at our sustainable powerhouse.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px',
                    justifyContent: 'center'
                }}>
                    {/* Gallery Item 1 */}
                    <div 
                        className="premium-glass-card hover-lift" 
                        onClick={() => openImage("/cybertruck/745196_b0f36e628402468888f8886b14293485~mv2.png")}
                        style={{ flex: '1 1 300px', aspectRatio: '4/3', height: 'auto', minHeight: '200px', overflow: 'hidden', borderRadius: 'var(--radius-lg)', cursor: 'zoom-in' }}
                    >
                        <img 
                            src="/cybertruck/745196_b0f36e628402468888f8886b14293485~mv2.png" 
                            alt="Cybertruck at house" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                    
                    {/* Gallery Item 2 */}
                    <div 
                        className="premium-glass-card hover-lift" 
                        onClick={() => openImage("/cybertruck/745196_0fbeb64844f1442e8b7e7287f416b12b~mv2.png")}
                        style={{ flex: '1 1 300px', aspectRatio: '4/3', height: 'auto', minHeight: '200px', overflow: 'hidden', borderRadius: 'var(--radius-lg)', cursor: 'zoom-in' }}
                    >
                        <img 
                            src="/cybertruck/745196_0fbeb64844f1442e8b7e7287f416b12b~mv2.png" 
                            alt="Cybertruck in woods" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                    
                    {/* Gallery Item 3 */}
                    <div 
                        className="premium-glass-card hover-lift" 
                        onClick={() => openImage("/cybertruck/745196_642871cbb81445248af103250ea4f53c~mv2.png")}
                        style={{ flex: '1 1 300px', aspectRatio: '4/3', height: 'auto', minHeight: '200px', overflow: 'hidden', borderRadius: 'var(--radius-lg)', cursor: 'zoom-in' }}
                    >
                        <img 
                            src="/cybertruck/745196_642871cbb81445248af103250ea4f53c~mv2.png" 
                            alt="Cybertruck close up side" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>

                    {/* Gallery Item 4 */}
                    <div 
                        className="premium-glass-card hover-lift" 
                        onClick={() => openImage("/cybertruck/745196_5a71d723dd7547cf972cb50a2770ebea~mv2.png")}
                        style={{ flex: '1 1 300px', aspectRatio: '4/3', height: 'auto', minHeight: '200px', overflow: 'hidden', borderRadius: 'var(--radius-lg)', cursor: 'zoom-in' }}
                    >
                        <img 
                            src="/cybertruck/745196_5a71d723dd7547cf972cb50a2770ebea~mv2.png" 
                            alt="Cybertruck logo close up" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>

                    {/* Gallery Item 5 */}
                    <div 
                        className="premium-glass-card hover-lift" 
                        onClick={() => openImage("/cybertruck/745196_b738a88c6d4a43278c7f84593f3d88e9~mv2.png")}
                        style={{ flex: '1 1 300px', aspectRatio: '4/3', height: 'auto', minHeight: '200px', overflow: 'hidden', borderRadius: 'var(--radius-lg)', cursor: 'zoom-in' }}
                    >
                        <img 
                            src="/cybertruck/745196_b738a88c6d4a43278c7f84593f3d88e9~mv2.png" 
                            alt="Cybertruck detail" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                </div>
            </section>

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
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                    />
                </div>
            )}
        </div>
    );
};

export default CybertruckPage;
