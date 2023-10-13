import React, { useState } from 'react'


const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('Tab1')
  return (
    <div>
      <button data-testid="tab1-btn" onClick={() => setActiveTab('Tab1')}>Tab 1</button>
      <button data-testid="tab2-btn" onClick={() => setActiveTab('Tab2')}>Tab 2</button>
      {activeTab === 'Tab1' && <p data-testid="tab1">Content for tab 1</p>}
      {activeTab === 'Tab2' && <p data-testid="tab2">Content for tab 2</p>}
    </div>
  )
}

export default TabNavigation
