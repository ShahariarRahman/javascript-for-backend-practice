### **_At a Glance :_**

- _**`undefined.find()`** is a **TypeError**._
- _If an **error found** anywhere in code._
- - _Code **stops execution** at that line._
- - _Then the whole server **crashes**._
- **_`try{}catch(){}`_**.
- - _Get the **error information** in **catch**._
- - _**Prevent** code from crashing._
- **_Global error handler function_**.
- - _Handle all errors in an application._
- _**Arrow** function vs **Regular** function._
- - **_Arrow function_**:
- - - _It Hoisted where it defined._
- - - _Call before initialization get referenceError._
- - **_Regular function_**:
- - - _Hoisting at top._
- - - _Call before initialization is Okay._
- **_Logger_** :
- - _Error information should be stored in **Logger.**_
- - _Logger package manager use to log the error._
- - _The error log is used for future **investigation** & **resolve**._
- - _After storing errors at logger._
- - - _Message should send to user/ client using res.send._
- **_`Error()` constructor._**
- - _User-defined error created using Error constructor. `const error = new Error()`_
- - _Have to throw the error._ `throw error`

<br/><br/><br/>

### **Type of Error :**

#### **_Reference Error_**

- _Variable's **Reference not found**/ hasn't been declared_.
- - _Trying to access **undeclared** variable_.
- - _Trying to access variable **outside the block**_.

#### **_TypeError_**

- _An operation could not be performed when a value is **not** the **expected type**_.
- - _Trying to access a **method** that does not exist_.
- - _Trying to use number like sting_.

#### **_SyntaxError_**

- _When we use **Predefined Syntax Incorrectly**_.
- - _Missing **bracket**/ **comma**/ **quotation mark**_.
- - _**Misspelling** a word_.

#### **_InternalError_**

- _Error that occurred internally in the **JavaScript engine**._
- _Occurs most often when there is too much data and the **stack exceeds** its **critical size**._
- - _**Infinite recursion** when base case not found_

#### **_User-defined Error_**

- _Error manually **create by user**_
