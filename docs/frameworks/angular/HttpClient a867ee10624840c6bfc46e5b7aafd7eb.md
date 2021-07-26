# HttpClient

发送请求

> HttpClient.post

```
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

// param@ url  请求路径
// param@ data 发送数据
// param@ headers 配置
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
```

> HttpClient.get

```
searchHeroes(term: string): Observable<Hero[]> {
  term = term.trim();
  // Add safe, URL encoded search parameter if there is a search term
  const options = term ?
   { params: new HttpParams().set('name', term) } : {};

  return this.http.get<Hero[]>(this.heroesUrl, options)
    .pipe(
      // TODO
    );
}
```

> 注：必须调用 subscribe()或pipe()，否则什么都不会发生

修改这些头 你没法直接修改前述配置对象中的现有头，因为这个 HttpHeaders 类的实例是不可变的。

改用 set() 方法代替。 它会返回当前实例的一份克隆，其中应用了这些新修改。

比如在发起下一个请求之前，如果旧的令牌已经过期了，你可能还要修改认证头。

```
httpOptions.headers =
  httpOptions.headers.set('Authorization', 'my-new-auth-token');
```