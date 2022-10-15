import React from 'react';
import PropTypes from 'prop-types';
import ParticlesBg from 'particles-bg';
import { Helmet } from 'react-helmet';

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

const MainLayout = ({children}) => {
  const lang = 'pl';

  return(
    <>
      <Helmet title="GitHub user finder" htmlAttributes={{ lang }}>
        <meta name="description" content="Find any public Github repository" />
      </Helmet>
      <ParticlesBg type="custom" config={config} bg={true} />
      <main>
        <div className='container'>
          {children}
        </div>
      </main>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
