# more about fetch  

/* 
Internet Explorer 5 introduce XMLHttpRequest an API meant to overcome the limitation initially XMLHttpRequest was designed fetch XML data via HTTP, hence the name sometime after it was released, however, support for data formats= primarily JSON, HTML, 
and plaintext - was added

* the XMLHttpRequest API worked like a charm back then,
but as the web grows, it become to difficult to work with
the js frameworks, notably jquery, had to abstract to
make implementation and sucess / error handling smoother

* after that fetch library introduce for the api    handling 
don't need to right XMLHttpRequest

* In a question answer by one node's core contributors 
on the hacker News, it was noted that the browser's 
fetch API implementation is dependent on a browser-based
web streams api and the abortcontroller interface (for aborting fetch request), which wasn't available in Node.js until recently as such, it was difficult to decide on the best approach to include it in Node.js

* abortController => when the node request is sent through fetch then you can stop it in browser you have full support.

* what node contributor did they decided to include this in js core and whatever this browser-based web streams API they themselves write it, and include it



# fetch() global function--------------->

The global fetch() Method starts the process of fetching 
a resourse from the network, returning a promise which is
fulfilled once the response is available

# **********Interview must***************

A fetch( ) promise only rejects when a network error is 
encountered (which is usaually when there's a permissions
issue or similar). A fetch() promise does not reject on HTTP errors (404, etc). Instead, a then() handler must check the response.ok and / or response.status properties.



# fetch() do its work in 2 parts
        (1) data -> variables ya memory ke andar space reserve krne me
                    * onfulfilled[] -> resolve()
                    * onRejection[] -> reject()
                    -> we cannot directly push value in it 
                        private field
            ** data is reserved in memory
            ** initially data value is empty 
            ** in both we get function (onfulfilled[fnc])
            ** that functions are responsible for fulfilling 
                the data waha se hoti hai value fulfilled
            ** It is the responibility of data to fulfill the 
                response variable

        (2) Web browser / node ki api request handling
           -> network request 
                * If there is any response then go to onfulfilled[];
                * If not receieve then in onRejection[]
