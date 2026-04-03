import styles from './LeafletMap.module.scss';
import { Map as LeafletMapInstance } from 'leaflet';
import { forwardRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet.markercluster';
import { Typography } from 'shared/ui/typography/Typography';
import type { MapProps } from './types';
import { useGetMapLibs } from './useGetMapLibs';
import { latLngZoom } from 'shared/consts';
import { LeafletMapControlButtons } from 'shared/ui/leaflet/leafletMapControlButtons';
import { LeafletMarkerCluster } from 'shared/ui/leaflet/leafletMarkerCluster';

export const LeafletMap = forwardRef<LeafletMapInstance | null, MapProps>(
  ({ filter }, ref) => {
    const { isError } = useGetMapLibs();

    if (isError) {
      <Typography variant='bodyText'>Something went wrong</Typography>;
    }

    return (
      <MapContainer
        center={[latLngZoom.positions.lat, latLngZoom.positions.lng]}
        zoom={latLngZoom.zoom}
        zoomControl={false}
        doubleClickZoom={false}
        className={styles.map}
        ref={ref}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <LeafletMarkerCluster data={filter ?? []} />

        <LeafletMapControlButtons />
      </MapContainer>
    );
  },
);
