import React, { useState } from 'react';
import { Zap, Play, BookOpen, X, CheckCircle, Lightbulb } from 'lucide-react';

const practicePrompts = [
  {
    skill: 'Photography',
    prompt: 'Create a portrait using only natural window light. Focus on dramatic shadows and emotional expression.',
    difficulty: 'Intermediate',
    estimatedTime: '45 min',
    resources: [
      { name: 'Portrait Photography Basics (YouTube)', url: 'https://www.youtube.com/watch?v=abcd' },
      { name: 'Lighting for Portraits (Blog)', url: 'https://photoblog.com/lighting' },
      { name: 'Natural Light Portraits (Article)', url: 'https://example.com/natural-light' }
    ],
    aiTips: [
      'Try shooting at different times of day to see how light changes.',
      'Focus on your subject’s eyes for more engaging portraits.'
    ]
  },
  {
    skill: 'Illustration',
    prompt: 'Design a character inspired by your favorite mythological creature. Show personality through posture and expression.',
    difficulty: 'Beginner',
    estimatedTime: '2 hours',
    resources: [
      { name: 'Character Design Fundamentals (YouTube)', url: 'https://www.youtube.com/watch?v=efgh' },
      { name: 'Gesture Drawing Practice (Blog)', url: 'https://artblog.com/gesture' },
      { name: 'Mythological Creatures Reference', url: 'https://mythcreatures.com' }
    ],
    aiTips: [
      'Use reference images to inspire your creature’s features.',
      'Sketch quick poses before finalizing your design.'
    ]
  },
  {
    skill: 'Design',
    prompt: 'Redesign a mobile app login screen with a focus on accessibility and micro-interactions.',
    difficulty: 'Advanced',
    estimatedTime: '3 hours',
    resources: [
      { name: 'Mobile UI Patterns (Article)', url: 'https://ui-patterns.com/mobile' },
      { name: 'Accessibility in Design (Guide)', url: 'https://a11yproject.com' },
      { name: 'Micro-interactions in UX (YouTube)', url: 'https://www.youtube.com/watch?v=ijkl' }
    ],
    aiTips: [
      'Test your design with a screen reader for accessibility.',
      'Add subtle animations to make micro-interactions delightful.'
    ]
  }
];

const PracticeTab = () => {
  const [practiceModal, setPracticeModal] = useState(null); // { type: 'practice' | 'resources', prompt: ... }

  return (
    <div>
      <div className="practice-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Zap className="practice-header-icon" />
          <div>
            <h2 className="practice-header-title">Smart Practice Sessions</h2>
            <p className="practice-header-desc">AI-generated challenges tailored to your skill level</p>
          </div>
        </div>
      </div>

      {practicePrompts.map((prompt, index) => (
        <div key={index} className="practice-card">
          <div className="practice-badges">
            <span className="practice-badge-skill">{prompt.skill}</span>
            <span className="practice-badge-difficulty">{prompt.difficulty}</span>
          </div>
          <div className="practice-prompt">{prompt.prompt}</div>
          <div className="practice-meta">
            <span>⏱️ {prompt.estimatedTime}</span>
            <span>🎯 Personalized for you</span>
          </div>
          <div className="practice-btn-row">
            <button className="practice-btn" onClick={() => setPracticeModal({ type: 'practice', prompt })}>
              <Play style={{ width: 18, height: 18 }} /> Start Practice
            </button>
            <button className="practice-btn secondary" onClick={() => setPracticeModal({ type: 'resources', prompt })}>
              <BookOpen style={{ width: 18, height: 18 }} /> View Resources
            </button>
          </div>
        </div>
      ))}

      {/* Modal Popup */}
      {practiceModal && (
        <div className="dca-modal-overlay">
          <div className="dca-modal">
            <button className="dca-modal-close" onClick={() => setPracticeModal(null)}><X style={{ width: 24, height: 24 }} /></button>
            <div className="dca-modal-header">
              {practiceModal.type === 'practice' ? <Play style={{ width: 28, height: 28 }} /> : <BookOpen style={{ width: 28, height: 28 }} />}
              <div>
                <h2 className="dca-text-xl">{practiceModal.prompt.skill} Practice</h2>
                <p className="dca-text-sm">{practiceModal.prompt.prompt}</p>
              </div>
            </div>
            <div className="dca-modal-content">
              {practiceModal.type === 'practice' ? (
                <div className="dca-modal-section">
                  <div style={{ marginBottom: 10 }}><CheckCircle style={{ color: '#9333ea', marginRight: 6 }} /> <b>Instructions:</b></div>
                  <ul>
                    <li>Set up your workspace and gather any required materials.</li>
                    <li>Follow the prompt and focus on the skill: <b>{practiceModal.prompt.skill}</b>.</li>
                    <li>Take notes on your process and challenges.</li>
                    <li>Upload your result for feedback or self-review.</li>
                  </ul>
                  <div style={{ marginTop: 16, color: '#9333ea', fontWeight: 500 }}>Good luck! Practice makes perfect.</div>
                </div>
              ) : (
                <>
                  <div className="dca-modal-section">
                    <div style={{ marginBottom: 10 }}><BookOpen style={{ color: '#9333ea', marginRight: 6 }} /> <b>Recommended Resources:</b></div>
                    <ul>
                      {practiceModal.prompt.resources.map((res, i) => (
                        <li key={i}><a href={res.url} target="_blank" rel="noopener noreferrer" style={{ color: '#9333ea', textDecoration: 'underline' }}>{res.name}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="dca-modal-section">
                    <div style={{ marginBottom: 10 }}><Lightbulb style={{ color: '#ec4899', marginRight: 6 }} /> <b>AI Tips to Learn Faster:</b></div>
                    <ul>
                      {practiceModal.prompt.aiTips.map((tip, i) => (
                        <li key={i}>💡 {tip}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeTab; 