import Produto from '../models/produtos.js';

export async function store(req, res){
    try{
        const produto = await Produto.create(req.body);

        res.status(200).send({ message: "Produto criado!", produto });
    } catch(error) {
        res.status(400).send({ message: error.message });
    };
};

export async function index(req, res){
    try{
        res.status(200).send(await Produto.findAll());
    } catch(error) {
        res.status(400).send({ message: error.message });
    };
};

export async function show(req, res){
    try{
        res.status(200).send(await Produto.findByPk(req.params.id));
    } catch(error) {
        res.status(400).send({ message: error.message });
    };
};

export async function update(req, res){
    try{
        const produto = await Produto.findByPk(req.params.id);
        
        await produto.update(req.body);

        res.status(200).send({ message: "Produto atualizado!", produto });
    } catch(error) {
        res.status(400).send({ message: error.message });
    };
};

export async function destroy(req, res){
    try{
        const produto = await Produto.findByPk(req.params.id);

        await produto.destroy();

        res.status(200).send({ message: "Produto deletado!", produto });
    } catch(error) {
        res.status(400).send({ message: error.message });
    };
};