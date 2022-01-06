import React from 'react';
import PropTypes from 'prop-types';
import ParticlesBg from 'particles-bg';

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  alpha: [0.6, 0],
  scale: [.1, 0.4],
  position: "all",
  color: ["random", "#ff0000"],
  cross: "dead",
  // emitter: "follow",
  random: 15,
};

const MainLayout = ({children}) => (
  <>
    <ParticlesBg type="custom" config={config} bg={true} />
    <main>
      <div className='container'>
        {children}
      </div>
    </main>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
