const Message = require("../models/message-model");

exports.newConversation = async(req,res) =>{
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    try {
        const exists = await Message.findOne({members:{$all:[senderId, receiverId]}});
        if(!exists){
            const conversation = new Message(
                {
                    members:[senderId,receiverId]
                }
            );
            await conversation.save();
            res.send("convo saved.");
        }else{
            res.send("convo existed.")
        }
    } catch (err) {
        console.log(err);
    }
}