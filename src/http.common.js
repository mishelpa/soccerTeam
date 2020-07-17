import ax from 'axios';

export default ax.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'X-Auth-Token': '3eec30c0ebb242a19c4e7543504823cc',
  },
});
