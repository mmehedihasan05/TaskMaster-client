import { MdDeleteForever } from "react-icons/md";

const SingleTask = ({ ...taskData }, status) => {
    let data = taskData.taskData;
    console.log(status);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="font-medium text-highlight capitalize">{data.taskPriority}</p>
                    <h2 className="card-title">{data.taskTitle}</h2>
                    <p>{data.taskDescription}</p>
                    <p className="font-medium">Deadline: {data.taskDeadLine}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        <button className="btn text-xl bg-none">
                            <MdDeleteForever />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;
