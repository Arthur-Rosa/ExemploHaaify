import express, { Request, Response, json } from 'express';

const app = express();

// indicando que a API vai usar JSON
app.use(json());

// Req => Request ( Requisição )
// Res => Response ( Resposta )
app.use('/', (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      msg: 'Estamos online',
      live: true,
    });
  } catch (error: unknown) {
    return res.status(500).json({ error: 'Ocorreu um erro ao acessar o /' });
  }
});

app.listen(5000, () => {
  console.log('Estamos online');
  console.log('Acessando http://localhost:5000');
});
