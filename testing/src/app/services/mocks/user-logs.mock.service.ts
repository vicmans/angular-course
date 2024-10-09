import { Injectable } from '@angular/core';

@Injectable()
export class UserLogsService {

  debug(data: any) {
    return console.log(data);
  }
}