import { Request, Response } from "express";
import prisma from "../config/database";

export const getUsuario = async (req: Request, res:  Response) =>{
    try{
        const users = await prisma.usuario.findMany();
        res.json(users);
    } catch (error){
        console.error(error);
        res.status(500).json({ error:'Erro ao buscar usuário'});
    }
};