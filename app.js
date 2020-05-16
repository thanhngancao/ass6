const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const studentRouter = require('./routes/student');
const bodyParser = require('body-parser');
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(studentRouter);

const DB_URL ='mongodb+srv://ass6:3R27XM2fmVJ09wsF@cluster0-xcap6.gcp.mongodb.net/ass6?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then (() => {
    app.listen(process.env.PORT || 8888, () => {
        console.log('server is run');
    });
})
.catch (e => {
    console.log(e);
})

const swaggerOptions={
    swaggerDefinition: {
        info: {
            title: 'My document',
            description: "Cao Thanh Ngân",
            version: "1.0.0",
            contact: {
                name: "Cao Thanh Ngân",
                email: "17521308@gm.edu.vn",
            },
            servers: ["localhost:8888"]
        }
    },
    apis: ["app.js"]
};
const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/apidocs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));


/**
 * @swagger
 * /:
 *  get:
 *      summary: ...
 *      description: ...
 *      produces:
 *          - application/json
 *      responses:
 *          '200': 
 *              description: ....
 */

app.use(express.static(path.join(__dirname, 'public')));
