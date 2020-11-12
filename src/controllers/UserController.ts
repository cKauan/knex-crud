import { Request, Response } from 'express';
import * as Yup from 'yup';
import knex from '../database/connection';

export default {
    async index(req: Request, res: Response) {
        const { page = 1 } = req.query;
        const users = await knex('users')
            .orderBy('id')
            .limit(10)
            .offset((Number(page) - 1) * 10);
        const [{ count }] = await knex('users').count();
        return res
            .status(200)
            .json({ data: users, limit: 10, total: Number(count) });
    },

    async create(req: Request, res: Response) {
        const { name, surname, email, cpf, birthday, phone, active } = req.body;
        const data = {
            name,
            surname,
            email,
            cpf,
            birthday,
            phone,
            active,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().email().required(),
            cpf: Yup.string().required().length(11),
            birthday: Yup.date().required(),
            phone: Yup.string().required().max(13).min(9),
            active: Yup.boolean().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });

        await knex('users').insert(data);
        return res.status(201).json(data);
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, surname, email, cpf, birthday, phone, active } = req.body;
        const data = {
            name,
            surname,
            email,
            cpf,
            birthday,
            phone,
            active,
        };

        const schema = Yup.object().shape({
            name: Yup.string(),
            surname: Yup.string(),
            email: Yup.string().email(),
            cpf: Yup.string().length(11),
            birthday: Yup.date(),
            phone: Yup.string().max(13).min(9),
            active: Yup.boolean(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        await knex('users').update(data).where({ id });
        const updatedUser = await knex('users').where({ id });
        return res.status(200).json(...updatedUser);
    },
    async updateFragment(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        await knex('users').update(data).where({ id });
        const updatedUser = await knex('users').where({ id });
        return res.status(200).json(...updatedUser);
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await knex('users').del().where({ id });
        return res.status(200).json({ message: 'Deleted' });
    },
};
