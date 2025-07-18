import React from 'react';
import DJPageLayout from '../components/DJPageLayout';
import { djs } from '../data/djs';

const DJZatelli = () => {
  const dj = djs.find(dj => dj.id === 'zatelli');
  const youtubeVideoId = 'wkBYS1pkY8s';

  if (!dj) {
    return <div>DJ não encontrado</div>;
  }

  return <DJPageLayout dj={dj} youtubeVideoId={youtubeVideoId} />;
};

export default DJZatelli;