import styles from './cluster.module.scss';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import ReactDOM from 'react-dom/client';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import { Typography } from '../typography/Typography';
import pin from 'shared/assets/pin.png';

interface MarkerData {
  latitude: number;
  longitude: number;
  name: string;
  website_url: string;
}

interface MarkerClusterProps {
  data: MarkerData[];
}

const customIcon = L.icon({
  iconUrl: pin,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export const LeafletMarkerCluster = ({ data }: MarkerClusterProps) => {
  const map = useMap();

  useEffect(() => {
    const group = L.markerClusterGroup({
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount();

        return L.divIcon({
          html: `
            <div class="${styles.clusterIcon}">
              <img src="${pin}" alt="cluster" />
              <span class="${styles.clusterCount}">${count}</span>
            </div>
          `,
          className: '',
          iconSize: [50, 50],
        });
      },
    });

    data.forEach((item) => {
      const marker = L.marker([item.latitude, item.longitude], {
        icon: customIcon,
      });

      const popupDiv = document.createElement('div');
      ReactDOM.createRoot(popupDiv).render(
        <div className={styles.content}>
          <Typography variant='bodyText'>{item.name}</Typography>
          <a href={item.website_url} target='_blank' rel='noopener noreferrer'>
            Website
          </a>
        </div>,
      );

      marker.bindPopup(popupDiv);
      group.addLayer(marker);
    });

    map.addLayer(group);

    return () => {
      map.removeLayer(group);
    };
  }, [map, data]);

  return null;
};
