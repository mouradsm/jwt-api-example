import { version } from '../../package.json';
import { Router } from 'express';
import axios from 'axios'

//import facets from './facets';

export default () => {
	let api = Router();

	// mount the facets resource
	//api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.get('/verify', (req, res) => {
		axios.get('https://jsonplaceholder.typicode.com/todos/1')
		.then(r => {
			console.log(r)
		})
		
		res.json('VERIFICARÁ SE O ARQUIVO É VALIDO E CASO SEJA RETORNARÁ AS INFORMAÇÕES DELE')
	})

	api.get('/file', (req, res) => {
		res.json("RETORNARA O PDF DO ARQUIVO")
	})

	return api;
}
