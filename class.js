const axios = require('axios');
const FormData = require('form-data');

class YearBookAPI {
    constructor({ token, session }) {
        this.token = token;
        this.session = session;
    }

    async makeRequest(url, method, body) {
        const formData = generateForm(body);
        return axios({
            method: method,
            url: `https://yearbook.com/s/${url}`,
            headers: {
                'X-CSRFToken': this.token,
                'Cookie': `PHPSESSID=${this.session}`,
                ...formData.getHeaders()
            },
            data: formData
        })
    }

    generateForm(input) {
        const data = new FormData();
        for (const [key, value] of Object.entries(input)) {
            data.append(key, value);
        }
        return data;
    }
}

module.exports = { YearBookAPI };