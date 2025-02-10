/**
 * Token class representing authentication token details.
 */
export default class Token {
    /**
     * @param {Object} token - Information about the authentication token.
     * @param {Date|string} [token.TimestampUtc] - Timestamp when the token was created in UTC.
     * @param {Date|string} [token.ExpirationUtc] - Timestamp when the token expires in UTC.
     * @param {boolean} [token.IsExpired=false] - Indicates whether the token is expired.
     * @param {string} [token.TenantGUID] - Globally unique identifier for the tenant.
     * @param {string} [token.UserGUID] - Globally unique identifier for the user.
     * @param {string} [token.Token] - The actual token string.
     * @param {boolean} [token.Valid=true] - Indicates whether the token is valid.
     */
    constructor(token?: {
        TimestampUtc?: Date | string;
        ExpirationUtc?: Date | string;
        IsExpired?: boolean;
        TenantGUID?: string;
        UserGUID?: string;
        Token?: string;
        Valid?: boolean;
    });
    TimestampUtc: Date;
    ExpirationUtc: Date;
    IsExpired: boolean;
    TenantGUID: string;
    UserGUID: string;
    Token: string;
    Valid: boolean;
}
