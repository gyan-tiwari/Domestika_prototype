import React, { useState } from 'react';
import { BookOpen, Target, Users, Award } from 'lucide-react';
import LearnTab from './LearnTab';
import PracticeTab from './PracticeTab';
import CommunityTab from './CommunityTab';
import userImg from '../assets/man.png';

const DomestikaCreativeAssistant = () => {
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <div className="app-bg">
      {/* Header */}
      <header className="dca-header">
        <div className="dca-header-content">
          <div className="dca-flex">
            <div className="dca-logo">D</div>
            <div>
              <h1 className="dca-title">Domestika Creative Assistant</h1>
              <p className="dca-subtitle">Your AI-powered creative companion</p>
            </div>
          </div>
          <div className="dca-flex dca-gap-4">
            <div className="dca-level">
              <Award style={{ width: 20, height: 20 }} />
              <span>Level 7 Creator</span>
            </div>
            <img src={userImg} alt="User Avatar" className="dca-avatar" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="dca-nav">
        <div className="dca-nav-inner">
          {[
            { id: 'learn', label: 'Learn', icon: <BookOpen style={{ width: 20, height: 20 }} /> },
            { id: 'practice', label: 'Practice', icon: <Target style={{ width: 20, height: 20 }} /> },
            { id: 'community', label: 'Community', icon: <Users style={{ width: 20, height: 20 }} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`dca-tab-btn${activeTab === tab.id ? ' active' : ''}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="dca-main">
        {activeTab === 'learn' && <LearnTab />}
        {activeTab === 'practice' && <PracticeTab />}
        {activeTab === 'community' && <CommunityTab />}
      </main>
    </div>
  );
};

export default DomestikaCreativeAssistant; 