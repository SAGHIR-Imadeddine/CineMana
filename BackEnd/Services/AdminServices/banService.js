import * as BanRepo from "../../Repositories/banRepository.js"



export const ban = async (banData) => {
    try {
        const banRecord = await BanRepo.countUserBans(banData.user);
        
        if(banRecord == 0) banData.banDuration = '2 weeks';
        if(banRecord > 0) banData.banDuration = '1 month';
        if(banRecord > 1) banData.banDuration = '3 months';
        if(banRecord > 2) banData.banDuration = 'permenant';

        return BanRepo.create(banData);
    } catch (error) {
        console.error('Error banning user:', error);
        throw new Error('Error banning user');
    }
}