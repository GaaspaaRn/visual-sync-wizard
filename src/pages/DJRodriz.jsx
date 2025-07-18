import React from 'react';
import DJPageLayout from '../components/DJPageLayout';
import { djs } from '../data/djs';

const DJRodriz = () => {
  const dj = djs.find(dj => dj.id === 'rodriz');
  const youtubeVideoId = 'VRfHI0rjPuQ';

  if (!dj) {
    return <div>DJ não encontrado</div>;
  }

  return <DJPageLayout dj={dj} youtubeVideoId={youtubeVideoId} />;
};

export default DJRodriz;