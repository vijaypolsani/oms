const ENV_GAC = process.env.ENV_GAC || 'STAGE';

// Strings
const STAGE = 'STAGE';
const PRD = 'PRD';

let oAuthUrl;
let clId;
let clSec;

if (ENV_GAC === 'PRD') {
    oAuthUrl = '';
    clId = '';
    clSec = '';
}

if (ENV_GAC === 'STAGE') {
    oAuthUrl = 'http://robustwealth:rwsecret@mstest.advrw.com:8765/auth/uaa/oauth/token';
    clId = '';
    clSec = '';
    REGION = 'us-east-1';

    ORDER_URL = 'http://mstest.advrw.com:8765/api/fix-order/v1/order';
}

const CB = 'www.robustwealth.com';

module.exports = {
    oAuth: {
        URL: oAuthUrl,
        CL_ID: clId,
        CL_SEC: clSec,
        CB: CB,
        SENDER: 'OMS'
    },
    URLs: {
        ORDER_URL: ORDER_URL,
    },
    STRS: {
        STAGE: STAGE,
        PRD: PRD,
        BASIC: 'Basic',
        REGION: REGION,
        META: META
    },
};