import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authToken: string;

    setAuthorizationToken(token) {
        this.authToken = token;
    }

    getAuthorizationToken() {
        return this.authToken;
    }
}