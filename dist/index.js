import './loadEnvironment.js';
import express from 'express';
import './loadEnvironment.js';
const app = express();
const port = parseInt(process.env.HOST_PORT ?? '3000', 10);
app.get('/alumnes', (req, res) => {
    const alumnos = ['Pepe', 'Jaime', 'Lorenzo', 'Juan', 'Pablo', 'Jorge', 'Jordi', 'Jordina', 'Jordana', 'Jordiño', 'Jordiñe', 'Jordiñ'];
    res.send({ alumnos });
});
app.get('/uf', (req, res) => {
    const uf = ['UF1', 'UF2', 'UF3', 'UF4', 'UF5', 'UF6', 'UF7', 'UF8', 'UF9', 'UF10', 'UF11', 'UF12'];
    res.send({ uf });
});
app.get('/matriz', (req, res) => {
    const alumnos = ['Pepe', 'Jaime', 'Lorenzo', 'Juan', 'Pablo', 'Jorge', 'Jordi', 'Jordina', 'Jordana', 'Jordiño', 'Jordiñe', 'Jordiñ'];
    const ufs = ['UF1', 'UF2', 'UF3', 'UF4', 'UF5', 'UF6', 'UF7', 'UF8', 'UF9', 'UF10', 'UF11', 'UF12'];
    const matriz = [];
    for (const alumno of alumnos) {
        for (const uf of ufs) {
            matriz.push(alumno + ' ' + uf);
        }
    }
    res.send({ matriz: matriz.join(', ') });
});
app.listen(port, () => {
    console.log('⚡️[server]: Server is running at http://localhost:3000!');
});
export default app;
//# sourceMappingURL=index.js.map