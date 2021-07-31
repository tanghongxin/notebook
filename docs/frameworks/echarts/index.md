# Echarts

## Title

- series: Array

  ◦ smooth [0-1] 连线平滑度，true代表0.5，false 代表 0
      ◦ stack: String，配置了相同 stack 值的 object 会堆叠在一起（一条柱形），整条 series 的值为其堆叠数据之和

- axis 轴线

  - data: Array

    | Array

  - category: ‘value’ | ‘time’ | ‘value’ | ‘log’，未设置 category 但设置 data 时默认为 ‘category’；设置为 ‘category’ 但未设置 ‘data’ 时，‘data’ 的范围自动从 series 中生成（分析出最大最小值并自动计算间隔区间）

- legend 图例，一条配置代表一条线或个柱形等

  - data: Array

    | Array