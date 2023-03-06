## At a glance

- _Each javascript file is **module** in Node.js._
- - _Each module contains, **global object** : `module`_
- - _One property of the module object is : `exports: {}`_
- _Commonjs's Import, Export :_
- **Default** :

```
// export :
module.exports = exportValue
```

```
// import :
const exportValue = require("./file.js")
```

- **In-line individually named as a property in module.exports**:

```
// export :
module.exports.exportValue1 = exportValue1;
module.exports.exportValue2 = exportValue2;
```

```
// import :
const { exportValue1, exportValue2 } = require("./file.js");
```

- **All at once at the bottom** :

```
// export :
module.exports = { exportValue1, exportValue2 };
```

```
// import :
const { exportValue1,exportValue2 } = require("./file.js");
```

- **In-line individually before declarations** :

```
// export :
module.exports.exportValue1 = function exportValue1(params) {
  console.log(params);
};
module.exports.exportValue2 = function exportValue2(params) {
  console.log(params);
};
```

```
// import :
const { exportValue1,exportValue2 } = require("./file.js");
```

- _Import-export language define in `package.json`_ :
- - **_Commonjs :_**
- - - _Module use commonjs by default_
- - - _OR `type:"commonjs"`_
- - **_Es6 module :_**
- - - `type:"module"`
- - - _N.B : Don't Es6 module, because it is experimental & not stable yet._
