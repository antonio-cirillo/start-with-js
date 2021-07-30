module.exports = {

    logger: (req, res, next) => {
        const method = req.method;
        const url = req.url;
        const year = new Date().getFullYear();
        console.log(method, url, year);
        
        next();
    },
    
    checkQuery: (req, res, next) => {
        const query = req.query;
        console.log(`This is a query object: ${query}`);
    
        next();
    }

}