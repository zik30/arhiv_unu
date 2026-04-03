import { Ornament } from 'shared/ui/ornament/Ornament';
import { GalleryWidget } from 'widgets/galleryWidget/GalleryWidget';
import { SearchWidget } from 'widgets/searchWidget/SearchWidget';

const GalleryPage = () => {
  return (
    <div style={{ position: 'relative', overflow: 'clip' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SearchWidget />
        <GalleryWidget />
      </div>
      <Ornament top={-0} center />
      <Ornament right={-398} top={1490} />
      <Ornament left={-378} top={3460} />
    </div>
  );
};

export default GalleryPage;
