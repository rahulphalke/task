const multer = require('multer');


//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})


const  uploadBase64Img = async (base64Img,path)=>{
    return new Promise((resolve, reject) => {
        try{
            let imgName = path+uuidv4()+'certificate.png';
            let m =  base64Img.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            let b =  Buffer.from(m[2],'base64');

            fs.writeFile(imgName,b,function(err){
                if(!err){
                    resolve({status:true,filename: imgName})
                }else{
                    resolve({status:false,filename: ''})     
                }
            });

        }catch(e){
            reject({status:false,filename: ''})
            throw e;
        }
    });
}

var upload = multer({
    storage: storage
});

module.exports  = {
    upload,
    uploadBase64Img
}