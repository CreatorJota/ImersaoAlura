import express from 'express';
import routes from './src/routes/postsroutes.js';

// const posts = [
//     {
//         id: 1,
//         descricao: "Uma foto",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 2,
//         descricao: "Paisagem deslumbrante",
//         imagem: "https://source.unsplash.com/random/300x150/?nature,landscape"
//     },
//     {
//         id: 3,
//         descricao: "Arte abstrata",
//         imagem: "https://source.unsplash.com/random/300x150/?abstract"
//     }
// ];

const app = express();
app.use(express.static("uploads"))
routes(app)

app.listen(3000, () => {
    console.log('Servidor escutando..')
});






// function buscarPosts(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// };

// app.get('/posts/:id', (req, res) => {
//     const index = buscarPosts(req.params.id)
//     res.status(200).json(posts[index]);
// });

