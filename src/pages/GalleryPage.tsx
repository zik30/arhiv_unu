import { GalleryWidget } from 'widgets/galleryWidget/GalleryWidget';
import { SearchWidget } from 'widgets/searchWidget/SearchWidget';

const GalleryPage = () => {
  return (
    <div>
      <SearchWidget />
      <GalleryWidget />
    </div>
  );
};

export default GalleryPage;
