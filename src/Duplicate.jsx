
// condition rendering option : 1

// export default function GetValue({task ,isDone}) {
//     if (isDone === true) {
//        return <li>task is done : { task}</li>
//     }
//     else {
//         return <li>task is not done : { task}</li>
//     }
// }


// condition rendering option : 2
// export default function GetValue({task ,isDone}) {
//     if (isDone) {
//        return <li>task is done : { task}</li>
//     }

//     return <li>task is not done : { task}</li>
   
// }


// condition rendering option : 3
export default function GetValue({task ,isDone}) {
    return (
        <li>{isDone ? 'task is done' : 'task is not done'} : { task}</li>
   )
   
}