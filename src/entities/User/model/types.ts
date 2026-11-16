export interface User {
    id: string;
    email: string;
    isVerified: boolean;
}

export interface AuthResponse {
    access_token: string;
    user: User;
    debug_verification_code?: string;
}
