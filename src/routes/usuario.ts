import { Router } from "express";
import * as usuario from "../controllers/usuario";

const rota = Router();
rota.get('/usuario', usuario.getUsuario);

export default rota;