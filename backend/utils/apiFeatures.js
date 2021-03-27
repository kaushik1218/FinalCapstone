class APIFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            }
        }: {}

        // console.log(keyword);
        this.query = this.query.find({ ...keyword});
        return this;
    }
    
    filter(){
        const queryCopy = { ...this.queryStr };

        // console.log(queryCopy);

        //Removing fields from the query string
        const removeFields = ['keyword', 'limit', 'page']
        removeFields.forEach(el => delete queryCopy[el]);
        
        // console.log(queryCopy);
        //Advance filter for price, ratings etc.
        let queryStr = JSON.stringify(queryCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
 
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage -1);

        
        this.query = this.query.limit(resPerPage).skip(skip); 
        // skip(skip) will minus first 10 products and limit(resPerPage) will give results from lets say 11 to 20
        return this;
    }
}

module.exports = APIFeatures