import {Router} from "express";
import PacoteViagemCtrl from "../Controller/pacoteViagemCtrl.js";

const rotaPacoteViagem = Router ();
const pvCtrl = new PacoteViagemCtrl();

rotaPacoteViagem.get("/", pvCtrl.consultar);
rotaPacoteViagem.post("/", pvCtrl.gravar);
rotaPacoteViagem.put("/", pvCtrl.alterar);
rotaPacoteViagem.patch("/", pvCtrl.alterar);
rotaPacoteViagem.delete("/", pvCtrl.excluir);

export default rotaPacoteViagem;