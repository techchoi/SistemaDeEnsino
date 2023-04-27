const app = require('../../app');

/*criando uma constante port, ela possue uma lógica 
onde ela verifica a variável de ambiente porta se existe, 
senão ela atribui o valor padrão 8080 */
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});