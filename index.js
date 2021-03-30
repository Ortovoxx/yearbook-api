const { YearBookAPI } = require('./class');
const secrets = require('./config.json');

const api = new YearBookAPI({
    token: secrets.token,
    session: secrets.session,
});
