# React Tasks

A small exercise using React.js applying the Observer pattern to communicate 
between different components. Additionally, experimenting with mobile UX.

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
    ...
</ObserverMiddleWare>

```

