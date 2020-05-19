import User from "../models/User";
import sharp from "sharp";
import fs from "fs";

export default {
    async update(request, response) {
        const _id = request.params.id;
        const { file } = request;
        const newPath = await file.path.split(".")[0] + ".webp";
        const { userPhoto } = await User.findOne({ _id });

        if (file) {
            sharp(file.path)
                .resize(300)
                .toFormat("webp")
                .webp({ quality: 80 })
                .toBuffer()
                .then(async data => {
                    fs.unlink(file.path, err => { if (err) console.log("Error: " + err); });

                    fs.writeFile(newPath, data, err => { if (err) throw err });

                    const user = await User.findOne({ _id });

                    const updateUser = await User.findOneAndUpdate({ _id }, { userPhoto: newPath });
                    
                    fs.unlink(userPhoto, err => { if (err) console.log("Error: " + err); });

                    return response.status(200).json(updateUser);
                })
                .catch(err => {
                    return response.json({ err });
                })
        }
    }
}