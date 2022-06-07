const axios = require('axios')

const SECRET_KEY = 'sk_live_5e2cca7a8marlDz171144eaa11bb'

axios.post(
  'https://online.yoco.com/v1/charges/',
  {
    token: 'tok_test_DjaqoUgmzwYkwesr3euMxyUV4g',
    amountInCents: 2799,
    currency: 'ZAR',
  },
  {
    headers: {
      'X-Auth-Secret-Key': SECRET_KEY,
    },
  },
)
.then(res => {
  // res.status will contain the HTTP status code
  // res.data will contain the response body
})
.catch(error => {
  // handle errors
})