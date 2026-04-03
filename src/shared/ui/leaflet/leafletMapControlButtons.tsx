import styles from './btns.module.scss';
import { useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import { Button } from '../button/Button';
import { Home, Plus, Minus, Compass } from 'lucide-react';
import { latLngZoom } from 'shared/consts';

const paths = {
  home: '/',
};

export const LeafletMapControlButtons: FC = () => {
  const map = useMap();

  return (
    <div className={styles.controlButtons}>
      <Link to={paths.home}>
        <Button fullWidth={false}>
          <Home stroke='#0D0D0D' width={11} height={11} />
        </Button>
      </Link>
      <Button fullWidth={false} onClick={() => map.zoomIn()}>
        <Plus stroke='#0D0D0D' width={13.5} height={13.5} />
      </Button>
      <Button fullWidth={false} onClick={() => map.zoomOut()}>
        <Minus stroke='#0D0D0D' width={13.5} height={13.5} />
      </Button>
      <Button
        variant='outlined'
        fullWidth={false}
        onClick={() =>
          map.setView(
            [latLngZoom.positions.lat, latLngZoom.positions.lng],
            latLngZoom.zoom,
          )
        }
      >
        <Compass />
      </Button>
    </div>
  );
};
