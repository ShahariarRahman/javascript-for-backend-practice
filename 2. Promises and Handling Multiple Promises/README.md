#### _States of Promise :_

- _Pending_.
- _Resolved_.
- _Rejected_.

#### _Constructor :_

- _To make an **Object** or **Instance** from a constructor, we write **new** operator before constructor_.

<br/>

### _**Promise() Constructor**_ :

- _**A callback function** is the **Argument** of Promise() constructor function_.
- _(**resolve, reject**) are the parameters of the callback function_.

```
const promise = new Promise((resolve, reject) => {});
```

- _Promise constructor's object has **three methods**_.
- - _.then_
- - - _Only execute when **resolve** function called_.
- - - _Get the value passed by the function_.
- - _.catch_
- - - _Only execute when **rejected** function called_.
- - - _Get the value passed by the function_.
- - _.finally_

<br/>

### _**Multiple Async Task in Sync Block**_ :

- **_In Array Push Promise Object_**.
- - _Push the Promise object in array instant of consuming it._
- - _If not consumed then, the promises object remain synchronous, can be pushed synchronously._
- **_`Promise.all` to consume array of Promise object_**.
- - _`Promise.all(ArrayOfPromise).then(res=>console.log(res))`_
- - _after completing/executing all promises, then the data consumed in callback function._

```
Promise.all(ArrayOfPromise).then(res=>console.log(res))
```
