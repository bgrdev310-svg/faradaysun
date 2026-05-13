import React, { useState } from 'react';

// Using Unsplash source for high-quality placeholder images of houses/solar
const galleryImages = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
        title: '15kW Residential Array',
        location: 'Denver, CO',
        span: 'col-span-2 row-span-2' // For masonry-like visual weight
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800',
        title: 'Modern Architecture Integration',
        location: 'Boulder, CO',
        span: 'col-span-1 row-span-1'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1588612143003-f0a911765c95?auto=format&fit=crop&q=80&w=800',
        title: '8kW Off-Grid Setup',
        location: 'CO Springs, CO',
        span: 'col-span-1 row-span-2'
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800',
        title: 'Suburban Solar & Battery',
        location: 'Aurora, CO',
        span: 'col-span-1 row-span-1'
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?auto=format&fit=crop&q=80&w=800',
        title: 'Commercial Roof Integration',
        location: 'Fort Collins, CO',
        span: 'col-span-2 row-span-1'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&q=80&w=800',
        title: 'Minimalist Ground Mount',
        location: 'Aspen, CO',
        span: 'col-span-1 row-span-1'
    }
];

const GalleryItem = ({ image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="premium-glass-card gallery-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px',
                padding: '0', // Overriding default padding for edge-to-edge image
                cursor: 'pointer',
                minHeight: '250px',
                display: 'flex',
                // Using flex-grow approach for responsive masonry feel instead of strict CSS grid spans which can break easily
                flex: '1 1 300px',
                maxWidth: '600px'
            }}
        >
            {/* The Image */}
            <img
                src={image.url}
                alt={image.title}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1.02)', // Slight scale by default to prevent edge clipping on load
                    opacity: isHovered ? 1 : 0.75, // Dim when not hovered to blend into the deeply dark UI
                    minHeight: '350px' // Forcing consistent height on flex items
                }}
            />

            {/* Dark Cinematic Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: isHovered
                    ? 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                transition: 'background 0.4s ease',
                pointerEvents: 'none'
            }} />

            {/* Caption Text - Slides up and fades in on hover */}
            <div className="gallery-caption" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                padding: '30px',
                width: '100%',
                transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                opacity: isHovered ? 1 : 0,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
            }}>
                <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#fff',
                    margin: 0,
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                    {image.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span style={{
                        color: '#00D4FF',
                        fontSize: '14px',
                        fontWeight: 500,
                        letterSpacing: '0.5px'
                    }}>
                        {image.location}
                    </span>
                </div>
            </div>

            {/* Glowing Border effect on hover */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                border: '1px solid #00D4FF',
                borderRadius: '24px',
                opacity: isHovered ? 0.3 : 0,
                boxShadow: isHovered ? 'inset 0 0 30px rgba(0, 212, 255, 0.2)' : 'none',
                transition: 'all 0.4s ease',
                pointerEvents: 'none'
            }} />
        </div>
    );
};

const GalleryPage = () => {
    return (
        <section className="gallery-section" style={{
            padding: '20px 40px 80px 40px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'transparent'
        }}>
            {/* Hero Header */}
            <div className="gallery-header" style={{
                maxWidth: '800px',
                width: '100%',
                textAlign: 'center',
                marginBottom: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'inline-block', padding: '8px 24px', background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)', borderRadius: '20px',
                    color: '#00D4FF', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', marginBottom: '20px'
                }}>
                    OUR WORK
                </div>
                <h1 className="michroma-title" style={{ fontSize: '48px', margin: 0, textTransform: 'uppercase', lineHeight: 1.2, textShadow: '0 0 30px rgba(0, 212, 255, 0.3)', textAlign: 'center' }}>
                    FEATURED INSTALLATIONS
                </h1>
                <p style={{ color: 'var(--element-dim)', fontSize: '18px', marginTop: '20px', maxWidth: '600px', margin: '20px auto 0 auto', lineHeight: 1.6 }}>
                    Explore our portfolio of precision-engineered solar deployments bringing energy independence to homes across Colorado.
                </p>
            </div>

            {/* Responsive Flex Image Grid */}
            <div className="gallery-grid" style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                justifyContent: 'center'
            }}>
                {galleryImages.map(img => (
                    <GalleryItem key={img.id} image={img} />
                ))}
            </div>

        </section>
    );
};

export default GalleryPage;
