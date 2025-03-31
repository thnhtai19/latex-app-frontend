import { defineConfig } from "vite";

export default defineConfig({
	server: {
		cors: {
			origin: ['https://latex.ttdev.id.vn', 'http://localhost:4173'],
			methods: ['GET', 'POST'],
			allowedHeaders: ['Content-Type']
		},
		allowedHosts: ['latex.ttdev.id.vn']
	}
});
