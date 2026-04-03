import React from 'react';
import { Ornament } from 'shared/ui/ornament/Ornament';
import { PersonDetail } from 'widgets/personDetail/PersonDetail';

const GalleryDetailPage = () => {
  return (
    <div style={{ position: 'relative', overflow: 'clip' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <PersonDetail />
      </div>
      <Ornament left={-278} top={0} />
    </div>
  );
};

export default GalleryDetailPage;
