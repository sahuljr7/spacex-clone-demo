import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      
      <Section
        title="STARSHIP FLIGHT TEST"
        subtitle="THIRD FLIGHT TEST OF THE FULLY INTEGRATED STARSHIP SYSTEM"
        backgroundUrl="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80"
        buttonText="REWATCH"
      />

      <Section
        title="STARLINK MISSION"
        subtitle="RECENT LAUNCH"
        backgroundUrl="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80"
        buttonText="LEARN MORE"
      />

      <Section
        title="DRAGON DOCKING"
        subtitle="COMPLETED MISSION"
        backgroundUrl="https://images.unsplash.com/photo-1457364559154-aa2644600ebb?auto=format&fit=crop&q=80"
        buttonText="LEARN MORE"
      />

      <Section
        title="STARSHIP SELECTED BY NASA"
        subtitle="TO LAND ASTRONAUTS ON THE MOON"
        backgroundUrl="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
        buttonText="LEARN MORE"
      />
    </div>
  );
}

export default App;