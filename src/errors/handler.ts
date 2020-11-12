import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[];
}
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    console.error(error);
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};
        error.inner.forEach((err) => {
            errors[err.path] = err.errors;
        });

        return res.status(400).json({ message: 'Validation fails', errors });
    } else if (error.code === '23505')
        return res.status(400).json({
            message: 'Insert fails',
            error: error.detail,
        });
    else if (error.code === '22001')
        return res.status(400).json({
            message: 'Insert fails',
            error: "cpf must not be major than 11 characters",
        });
    return res.status(500).json({ message: 'Internal Server Error ' });
};

export default errorHandler;
