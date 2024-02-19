/* eslint-disable no-new */
import { CloudFrontStaticWebsiteStack } from '@arc-iac/tf-cdk-spa';
import { App } from 'cdktf';

const app = new App();
new CloudFrontStaticWebsiteStack(app, 'cms-v2'); // You can change the stack name ("spa-host") as needed.
app.synth();
