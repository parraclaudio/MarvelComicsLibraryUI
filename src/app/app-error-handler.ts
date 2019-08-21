import { ErrorHandler, Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { Logger } from './core/logger.service';
import { ResponseRequest } from './_interface/responseRequest.mode';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class AppErrorHandler implements ErrorHandler {

    constructor(private logger: Logger) { }

    handleError(error: HttpErrorResponse) {

        try {
            var errors = error.error as ResponseRequest;
            var textMessage = "";

            errors.messageError.forEach(el => {
                textMessage = textMessage + '<br>' + el.message;
            });

            this.logger.error(textMessage, errors, environment.settings.appErrorPrefix);
        }
        catch{
            this.logger.error(error.message, error, environment.settings.appErrorPrefix);
        }
    }

}
