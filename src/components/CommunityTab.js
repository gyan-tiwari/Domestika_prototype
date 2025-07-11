import React, { useState } from 'react';
import { Users, Star, MessageCircle, Eye, Heart, Share2, X, Award } from 'lucide-react';

const communityConnections = [
  {
    name: 'Elena Vasquez',
    skill: 'Photography',
    status: 'Available for critique',
    level: 'Master',
    avatar: '👩‍🎨',
    matchReason: 'Specializes in portrait lighting',
    portfolio: {
      bio: 'Award-winning portrait photographer with a passion for natural light and creative storytelling.',
      works: [
        { title: 'Abstract Portrait Series', description: 'A series exploring emotion through color and light.', likes: 247, comments: 23, shares: 12 },
        { title: 'Urban Faces', description: 'Capturing the diversity of city life in candid moments.', likes: 180, comments: 15, shares: 7 }
      ],
      contributions: [
        'Mentored 20+ aspiring photographers',
        'Published in National Geographic',
        'Speaker at Creative Photo Summit 2023'
      ]
    }
  },
  {
    name: 'David Park',
    skill: 'Design',
    status: 'Looking for collaboration',
    level: 'Peer',
    avatar: '👨‍💻',
    matchReason: 'Working on similar UI projects',
    portfolio: {
      bio: 'UI/UX designer focused on accessibility and delightful micro-interactions.',
      works: [
        { title: 'Mobile App Redesign', description: 'A fresh take on login flows for better accessibility.', likes: 189, comments: 34, shares: 8 },
        { title: 'Colorful Dashboard', description: 'Data visualization with a playful color palette.', likes: 120, comments: 10, shares: 5 }
      ],
      contributions: [
        'Open-source contributor to A11y Project',
        'Organized 2022 Design Jam',
        'Published in UX Magazine'
      ]
    }
  },
  {
    name: 'Maria Santos',
    skill: 'Illustration',
    status: 'Offering mentorship',
    level: 'Expert',
    avatar: '🎨',
    matchReason: 'Character design specialist',
    portfolio: {
      bio: 'Character designer blending myth and modern style. Loves teaching and sharing process tips.',
      works: [
        { title: 'Mythic Creatures', description: 'Illustrations inspired by world folklore.', likes: 210, comments: 18, shares: 9 },
        { title: 'Digital Sketchbook', description: 'A collection of daily character sketches.', likes: 98, comments: 7, shares: 2 }
      ],
      contributions: [
        'Hosted 10+ online illustration workshops',
        'Featured in ArtStation Magazine',
        'Created free brush packs for the community'
      ]
    }
  }
];

