# isomorphic web React

## Description

The API deliberately delays 5 seconds. When moving from `/` to `/users` on the SPA, mount the component and fetch it.
When accessing `/users`, fetch the data on the server side and create the component using the data after fetch.

```
SPA
|-----|      |----------|   client fetch    |-------------|
|  /  |  ->  |  /users  |  -------------->  |  <Users />  |
|-----|      |----------|                   |-------------|

SSR preload
|----------|   server fetch    |--------------|
|  /users  |  -------------->  |   <Users />  |
|----------|                   |--------------|
```

## ScreenShot

![](https://raw.githubusercontent.com/konojunya/isomorphic-web-react/master/screenshot/react.gif)