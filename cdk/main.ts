import { CloudFrontStaticWebsiteStack } from "@arc-iac/tf-cdk-spa";
import { Construct } from "constructs";
import { DataTerraformRemoteStateS3, S3Backend } from 'cdktf';
import { DataAwsS3BucketObject } from '@cdktf/provider-aws/lib/data-aws-s3-bucket-object';
import { App } from "cdktf";

const app = new App();
class DeploySPA extends CloudFrontStaticWebsiteStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new S3Backend(this, {
      bucket: "tfstate-s3-20022024",
      key: "terraform.test-s3.tfstate", // state file path and name
      region: "us-east-1",
    });

    new DataTerraformRemoteStateS3(this, 'other', {
      bucket: "tfstate-s3-20022024",
      key: "terraform.test-s3.tfstate",
      region: "us-east-1", //  state file path and name
    });
    // Reference Remote State
    new DataAwsS3BucketObject(this, 'object', {
      bucket: "tfstate-s3-20022024",
      key: "terraform.test-s3.tfstate",
      
    });
  }
}
new DeploySPA(app, "test-s3");
app.synth();
