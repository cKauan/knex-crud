import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
    async index(req: Request, res: Response) {
        const users = await knex('users').orderBy('id');
        return res.status(200).json(users);
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
        await knex('users').insert(data);
        return res.status(201).json(data);
    },
    async update(req: Request, res: Response) {
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
