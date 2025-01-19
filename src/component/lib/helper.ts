import axios  from 'axios';
// const axios = require('axios');

export async function generateOnfidoToken() {
  const response = await axios.post(
    'https://api.onfido.com/v3/sdk_token',
    {
      applicant_id: '<APPLICANT_ID>',
      referrer: '<YOUR_APP_REFERRER_URL>',
    },
    {
      headers: {
        Authorization: `Token token=<YOUR_API_TOKEN>`,
      },
    }
  );

  return response.data.token;
}
