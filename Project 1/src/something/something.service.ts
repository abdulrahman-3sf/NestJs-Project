import { Injectable } from '@nestjs/common';

@Injectable()
export class SomethingService {
    public work() : string {
        return 'Work Done!';
    }
}
