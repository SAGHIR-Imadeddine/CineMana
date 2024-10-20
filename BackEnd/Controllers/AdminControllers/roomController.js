import * as RoomService from "../../Services/AdminServices/roomService.js";


export const addRoom = async (req, res) => {
    const {room, roomImg, type, capacity, rows, cols, isAvailable, createdBy} = req.body;
    
    if(!room || !roomImg || !type || !capacity || !rows || !cols || !isAvailable || !createdBy) 
    return res.status(400).json({message: 'All fields must be filled...'});
    
    const roomData = {
        room        : room,
        roomImg     : roomImg,
        type        : type,
        capacity    : capacity,
        rows        : rows,
        cols        : cols,
        isAvailable : isAvailable,
        createdBy   : createdBy
    };
    try {
        const newRoom = await RoomService.createRoom(roomData);
        if(!newRoom) return res.status(500).json({message : 'Error creating room!'});
        return res.status(200).json({ message: 'Room created successfully.', roomData });

    } catch (error) {
        const statusCode = error.message.includes('Room already exists!') ? 400 : 500;
        return res.status(statusCode).json({ message: error.message });
    }
    
}

export const updateRoom = async (req, res) => {

    const {id} = req.params;
    const {room, roomImg, type, capacity, rows, cols, isAvailable, createdBy} = req.body;
    if(!room || !roomImg || !type || !capacity || !rows || !cols || !isAvailable || !createdBy) 
    return res.status(400).json({message: 'All fields must be filled...'});

    const roomData = {
        room        : room,
        roomImg     : roomImg,
        type        : type,
        capacity    : capacity,
        rows        : rows,
        cols        : cols,
        isAvailable : isAvailable,
        createdBy   : createdBy
    };
    try {
        const updated = await RoomService.updateRoom(id, roomData);
        if(!updated) return res.status(500).json({message : 'Error creating room!'});
        
        return res.status(200).json({ message: 'Room created successfully.', roomData });  
    } catch (error) {
        const statusCode = error.message.includes('Room not found!') ? 400 : 500;
        return res.status(statusCode).json({ message: error.message });
    }
}

export const archiveRoom = async (req, res) => {
    
    const {id} = req.params; 
    try {
        const archived = await RoomService.archiveRoom(id);
        return res.status(200).json({ message: 'Room soft-deleted successfully', archived });
    } catch (error) {
        const statusCode = error.message.includes('Admin not found!') ? 400 : 500;
        return res.status(statusCode).json({ message: error.message });
    }
}