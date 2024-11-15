import { Router } from 'itty-router'
import getImages from './handlers/get_images'

const router = Router()

router.get('/images', getImages)
	.get('*', () => new Response('Not found', { status: 404 }));
export interface Env {
// MY_KV_NAMESPACE: KVNamespace;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {

	  return router.fetch(request);
	},
};
