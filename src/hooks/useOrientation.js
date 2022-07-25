import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export default function useOrientation() {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = result => {
      setScreenInfo(result.screen);
    };

    const subsription = Dimensions.addEventListener('change', onChange);

    return () => {
      subsription.remove();
    };
  }, []);

  return {
    ...screenInfo,
    isPotrait: screenInfo.height > screenInfo.width,
    tablet: screenInfo.height > 600 && screenInfo.width > 600,
  };
}
