### **Node.js** :

#### **Single-threaded, Non-blocking, Async JavaScript Runtime**.

- _Sync task execute at **Event queue**_.
- _Async task sent to **Threat Pool**_.
- - _When task complete, **Event loop** send the task to **Event Queue**_.

<a target="_blank" href="https://www.geeksforgeeks.org/node-js-event-loop/">
    <img  src="nodejs-operations.png" width=500 alt="Node.js Image 1">
</a>
<br/><br/>

#### **Callback function** :

- Value of the callback function can only be accessed inside its block.

#### _Problems of nested async callback_:

- _So, Readability compromised_.
- _Difficult to maintain_.
- _Nested Complex callback task is called, Callback Hell_.
