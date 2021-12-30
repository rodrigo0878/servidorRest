const express = require('express')
var cors = require('cors')




class Server {

        constructor(){

            this.app = express();
            this.port = process.env.PORT;

            this.usuariosPath = '/api/usuarios';
                //MIDDLEWARES....  funcione que añaden otra funcionalidad al web server, algo como windows.onload dom conten


            this.middlewares()
                //Rutas de mi app




            this.routes();


        }


        middlewares(){

            this.app.use(cors())
            this.app.use(express.static('public'))
        }

        // las rutas son los endpoint
        routes(){

            this.app.use(this.usuariosPath, require('../routes/user'))
          
/*            this.app.get('/api', (req, res) => {
                res.status(200).json({
                    ok: true,
                    msg : "get desde la api"
                })
              })

              this.app.put('/api', (req, res) => {
                res.json({
                    ok: true,
                    msg : "put desde la api"
                })
              })

              this.app.post('/api', (req, res) => {
                res.json({
                    ok: true,
                    msg : "post desde la api"
                })
              })
              this.app.delete('/api', (req, res) => {
                res.json({
                    ok: true,
                    msg : "delete desde la api"
                })
              })  */
        }

        listen(){
            this.app.listen(this.port, () => {
                console.log(`Example app listening at http://localhost:${this.port}`)
              })
        }

}


module.exports = Server;