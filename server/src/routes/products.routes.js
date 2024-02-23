import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();
const token = "a4e487f3-7ff8-4e55-aa37-532a320ce297";


router.get("/products", async (req, res) => {
	try {
		const products = await prisma.product.findMany();
		res.json(products);
	} catch (error) {
		res.json(error);
	}
});

router.post("/products", async (req, res) => {
	try {
		const datosFront= req.body;
		let data = datosFront.data;
		const tokenFront = datosFront.tokenFront;
		if (tokenFront === token) {		
			if (!data.fotoDorso) {
				data.fotoDorso = data.foto
			}	
			const product = await prisma.product.create({data});
			res.json(product);
		}else{
			console.log("error");
			throw  new Error ("No tienes permiso para realizar esta accion");
		}
	} catch (error) {
		res.json(error);
	}
});

router.get("/products/:id", async (req, res) => {
	const product = await prisma.product.findUnique({
		where: {
			id: Number(req.params.id),
		}
	});
	res.json(error);
});

router.delete("/products/:id", async (req, res) => {
	try {
		const {tokenFront} = req.query;
		if (tokenFront === token) {			
			const product = await prisma.product.delete({
				where: {
					id: Number(req.params.id),
				},
			});
			res.json(product.quantity);
		}else{
			throw  new Error ("No tienes permiso para realizar esta accion");
		}
	} catch (error) {
		res.json(error);
	}
});

router.put("/products/:id", async (req, res) => {
	try {
		const datosFront= req.body;
		const tokenFront = datosFront.tokenFront;
		if (tokenFront === token) {			
			const product = await prisma.product.update({
				where: {
					id: Number(req.params.id),
				},
				data
			});
			res.json(product);		
		}else{
			throw  new Error ("No tienes permiso para realizar esta accion");
		}
	} catch (error) {
		res.json(error);
	}
});

export default router;
