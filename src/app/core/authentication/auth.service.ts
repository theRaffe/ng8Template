import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ApiConstants } from 'src/app/shared/constants/api.constants';
import { map } from 'rxjs/operators';
import { SessionUserService } from '../services/session-user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthAppService {

    private _token: string;
    private _tokenExpiration: string;

    constructor(
        private _httpClient: HttpClient,
        private _sessionService: SessionUserService,
        public jwtHelper: JwtHelperService) { }
    // ...
    public isAuthenticated(): boolean {
        const token = this._token || sessionStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    public validateUser<T>(email: string): Observable<T> {
        const path = ApiConstants.VALIDATE_USER.replace(':email', email);
        const endpoint = ApiConstants.getEndpoint(path);
        return this._httpClient.get<T>(endpoint);
    }

    public login<T>(requestBody: { email: string, password: string }): Observable<T> {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.SECURITY_LOGIN);
        return this._httpClient.post<T>(endpoint, requestBody).pipe(
            map((response) => {
                this._sessionService.configureSession(response);
                return response;
            })
        );
    }

    public createNewAccount<T>(requestBody: any) {
        const endpoint = ApiConstants.getEndpoint(ApiConstants.CREATE_USER);
        return this._httpClient.post<T>(endpoint, requestBody).pipe(
            map((response) => {
                this._sessionService.configureSession(response);
                return response;
            })
        );
    }

}