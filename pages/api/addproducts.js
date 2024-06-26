
import connectDb from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler = async(req, res)=>{
    if(req.method == 'POST'){
        try {
            for(let i=0; i<req.body.length; i++){
                let p = new Product({
                    title: req.body[i].title,
                    slug: req.body[i].slug,
                    desc: req.body[i].desc,
                    img: req.body[i].img,
                    category: req.body[i].category,
                    size: req.body[i].size,
                    color: req.body[i].color,
                    price: req.body[i].price,
                    availableQty: req.body[i].availableQty
                })
                
                p.save()
            }
            res.json({success: "succcess"})
        } catch (error) {
            res.json({message: "Inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)