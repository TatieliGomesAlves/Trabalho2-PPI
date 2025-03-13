import {Router} from "express";
import PacoteViagemCtrl from "../Controller/pacoteViagemCtrl.js";

const rotaPacoteViagem = Router ();
const pvCtrl = new PacoteViagemCtrl();

rotaPacoteViagem.get("/:destino", pvCtrl.consultar)
rotaPacoteViagem.get("/", pvCtrl.consultar);
rotaPacoteViagem.post("/", pvCtrl.gravar);
rotaPacoteViagem.put("/", pvCtrl.atualizar);
rotaPacoteViagem.patch("/", pvCtrl.atualizar);
rotaPacoteViagem.delete("/", pvCtrl.excluir);

export default rotaPacoteViagem;