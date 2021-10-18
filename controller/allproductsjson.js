

    const product = require('../models/product')
    // allproducts 
    exports.allproducts123 = async (req,res)=>{
        if(!req.query){
    await product.find()
    .then(data=>{
        if(typeof data !=='undefined' && data){
        res.status(200).send(data)
        }
        else
        {
            res.status(400).send("Bad Request")
        }
            
    })
    .catch(err=>
        {
            res.status(400).send(err)
        console.log(err)
        })
    }
    else
    {
        await product.find(req.query)
        .then(data=>{
        if(typeof data !=='undefined' && data){
        res.status(200).send(data)
        }
        else
        {
            res.status(400).send("Bad Request")
        }
        })
        .catch(err=>
            {
                res.status(400).send(err)
            console.log(err)
            })
    }
    }
// delete 

exports.allproductsdelete = async (req,res)=>{
    let todel = req.body
    console.log(todel)
    await product.deleteOne(todel)
    .then(data=>{
                if(typeof data !=='undefined' && data){
        res.status(200).send(data)
        }
        else
        {
            res.status(400).send("Bad Request")
        }
    })
    .catch(err=>
        {
            res.status(400).send(err)
        console.log(err)
        })
    }

    // post 

    exports.allproductspost = async (req,res)=>{
        let todel = req.body
        console.log(todel)
        const add = new product(todel)
        add.save()
        .then(data=>{
            res.status(200).send(data)
        })
        .catch(err=>
            {
                res.status(400).send(err)
            console.log(err)
            })
        }
        exports.allproductsupdate = async (req,res)=>{
            const id = req.query.id
            const productTitle = req.body.productTitle;
            const productPrize = req.body.productPrize;
            product.findOneAndUpdate({_id:id},{$set:{productTitle:productTitle,productPrize:productPrize}},{new:true},(err,data)=>{
                if(err) {res.status(400).send(err)}
                        if(typeof data !=='undefined' && data){
        res.status(200).send("Updates User:" + data)
        }
        else
        {
            res.status(400).send("Bad Request")
        }
            })
            }

            exports.getproductbyid = async (req,res,next)=>{
                await product.find({_id:req.params.id},(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.status(200).send(data)
                        next()
                    }
                })
            }
