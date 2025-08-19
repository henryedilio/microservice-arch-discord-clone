import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hola mundo');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
