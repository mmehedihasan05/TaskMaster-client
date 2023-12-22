import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import Select from "react-select";

import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const CreateTask = () => {
    const axiosSecure = useAxiosSecure();
    const { currentUser } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [deadLine, setDeadLine] = useState("");

    const options = [
        { value: "low", label: "Low" },
        { value: "moderate", label: "Moderate" },
        { value: "high", label: "High" },
    ];

    const handleCreateTask = async (e) => {
        e.preventDefault();
        const form = e.target;

        let taskInfo = {
            userId: currentUser?.uid,
            userEmail: currentUser?.email,
            taskTitle: title,
            taskDescription: description,
            taskPriority: priority.value,
            taskDeadLine: deadLine,
            taskStatus: "todo",
        };
        console.log(taskInfo);

        // Uploading blog data to server
        return toast.promise(
            axiosSecure
                .post("/create-task", taskInfo)
                .then((response) => {
                    if (response.data.acknowledged) {
                        form.reset();
                        return <b>Task Added Successfully.</b>;
                    } else {
                        throw new Error("Failed to add task!");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    throw new Error("Failed to add task!");
                }),
            {
                loading: "Creating Task...",
                success: (message) => message,
                error: (error) => <b>Failed to add task!</b>,
            }
        );
    };

    return (
        <div className="flex justify-center items-center  max-w-xl mx-auto">
            <form onSubmit={handleCreateTask} className="flex flex-col space-y-4 w-full">
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    maxRows={4}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />
                <Select
                    placeholder="Set Priority"
                    options={options}
                    onChange={setPriority}
                    required
                />
                <div
                    className="flex gap-4 items-center 
                    border border-[#c2c2c2] px-4 py-4 rounded bg-white"
                >
                    <p>Deadline: </p>

                    <input
                        type="date"
                        name=""
                        id=""
                        className=""
                        placeholder="Date"
                        onChange={(event) => {
                            const currentDate = new Date();
                            const inputDate = new Date(event.target.value);

                            if (inputDate <= currentDate) {
                                setDeadLine(event.target.value);
                            } else {
                                toast.error("Invalid Deadline!");
                            }
                        }}
                        value={deadLine}
                        required
                    />
                </div>
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default CreateTask;
