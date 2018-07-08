import React from 'react';
import Particles from 'react-particles-js';
import { particlesConfig } from '../../helper/particlesjs-config';

const ParticleBackground = () => {
  return (
    <Particles params={particlesConfig} />
  );
};

export default ParticleBackground;
