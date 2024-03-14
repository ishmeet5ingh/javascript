// *******************EventLoop******************
// see 01browser image in same folder first ------------>
// to access all things shown in outflow arrow we need apis
// see 02webApis image ---------------->

// webapis-------------------->


/* -----> settimeout()
 03setTimeout() behind the scene
*/
// 04callback queue and eventloop

// ************ event loop explaination ***************

/*
    -> Checks callback Queue and if there is something
        then push to the call Stack

    -> then call stack quickly execute that callback
    -> when callstack is emply then only the cb()
        waiting in the callback queue will comes in the
        call stack.

*/

/* DOM API ------>
    When addEventListener is encountered -->
        * A callback() ( CB() )registered in the web APIs 
        * click Event is attaches to it.
    
    see image -> 05DOM_APIs  
*/

/* 
why we need callBack queue---->
    * Suppose user is clicking a button again and again
    * then callback queue store that cb() in queue order 
    * And execute it one by one
    * that is y callback queue is there
    * And eventLoop check continuously both(cs and cb)
    * 
*/


/* fetch()----->
    it is not similarly executed like both above

    * we have microtask queue ---->
    -> this queue have higher priority than the cb queue
    -> here also Event Loop do the same work
    -> once the global execution context is poped out of the 
        callstack then only cb in micro or cb queue pushed 
        in the callstack by event loop.
    -> 10000 lines code bhi ho koi dikat nahi pehle global 
        execution context will empty
*/


/*
    what can comes under microtask queue--------------->

    * All the callback function which comes through promises
        will come under microtask queue
    
    see 06 image
    
    more name of microtask queue
    -> task queue
    

*/

// **********once all the task done in microtask queue
//***********then only callback queue.

//starvation ---> when tasks inside the microtask queue is more
                // that it is not allowing callback queue to push
                // its cb() in the callstack
