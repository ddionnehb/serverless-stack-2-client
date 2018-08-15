const dev = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-trv69pfnjyoi"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://1pnaai19c7.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_FGPj9m2B0",
    APP_CLIENT_ID: "2ha5va0ittpod5qtk7f8ep22rq",
    IDENTITY_POOL_ID: "us-west-2:1d8d8f3a-9138-4891-98cb-f721ea54d1c6"
  }
};

const prod = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-i9dpxzapspg2"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://lartcim4f5.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_gqvu44Dc7",
    APP_CLIENT_ID: "5o3810c90a26vg59df1idk2qd",
    IDENTITY_POOL_ID: "us-west-2:01bf65c5-5a92-40be-a83f-1ae74cdc4999"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
