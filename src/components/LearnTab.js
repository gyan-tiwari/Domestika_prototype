import React, { useState } from 'react';
import { Camera, Palette, Target, Play, ArrowRight, Lightbulb, Star, X } from 'lucide-react';

const skillPaths = [
  {
    id: 'portrait-photography',
    title: 'Portrait Photography Mastery',
    category: 'Photography',
    progress: 65,
    nextLesson: 'Natural Light Techniques',
    mentor: 'Sarah Chen',
    difficulty: 'Intermediate',
    timeToComplete: '2 weeks',
    weeksCompleted: 1,
    topicsCovered: ['Camera Basics', 'Lighting Fundamentals', 'Posing Techniques'],
    topicsLeft: ['Natural Light Techniques', 'Editing Portraits'],
    aiTips: [
      'Try experimenting with different window light angles for dramatic effect.',
      'Review your last session for improvements in subject expression.'
    ],
    icon: <Camera style={{ width: 24, height: 24 }} />
  },
  {
    id: 'digital-illustration',
    title: 'Digital Character Design',
    category: 'Illustration',
    progress: 40,
    nextLesson: 'Anatomy Fundamentals',
    mentor: 'Miguel Rodriguez',
    difficulty: 'Beginner',
    timeToComplete: '3 weeks',
    weeksCompleted: 1,
    topicsCovered: ['Sketching Basics'],
    topicsLeft: ['Anatomy Fundamentals', 'Coloring Techniques', 'Character Personality'],
    aiTips: [
      'Focus on gesture drawing to improve character poses.',
      'Try using reference images for anatomy practice.'
    ],
    icon: <Palette style={{ width: 24, height: 24 }} />
  },
  {
    id: 'ui-design',
    title: 'Modern UI/UX Design',
    category: 'Design',
    progress: 80,
    nextLesson: 'Micro-interactions',
    mentor: 'Alex Kim',
    difficulty: 'Advanced',
    timeToComplete: '1 week',
    weeksCompleted: 1,
    topicsCovered: ['Wireframing', 'Color Theory', 'Typography'],
    topicsLeft: ['Micro-interactions'],
    aiTips: [
      'Consider adding subtle animations to enhance user experience.',
      'Test your designs for accessibility improvements.'
    ],
    icon: <Target style={{ width: 24, height: 24 }} />
  }
];

const aiInsights = [
  "Your composition skills have improved 30% this month! Try experimenting with asymmetrical balance.",
  "Based on your work, you might enjoy exploring watercolor techniques in digital art.",
  "Your color harmony is strong - consider pushing contrast for more dramatic impact."
];

const LearnTab = () => {
  const [modalSkill, setModalSkill] = useState(null);

  return (
    <div>
      <div className="dca-card" style={{ background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 100%)', color: '#fff' }}>
        <div className="dca-flex dca-gap-3 dca-mb-4">
          <Lightbulb style={{ width: 32, height: 32 }} />
          <div>
            <h2 className="dca-text-xl">Your Personalized Learning Journey</h2>
            <p className="dca-text-purple" style={{ color: '#ede9fe' }}>AI-curated paths based on your goals and progress</p>
          </div>
        </div>
        <div className="dca-flex dca-gap-6" style={{ justifyContent: 'center' }}>
          <div>
            <div className="dca-text-xl" style={{ color: '#fff' }}>3</div>
            <div className="dca-text-sm" style={{ color: '#ede9fe' }}>Active Skills</div>
          </div>
          <div>
            <div className="dca-text-xl" style={{ color: '#fff' }}>47</div>
            <div className="dca-text-sm" style={{ color: '#ede9fe' }}>Hours Practiced</div>
          </div>
          <div>
            <div className="dca-text-xl" style={{ color: '#fff' }}>12</div>
            <div className="dca-text-sm" style={{ color: '#ede9fe' }}>Projects Completed</div>
          </div>
        </div>
      </div>

      {skillPaths.map((path) => (
        <div key={path.id} className="dca-card">
          <div className="dca-flex dca-gap-4 dca-mb-4" style={{ justifyContent: 'space-between' }}>
            <div className="dca-flex dca-gap-4">
              <div style={{ padding: 12, background: 'linear-gradient(90deg, #3b82f6 0%, #9333ea 100%)', borderRadius: 12, color: '#fff' }}>
                {path.icon}
              </div>
              <div>
                <h3 className="dca-text-lg dca-mb-2">{path.title}</h3>
                <p className="dca-text-sm dca-mb-2">with {path.mentor}</p>
                <div className="dca-flex dca-gap-4 dca-text-sm">
                  <span>{path.difficulty}</span>
                  <span>•</span>
                  <span>{path.timeToComplete}</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="dca-text-xl dca-text-purple">{path.progress}%</div>
              <div className="dca-text-sm">Complete</div>
            </div>
          </div>
          <div className="dca-progress-bar">
            <div className="dca-progress" style={{ width: `${path.progress}%` }}></div>
          </div>
          <div className="dca-flex" style={{ justifyContent: 'space-between' }}>
            <div className="dca-flex dca-gap-2 dca-text-sm">
              <Play style={{ width: 16, height: 16 }} />
              <span>Next: {path.nextLesson}</span>
            </div>
            <button className="dca-btn" onClick={() => setModalSkill(path)}>
              Continue <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      ))}

      <div className="dca-insight">
        <div>
          <h3 className="dca-section-title">🔥 AI Insights for You</h3>
          {aiInsights.map((insight, index) => (
            <div key={index} className="dca-flex dca-gap-2 dca-mb-2">
              <Star style={{ width: 18, height: 18, color: '#b45309' }} />
              <p className="dca-text-yellow">{insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {modalSkill && (
        <div className="dca-modal-overlay">
          <div className="dca-modal">
            <button className="dca-modal-close" onClick={() => setModalSkill(null)}><X style={{ width: 24, height: 24 }} /></button>
            <div className="dca-modal-header">
              {modalSkill.icon}
              <div>
                <h2 className="dca-text-xl">{modalSkill.title}</h2>
                <p className="dca-text-sm">with {modalSkill.mentor}</p>
              </div>
            </div>
            <div className="dca-modal-content">
              <div className="dca-modal-section">
                <div className="dca-modal-progress">
                  <b>Progress:</b>
                  <div className="dca-modal-progress-bar">
                    <div className="dca-modal-progress-inner" style={{ width: `${modalSkill.progress}%` }}></div>
                  </div>
                  <span style={{ minWidth: 38 }}>{modalSkill.progress}%</span>
                </div>
                <div><b>Weeks Completed:</b> {modalSkill.weeksCompleted} / {modalSkill.timeToComplete}</div>
                <div><b>Next Lesson:</b> {modalSkill.nextLesson}</div>
              </div>
              <div className="dca-modal-section">
                <div><b>Topics Covered:</b>
                  <ul>
                    {modalSkill.topicsCovered.map((topic, i) => <li key={i}>✔️ {topic}</li>)}
                  </ul>
                </div>
                <div><b>Topics Left:</b>
                  <ul>
                    {modalSkill.topicsLeft.map((topic, i) => <li key={i}>⏳ {topic}</li>)}
                  </ul>
                </div>
              </div>
              <div className="dca-modal-section">
                <b>AI Tips & Insights:</b>
                <ul>
                  {modalSkill.aiTips.map((tip, i) => <li key={i}>💡 {tip}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnTab; 