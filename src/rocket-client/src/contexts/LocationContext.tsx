import { ICoordinate } from '@/lib/models/custom/ICoordinate';
import { createContext, useEffect, useState } from 'react';

const initialOptions = {};
const initialMyLocation: ICoordinate | null = null;

interface ContextValueTypes {
  options: Record<string, any>;
  myLocation: ICoordinate | null;
}

const LocationContext = createContext<ContextValueTypes>({
  options: initialOptions,
  myLocation: initialMyLocation,
});

interface Props {
  children: React.ReactNode;
}

export const LocationProvider: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [options, setOptions] = useState(initialOptions);
  const [myLocation, setMyLocation] = useState<ICoordinate | null>(null);

  const initMyLocation = async () => {
    navigator.permissions?.query({ name: 'geolocation' }).then(function (result) {
      if (navigator.geolocation && result.state !== 'denied') {
        navigator.geolocation.getCurrentPosition(function (position) {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setMyLocation(newLocation);
        });
      } else {
        setMyLocation(null);
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      initMyLocation();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [myLocation]);

  useEffect(() => {
    initMyLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        options,
        myLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const LocationConsumer = LocationContext.Consumer;

export default LocationContext;
