import express, { response } from "express"
import Notes from "../model/notes.model.js"

const notesRoute = express.Router()

notesRoute.get("/", (req, res) => {
    res.status(200).send("Everything working...")
})

notesRoute.get("/notes", async (req, res) => {

    try {
        const notes = await Notes.find()
        res.status(200).send(notes)
    }
    catch (error) {
        res.status(500).json({
            message: "getting error to fetch",
            response: error
        })
    }



})

notesRoute.post("/notes", async (req, res) => {
    console.log("caaleed")
    try {
        const { title, description } = req.body
        console.log(req.body)
        const data = {
            title,
            description
        }
        const result = await Notes.insertOne(data)
        res.status(201).json({
            message: "Notes created successfully",
            response: result
        })
    }
    catch (error) {
        res.status(500).json({
            message: "getting error to create notes",
            response: error
        })
    }
})

notesRoute.put("/notes/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const response = await Notes.findByIdAndUpdate(id, data)
        res.status(201).json({
            message: "Notes updated successfully",
            response: response
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error on creation",
            error: error
        })
    }
})

notesRoute.delete("/notes/:id", async (req, res) => {
    console.log("called")
    try {
        const id = req.params.id

        const response = await Notes.deleteOne({ _id: id })
        res.status(201).json({
            message: "Notes Deleted successfully",
            response: response
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error on Deleting the notes",
            error: error
        })
    }
})


notesRoute.get("/notes/:id", async (req, res) => {
    console.log("get of saved")
    try {
        const id = req.params.id

        const response = await Notes.findById(id)
        res.status(201).send({
            message: `succesffully get the note : ${response.title}`,
            data: response
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error on Deleting the notes",
            error: error
        })
    }
})



export default notesRoute