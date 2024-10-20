import * as RoomRepo from "../../Repositories/roomRepository.js";

export const createRoom = async (roomData) => {
    try {
        const exists = await RoomRepo.findByName(roomData.room);
        if (exists) throw new Error('Room already exists!');
        return RoomRepo.create(roomData);

    } catch (error) {
        console.error('Error adding room:', error);
        throw new Error('Error adding room');
    }
}

export const updateRoom = async (id, roomData) => {

    try {
        const room = await RoomRepo.findById(id);
        if (!room) throw new Error('Room not found!');

        return RoomRepo.update(id, roomData);

    } catch (error) {
        console.error('Error updating room:', error);
        throw new Error('Error updating room');
    }

}

export const archiveRoom = async (id) => {
    try {
        const room = await RoomRepo.findById(id);
        if(!room) throw new Error('Room not found!');
        
        room.deletedAt = new Date();
        room.save();

        return room;
    } catch (error) {
        console.error('Error archiving room:', error);
        throw new Error('Error archiving room');
    }
}