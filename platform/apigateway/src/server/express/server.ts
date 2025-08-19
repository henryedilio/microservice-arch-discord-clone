import app from "./app.js";
import environment from "../../environment.js";

export default function ServerExpress() {
  app.listen(environment.port, () => {
    console.log(`Servidor escuchando en http://localhost:${environment.port}`);
  });
}
