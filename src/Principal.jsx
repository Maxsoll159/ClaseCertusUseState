import { FormInput } from "./components/FormInput"
import { HookUseEffect } from "./components/HookUseEffect"
import { HookUseSate } from "./components/HookUseState"
import { TaskList } from "./components/TaskList"

export const Principal = () => {
    return (
        <div>
            <h1>HOOKS</h1>
            <p>Un hook es una funcion</p>
            {
                /* 
                    <HookUseSate />

                    <TaskList />

                    <FormInput />
                */
            }
        <HookUseEffect />
        </div>
    )
}