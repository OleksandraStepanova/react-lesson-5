import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: 'X6VuiOtBh8m2XV5qwkNqH0Dz1GXQVQR4' },
});

export const exchangeCurrency = async exchangeRequest => {
  const {
    data: { query, info, result },
  } = await instance.get(`/convert`, {
    params: exchangeRequest,
  });
  return { ...query, rate: info.rate, result };
};

export const latestRates = async baseCurrency => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};
