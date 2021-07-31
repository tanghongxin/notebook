# 日期与时间

## 时间元组

Python 函数用一个元组装起来的9组数字处理时间

| 序号 | 属性     | 含义         | 范围                                 |
| ---- | -------- | ------------ | ------------------------------------ |
| 0    | tm_year  | 4位数年      | 2008                                 |
| 1    | tm_mon   | 月           | 1-12                                 |
| 2    | tm_mday  | 日           | 1-31                                 |
| 3    | tm_hour  | 小时         | 0-23                                 |
| 4    | tm_min   | 分钟         | 0-59                                 |
| 5    | tm_sec   | 秒           | 0到61 (60或61 是闰秒)                |
| 6    | tm_wday  | 一周的第几日 | 0到6 (0是周一)                       |
| 7    | tm_yday  | 一年的第几日 | 1到366                               |
| 8    | tm_isdst | 夏令时       | -1, 0, 1, -1是决定是否为夏令时的旗帜 |



## 常用函数

- time.time 获取时间戳（只支持 1970 - 2038）
- time.localtime 时间戳转时间元组

    ```
    import timelocaltime = time.localtime(time.time())print ("本地时间为 :", localtime)# 输出 本地时间为 : time.struct_time(tm_year=2016, tm_mon=4, tm_mday=7, tm_hour=10, tm_min=28, tm_sec=49, tm_wday=3, tm_yday=98, tm_isdst=0)
    ```

- time.asctime 可读的时间

    ```
    import timelocaltime = time.asctime( time.localtime(time.time()) )print ("本地时间为 :", localtime)# 输出 本地时间为 : Thu Apr  7 10:29:13 2016
    ```

- strftime 格式化日期

    ```
    import time# 格式化成2016-03-20 11:45:39形式print    (time.strftime("%Y-%m-%d %H:%M:%S", time        .localtime()))# 格式化成Sat Mar 28 22:24:24 2016形式print             (time.strftime("%a %b %d %H:%M:%S %Y", time.                localtime()))  # 将格式字符串转换为时间戳a = "Sat Mar 28 22:24:24 2016"                    print (time.mktime(time.                        strptime(a,"%a %b %d %H:%M:%S %Y")))# 输出# 2016-04-07 10:29:46# Thu Apr 07 10:29:46 # 20161459175064.0
    ```

    ### 时间日期格式化符号

- %y 两位数的年份表示（00-99）
- %Y 四位数的年份表示（000-9999）
- %m 月份（01-12）
- %d 月内中的一天（0-31）
- %H 24小时制小时数（0-23）
- %I 12小时制小时数（01-12）
- %M 分钟数（00=59）
- %S 秒（00-59）
- %a 本地简化星期名称
- %A 本地完整星期名称
- %b 本地简化的月份名称
- %B 本地完整的月份名称
- %c 本地相应的日期表示和时间表示
- %j 年内的一天（001-366）
- %p 本地A.M.或P.M.的等价符
- %U 一年中的星期数（00-53）星期天为星期的开始
- %w 星期（0-6），星期天为星期的开始
- %W 一年中的星期数（00-53）星期一为星期的开始
- %x 本地相应的日期表示
- %X 本地相应的时间表示
- %Z 当前时区的名称
- %% %号本身