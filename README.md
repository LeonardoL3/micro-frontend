# micro-frontend

- http://localhost:3000/ (container)
- http://localhost:3001/ (app1)
- http://localhost:3002/ (app2)
- http://localhost:3003/ (app3)

- `app1` expose CounterAppOne component.
- `app2` expose CounterAppTwo header component.
- `app3` expose Route, Text component.
- 
- `container` import app1, app2 and app3 components


Pros

-Easier to maintain
-Easier to test
-Independent deploy
-Increases scalability of the teams

Cons
-Requires lots of configuration
-If one of the projects crashes may affect other micro-frontends as well
-Having multiple projects run on the background for the development
