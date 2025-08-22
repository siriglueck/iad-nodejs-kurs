# PATCH

Way to complex!

```js

let sql = 'UPDATE todos SET ';
if (typeof req.body.title != 'undefined) {
  sql+= 'title = ?'
}
if (typeof req.body.completed ...)

sql += ' WHERE id = ?'
```


read current values
current = { id: 17, title: 'xyz', completed: true }

if (title in body) {
  current.title = body.title;
}

// Same for completed

Und dann Update in DB

db.prepare('UPDATE todos SET title = ?, completed = ? WHERE id = ?').run(
    current.title,
    current.completed,
    id,
  );

