# Selenium

## 概念

Selenium 是一个用于Web应用程序测试的工具。Selenium测试直接运行在浏览器中，就像真正的用户在操作一样。支持自动录制动作和自动生成 .Net、Java、Perl等不同语言的测试脚本。

## 组件（1.0）

- Selenium IDE：一个Firefox插件，可以录制用户的基本操作，生成测试用例。随后可以运行这些测试用例在浏览器里回放，可将测试用例转换为其他语言的自动化脚本。
- Selenium Remote Control (RC) ：支持多种平台(Windows，Linux，Solaris)和多种浏览器(IE，Firefox，Opera，Safari)，可以用多种语言(Java，Ruby，Python，Perl，PHP，C#)编写测试用例。
- Selenium Grid ：允许Selenium-RC 针对规模庞大的测试案例集或者需要在不同环境中运行的测试案例集进行扩展。提供了分布式测试和并行测试的能力。

## 历史版本

- 1.0：组件（同上）。
- 2.0：是 Selenium 1.0 与 WebDriver（曾是 Selenium 的竞争对手）的合并，又名 WebDriver。Rc是在浏览器中运行js应用，使用浏览器内置的js翻译器翻译和执行selenese命令。WebDriver是通过原生浏览器支持或浏览器扩展来直接控制浏览器。针对各浏览器而开发，避免了js安全模型导致的限制；还利用操作系统及的调用，模拟用户输入；
- 3.0：在支持的原生驱动方面更为丰富，在2.0的基础上有了更多的改进。并放弃了RC？