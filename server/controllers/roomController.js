import Hotel from "../models/Hotel.js";
import { v2 as cloudinary } from "cloudinary";
import Room from "../models/Room.js";
//API to create new room for hotel
export const createRoom = async (req, res) => {
    try {
        const { roomType, pricePerNight, amenities } = req.body;
        const hotel = await Hotel.findOne({ owner: req.auth.userId })
        
        if (!hotel) return res.json({ success: false, message: "No Hotel Found" });

        //Upload images to cloudinary

        const uploadImages = req.files.map(async (file) => {
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })
        //Wait for all upload to complete
        const images = await Promise.all(uploadImages)
        
        await Room.create
            ({
                hotel: hotel._id,
                roomType,
                pricePerNight: +pricePerNight,
                amenities: JSON.parse(amenities),
                images,

            })
        res.json({success: true,message:"Room created Successfully"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}
//API to get All Rooms
export const getRoom = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true })
      .populate({
        path: "hotel",
        populate: {
          path: "owner",
          select: "images",
        },
      })
      .sort({ createdAt: -1 });

    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//API to get all rooms for a specific hotel
export const getOwnerRooms = async (req, res) => {
    try {
        const hotelData = await Hotel.findOne({ owner: req.auth.userId });
        const rooms = await Room.find({ hotel: hotelData._id.toString() }).populate('hotel');
        res.json({ success: true, rooms });
    } catch (error) {
        res.json({ success: false, message:error.message });
    }
}
//API to toggle availablity of room
export const toggleRoomAvailability = async (req, res) => {
    try {
      const { roomId } = req.body;
      const roomData = await Room.findById(roomId);
  
      if (!roomData) {
        return res.status(404).json({ success: false, message: "Room not found" });
      }
  
      roomData.isAvailable = !roomData.isAvailable;
      await roomData.save();
  
      // Option 1: return the updated room
      const updatedRoom = await Room.findById(roomId);
  
      res.json({
        success: true,
        message: "Room availability updated",
        room: updatedRoom, // NEW: return updated room
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
