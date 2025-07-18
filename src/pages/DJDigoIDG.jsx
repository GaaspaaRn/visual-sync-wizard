import React from 'react';
import DJPageLayout from '../components/DJPageLayout';
import { djs } from '../data/djs';

const DJDigoIDG = () => {
  const dj = djs.find(dj => dj.id === 'digo');
  const youtubeVideoId = 'J4SezJtNvq8';

  if (!dj) {
    return <div>DJ não encontrado</div>;
  }

  return <DJPageLayout dj={dj} youtubeVideoId={youtubeVideoId} />;
};

export default DJDigoIDG;