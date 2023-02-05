import React from 'react';

type TasksPropsType = {
    taskId: number
    title: string
    isDone: boolean
}

type DataPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    students: Array<string>
}

type  PropsType = {
    datas: DataPropsType
}

export function Tasks(props: PropsType) {
    return (
        <div>
            <div>
                <h3>{props.datas.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.datas.tasks.map(el => {
                        return (
                            <li key={el.taskId}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <div className="students">
                    {props.datas.students.map(el => <div>{el}</div>)}
                </div>
            </div>

        </div>
    )
}