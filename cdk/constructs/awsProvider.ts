import { Construct } from 'constructs';
import * as aws from '@cdktf/provider-aws';

export class AwsProvider extends Construct {
  constructor(scope: Construct, name: string, alias?: string) {
    super(scope, name);

    new aws.provider.AwsProvider(this, alias ?? 'aws', {
      accessKey: process.env.AWS_ACCESS_KEY_ID,
      secretKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }
}
