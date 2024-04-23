import Product from '../../../models/Product'
import connectDb from '../../../middleware/mongoose'

const handler = async(req , res) =>{

    const {slug} = req.query;

    if(req.method == 'GET'){
        try {
            let p = await Product.findOne({slug})
            res.json(p)
        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)