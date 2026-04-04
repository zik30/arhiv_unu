import styles from './Map.module.scss';
import 'leaflet/dist/leaflet.css';
import { useRef, useState, type FC } from 'react';
import classNames from 'classnames';

const mockData = [
  {
    id: 1,
    name: 'Lib1',
    slug: 'Lib1',
    logo: 'Logo1',
    description: 'Description1',
    email: 'email@example1.com',
    address: 'address1',
    phone: '0500101010',
    working_hours: '09:00 - 21:00',
    latitude: 42.8705,
    longitude: 74.6002,
    website_url: '/webExample1',
    region: 'Бишкек',
    map_url: '/mapExample1',
  },
  {
    id: 2,
    name: 'Lib2',
    slug: 'Lib2',
    logo: 'Logo2',
    description: 'Description2',
    email: 'email@example2.com',
    address: 'address2',
    phone: '0500202020',
    working_hours: '09:00 - 21:00',
    latitude: 42.519,
    longitude: 72.25,
    website_url: '/webExample2',
    region: 'Талас',
    map_url: '/mapExample2',
  },
  {
    id: 3,
    name: 'Lib3',
    slug: 'Lib3',
    logo: 'Logo3',
    description: 'Description3',
    email: 'email@example3.com',
    address: 'address3',
    phone: '0500303030',
    working_hours: '09:00 - 21:00',
    latitude: 41.26,
    longitude: 76,
    website_url: '/webExample3',
    region: 'Нарын',
    map_url: '/mapExample3',
  },
  {
    id: 4,
    name: 'Lib4',
    slug: 'Lib4',
    logo: 'Logo4',
    description: 'Description4',
    email: 'email@example4.com',
    address: 'address4',
    phone: '0500404040',
    working_hours: '09:00 - 21:00',
    latitude: 42.64986,
    longitude: 77.057089,
    website_url: '/webExample4',
    region: 'Иссык-Куль',
    map_url: '/mapExample4',
  },
  {
    id: 5,
    name: 'Lib5',
    slug: 'Lib5',
    logo: 'Logo5',
    description: 'Description5',
    email: 'email@example5.com',
    address: 'address5',
    phone: '0500505050',
    working_hours: '09:00 - 21:00',
    latitude: 40.513997,
    longitude: 72.816097,
    website_url: '/webExample5',
    region: 'Ош',
    map_url: '/mapExample5',
  },
  {
    id: 6,
    name: 'Lib6',
    slug: 'Lib6',
    logo: 'Logo6',
    description: 'Description6',
    email: 'email@example6.com',
    address: 'address6',
    phone: '0500606060',
    working_hours: '09:00 - 21:00',
    latitude: 42.876864,
    longitude: 74.603012,
    website_url: '/webExample6',
    region: 'Чуй',
    map_url: '/mapExample6',
  },
  {
    id: 7,
    name: 'Lib7',
    slug: 'Lib7',
    logo: 'Logo7',
    description: 'Description7',
    email: 'email@example7.com',
    address: 'address7',
    phone: '0500707070',
    working_hours: '09:00 - 21:00',
    latitude: 40.933332,
    longitude: 73,
    website_url: '/webExample7',
    region: 'Джалал-Абад',
    map_url: '/mapExample7',
  },
  {
    id: 8,
    name: 'Lib8',
    slug: 'Lib8',
    logo: 'Logo8',
    description: 'Description8',
    email: 'email@example8.com',
    address: 'address8',
    phone: '0500808080',
    working_hours: '09:00 - 21:00',
    latitude: 40.06262,
    longitude: 70.81966,
    website_url: '/webExample8',
    region: 'Баткен',
    map_url: '/mapExample8',
  },
  {
    id: 9,
    name: 'Lib9',
    slug: 'Lib9',
    logo: 'Logo9',
    description: 'Description9',
    email: 'email@example9.com',
    address: 'address9',
    phone: '0500909090',
    working_hours: '09:00 - 21:00',
    latitude: 41.678059,
    longitude: 72.941494,
    website_url: '/webExample9',
    region: 'Токтогул',
    map_url: '/mapExample9',
  },
];

import type { Map as LeafletMapInstance } from 'leaflet';
import { useGetMapLibs } from 'components/leaflet/useGetMapLibs';
import { CustomInput } from 'shared/ui/input/Input';
import { Typography } from 'shared/ui/typography/Typography';
import { Button } from 'shared/ui/button/Button';
import { LeafletMap } from 'components/leaflet/LeafletMap';
import { mapRegions } from 'shared/consts';
import { useTranslation } from 'react-i18next';

export const Map: FC = () => {
  const [search, setSearch] = useState('');
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const mapRef = useRef<LeafletMapInstance | null>(null);
  const { t } = useTranslation();
  const { data } = useGetMapLibs();

  const dataToUse = data && data.length > 0 ? data : mockData;

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);
    setIsActive(value.trim().length > 0);
  };

  const searchFilteredData = dataToUse.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const regionsFilteredData = activeRegion
    ? dataToUse.filter((item) =>
        item.region.toLowerCase().includes(activeRegion.toLowerCase()),
      )
    : dataToUse;

  const handleRegionClick = (region: string) => {
    setActiveRegion((prev) => (prev === region ? null : region));
  };

  const handleFocus = (lat: number, lng: number) => {
    const map = mapRef.current;
    if (map) {
      map.flyTo([lat, lng], 15);
    }
  };

  const inputScrollHandler = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.controls}>
          <div
            className={classNames(
              styles.sidebar,
              isActive && styles.activeSidebar,
            )}
          >
            <CustomInput
              placeholder={t('placeholders.search')}
              onChange={inputTextHandler}
              value={search}
              onFocus={inputScrollHandler}
              fullWidth
            />

            <div className={styles.results}>
              {isActive &&
                searchFilteredData?.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleFocus(item.latitude, item.longitude)}
                  >
                    <Typography variant='bodyText'>{item.name}</Typography>
                    <Typography variant='bodyText'>{item.region}</Typography>
                    <Typography variant='bodyText'>{item.address}</Typography>
                  </div>
                ))}
              {searchFilteredData?.length === 0 && (
                <Typography variant='bodyText'>Нет совпадений</Typography>
              )}
            </div>
          </div>

          <div
            className={classNames(
              styles.filterButtons,
              isActive && styles.activeButtons,
            )}
          >
            {mapRegions.map((item, i) => (
              <Button
                variant='secondary'
                key={i}
                onClick={() => handleRegionClick(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <LeafletMap ref={mapRef} filter={regionsFilteredData} />
      </div>
    </section>
  );
};
