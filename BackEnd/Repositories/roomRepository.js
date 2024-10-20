import { RoomModel } from "../Models/roomSchema.js";

export const create = async (roomData) => {

    try {
        const roomInstance = new RoomModel(roomData);

        return await roomInstance.save();
    } catch (error) {
        console.error('Error creating room:', error);
        throw new Error('Error creating room');
    }
}

export const findById = async (id) => {

    try {
        return await RoomModel.findById(id);
    } catch (error) {
        console.error('Error finding room:', error);
        throw new Error('Error finding room');
    }
}

export const findAll = async () => {

    try {
        return await RoomModel.find();
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw new Error('Error fetching rooms');
    }
}

export const update = async (id, roomData) => {

    try {
        return await RoomModel.findByIdAndUpdate(id, roomData, { new: true });
    } catch (error) {
        console.error('Error updating room:', error);
        throw new Error('Error updating room');
    }
}

export const hardDelete = async (id) => {

    try {
        return await RoomModel.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error deleting room:', error);
        throw new Error('Error deleting room');
    }   
}

export const findByName = async (name) => {

    try {
        return await RoomModel.findOne({room  : name});
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw new Error('Error fetching rooms');
    }
}