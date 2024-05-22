/* 
    javascript -> Synchronous - step by step task execution
               -> Single threaded -

               each operation waits for the last one to complete before executing
               
Single threaded lang -----> JavaScript is often referred to as a "single-threaded" language 
because it operates on a single thread of execution within a web browser or a Node.js environment. 
This means that it can only perform one task at a time in a single sequence. 
This is in contrast to multi-threaded languages, 
where multiple threads of execution can operate independently.

what is a thread ----->  ( In the context of computer programming, a "thread" refers to the smallest unit of execution within a process. 
A process, is an independent program or application that runs in its own memory space. 
Threads within a process share the same memory space and resources but operate independently.)

A thread is like an individual sequence of instructions that the central processing unit (CPU) can execute.

*/

// --------------- Blocking code Vs Non Blocking code --------------------->

/* 
    blocking code ----> 
                    -> block the flow of program 
                    -> read file Sync
    Non blocking code -----> 
                    -> does not block the execution
                    -> read file Async
*/
 
// Async APIs -setTimeout, setInterval

/* 
Register Call back -> registered all things like when to execute a code 
after 2s 3s 
                   -> when the time ends register call back will put the callbacks
                      in the task queue 
*/   

/* 
Task Queue --> job is to add the callback into call stack 
*/


/*
fetch() -> works on high priority queue ( promise queue ). 
        -> in fetch there is promise concept which tells do this task after sometime 
        if done then tell not done then tell
*/

// settimeout()->method, interval are given by browser


