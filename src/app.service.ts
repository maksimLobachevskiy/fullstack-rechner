import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'HelloNest!';
  }
  getProfile(): string {
    return 'Its my Profile';
  }
}
