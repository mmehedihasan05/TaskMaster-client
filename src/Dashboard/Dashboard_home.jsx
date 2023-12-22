import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import SingleTask from "../Components/SingleTask";
import SectionTitle from "../Components/SectionTitle";
const Dashboard_home = () => {
    const { currentUser } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [allTask, setAllTask] = useState([]);

    const { data, isLoading } = useQuery({
        queryKey: ["allTasks", currentUser?.uid],

        queryFn: async () => {
            const res = await axiosSecure.get(`/allTasks?email=${currentUser?.email}`);
            console.log("all tasks", res.data);
            setAllTask(res.data);
            return res.data;
        },
    });
    return (
        <div className="space-y-8">
            <div>
                <SectionTitle data={{ title: "To Do", noBorder: "true" }}></SectionTitle>

                <div className="flex gap-2 flex-wrap">
                    {allTask.map(
                        (data, idx) =>
                            data.taskStatus === "todo" && (
                                <SingleTask key={idx} taskData={data}></SingleTask>
                            )
                    )}
                </div>
            </div>
            <div>
                <SectionTitle data={{ title: "On Going", noBorder: "true" }}></SectionTitle>

                <div className="flex gap-2 flex-wrap">
                    {allTask.map(
                        (data, idx) =>
                            data.taskStatus === "ongoing" && (
                                <SingleTask key={idx} taskData={data}></SingleTask>
                            )
                    )}
                </div>
            </div>
            <div>
                <SectionTitle data={{ title: "Completed", noBorder: "true" }}></SectionTitle>

                <div className="flex gap-2 flex-wrap">
                    {allTask.map(
                        (data, idx) =>
                            data.taskStatus === "completed" && (
                                <SingleTask key={idx} taskData={data}></SingleTask>
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard_home;
