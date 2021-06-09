# base

- delay (number)

  延迟指定 ms 后触发

- take (number)

  触发指定次数后停止事件流

- takeUtil (bbservable)

  直到传入的 observable 触发事件流时通过

- takeWhile (fn => boolan)

  直到传入的条件（函数）返回真时通过

- throttleTime (number)

  同 _.throttle

- debounceTime (number)

  同 _.debounce

- pluck (str1, str2, …)

  指定提取值的路径，类似 _.get

- pairwise ()

  将本次值与旧值以 Array 的形式返回 [old, new]

- distinct ()

- distinctUntilChanged

- of (arg1, arg2, …)

- form (array)

  同 of (…array)