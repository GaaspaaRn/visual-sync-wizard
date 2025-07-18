import React from 'react';
import DJPageLayout from '../components/DJPageLayout';
import { djs } from '../data/djs';

const DJLucasHenrique = () => {
  const dj = djs.find(dj => dj.id === 'lucas');
  const youtubeVideoId = 'MIWyA_0k4L0';

  if (!dj) {
    return <div>DJ não encontrado</div>;
  }

  return <DJPageLayout dj={dj} youtubeVideoId={youtubeVideoId} />;
};

export default DJLucasHenrique;