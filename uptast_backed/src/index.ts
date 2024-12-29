import { app } from "./server";
import colors from 'colors';

const port = 4000

app.listen(port, () => {
    console.log(colors.cyan.bold(`Servidor funcionando en el puerto ${port}`));
})