# restJS
Consume web services cloud with javascript. Accepted formats: JSON, etc.

```

var rest = new restJS('http://echo.jsontest.com/key/value');
rest.get( 
      function(results)
      {
        console.log(results);
      }
     );
//rest.post();

```
