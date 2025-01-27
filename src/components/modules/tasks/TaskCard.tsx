import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  // const dispatch = useAppDispatch();
  // const users = useSelector(selectUsers);

  // const assignedUser = users.find((user) => user.id === task.assignedTo);

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn(
              "size-3 rounded-full",
              {
                "bg-red-500": task.priority === "High",
                "bg-yellow-500": task.priority === "Medium",
                "bg-green-500": task.priority === "Low",
              },
              {
                "bg-opacity-50": task.isCompleted,
              }
            )}
          ></div>
          <h1
            className={cn({
              "line-through": task.isCompleted,
            })}
          >
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            // onClick={() => dispatch(deleteTask(task.id))}
            variant={"link"}
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            // onClick={() => dispatch(toggleTask(task.id))}
          />
        </div>
      </div>
      {/* <p>Assigned To- {assignedUser ? assignedUser.name : "No one"}</p> */}
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
