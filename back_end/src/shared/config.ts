export interface AppConfig {
    jwtSecretKey: string;
    jwtExpiresIn: string;
}

export const config: AppConfig = {
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN
};