const CommunityTab = () => {
  const [portfolioUser, setPortfolioUser] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleConnect = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  return (
    <div>
      {showToast && (
        <div className="dca-toast-success">Connect request sent successfully!</div>
      )}
      <div className="dca-card" style={{ background: 'linear-gradient(90deg, #f97316 0%, #ef4444 100%)', color: '#fff' }}>
        <div className="dca-flex dca-gap-3 dca-mb-4">
          <Users style={{ width: 32, height: 32 }} />
          <div>
            <h2 className="dca-text-xl">Smart Community Connections</h2>
            <p className="dca-text-orange" style={{ color: '#ffedd5' }}>AI-matched peers and mentors for your creative journey</p>
          </div>
        </div>
      </div>
      {communityConnections.map((connection, index) => (
        <div key={index} className="dca-card">
          <div className="dca-flex dca-gap-4 dca-mb-4" style={{ justifyContent: 'space-between' }}>
            <div className="dca-flex dca-gap-4">
              <div className="dca-avatar-large">{connection.avatar}</div>
              <div>
                <h3 className="dca-text-lg dca-mb-1">{connection.name}</h3>
                <div className="dca-flex dca-gap-2 dca-mb-2">
                  <span style={{ background: '#ffedd5', color: '#ea580c', borderRadius: 10, padding: '2px 8px', fontSize: 13 }}>{connection.skill}</span>
                  <span style={{ background: '#ede9fe', color: '#9333ea', borderRadius: 10, padding: '2px 8px', fontSize: 13 }}>{connection.level}</span>
                </div>
                <p className="dca-text-sm dca-mb-2">{connection.status}</p>
                <div className="dca-flex dca-gap-2 dca-text-blue dca-text-sm">
                  <Star style={{ width: 16, height: 16, color: '#2563eb' }} />
                  <span>AI Match: {connection.matchReason}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dca-flex dca-gap-3">
            <button className="dca-btn" style={{ background: '#ea580c' }} onClick={handleConnect}>
              <MessageCircle style={{ width: 16, height: 16 }} />
              Connect
            </button>
            <button className="dca-btn secondary" onClick={() => setPortfolioUser(connection)}>
              <Eye style={{ width: 16, height: 16 }} />
              View Portfolio
            </button>
          </div>
        </div>
      ))}
      <div className="dca-showcase">
        <h3 className="dca-section-title">🎭 Community Showcase</h3>
        <div className="dca-flex dca-gap-4">
          <div className="dca-showcase-card">
            <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)', borderRadius: 8, marginBottom: 12 }}></div>
            <h4 className="dca-text-lg dca-mb-1">Abstract Portrait Series</h4>
            <p className="dca-text-sm dca-mb-2">by Elena Vasquez</p>
            <div className="dca-flex dca-gap-4 dca-text-sm">
              <span className="dca-flex dca-gap-2"><Heart style={{ width: 16, height: 16 }} />247</span>
              <span className="dca-flex dca-gap-2"><MessageCircle style={{ width: 16, height: 16 }} />23</span>
              <span className="dca-flex dca-gap-2"><Share2 style={{ width: 16, height: 16 }} />12</span>
            </div>
          </div>
          <div className="dca-showcase-card">
            <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #60a5fa 0%, #14b8a6 100%)', borderRadius: 8, marginBottom: 12 }}></div>
            <h4 className="dca-text-lg dca-mb-1">Mobile App Redesign</h4>
            <p className="dca-text-sm dca-mb-2">by David Park</p>
            <div className="dca-flex dca-gap-4 dca-text-sm">
              <span className="dca-flex dca-gap-2"><Heart style={{ width: 16, height: 16 }} />189</span>
              <span className="dca-flex dca-gap-2"><MessageCircle style={{ width: 16, height: 16 }} />34</span>
              <span className="dca-flex dca-gap-2"><Share2 style={{ width: 16, height: 16 }} />8</span>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Modal */}
      {portfolioUser && (
        <div className="dca-modal-overlay">
          <div className="dca-modal">
            <button className="dca-modal-close" onClick={() => setPortfolioUser(null)}><X style={{ width: 24, height: 24 }} /></button>
            <div className="dca-modal-header">
              <span className="dca-avatar-large" style={{ fontSize: 36 }}>{portfolioUser.avatar}</span>
              <div>
                <h2 className="dca-text-xl" style={{ marginBottom: 2 }}>{portfolioUser.name}</h2>
                <div className="dca-flex dca-gap-2 dca-mb-2">
                  <span style={{ background: '#ffedd5', color: '#ea580c', borderRadius: 10, padding: '2px 8px', fontSize: 13 }}>{portfolioUser.skill}</span>
                  <span style={{ background: '#ede9fe', color: '#9333ea', borderRadius: 10, padding: '2px 8px', fontSize: 13 }}>{portfolioUser.level}</span>
                </div>
                <p className="dca-text-sm" style={{ marginBottom: 4 }}>{portfolioUser.portfolio.bio}</p>
              </div>
            </div>
            <div className="dca-modal-content">
              <div className="dca-modal-section">
                <b>Creative Works:</b>
                <ul>
                  {portfolioUser.portfolio.works.map((work, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <b>{work.title}</b>: {work.description}
                      <span style={{ marginLeft: 8, color: '#9333ea' }}><Heart style={{ width: 14, height: 14, verticalAlign: 'middle' }} /> {work.likes}</span>
                      <span style={{ marginLeft: 8, color: '#2563eb' }}><MessageCircle style={{ width: 14, height: 14, verticalAlign: 'middle' }} /> {work.comments}</span>
                      <span style={{ marginLeft: 8, color: '#ea580c' }}><Share2 style={{ width: 14, height: 14, verticalAlign: 'middle' }} /> {work.shares}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dca-modal-section">
                <b>Creative Contributions:</b>
                <ul>
                  {portfolioUser.portfolio.contributions.map((c, i) => (
                    <li key={i}><Award style={{ width: 14, height: 14, color: '#9333ea', marginRight: 4, verticalAlign: 'middle' }} /> {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityTab; 