import { AppConfig } from "./app.config";
import * as Joi from 'joi';


export interface ConfigType {
    app: AppConfig
}

export const appConfigSchema = Joi.object({
    APP_MESSAGE_PREFIX: Joi.string().default('Hello World!'),
    DB_HOST: Joi.string().default('localhost'),
    DB_PORT: Joi.string().default('5432'),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required(),
});