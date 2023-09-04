import { Router } from "express";
import LeitorController from "./controller/LeitorController";
import LivroController from "./controller/LivroController";
export const router = Router();

router.post('/leitor', LeitorController.create);
router.delete('/leitor/:id', LeitorController.delete);
router.put('/leitor/:id', LeitorController.update);
router.get('/leitores', LeitorController.readAll);
router.get('/leitor/:id',LeitorController.readLeitor);

router.post('/livro', LivroController.create);
router.delete('/livro/:id', LivroController.delete);
router.put('/livro/:id', LivroController.update);
router.get('/livros', LivroController.readAll);
router.get('/me_empresta/:id', LivroController.meEmpresta);
router.get('/livro/:id', LivroController.readLivro);