import React, { useEffect } from 'react';
import { Onfido } from 'onfido-sdk-ui';

const OnfidoComponent: React.SFC = () => {
  useEffect(() => {

    async () => const onfidoInstance = Onfido.init({
      token: '<YOUR_ONFIDO_SDK_TOKEN>',
      containerId: 'onfido-mount',
      onComplete: (data:any) => {
        console.log('Onfido verification completed:', data);
      },
      onError: (error:any) => {
        console.error('Onfido error:', error);
      },
      steps: [
        {
          type: 'welcome',
          options: {
            title: 'Welcome to Onfido Verification',
            descriptions: ['We need to verify your identity.'],
          },
        },
        'document',
        'face',
      ],
    });

    // Cleanup Onfido instance when the component is unmounted
    return () => onfidoInstance?.tearDown();
  }, []);

  return <div id="onfido-mount" />;
};

export default OnfidoComponent;
