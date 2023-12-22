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

import { useState } from "react";
const CreateTask = () => {
    const [priority, setPriority] = useState("");
    const [deadLine, setDeadLine] = useState("");

    const options = [
        { value: "low", label: "Low" },
        { value: "moderate", label: "Moderate" },
        { value: "high", label: "High" },
    ];

    return (
        <div className="flex justify-center items-center  max-w-xl mx-auto">
            <form onSubmit={""} className="flex flex-col space-y-4 w-full">
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    onChange={(event) => setFullName(event.target.value)}
                    required
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    maxRows={4}
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
