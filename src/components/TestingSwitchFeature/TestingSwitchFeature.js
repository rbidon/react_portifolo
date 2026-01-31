import React, { useState } from 'react';

// Content components
const InfoOne = () => <div>Data Content</div>;
const InfoTwo = () => <div>Applications Contents</div>;

const DataAnalysis = () => {
  // 1. Define state to hold the current view
  const [activeView, setActiveView] = useState('view1');

  // 2. Function to update state on click
  const showContent = (view) => {
    setActiveView(view);
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => showContent('view1')}> Data Analysis </button>
        <button onClick={() => showContent('view2')}>  Software Engineer </button>
      </div>

      {/* 3. Conditional Rendering */}
      {activeView === 'view1' && <InfoOne />}
      {activeView === 'view2' && <InfoTwo />}
    </div>
  );
};

export default DataAnalysis;
