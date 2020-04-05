export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    // API_URL:"http://jrcash.loc/",
    // API_URL:"https://jfr.zapple.co/",
    API_URL: 'http://localhost:8888/',
    API_PREFIX: 'api/v2/',
    CLIENT_ID: '1',
    CLIENT_SECRET: 'pu9RvIPawwTWB3N8QsCJtWCZ24lPuHlNZZxPBIoR',
    GRANT_TYPE: 'password',
    SCOPE: '*',
    SELF_URL: "http://localhost:3000/",
    s3: {
        BUCKET: ''
    },
    apiGateway: {
        REGION: '',
        URL: ''
    },
    MONTHSLIST: [
        { number: '01', name: 'January', index: 1 },
        { number: '02', name: 'February', index: 2 },
        { number: '03', name: 'March', index: 3 },
        { number: '04', name: 'April', index: 4 },
        { number: '05', name: 'May', index: 5 },
        { number: '06', name: 'June', index: 6 },
        { number: '07', name: 'July', index: 7 },
        { number: '08', name: 'August', index: 8 },
        { number: '09', name: 'September', index: 9 },
        { number: '10', name: 'October', index: 10 },
        { number: '11', name: 'November', index: 11 },
        { number: '12', name: 'December', index: 12 }
    ],
    fitbitAuth: {
        url: "https://www.fitbit.com/oauth2/authorize",
        scope: "activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight",
        client_id: "22BHDP",
        client_secret: "f1c2743cda9922a08e8470cb77e95ba1",
        callback_url: "fitbitcallback",
        token_url: "fitbit_token",
    }

};
