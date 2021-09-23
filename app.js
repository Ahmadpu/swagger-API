const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express()


const swaggerOptions= {
    swaggerDefinition:{
        info:{
            title:'Library api',
            version:'1.0.0'
        }
    },
    apis:['app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));
/** 
 * @swagger
 * /books:
 *     get:
 *      description: Get all books
 *      responses:
 *           200:
 *             description: Success
 * 
 */

app.get('/books',(req,res)=>{
    res.send({
        id:'1',
        title:"Harry potter"    
    })
})

/** 
 * @swagger
 * /books:
 *   post:
 *     description: Create a new book
 *     parameters: 
 *     - name: title
 *       description: title of book
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *       201:
 *         description: Created
 * 
 */
app.post('/books',(req,res)=>{
    res.status(201).send();
})


app.listen(5000,()=>{
    console.log('server is listening on 5000')
})