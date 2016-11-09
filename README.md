# React Tasks

A small exercise using React.js applying the Observer pattern to communicate 
between different components. Additionally, experimenting with some of the latest 
responsive mobile UX trends.

### Demo

![example](animation.gif)


### Methodology

##### Observer Middleware wrapper

this middleware allows child components of this middlware to communicate
with each other.

folow methods available in **child component**:  
    - registerListener  
    - emitChangeEvent  

**note:** `registerListener` should have the following format  

```javascript
{
    column: string,    // the column to insert into
    reducer: function  // reduce function to be applied to the cloned collection
}
```

**MiddleWare:**  

```javascript
<ObserverMiddleWare>
    <Child />
    <Child />
    <Child />
      ...
</ObserverMiddleWare>

```

**Store:**  

the store only allows mutations of the main collection during `add` and `remove`
operations. Other than that, it uses a cloned verions (**collectionClone**) reduced 
with a `applyFilter` function (and is meant to allow mutations to the function).
the `applyFilter` returns all collection by default.

```javascript
itemStore = {
    ...
    collectionClone: function() {
        return _.filter(this.collection, this.applyFilter)
    }
    applyFilter: function(item) {
        return item;
    },

    ...
}
```
