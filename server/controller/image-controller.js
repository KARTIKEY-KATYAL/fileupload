import { file } from "../models/file.models.js";
import express from "express";

export const uploadImage = async (req, res) => {
  const fileobj = {
    path: req.file.path,
    name: req.file.originalname,
  };

  try {
    const File = await file.create(fileobj);
    res.status(200).json({ path: `http://localhost:8000/file/${File._id}` });
    console.log("FILE UPLOADED");    
  } catch (error) {
    console.log(error.message);
    res.status(500).json(`Error: ${error.message}`);
  }
};

export const downloadImage = async (req, res) => {
  try {
    // Log the file ID to check if it's being received correctly
    console.log("File ID:", req.params.id);

    // Find the file by ID
    const fileDocument = await file.findById(req.params.id);

    // Check if the file was found
    if (!fileDocument) {
      console.log("File not found");
      return res.status(404).json({ error: "File not found" });
    }

    // Increment download number and save the file document
    fileDocument.downloadnumber++;
    await fileDocument.save();

    // Send the file as a download response
    res.download(fileDocument.path, fileDocument.name);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
};
