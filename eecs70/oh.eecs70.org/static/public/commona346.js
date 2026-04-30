"use strict";

var AfHomePage = function AfHomePage(_ref) {
  var match = _ref.match,
      state = _ref.state,
      children = _ref.children;

  return React.createElement(
    "div",
    null,
    "Service failed.",
    React.createElement("br", null),
    "Resolving stack trace... ",
    React.createElement("br", null),
    "Resolution failed... ",
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(
      "a",
      { href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      "Troubleshoot"
    ),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(
      "a",
      { href: "/old" },
      "Report Error to Course Staff"
    ),
    React.createElement("br", null),
    React.createElement("br", null),
    "Dumping error as plaintext... ",
    React.createElement("br", null),
    " ",
    React.createElement("br", null),
    "Traceback (most recent call last): File \"app.py\", line 32, in app.run(debug=True) File \"/usr/local/lib/python3.8/site-packages/flask/app.py\", line 990, in run run_simple(host, port, self, **options) File \"/usr/local/lib/python3.8/site-packages/werkzeug/serving.py\", line 1047, in run_simple run_with_reloader(inner, extra_files, reloader_interval, reloader_type) File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 332, in run_with_reloader reloader.run() File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 121, in run for filename in chain(_iter_module_files(), self.extra_files): File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 56, in _iter_module_files for package_path in _iter_package_files(path): File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 37, in _iter_package_files prefix_filenames(package_path, package.__path__[0], suffix): File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 22, in prefix_filenames for filename in filenames: File \"/usr/local/lib/python3.8/site-packages/flask/scaffold.py\", line 105, in __getattr__ return getattr(self._module, name) File \"/usr/local/lib/python3.8/site-packages/flask/__init__.py\", line 96, in __getattr__ return getattr(self.import_name, item) File \"/usr/local/lib/python3.8/site-packages/flask/__init__.py\", line 126, in import_name raise ImportError( ImportError: No module named 'app'",
    React.createElement("br", null),
    React.createElement("br", null),
    " During handling of the above exception, another exception occurred: ",
    React.createElement("br", null),
    React.createElement("br", null),
    "Traceback (most recent call last): File \"app.py\", line 34, in app.run(debug=True) File \"/usr/local/lib/python3.8/site-packages/flask/app.py\", line 990, in run run_simple(host, port, self, **options) File \"/usr/local/lib/python3.8/site-packages/werkzeug/serving.py\", line 1047, in run_simple run_with_reloader(inner, extra_files, reloader_interval, reloader_type) File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 332, in run_with_reloader reloader.run() File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 121, in run for filename in chain(_iter_module_files(), self.extra_files): File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 56, in _iter_module_files for package_path in _iter_package_files(path): File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 37, in _iter_package_files prefix_filenames(package_path, package.__path__[0], suffix): File \"/usr/local/lib/python3.8/site-packages/werkzeug/_reloader.py\", line 22, in prefix_filenames for filename in filenames: File \"/usr/local/lib/python3.8/site-packages/flask/scaffold.py\", line 105, in __getattr__ return getattr(self._module, name) File \"/usr/local/lib/python3.8/site-packages/flask/__init__.py\", line 96, in __getattr__ return getattr(self.import_name, item) File \"/usr/local/lib/python3.8/site-packages/flask/__init__.py\", line 126, in import_name raise ImportError( ImportError: No module named 'app'",
    React.createElement("br", null),
    React.createElement("br", null),
    " During handling of the above exception, another exception occurred: ",
    React.createElement("br", null),
    " ",
    React.createElement("br", null),
    "Exception: Segmentation fault (core dumped) Stack trace: 0x000000000040056d in calculate_total at /home/user/project/src/orders.c:103 0x00000000004009af in update_inventory at /home/user/project/src/inventory.c:212 0x0000000000400d12 in process_order at /home/user/project/src/orders.c:321 0x0000000000400f75 in main at /home/user/project/src/main.c:45",
    React.createElement("br", null),
    React.createElement("br", null),
    "During handling of the above exception, another exception occurred: ",
    React.createElement("br", null),
    React.createElement("br", null),
    "System.NullReferenceException: Object reference not set to an instance of an object. at MyApp.Data.Repositories.UserRepository.GetUserByIdAsync(Int32 id) in C:\\Projects\\MyApp\\src\\Data\\Repositories\\UserRepository.cs:line 52 at MyApp.Services.UserService.GetUserDetailsAsync(Int32 userId) in C:\\Projects\\MyApp\\src\\Services\\UserService.cs:line 78 at MyApp.Controllers.UserController.GetUserDetails(Int32 id) in C:\\Projects\\MyApp\\src\\Controllers\\UserController.cs:line 124 at Microsoft.AspNetCore.Mvc.Infrastructure.ActionMethodExecutor.TaskOfIActionResultExecutor.Execute(IActionResultTypeMapper mapper, ObjectMethodExecutor executor, Object controller, Object[] arguments) at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.InvokeActionMethodAsync g__Logged|12_1(ControllerActionInvoker invoker) at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.InvokeNextActionFilterAsync g__Awaited|10_0(ControllerActionInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted) at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Rethrow(ActionExecutedContextSealed context) at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted) at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.InvokeInnerFilterAsync() at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.InvokeNextResourceFilter g__Awaited|24_0(ResourceInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted) at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.Rethrow(ResourceExecutedContextSealed context) at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted) at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.InvokeFilterPipelineAsync() at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.InvokeAsync g__Logged|17_1(ResourceInvoker invoker) at Microsoft.AspNetCore.Routing.EndpointMiddleware.Invoke g__AwaitRequestTask|6_0(Endpoint endpoint, Task requestTask, ILogger logger) at Microsoft.AspNetCore.Authorization.AuthorizationMiddleware.Invoke(HttpContext context) at Microsoft.AspNetCore.Authentication.AuthenticationMiddleware.Invoke(HttpContext context) at Microsoft.AspNetCore.Diagnostics.ExceptionHandlerMiddleware.Invoke g__Awaited|6_0(ExceptionHandlerMiddleware middleware, HttpContext context, Task task) at Microsoft.AspNetCore.Server.IIS.Core.IISHttpContextOfT`1.ProcessRequestAsync()",
    React.createElement("br", null),
    React.createElement("br", null),
    " Dumping symbol table... ",
    React.createElement("br", null),
    React.createElement("br", null),
    "mN53F3JhNwAg1QlqQFf6tL1TeBg3mvYk QlnJoItNLYgeFZK3DxwwrCpLxNyQew3p XeD1aPrmqXheybqcB2aU4fRbfxjIhPtf HVZTuw6NUQ0qiU9wGeEigNmZ5fGDprQA 68gSQ6nYDYMSbM2z4lDJe8vd9CpQR4co 52sKenzRpnN5EURFHQWs70xqvgEhLsMf",
    React.createElement(
      "a",
      { href: "https://solutions.cs61a.org" },
      "61a solutions"
    ),
    "33wrhHvDYCZf4OY3cSCe3UrTCFDbaD5e 9OGt5UR4YqBotBjhk58uXuw6bug106A3 1PWEwVZMpHQSvEcHl8jdY2J7n6tC8BQe 4NshdSc619bi8ViDqBK7DilaU3j7SaNa CP4iLrieqv4aEIsOvo2ncyVSLBqIYF0z",
    React.createElement(
      "a",
      { href: "https://tinyurl.com/cs61bsolutions" },
      "61b solutions"
    ),
    "D1i9qBUrKFADfl9Y4DODay42RtKwIKJi HrrwafwQlqdTTPcR7k4ssD4K1ZFrqbYA WBYKFOF7XNf5RqoErky88k8jBEnFnpyL pAPVRbercomAlxsLImhSjz6eGHYnACiI CjXz3H6ziawo0nTqJGgeiAwaE6siRDSY",
    React.createElement(
      "a",
      { href: "https://tinyurl.com/cs61csolutions" },
      "61c solutions"
    ),
    "JN8fuo9rXbDNctbfkKdbsigxARPH8QE5 89GgmicOBc3inSPVgltgJfJtgu7fbYTS GJbUl7zS2kFPySIwvALzVF8mdbVTlQKF XyaPje2xxN3pK7FXiCBpD4B6wBYNAcNo UAb22lVNQhbkmlHRmE7suBrJw6nvgAT7",
    React.createElement(
      "a",
      { href: "https://tinyurl.com/cs61csolutions" },
      "170 solutions"
    ),
    "WwtFgtWzGYMf5wb86qBZTeO6wF1DOAKH BxinDngy8QLEYSFEKUibrRbepxuOOKx6 sT5qULVkhZnFJoZLPu9ecmlWXn014Lu2 C5nEjaGt1mWB9Wx7aSx1K5yZuwGcK8AQ 52HDZMQNq59UdTQZVvaudXR9gCcRIzgr",
    React.createElement(
      "a",
      { href: "https://tinyurl.com/cs61csolutions" },
      "189 solutions"
    ),
    "Zk9SOt5x0YxXum0OtvLfeIWQH58jHNBY 0zQ3njqfHKRe0UKGFGTTh96jELEOD0SI DnkvAJhbOGyA2DX0PNTKwA2x9lw8vJNr xv3cGNCCdg11oUXs4r114vy4KPQvi0J7 ceK87AD8Ov22IGOrtDY7LcvopmDTHNHO LQFgpiP3mJBHUPlLTyA4FhufLkUU3X3R NhzuflfhZMHkjfGV8wVr1yYF2gRClrVS PpECfZiNFTVMHEqATcIqd4nlWg7f0Jp2 jTNLiqo7Z0RqB5TXAlFiEWicCtk29s5O H0RL0S3ahfJNaNe62UxBVrUtRAzHbfTI",
    React.createElement(
      "a",
      { href: "https://tinyurl.com/cs61csolutions" },
      "126 solutions"
    ),
    React.createElement(
      "a",
      { href: "https://tinyurl.com/cs61csolutions" },
      "127 solutions"
    ),
    "ZYc1G2FjtLxhFi6ztzgkoWt2OfOt7CU0 1fvXJGT0htJMyN0V3oMDhIozushqRGUD PFzlVos1watDE8bcaPZhkKFkXcQQDjfJ NAOnK9eo6kUMUBNCFGOTzkhnfEoMQNSD fl013m5bAWhUOqBrmJDzwiYIgBuMQHXp OgxrbK8FbJnjn92wUHi4JAU7DObrR3Ak 99dPtmVouA0M5tf3yOC0WTe4i2U6FKkC EaayvZsW9EJNrhAS6WxnnLXb92BDnAK3 mnp3WO4lJFZIDyo1ZOxXpjTojeAQqjFs KVO8wZWePHtu7PTdKv0K1BlSATy54wx6 5a6d4XNFEs1BeQdKTHMD0vwvQbT2Yihc 4qyD5z5QE6kdDbOp3QBmOhJJYUU8D3Wx rW6trRRogmXgXlAIMV0PvV7RIN5Gv08q njTUBcrSEM164bTA0hoeFmLIHeyqXKQj Nm9Ic34N5YLGj8dirN4vWGerQlqh4UDB MMfA2udFzRoYmlJtvuqxFdBwuQTSASVS FUXhZR5kJVPW4ivZ9fJ42gySdFz6yaeF uQueo02bAhDZ4Egkz8FPequxpEag0Oat ju9HLHJucu6NfwrcY6vIjYDpuLFguXLm NUqn1BvaUgPLKtoB0Z69qGbZcxffezxp gZAYCq1QnoiU60wa8tjeJ4uSoc0p6sbL 7ueRcxUxgoOfHNehlWzUUorNmEMvz3wG XNBUX7PcJuDTfahfTFHpC0kiscgASRd0 lHyvepVi1EGMJlKkHMU6EXkCFutKArnd 5rucCwPkHTOexJwY6N1q7fdnq43e0xL3 0A7aYN5tUeMUWoAgW5PVrkfgoeMuw1Km d0sxPSACTBe2WFtdAAyRRlZ92JbkeBnF KKRxia9rmj1JMOfBIJzVkcyxywiHLxUy Hr4sz1Cw9ioleHIdlYKU8MIEq2mN3SgV CkIfLxxPysji6qgxFFSdVEH67LAQJEyX HOBzgssHrquu8b0ACmpn2NCpXTsqbIyG TH2XRlaPPkcUydK4rbgHPhf2zU33uKdX akI7Xeq8GpIbtDeR3sBdJD7yyHzziO5T 5Dj4qwptJam0b9uvWA6Gbj7bkvuMIvwj Qdp2otpNFVh7GTWsa5hTm6cysAxgOsSY oxWbrDsamh2rOWOmFwsOUA6tInYH2DiX foVd8T2LNclPvuZ2sNFYeNhyPlNyiCIJ VwSfwkLXz20kO2F2pARqavcxEcgC9u3P 0iilWdqLiXpXquHYgJ5OvhY7hCd7urQB PvtviSDdSMJ4X8jt2GByyMaovt6KIGQM byoTVCcZVVXNXum6dPzHWlBQcRGMfNoq tsYQvJbv5VLnd5LkJlFumqSdIysXsXn1 RIg2lrbATDU3ziEmJwNdC5TXuadHEiaY OHzXuoPh2wLHX91UqYh8nUjkM3vQu9PJ B31FTdPcVsjGrQIJnYcu07SBw3VmLZiM 9PjClzbNRh6s5WtdCQW60FXsbA14XNfY UoeaSU9cmeUAZzN68VOxU66wUQpIyccc 8etEIQgmNKoiGllZvhvKMwNgKegchlcF 0H2Ds1MmbWFQn8bfC4AUU3gfRzbZGB58 45Pmw30OZ4VfG0RPlzUlIIujFyuu3AsA 1xhwln4TZF6PilPn8eSIVCuRq20Ol140 cEl9pOnAqiba2D4Li7ShhLo86lRSHdAA iHgBwBnrxcS3XAuVbUFh00uLyzmddjhg jnPGh3g4jJqWldCD4VJ2ej8HoEWWrdgY Tr8fvvvHf29VoldEEJlf9diHt90RTdKo Q96IhMUDVnX48lSeqxjnil6zLnLPxzQw PPA7jYuYu6pn6FSS6mLpd1D8t352hkKu cMOIZaVdwQCXjNGJ8K8q788e0LlnhWHQ k6e4lDmhVA6XEz9KyfJ1NadM17m6GV9A 4yJiKrGNAzXslRQt0O6QE9mxACbaaQEP fIauhxt7kamChKHpKDmiFXoxioBz8vfP PNABiMPomOOdFdK2xhq3dHKkGEt0SxFf T1ZUqw0wAGLeccmsioigBTZaqY0HeJmK XYbMPaNWASRXPMpvn5KJvXl66hA0Hkkl ezWmnATV9A30gHD3Bk6ggXaJfKsTKbpd kPJ4GCM8jU7nXzo9WUp6dTkeiWxeX2oe ABcF01ZhLHhbOppOWcYiEcxFHy0Whmkm A1QVgEm3OdC2hFtcU7DGN0oejlcYqAMN YQwCSF4mYN9lJ28HkBXc7WJ6K6LcdhVh w0VRioo2TGmbtzylmbu6S0CirPGEJHOp 5UOCJJSMBvO16vpALbWYqF2TumJOKH7x QXK69rtt5VmbjfbxRl6Q2qxjUQfebdQx D78Gq9hifLYHiJQbqGSgxf7kxmgTyEY3 1vLWSUClZqGO7fMUfJB5siXUF6VVdlc1 rKcwFy2wDviH5rsEDRn85VNh2qsYVFXg JA8OImGmtA9WGDHACd9JnLa1DUuo85bL 6SlZ8ieYMjQjpKAkGIYehvz32TD5PfzV qgdS4h5IbM6HWyUjQVQwSQw7dKLHilOC 0nbyRDzyfv1csnIody15rCUCWggElqEe oenKVVUVGPLcWzNns0OllQH8nDSO1XJy KmQ8IomlCw8pYDrjReZMLCiaBtW2IxjR Vkb8S3P84REz2mi7mn8k8sXdqTCeXMBD NonEGRDSqPzAzr9UTWbQTKdFLBxtI8Z3 bnmx7XaJpbJRVlRp85G3rQOetRNSB4f5 gx9pVhb4P5jll29JPN847kTwiDDW20RL XOuLxB0FrVCiOrlH3FKZvwHqrtNwGq4J uZJ5BtLO7jABV248SOLSnnK3LgXlj56T 3WymXmWz7ZSLagcQpfX4PptQw1hki00D MGvernMBaB6Q2Q2B5RNKMKfEAhRj8V3r TTKQ67jFCW543Zm9AGoZ5NrAGbPHhVdv gQ74ZOkNVrOiAzmU8b5pvHaHwAlVvUvj Mh8D0WmezbLGeDoSE8N1xnBSuXfXZXr3 ZEVERqGxy9lvFwYb0Cjg1hg3NPT6sUvc LidwtSF9VRSwTfC3w8w2WUXTq9Xb6UoO Fx50cPRn0wyaTxlsqt9ZTwoNxw6UMIBp Dh5TcFtQFx0RhfkWVjcPz4X1fJ5iIMyy FJcXhqdq0kD1IACQ393Em5aNQSOZoZOF 20MZUjCGhy4OLVGOKOvhYDYnBFdcyAjC aPTR4yOfMy9yZnlFBMEULW1cYhXJ8xGz GbzziQh4EEAymE4dBxAJrJx86rBg3Cml fSqUaEbkDe5Wd0RPIkArnfQTDTuT1Wlu 8kj7vo4UknwgcIGzMZMuGJjfmiLmnhmi jrsdunbVwViOqaglQnsKTTdBEn4QPxw3 H038X4Jt55ck3yJKV8zD8H3ix1Cvft8G reTEPpAO1k5GmTl163ar4JpY5zO3ZQCc G1ejpqZmccWvL1zBZlgNbF1XaRstmv6m gKbs8xsw1fdgRkXKfWG1NApCtIZ8r2x9 hOUcQ6gBReAmVB1rYvq33k6xSVrFRc3g xVZJVJhCAYPXF4reyIQbachls4LWCnJe ivSWlcrr9C1YN3eGKs4s23aLqrTmHfm8 4mIpWUHqmZQJ99PtJcshukvO38XYlPo1 c9ov7Hl7d7PrUEymdE19SDyx2eWPTcZv P6Ka2wYcDZBwaQnNuIM3Q5ykewQSEfnj uI0CQh0noyT5hc4PD8IpnfpXnFO5FM6C QzhjGQk3FCrTScKWyCzj9GAb7dknJsYd xChugp3SXr5uHlDVTdOuVYBMW7TCpHJv WPIdjyH5gt7JF5ymsEGVantytgH1Qaqf l7MM8xTgJznzDXXFludYv7Mou21QNjAJ BejcV9nsuiFtja42tUfIU3lRL3ODGtbB JIw4TcFk40MRtzk7RokIsh7tCRuhzxgh lMktOuarDctzJdhHIHRKtEDmGO141ssO cP7eIXTKvsLMusZaLbGtmFR94NoGE7e0 OydXvg8Xxng0VMITP5XG3zsut3fcp1lm hrAGJRTLGo8yZSpHNDwma37TKYgRHRo4 gNR9dVfqd8E81xsl56mSBaMoGioQWHtE m393FNQzF1kFoPgrxutDwsYZW9pzrHpW flsyn9AcfWcVEC8g0b7i2rtcYe7RL4vx cU5hZkNQzjzofoBZRkfUJDa1Yf9gywHe wsyk7Gv646T1UR934qqkqNWJaVGS8XE7 LHbZ5w0j5NyAWBVJhdHxYpY1R5tatvkb CMqCFVFDl5bj083RC9LPUnmJAB90mInm iDBpZDj9O5pn46iPyGgHgduccdzcq0mS 7JPQ8bUtR6EJidHtb4VzSTNhTq7kJWNf 6UhDS2i7VwCXdARb7T1NmDH2ZxCI9uXX nUZVXSR4XlXkgmYzEdy9P3GmQUMGHxDT FEwxdQ2WAnHt4f4ndkTiAdfXVKYA7AkN qMU9T61hEQG1KVL3momzuHmTIm3Gof3q c5yFVdcGYogVtrSa30ndsXizYtiSUTeF yaTFVLzBOyL4f6aCm3z58CU89ves9HdW dTRCptqROWtqGnt72AR8GBuKESK3FLTf dLlaBCHYCM6VXZXQ9xz22cOM6ZjkeG06 iVvCOXlTD4EX3toHJhHvDhu5q8jmaTLH pgsM5Y526ALalZYzr9fJgF4p07owIpmR fcuUnZm8VXxtsNynq8wMsRKcJQhKQXX6 NzJJ90xSri5ZfKa2Z5LjGQ5YAq4MDYY4 Wrhn5zLYkIkH5gyXaVaut8tuiZV4CX4U igCsJMY5ymdkMNW5dfUWdfoM3HjXPPrh ZodzbeJcKz1ejDYosBVL3XSiLaFZ1gDs fjcxWFaMdzwWmvsLy07UDSwiWVD0BvrK 4KCE1c4WYLtlU9DpoOjEQpUIiPDt2pQZ pqAjv6WZjXTTT3gwIR0PJDakv46h0isX nwHMV7Kxj3DByZPov5ZqpkZC8Cw7smEC UxrH5oN91Kr7vBZQoCa9olwvzK7eodgF WL0eoMEbMcfV6dC4JIsUyCr2llwLyVR0 yLZosYaMablyZZAZMrbVMIJOkfkqUz8P bi8GKnE1J96Ub7Hk2MvGbAoePc6uUs4e p2lvNs2yJsVwZDcyd22Sqe2UEoRtPhnk lKyGWPjBmpvXoNL3YpJ2RcOomtefwAvl iziwKXlYGiAhAzww1MnCJEaaVHGm46k6 sYLqB2NkGj6c61kWm1JOJ7v3oHIaSbMA 7NRd9op3goDQ0NEDWL0DxDxYVBP6E3se l645enK2GpF8X9tI9fM5j8psRGEEcH6D 7U7MNGUuotZfLonvLB10ey3oXg62JyYf RLQ4RaYabz6BtGLBFgcOJ93DF8Qwq6Vn zARuRbr9xG2Jyq8jcc0BkD3o6WAjUeqV 7MRPRK5mtdlUQE39mHxcHSUeTmjxOFQo HIoIfvHevNckkEK0Y1wjj6kL1Wmu2AnF s2kNh7FmpbGzKOvb695FMOn6X83yPE6G omiBKXQVUnja0G7en0Is1osnCBF6rP0C MljJcv8OMSa7TDxsknXSZxtxwCJSNb5Q gD6Vj0eeoTSgBCuTH0feVnqI7SzUu0rG T9U6TbIYsvUmijAYtAc0JSmEKXmjMV8U DICST3LeuhPWqxp76QPzUOsg0a1AJoBS ip02kSB9hlqTlBHSzHefZTR2YKQ7Np1r 4qnBAO4Wz3zQF42LJHOmSz3x0wuiUCvm 2B0Mbo4DvLV4SefPp0g334nnbsx6WArX o43glFNZG1jQjVccBxZusumoPDI3oaM7 WG0kiOVG87UIJInPznFgRyfWMa4cOa73 UvMVR2Z57rO982y04rg3z5n3ZcPaKIDP P55FJtpM0RE8DTnM7ATFWWMRVN0nQVqi DYoN5Lp0Jbhg1jfjEqe0Hd55hTT1HGy7 R6IM282s3jdHh4PJ3y97XWsfSfnUD4jm rZtxTT02O01djQ0RVcxSrXMtAVFrxFlH w720SuKY1YJ6nw1U48QvAKvjhlOwLrJR B31eFkKS2CYKRt35eLhxZzkpJ2lut45i ChoCbxoOUJ9JlMZWP8xUY0wmjQlarSaT EvfngBYMyZa1T0jWy0Wqb2gmhZwihxVI UNv0XeZ51STKIayP30wb37Gs528deBdR VKt3WqWZIunBA2JaniNC721gY8Qio9QK Qf1VJJ3zPiuJ9yhlJbo2RIZ29vo7WlIM B6XxZglFyzmaQZKveg8de4c3hgnHaFIU lfrgyYrMKUsBg1DmkAmx515BUCuvtr0z RR6TIKeEIMHVs2OGR8rZbA5HWNpyWJB3 AWtXGjbA3X9ZlaXHlPJP1eBd0InirmOE Hy22UbW44QdKAWLLmNcMtdRkEo4OXN2q 5QPSBEktmvpQgb6GP6bveo3ytRRFRnvj xOiOWb3aTMYB8cKTg4T6TAtaBa5IqsGV 6O9DWiXAOAA7j4xwYC27MbwUWjl8weV4 2AZaC1syt7nVtHlS7ffHLXXTqGnd7B7t Y6ZT5fmIAm6HXQVxBl8j2c9F450u3MVq V9qwGCOCQsqsMb9iQNykBnizvcke8TGX 56vvIeJhBcag7ZzLpyHttsdw96zI97LY Tqdm6egfWH7vLicliVMSzkPQDDTuEPPb z1A09t9CYmCMWQLRS38ytCpQH4ExgQzy zJx9LJEsva7h0Fv5hphtX5ojJNgICRPo t6IUoJdNbyG16BIdkjcAjBp6Ra2otdt1 5u8T0nBIgd4xBgw61xuu4BtA2wYJbfAr GF7WmTpPqFJmN72NBp4oyQ6SnXx8o26g xjgfM0dEqCDUxljTnkj7oE0eIUQzVJsf lWGr7FtHTI3yBoXU5Uo3I3q44ksroLmd AUbsL5iKAiq0ssdi9xsEZNtI7eTrVukP 75cnd3EFqjtNVe6hVEQ2vR7wfsj9610p qZ0Y1atXWxdATOx1FBwO3e0gGEBJMdlB gQebgDlh2krmAlmgalw53AFyC2ph99x2 JajxyiZ1PJ0vaKsCay8duo4x9VKD0QMd CaSZDRmbGE6JjcTtmY5XVWB6vedpksuw cxjpkQR3MB74CcpdDtE98OGcab21utGt K6uWbOHOxy3XwimGV6G7t3l5Cl0X6XCG piQZjDFJlQaHrgVvgKIW0TiFgUlRx3bv 95RQ0Br8voVDSbVEyVRhpY2sJz8sB43b L6yotWRWaZQeVCW2uADT78w4BoQStQWO eTCULEI8mBBUHYeM1vZpMv2fmO40xZ15 2xVIipJuBZsgm5fXZhjMiXDkrD30zo2x M9nQKwROSSQGs8KtNRb0IGl4MkkesUiW aRx1vwPchQ56ynYtBzgHLkGGUMOIWPrF 3ium7RO2OBRc3PXd5wbMZCeDZNEr2ovE J4Sf6vwdIAWlNSbsNeL76wyBqgsCGQQC 9Rnxx3YWp3BDKUfk7MplrqVeXrsOUmCE WmV2uFhL714SnaMDjewRmvAxYOKtoey3 mJgmcISU2uFquxCCzzXiIMUOdleZfkwt prc0Y2sox6YH9EgC4DVkzs4rajP4267C LoCju95yOFGClBttmFSxgk6kY6rXsbHw RjSHtamIZdZk3OgtkrDh3SRUQ9t99837 43WnKyFm4zmBaZoRvmuSBS1PqjO3Lsf1 iEK2Tvb0oLDAyKhPNLUrBdsvs5dcZiEG ctmnzqYBp2pxvbtUjJxNPq8Pxta1pytA UST8TmiszQrCFz96UYK0v3PXOQd2eXm8 hhKOaIQtHTGucL4y7dmKNlfNckuOq2iH Vcl1TCjXh68wQ78tRKB5VM4PA7lDkBRA 0gAp1FhGafrfwiNXxQWCX1TAlrdVU7mA az22pVMA3G8bBPcNixp7gQQRiImHJsKB UTdq1YrdOAy2mkbezdbrfZyFZ7XlVgFR PoHpRhAKsTvr9FEyoW8IgIl9VdKo2vtQ PJk4xTlzZpMgbSlKsW3TqmwuzXhpaNyg HaqPLogDyV5vEogbNfuzinxoImsRK3Gc vpEMB4VYoaFjBYBTm1rMc5ekNdaMs4l1 NmaHQ6R7svzXP1Her6Spmm383PSRThoO 1c0OVaUtOoBu7duS0br90qtKsi9tCFZ4 7HYNpLEAG3X2OeUrDYewsa2ieB07txOT X8RfGKCN8QWEEWYzD0nPAYGE3q6L3HHc 1RrgwTqRAgkYZn9wFKBuC9v2ibhVftWb mwKH2gU0yrK4gVm2UEYFWKdpMfJ7R6XT 2Cglj13SodBXwrtX6dDakjcrEUhp3bJ0 IugTMv1PsDbhm5sa9TcJ6cYIF6uVw58x JXKkMtZGFkURKcudAijrSlRDxfXWp6Ac yu4Dtl8Wq0je9JcAK3XY7AB3n7Km1Rfb OcFPyRuDwdYLXqckzQQzzum1xhIYxrAz nwV96SsNYmZMjvEkfDkp07TLzDRRFPKT g088j29slukMA0HI5lWVPhiKzmNR5p4z zMXYZLKbtjeFI356jLib6QMqKgL5nDro t3Vryj7EBIOSD05iIkZ3WaFk0ozMVocc gwYmvREPiuZBdkoCcYOdZ9bZohAGuBqv BkMkfu2zi9XCuiT4nrogDvYmrrNxloQu JDMXFGFvrLaZAV1QZAC3uoo7ByZT5z4W AEHFRTkJAtZRTosnpyeK4wiZUgNbdBpI Wd1Djqe0O8q6tJ0M4E5LReZ8KLuasSGx WXg6j8Cynze0ADkQFZYjnQSc9K3UIX5b zXqi866J9nvhmRCK1E8DmoELDucGEk7g qupkEPgZ0G4dNzqYNG0vnGCswD75LSxG GNa56FPUlObOyNScuC4hMjKro0gCbFM0 XHt0f0WbJ7HNUfRPcjyodTwmMmnn4ESb 67yBa3b8wvq11dTMhubRQ1i8t4FnFxSp SAfz3oeR856J3WUiqJI63vFg0aQ9tCrr xRbXPSJMoNsqG3UOpIiqzNbxnXSFsdbv 3sRsF78bXChWgeXxJdl4LthAoe0snhFR 5RzaKl0SRagt6lW6wnirC1LkEKz2i1kM Q4Co0nE4B6j4o5CfOdQ9DdeMsyl4jXeT CQAGyGPza8fWcfDQ3Dtz3udOQTNuHbWc 6xGdbsADo0Y7oIXVw1bkSg3MdqserV4e 0cxyLhkAtU5via3Bax5PdpOaftJcuQxB Hbg00gYG2y8IR8cFFe3CNE54iVwwLIoE w8DG2mRina5fggJIwBybwraErbmoVxCr Ztib2CUENQcj9Q5OiXlslNcyF7lX1vHR el22haQtkN4DruxMnJrROvWYOoMoz1j6 PoQ1yKmsVpIChXW2fbyhEafqDW90Xety LYwIq7RKwehDRgiuYOjwoIEkiLVo0KSS pADSB2GwJahKm2pvYBNJ3EQaNDnZF6ZP grw7AbHI66NOnDjqS6c12fuqa0VnYJt0 nhvYj1JZuDhLZWlKVgxuP6C9WQ6Rc5b8 K3f0nIJloMd061pCb3ikkPWgVq9lqRJC RUxseDCX6pTBsmy9prOKZpeojJq0nSvB cnTgD1lKjl8j8AOIVWllf62dPbrobfmm gMQiagkUrtTZ4RuxQbVAuAIVeZheW6gs liKK9diyV0Llq7LGhlXXe8X200z4gPzA XZfc06mS96ayUEmRY0Om2xU3CDFINlVv ad1dgCAqUlfrWUpyQuxQz5hzwZP4goFN i2DWGv4MlWCiC3Ta2Kr65SwaOzfn9WVi tTiI4auHrc4Vb8db69uhQDj1fk6ZPXqi IjU4iiOCDVHLsyMoqDNdTpu6bmbZMv8H 0uHDLv0oxY72kdAo2hBdX6DGxeyaIfNr JkCelHz3LMG8Jyu9Fo3N0oxxMp6hGAyE JobRoTlJadfpnOsJJmL7rzUDbNCWF0L0 lJ59L9CerZUecmGSnknrHVCcSBAOhTxc BR5q0RIdr7PL0jL0CLzqbbVlH9UJ109n jUykMaeiKiSLCYhNbmzUNtloliD77kz7 UFAHLt8WtyQo6hUgUef2wcUalbKsMCKJ VAMzbq2Bhdfr9BuEvZIbM7aCjW2Xm1OM L7pggjFLPo3Fm682qDzRBroy4m9aTthx pnzxy9084SIGNJ6jEpuiEJ35CcHV7wW6 miJGgwvLFaogMtZSa5eZiZFEBxFOlgTk XVp0tQ8qzNAFrZEmPlHrAmwkXtQZRXIC FtdRHzsFE1on1s1CZ8Wb4BuFVDxfhV3j EIF3iB3RhbJp9nsejUSDcDamC51WCtHt hb4KfmUMqtgKDnUmLIl5DgNuKhEemOEu 7BbAJgksJfKKVS3if8uapABdLkTqOIkS BcNXcuquYX126SqCkDBRBHV46Yxcqdiv xgklCLsHtcFXUyFZ4rK4VRRLtJ6fqLry 4GS4ulclCxPHWtKxthkwdxpEVetjqmIM Ox1VMOdgcbKWkkgOrVxLegwazNIvVIjP 2bGBCKYiEQNH6FLcI3vMbMHlCYyJNXrh rtIfr3jZHisRctPTySZ7vseWWsuGnVd1 PxrCaJQ7RXByyuJAGlsuiqaO6NYz1XK0 eIhuCCwEwAWdFWwygdlfjOlmiQ06zPiD Ni4AAcSmX4xFpWlvyQgDY7TQdJbvdhsU oagen5Llb0m4t1wwWyFqyeqIjzJNwUnx NwKtkYutuhBzpoUJEYJkdtEISxkYxX2n uFF4Ha1wJV812beMhLmf3bCChNyefran NLplbpiwuYabl50TiWKbE6UV4FXKDn1d SV1ZH5kwzt9PCTCKJQ6RMqgn42kPkWJF VPUPueEdqAjOC6VNOtwlTAdKJunhqnne oSIB6uTMIMFIaZhptqJFs1AQqpGzTEHQ WJrOlUyi8aniLTYC6VO3BHO5ykTQqNNr 7Ejtfnuezar4BgYNQdCzPPmV6kzytxdf 6tZ5UnR5l8mqooR9wX6Cg9GLL1BcxUsY dJvdzG1Ny1LkRI2RjJCdg51qoHWvsija 2MZMKpBf6LBN0vu70LtktcfJl7bfRZUI V6e6Kk1hS2UcFGKSuF7RYfRnm0y36xcU zAD7Bx7LHZ2FfhqKUIWSxKnzFEc1xjlL 2jPEuFOcWk6zfgpwKb6Mlmz55yGjBNuG 9XNfzxSuEZUxlkakoLik8AcWbOyZKzix WzIFgmdU9LHHGDX4zGM6MGsg8vFq43Ii zbAeXj3nFz23ZwBTFLvKwwXfHVCIvr1X yzJw1NwCUTWSM9Uy5HiVicilnBwpGHG2 MIojPqqlhDczExtm24oMbfISzp3nWCve SxiEE6klZh3xezG0hRRVjXBXRb6TtjBQ ATqhur0IMb5Q01voDWeihpBaiENc3Gtp UWQW1pujwtONCcGW2mWJcVYmExRw1HIm JQx02wEGYE7l2R1LgaVQjjDEZhv4Rjf6 Y8t86NkNVWquvmDTHhSWzSwP91AxjRfL qfH4cKvad7HyhKTbtpbo63aDI1iJ2yJ0 EoDESJWKiHY36rTKACbaqiromLExBmVb 4GRMLLVKuzt3r9qZWUldFeUWb81IHdHC rZqJ42pBsArxHBctGlFWEN24tU6j10wk i5lfVnXRpDqRWei0n0H74fVWOu7wm47T z6LsEe7I7sHc01ZwlUi0HtHisi5CUpPl Cj37RGZFDheQKdz0V4PYqHYED9FNZ023 HAMQBc3hTv1ihqsrT1rXE6ETzETW0zw8 yNZxLYgwSekNMc0Kt1jYeahV8u7H9jUd NWHPE3VqiwCrcdQhOwWsDmBEbFNJNNMT HZtxgPVYB9uGWbEEKuG1mx4bgJSPg5DW 7DQQxGPdeAM7H8weY05fB0WwBDgevSNy RAwex7b4yJQBW8oWYrqezQpFQV2jhtTF 30HP6oejQydcRBpFFskoCooaFlxm89rf FUsb0hXabCvGnXUQMhDTLeQIWqG2zQsU l9Si86rkap7PRy7q0kFkxKqXVQU58mB3 LtPoRKfmNXZxnPW1Dj2qgqMKwt54QOux 7SPnqmxSpEp9AX6d8gr6WgTkPSjun66c t2FRQm54CfzfvnHkwCzMdOK45LnAoGDZ VnNs8cuUf41wbYTmKvQMANs6dzjk5m5u JmhLwG1LnHItyfHm1xEMMkDPFq6lazpQ fAkM7tbdzckhSP5SAtxF2TQnkp0LmqMH yjo9bW9MDunjqAkuiBONySeCWWf5vfta 7pBfWycCPXO1xRGbuZy8yBMHRVS5jA07 G3ePYWceb6AXjhqLQXdoxWgfw6SzxUD8 DNKaaRuMlQ4vBD2Wxxt5eVXN3SXvuMRI xmZXjK41LnPzRdDunv61QGMGJKPW1yXc mndY1sCQAVTjsmhQFZzcaRtUDCzSXlyf kko9A3eE7gJHkWcq7KivhOmcxMRxIL8O m98rC206IsN4djiczSltdu7QaMCQj2lZ vyuACSXMa2wzbTVsTJRaUfPZYVmozraf DXHQkpuy8i9ErD3yqq8RjmaTCNPhfEXp oltJkQUYAkBAiLYSXvZcns7MaaP2ZHNY JMDx51IMS9xli7wpyqOHS3j1OVH0cJbj PvnLJEyLKVoUypku6PH4BZL8TcRyH8n7 jlXCVY1UzqN44pfs60uOYh6BjKwv7YPA JOAueBAMcs6TcmpMwcdv5TyK5jxNoLy5 mDBmfqXBvsNYyxgZWCSwQE6yudxtz61B Hlfg0OXzWcqIuzKPREJuVvtIFaP55ev6 zGQvVmKd9cfmIZqSmMrcsRFQTgyIue2W nSIaGO6S4daOFKxbkCk30IWBwsI6ZbbK d1NyoaJY1VvSS0o4hSZJyX1Ol3d3Ss1z iZJC1sqjLAixMIVXdXKEE1QuBxIGyRoQ UqRQ6YqmlvOSJugVng16MBo5bRp7AoGA ZTNdmaNGC9V8ZPT8GMbMYGPl3wuj4gVW J2tXtxuMoCQxxWVc45lCLeUZzRYxeX2L KYEJ3U6pd3s8jgJ225jpY7BxWsIAyDLV 0ys1rFt1ac1NcbMsmFNfonZqDXWFbU4u zEkFWcrrrwFgM6Lmd64uHeinzLPIATVs 1LMJNgOrxdB5JYmlaUSaJSDjFQsotmsD mUCM7kBpQa5TCNaYg4TXqwnI4nG41Uii S7nIiFJF5POqe0PtCM2h480uuYBrmOww hgrba2nkzQhjKylYCp177yEWZnGxtqk1 yUz2u3laEh8PBTViFKIHKBXK9XiHKJAW cpdvgMtxXckl3hJZSZ5jiLE9aejL9QXo 9EvH0HXUxec4MjeIthhVYiyeg7UNDXVO yEQZe2RrfuuCfad6bMXfpZI4E9Ga4Zu8 ETSQgURZVo6OhVNl0VYhFrLlJXMx7vPY aV76nXj9EOsFHkl5OWxtPMNM65zVJrKU Vp07uhd4u2J0H1Lfb4npf5qagci0Wktx BBnujZ3EBUbXf6Pz1A0vdrLenvOC1lOQ yiOQhp0POj4UVoH4V7LUjwcYh2ADMqxL eRPPbT0oY3EbQVOW149JfHK7MY7eMWVJ QMUPoNWSCjMnkjrMyvXC0jYDKtPIQafT ZXzYdKnw6QCMqE5OQXhgvJdYjOH61iZt O93cZBETkppczw21eDCBcB5yc73QJSTk W5puH58ScAAa2WFHLmOAN5aasStoi6dn cw5Pg4o0HhChOuOYULaL2tHJoLoPm1VC LJv1j6xDg0YFTAwMWLXZeZLTxz8swQmL E8yCbvjAlmCjo1fAbj6zGnhEYtVZxyKi c0yu0uSf2KdVivbpKU0JC3vjjehp8lLP 1xDN4wHK6N3OABmtjtKSFJjmXPMnUSTJ Ziax6JfDyaTyl2QmLYyorjKhxUPSatGi Y6KbpxdRxPkRK9mKdHoZjWc5l26kEH2g YPRQg5oamJdLywvGjbzkNutM2XajMUhN fK6VVM0D1NPT2XQ1BytzhoTZfymWAhk2 EYrnqh2JgTu0C36zw2TLrJxOvA2OP8NK Nu8qFiId0JXbiqzT6D96bdxKRCZs1XCz AGp6UAoF59hqQbaptCIEBpUvMyWrVv4c HrZjDcZNtsnpmXrF4rBOShmqChmGYUCa PGHUJhT2qzC2trqN5iHGhWe1MWIw5QZQ OXyHjQX9xRbWZzMjIkDV0b1NRQuAbbrk bpwWAqHzajsGlmNC9PBZ7L7FEiFckiY9 bMnLPD6ZWBlyUq4yd0w2F07UmxrxliIy hqKjTBwMetTCUL6ICELwsGpaRgwFMF6G Si2lwIaKyavJpi9T85VumbM7JFljSN3O WrAGQs1Y0RSUpMh5xWF6rKmm0qcmYp3o w9bBpLGZKMVBV2odeR0BODKHhgEsHajh g4bYHMn7jqkLacyrjqRydNMhksGzMlYd Qbw9kkS7tqPR2p0eSGlnNg7MQ8lalp2U N8iJu28hkYXdc0c7PU0c2lQsqxrX0JSA 5t4jBbApg6wGWm1NGQJO5Kpjx4ZXcVqr BbjowHR5cTnPU6QUn8qYVIZwg6lDPGty BzV0lcplLLjnfuzhswlJAw72QN0xshIr gS7sxjulMImovWN34YXzk3jY8qzqhHkL 2nfgTU2yOfKziHFSjnV4A8R8dSQg16gZ Ut0GfeVpyFg5wNqnvfXNju2WMOC41zTK geweXMAYhIIFQ7AMTAqzBAdM5mmG4DO0 4PRyHlFWKdZnMUrLznjs9v4Z5LvHz1mo nPPuszgudr1wVMgWUCmlQEmYd40xVzTN 4XYX4pY9vcGG82CaNkrTuQ7DbAugiwh9 ZPocVzaMIk3GPkNCMHc1fJUlL5IDFKZD PNsAGOk166r4UERFWLU1vbB99xhmSUL2 OS9oCnzUNRUMHfHy0oSanxmExhcHd4qF KOi6waQJZ3yfR9ORXqD88oq24iC5j3q0 N9klTRDJH70odb8DxY8GGXYcS2TXLpYh LnIpJCbDH3Pj6hWhlgRFiygB0omqoFX3 4WZQgpgkpjh3s9HtmRO0ah20YzhZyiAG MH3lntBAPSI7M6Lt9fDiBf8UVLw1hmwz 3N5REqjJEyNlNrdpLz9MPOwXwSG1CFuL 7PBFc9GNgXdI4AAYGd3YhSkEGLNQA37e pgVM58IZlnMKAuYnA3bnLXuZmQxwWpIO Jej5fVm5pB4MYywCcuTiJpIflGh2LBa5 LidwtSF9VRSwTfC3w8w2WUXTq9Xb6UoO Fx50cPRn0wyaTxlsqt9ZTwoNxw6UMIBp Dh5TcFtQFx0RhfkWVjcPz4X1fJ5iIMyy FJcXhqdq0kD1IACQ393Em5aNQSOZoZOF 20MZUjCGhy4OLVGOKOvhYDYnBFdcyAjC aPTR4yOfMy9yZnlFBMEULW1cYhXJ8xGz GbzziQh4EEAymE4dBxAJrJx86rBg3Cml fSqUaEbkDe5Wd0RPIkArnfQTDTuT1Wlu 8kj7vo4UknwgcIGzMZMuGJjfmiLmnhmi jrsdunbVwViOqaglQnsKTTdBEn4QPxw3 H038X4Jt55ck3yJKV8zD8H3ix1Cvft8G reTEPpAO1k5GmTl163ar4JpY5zO3ZQCc G1ejpqZmccWvL1zBZlgNbF1XaRstmv6m gKbs8xsw1fdgRkXKfWG1NApCtIZ8r2x9 hOUcQ6gBReAmVB1rYvq33k6xSVrFRc3g xVZJVJhCAYPXF4reyIQbachls4LWCnJe ivSWlcrr9C1YN3eGKs4s23aLqrTmHfm8 4mIpWUHqmZQJ99PtJcshukvO38XYlPo1 c9ov7Hl7d7PrUEymdE19SDyx2eWPTcZv P6Ka2wYcDZBwaQnNuIM3Q5ykewQSEfnj uI0CQh0noyT5hc4PD8IpnfpXnFO5FM6C QzhjGQk3FCrTScKWyCzj9GAb7dknJsYd xChugp3SXr5uHlDVTdOuVYBMW7TCpHJv WPIdjyH5gt7JF5ymsEGVantytgH1Qaqf l7MM8xTgJznzDXXFludYv7Mou21QNjAJ BejcV9nsuiFtja42tUfIU3lRL3ODGtbB JIw4TcFk40MRtzk7RokIsh7tCRuhzxgh lMktOuarDctzJdhHIHRKtEDmGO141ssO cP7eIXTKvsLMusZaLbGtmFR94NoGE7e0 OydXvg8Xxng0VMITP5XG3zsut3fcp1lm hrAGJRTLGo8yZSpHNDwma37TKYgRHRo4 gNR9dVfqd8E81xsl56mSBaMoGioQWHtE m393FNQzF1kFoPgrxutDwsYZW9pzrHpW flsyn9AcfWcVEC8g0b7i2rtcYe7RL4vx cU5hZkNQzjzofoBZRkfUJDa1Yf9gywHe wsyk7Gv646T1UR934qqkqNWJaVGS8XE7 LHbZ5w0j5NyAWBVJhdHxYpY1R5tatvkb CMqCFVFDl5bj083RC9LPUnmJAB90mInm prc0Y2sox6YH9EgC4DVkzs4rajP4267C LoCju95yOFGClBttmFSxgk6kY6rXsbHw RjSHtamIZdZk3OgtkrDh3SRUQ9t99837 43WnKyFm4zmBaZoRvmuSBS1PqjO3Lsf1 iEK2Tvb0oLDAyKhPNLUrBdsvs5dcZiEG ctmnzqYBp2pxvbtUjJxNPq8Pxta1pytA UST8TmiszQrCFz96UYK0v3PXOQd2eXm8 hhKOaIQtHTGucL4y7dmKNlfNckuOq2iH Vcl1TCjXh68wQ78tRKB5VM4PA7lDkBRA 0gAp1FhGafrfwiNXxQWCX1TAlrdVU7mA az22pVMA3G8bBPcNixp7gQQRiImHJsKB UTdq1YrdOAy2mkbezdbrfZyFZ7XlVgFR PoHpRhAKsTvr9FEyoW8IgIl9VdKo2vtQ PJk4xTlzZpMgbSlKsW3TqmwuzXhpaNyg HaqPLogDyV5vEogbNfuzinxoImsRK3Gc vpEMB4VYoaFjBYBTm1rMc5ekNdaMs4l1 NmaHQ6R7svzXP1Her6Spmm383PSRThoO 1c0OVaUtOoBu7duS0br90qtKsi9tCFZ4 7HYNpLEAG3X2OeUrDYewsa2ieB07txOT X8RfGKCN8QWEEWYzD0nPAYGE3q6L3HHc 1RrgwTqRAgkYZn9wFKBuC9v2ibhVftWb mwKH2gU0yrK4gVm2UEYFWKdpMfJ7R6XT 2Cglj13SodBXwrtX6dDakjcrEUhp3bJ0 IugTMv1PsDbhm5sa9TcJ6cYIF6uVw58x JXKkMtZGFkURKcudAijrSlRDxfXWp6Ac yu4Dtl8Wq0je9JcAK3XY7AB3n7Km1Rfb OcFPyRuDwdYLXqckzQQzzum1xhIYxrAz nwV96SsNYmZMjvEkfDkp07TLzDRRFPKT g088j29slukMA0HI5lWVPhiKzmNR5p4z zMXYZLKbtjeFI356jLib6QMqKgL5nDro t3Vryj7EBIOSD05iIkZ3WaFk0ozMVocc gwYmvREPiuZBdkoCcYOdZ9bZohAGuBqv BkMkfu2zi9XCuiT4nrogDvYmrrNxloQu JDMXFGFvrLaZAV1QZAC3uoo7ByZT5z4W AEHFRTkJAtZRTosnpyeK4wiZUgNbdBpI Wd1Djqe0O8q6tJ0M4E5LReZ8KLuasSGx WXg6j8Cynze0ADkQFZYjnQSc9K3UIX5b zXqi866J9nvhmRCK1E8DmoELDucGEk7g qupkEPgZ0G4dNzqYNG0vnGCswD75LSxG GNa56FPUlObOyNScuC4hMjKro0gCbFM0 XHt0f0WbJ7HNUfRPcjyodTwmMmnn4ESb 67yBa3b8wvq11dTMhubRQ1i8t4FnFxSp SAfz3oeR856J3WUiqJI63vFg0aQ9tCrr xRbXPSJMoNsqG3UOpIiqzNbxnXSFsdbv 3sRsF78bXChWgeXxJdl4LthAoe0snhFR 5RzaKl0SRagt6lW6wnirC1LkEKz2i1kM Q4Co0nE4B6j4o5CfOdQ9DdeMsyl4jXeT CQAGyGPza8fWcfDQ3Dtz3udOQTNuHbWc 6xGdbsADo0Y7oIXVw1bkSg3MdqserV4e 0cxyLhkAtU5via3Bax5PdpOaftJcuQxB Hbg00gYG2y8IR8cFFe3CNE54iVwwLIoE w8DG2mRina5fggJIwBybwraErbmoVxCr Ztib2CUENQcj9Q5OiXlslNcyF7lX1vHR el22haQtkN4DruxMnJrROvWYOoMoz1j6 PoQ1yKmsVpIChXW2fbyhEafqDW90Xety LYwIq7RKwehDRgiuYOjwoIEkiLVo0KSS pADSB2GwJahKm2pvYBNJ3EQaNDnZF6ZP grw7AbHI66NOnDjqS6c12fuqa0VnYJt0 nhvYj1JZuDhLZWlKVgxuP6C9WQ6Rc5b8 K3f0nIJloMd061pCb3ikkPWgVq9lqRJC RUxseDCX6pTBsmy9prOKZpeojJq0nSvB cnTgD1lKjl8j8AOIVWllf62dPbrobfmm gMQiagkUrtTZ4RuxQbVAuAIVeZheW6gs liKK9diyV0Llq7LGhlXXe8X200z4gPzA XZfc06mS96ayUEmRY0Om2xU3CDFINlVv ad1dgCAqUlfrWUpyQuxQz5hzwZP4goFN 4WZQgpgkpjh3s9HtmRO0ah20YzhZyiAG MH3lntBAPSI7M6Lt9fDiBf8UVLw1hmwz 3N5REqjJEyNlNrdpLz9MPOwXwSG1CFuL 7PBFc9GNgXdI4AAYGd3YhSkEGLNQA37e pgVM58IZlnMKAuYnA3bnLXuZmQxwWpIO Jej5fVm5pB4MYywCcuTiJpIflGh2LBa5",
    React.createElement(
      "a",
      { href: "https://eecs.berkeley.edu/resources/ase/prospective/" },
      " Join Course Staff! "
    ),
    "We do cool work (teaching, grading, proctoring, but also writing and running large software pipelines serving thousands of students in Berkeley and from other schools) If you're particularly interested in this, join 61a infra! Other courses also have their own infra teams that run software (autograding, many internal tools, websites, etc.) for their own course. Email Kevin if you have questions. e5N6VdqYpGNPcK2iNNAYinEzxj4mQzhC GsAQ5ymXgSQydznkAlAFJQzQ8NKYmVJZ 7tmQpMRj2h3OMt6oBHCa76T9cY4YXWk2 d4MSUmR0Yb7aImqH75cqVnkzQU6Po4yI ZVuAQtgwBwVuoxDExxMoz6HrKjLZela6 XXNLB4vtMMgL1MPuvdCuLlGswmVRvFQs RHKAloLcbcjvvBWOhSf1bSFsUEuyiIqO cGGjn6YqnuLhTnAHAxKw37agI4NtIMpS nogAp1pqQllPDpn5IoeBknUmDLqEIh6R ulhiUj8IdR2eSSg4kMk8VVMIb8hMOvGR SeSAdj9k7qmbaBrGjdE46EWnpkpvJKjA J9892SaTiWZkHE5lptS9Hit1kF5yghk6 7xCyDQ3OD2LdKsposjuOkYLSFFO19BC8 JTFlSYTA7ED2PQrq4KbICqG74eGlTcz0"
  );
};


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function ActivityLogLayout(_ref) {
  var state = _ref.state;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeTab = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      userList = _React$useState4[0],
      setUserList = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isLoading = _React$useState6[0],
      setIsLoading = _React$useState6[1];

  var _React$useState7 = React.useState(""),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      searchText = _React$useState8[0],
      setSearchText = _React$useState8[1];

  if (state.currentUser && !state.currentUser.isStaff) {
    var _ReactRouterDOM = ReactRouterDOM,
        Redirect = _ReactRouterDOM.Redirect;

    return React.createElement(Redirect, { to: "user/" + state.currentUser.id });
  }

  if (app && !isLoading && userList.length === 0) {
    setIsLoading(true);
    app.makeRequest("list_users", function (users) {
      setUserList(users);
    });
  }

  var foundUsers = userList.filter(function (_ref2) {
    var name = _ref2.name,
        email = _ref2.email;
    return (name + email).toLowerCase().includes(searchText.toLowerCase());
  });

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { state: state, mode: "activity_log" }),
    React.createElement(OfflineIndicator, { offline: state.offline && state.loaded }),
    React.createElement(
      "div",
      { className: "jumbotron" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h2",
          null,
          " Activity Log "
        ),
        React.createElement(
          "p",
          null,
          "View the activity of any user of the queue."
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "form",
            null,
            React.createElement(
              "div",
              { className: "input-group appointment-input" },
              React.createElement("input", {
                className: "form-control",
                required: "required",
                placeholder: "Search for a student or a member of staff",
                value: searchText,
                onChange: function onChange(e) {
                  return setSearchText(e.target.value);
                }
              }),
              React.createElement(
                "span",
                { className: "input-group-btn" },
                React.createElement(
                  "button",
                  { className: "btn btn-default", type: "button" },
                  "Search"
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "activity-buttons" },
          React.createElement(
            Link,
            {
              to: "/user/" + (state.currentUser && state.currentUser.id),
              className: "btn btn-primary"
            },
            "My activity"
          ),
          React.createElement(
            Link,
            { className: "btn btn-warning" },
            "Class Overview"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(Messages, { messages: state.messages }),
      searchText ? React.createElement(
        Tabs,
        { selectedIndex: 0, onClick: function onClick() {
            return null;
          } },
        React.createElement(
          Tab,
          { label: "Search Results (" + foundUsers.length + ")" },
          React.createElement(UserList, { users: foundUsers })
        )
      ) : React.createElement(
        Tabs,
        { selectedIndex: activeTab, onSelect: setActiveTab },
        React.createElement(
          Tab,
          { label: "Staff" },
          React.createElement(UserList, { users: userList.filter(function (_ref3) {
              var isStaff = _ref3.isStaff;
              return isStaff;
            }) })
        ),
        React.createElement(
          Tab,
          { label: "Students" },
          React.createElement(UserList, { users: userList.filter(function (_ref4) {
              var isStaff = _ref4.isStaff;
              return !isStaff;
            }) })
        )
      )
    )
  );
}

function UserList(_ref5) {
  var users = _ref5.users;

  var _React$useState9 = React.useState(0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      page = _React$useState10[0],
      setPage = _React$useState10[1];

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "queue" },
      users.slice(page * 50, (page + 1) * 50).map(function (user) {
        return React.createElement(User, { user: user });
      })
    ),
    React.createElement(
      "nav",
      null,
      React.createElement(
        "ul",
        { className: "pager" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "button",
            {
              className: "btn btn-default",
              onClick: function onClick(e) {
                return setPage(function (page) {
                  return page - 1;
                });
              },
              disabled: page <= 0
            },
            "Previous"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "button",
            {
              className: "btn btn-default",
              onClick: function onClick(e) {
                return setPage(function (page) {
                  return page + 1;
                });
              },
              disabled: page >= users.length / 50 - 1
            },
            "Next"
          )
        )
      )
    )
  );
}

function User(_ref6) {
  var user = _ref6.user;

  return React.createElement(Row, {
    title: user.name,
    link: "/user/" + user.id,
    prop1: user.email,
    prop2: "Role: " + (user.isStaff ? "Staff" : "Student")
  });
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function AdminAppointmentsManager(_ref) {
  var state = _ref.state;

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sheetUrl = _React$useState2[0],
      setSheetUrl = _React$useState2[1];

  var _React$useState3 = React.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      sheetName = _React$useState4[0],
      setSheetName = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isLoading = _React$useState6[0],
      setIsLoading = _React$useState6[1];

  var handleSheetUrlChange = function handleSheetUrlChange(e) {
    setSheetUrl(e.target.value);
  };
  var handleSheetNameChange = function handleSheetNameChange(e) {
    setSheetName(e.target.value);
  };

  var submit = function submit() {
    setIsLoading(true);
    app.makeRequest("upload_appointments", {
      sheetUrl: sheetUrl,
      sheetName: sheetName
    }, false, function () {
      setIsLoading(false);
    });
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      AdminOptionsManager,
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Should students be able to make appointments?"
        ),
        React.createElement(
          "td",
          { className: "col-md-1" },
          React.createElement(ConfigLinkedToggle, {
            config: state.config,
            configKey: "appointments_open",
            offText: "No",
            onText: "Yes"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "What should appointments be called for students?"
        ),
        React.createElement(
          "td",
          { className: "col-md-1" },
          React.createElement(ConfigLinkedText, {
            config: state.config,
            configKey: "appointment_mode_title"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Should students be prompted to make appointments when the queue closes?"
        ),
        React.createElement(
          "td",
          { className: "col-md-1" },
          React.createElement(ConfigLinkedToggle, {
            config: state.config,
            configKey: "recommend_appointments",
            offText: "No",
            onText: "Yes"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement(
            "p",
            null,
            "How many appointments should a student be able to make daily?"
          )
        ),
        React.createElement(
          "td",
          { className: "col-md-3" },
          React.createElement(ConfigLinkedNumeric, {
            config: state.config,
            configKey: "daily_appointment_limit"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement(
            "p",
            null,
            "How many appointments should a student be able to make weekly?"
          )
        ),
        React.createElement(
          "td",
          { className: "col-md-3" },
          React.createElement(ConfigLinkedNumeric, {
            config: state.config,
            configKey: "weekly_appointment_limit"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement(
            "p",
            null,
            "How many appointments should a student have be pending simultaneously?"
          )
        ),
        React.createElement(
          "td",
          { className: "col-md-3" },
          React.createElement(ConfigLinkedNumeric, {
            config: state.config,
            configKey: "simul_appointment_limit"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Should appointments be activated automatically?"
        ),
        React.createElement(
          "td",
          { className: "col-md-1" },
          React.createElement(ConfigLinkedToggle, {
            config: state.config,
            configKey: "auto_activate_appointments",
            offText: "No",
            onText: "Yes"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement(
            "p",
            null,
            "How often should appointments be activated (in hours)?"
          )
        ),
        React.createElement(
          "td",
          { className: "col-md-3" },
          React.createElement(ConfigLinkedNumeric, {
            config: state.config,
            configKey: "auto_activate_appointments_frequency"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement(
            "p",
            null,
            "How many hours of appointments should be activated each time?"
          )
        ),
        React.createElement(
          "td",
          { className: "col-md-3" },
          React.createElement(ConfigLinkedNumeric, {
            config: state.config,
            configKey: "auto_activate_appointments_range"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Should students always have access to online appointment call links?"
        ),
        React.createElement(
          "td",
          { className: "col-md-1" },
          React.createElement(ConfigLinkedToggle, {
            config: state.config,
            configKey: "always_show_appointment_join_call",
            offText: "No",
            onText: "Yes"
          })
        )
      )
    ),
    React.createElement(ConfigLinkedMarkdownInput, {
      title: "Appointment Prompt",
      placeholder: "Sign up for appointments here!",
      config: state.config,
      configKey: "appointment_prompt"
    }),
    React.createElement(
      "form",
      null,
      React.createElement(
        "div",
        { className: "input-group appointment-input" },
        React.createElement("input", {
          id: "url-selector",
          type: "text",
          className: "form-control",
          placeholder: "Link to a spreadsheet containing appointments",
          required: true,
          value: sheetUrl,
          onChange: handleSheetUrlChange
        }),
        React.createElement("input", {
          id: "sheet-selector",
          className: "form-control form-right",
          type: "text",
          name: "question",
          title: "Sheet name",
          placeholder: "Sheet name",
          required: true,
          value: sheetName,
          onChange: handleSheetNameChange
        }),
        React.createElement(
          "span",
          { className: "input-group-btn" },
          React.createElement(
            "button",
            {
              className: "btn btn-default " + (isLoading ? "is-loading" : ""),
              type: "button",
              onClick: submit
            },
            "Update"
          )
        )
      ),
      React.createElement(
        "small",
        null,
        "You must share this spreadsheet with the 61A service account",
        " ",
        React.createElement(
          "a",
          { href: "mailto:secure-links@ok-server.iam.gserviceaccount.com" },
          "secure-links@ok-server.iam.gserviceaccount.com"
        ),
        "."
      )
    )
  );
}


"use strict";

function AdminAssignmentsManager(_ref) {
  var state = _ref.state;
  var assignments = state.assignments;


  return React.createElement(
    AdminItemsManager,
    {
      itemType: "assignment",
      columns: ["ID", "Name", "Visibility"],
      items: Object.values(assignments)
    },
    function (item) {
      return [item.id, React.createElement(AdminItemsTextField, {
        itemType: "assignment",
        placeholder: "New Name",
        propType: "name",
        item: item
      }), React.createElement(AdminItemsBooleanField, {
        itemType: "assignment",
        propType: "visible",
        item: item,
        onText: "Visible",
        offText: "Hidden"
      })];
    }
  );
}


"use strict";

function AdminConfigManager(_ref) {
  var config = _ref.state.config;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "table-responsive" },
      React.createElement(
        "table",
        { className: "table table-hover" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Option"
            ),
            React.createElement(
              "th",
              { className: "col-md-3" },
              "Value"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should the queue be open to new tickets?"
            ),
            React.createElement(
              "td",
              { className: "col-md-3" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "is_queue_open",
                offText: "Closed",
                onText: "Open"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should only students on the roster be allowed to log in?"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "only_registered_students"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should staff members see a link to recent OKPy backups?"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "show_okpy_backups",
                offText: "No",
                onText: "Yes"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should the queue show the estimated wait time and online staff members?"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "show_presence",
                offText: "No",
                onText: "Yes"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should notifications be sent to staff when a ticket is added to the queue?"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "send_ticket_notifications",
                offText: "No",
                onText: "Yes"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              React.createElement(
                "p",
                null,
                "What should the delay be before students can request to be taken off hold? (in minutes)"
              )
            ),
            React.createElement(
              "td",
              { className: "col-md-3" },
              React.createElement(ConfigLinkedNumeric, {
                config: config,
                configKey: "juggling_delay"
              })
            )
          )
        )
      )
    ),
    React.createElement(ConfigLinkedMarkdownInput, {
      title: "Welcome Message",
      placeholder: "Welcome to the OH Queue!",
      config: config,
      configKey: "welcome"
    }),
    React.createElement(ConfigLinkedMarkdownInput, {
      title: "Ticket Prompt",
      placeholder: "Have fun with your ticket!",
      config: config,
      configKey: "ticket_prompt"
    })
  );
}


"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminHome = function (_React$Component) {
  _inherits(AdminHome, _React$Component);

  function AdminHome() {
    _classCallCheck(this, AdminHome);

    return _possibleConstructorReturn(this, (AdminHome.__proto__ || Object.getPrototypeOf(AdminHome)).apply(this, arguments));
  }

  _createClass(AdminHome, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "jumbotron blue" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "section",
            { className: "page-header" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                  "h1",
                  null,
                  window.courseName,
                  " Admin Panel"
                ),
                React.createElement(
                  "h2",
                  null,
                  "Edit assignments, locations, and more!"
                ),
                React.createElement(
                  "p",
                  null,
                  "Found a bug? Want to change something? Talk to us at",
                  " ",
                  React.createElement(
                    "a",
                    { href: "https://github.com/Cal-CS-61A-Staff/oh-queue" },
                    "our GitHub repo"
                  ),
                  "!"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AdminHome;
}(React.Component);


"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AdminItemsBooleanField(_ref) {
  var itemType = _ref.itemType,
      propType = _ref.propType,
      item = _ref.item,
      _ref$onText = _ref.onText,
      onText = _ref$onText === undefined ? "Yes" : _ref$onText,
      _ref$offText = _ref.offText,
      offText = _ref$offText === undefined ? "No" : _ref$offText;

  var handleChange = function handleChange(value) {
    app.makeRequest("update_" + itemType, _defineProperty({ id: item.id }, propType, value));
  };

  return React.createElement(FancyToggle, {
    onText: onText,
    offText: offText,
    checked: item[propType],
    onChange: handleChange
  });
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function AdminItemsManager(_ref) {
  var children = _ref.children,
      columns = _ref.columns,
      itemType = _ref.itemType,
      items = _ref.items;

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      input = _React$useState2[0],
      setInput = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isLoading = _React$useState4[0],
      setIsLoading = _React$useState4[1];

  var isValidInput = input ? !items.map(function (item) {
    return item.name;
  }).includes(input) : null;

  var _onChange = function _onChange(input) {
    setInput(input);
  };

  var addItemInput = function addItemInput() {
    if (!isValidInput) {
      return;
    }

    setIsLoading(true);

    app.makeRequest("add_" + itemType, { name: input }, function (success) {
      setIsLoading(false);
      if (success) {
        setInput("");
      }
    });
  };

  var formGroupClassNames = classNames({
    "form-group": true,
    "has-error": isValidInput === false,
    "has-success": isValidInput === true
  });

  return React.createElement(
    "div",
    { className: "table-responsive" },
    React.createElement(
      "table",
      { className: "table table-hover" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          columns.map(function (column) {
            return React.createElement(
              "th",
              { key: column },
              React.createElement(
                "span",
                null,
                column
              )
            );
          })
        )
      ),
      React.createElement(
        "tbody",
        null,
        items.map(function (item) {
          return React.createElement(
            "tr",
            { key: item.id },
            children(item).map(function (child, i) {
              return React.createElement(
                "td",
                { key: i },
                child
              );
            })
          );
        })
      )
    ),
    React.createElement(
      "table",
      { className: "table table-hover" },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          { key: "new" },
          React.createElement(
            "td",
            null,
            React.createElement(
              "div",
              { className: formGroupClassNames },
              React.createElement("input", {
                className: "form-control",
                type: "text",
                minLength: "1",
                placeholder: "Add new entry",
                disabled: isLoading,
                value: input,
                onChange: function onChange(e) {
                  return _onChange(e.target.value);
                }
              })
            )
          ),
          React.createElement(
            "td",
            { className: "col-md-1" },
            React.createElement(
              "button",
              {
                type: "button",
                className: "btn btn-default",
                disabled: !isValidInput || isLoading,
                onClick: addItemInput
              },
              isLoading ? React.createElement("div", { className: "spinner-loading" }) : "Add"
            )
          )
        )
      )
    )
  );
}


"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AdminItemsTextField(_ref) {
  var itemType = _ref.itemType,
      placeholder = _ref.placeholder,
      propType = _ref.propType,
      item = _ref.item;

  var editItem = function editItem(e) {
    e.preventDefault();
    var value = e.target.elements[0].value;
    var button = e.target.elements[1];
    $(button).addClass("is-loading");
    app.makeRequest("update_" + itemType, _defineProperty({ id: item.id }, propType, value), function () {
      return $(button).removeClass("is-loading");
    });
  };

  return React.createElement(
    "form",
    { className: "form-inline", onSubmit: editItem },
    React.createElement(
      "div",
      { className: "form-group form-group-sm" },
      React.createElement(
        "div",
        { className: "input-group" },
        React.createElement("input", {
          className: "form-control",
          type: "text",
          placeholder: placeholder,
          "data-item-id": item.id,
          defaultValue: item[propType]
        }),
        React.createElement(
          "span",
          { className: "input-group-btn" },
          React.createElement(
            "button",
            { className: "btn btn-default btn-sm", type: "submit" },
            "Edit"
          )
        )
      )
    )
  );
}


"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminLayout = function (_React$Component) {
  _inherits(AdminLayout, _React$Component);

  function AdminLayout() {
    _classCallCheck(this, AdminLayout);

    return _possibleConstructorReturn(this, (AdminLayout.__proto__ || Object.getPrototypeOf(AdminLayout)).apply(this, arguments));
  }

  _createClass(AdminLayout, [{
    key: "render",
    value: function render() {
      var _ReactRouterDOM = ReactRouterDOM,
          Route = _ReactRouterDOM.Route,
          Switch = _ReactRouterDOM.Switch;
      var _props = this.props,
          location = _props.location,
          match = _props.match,
          state = _props.state;
      var pathname = location.pathname;


      return React.createElement(
        "div",
        { className: "admin-root" },
        React.createElement(Navbar, { state: state, mode: "admin" }),
        React.createElement(OfflineIndicator, { offline: state.offline && state.loaded }),
        React.createElement("br", null),
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(Messages, { messages: state.messages }),
          React.createElement(AdminTabs, {
            currentTab: pathname.split("/")[pathname.split("/").length - 1],
            partyAlias: state.config.party_name
          }),
          React.createElement(
            Switch,
            { location: location },
            React.createElement(Route, {
              exact: true,
              path: "" + match.path,
              render: function render(props) {
                return React.createElement(AdminConfigManager, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: match.path + "/tickets",
              render: function render(props) {
                return React.createElement(AdminTicketsManager, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: match.path + "/appointments",
              render: function render(props) {
                return React.createElement(AdminAppointmentsManager, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: match.path + "/assignments",
              render: function render(props) {
                return React.createElement(AdminAssignmentsManager, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: match.path + "/locations",
              render: function render(props) {
                return React.createElement(AdminLocationsManager, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: match.path + "/online",
              render: function render(props) {
                return React.createElement(AdminOnlineManager, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: match.path + "/slack",
              render: function render(props) {
                return React.createElement(AdminSlackManager, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: match.path + "/party",
              render: function render(props) {
                return React.createElement(AdminPartyManager, _extends({ state: state }, props));
              }
            })
          )
        )
      );
    }
  }]);

  return AdminLayout;
}(React.Component);


"use strict";

function AdminLocationsManager(_ref) {
  var state = _ref.state;
  var locations = state.locations;


  return React.createElement(
    AdminItemsManager,
    {
      itemType: "location",
      columns: ["ID", "Name", "Zoom Link (optional)", "Online", "Visibility"],
      items: Object.values(locations).filter(function (_ref2) {
        var name = _ref2.name;
        return name !== "Online";
      })
    },
    function (item) {
      return [item.id, React.createElement(AdminItemsTextField, {
        itemType: "location",
        placeholder: "New Name",
        propType: "name",
        item: item
      }), React.createElement(AdminItemsTextField, {
        itemType: "location",
        placeholder: "Zoom Link (optional)",
        propType: "link",
        item: item
      }), React.createElement(AdminItemsBooleanField, {
        itemType: "location",
        propType: "online",
        item: item
      }), React.createElement(AdminItemsBooleanField, {
        itemType: "location",
        propType: "visible",
        item: item,
        onText: "Visible",
        offText: "Hidden"
      })];
    }
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function AdminMagicWordForm(_ref) {
  var config = _ref.config;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      key = _React$useState2[0],
      setKey = _React$useState2[1];

  React.useEffect(function () {
    if (!config["queue_magic_word_data"]) {
      app.makeRequest("refresh_magic_word", function (res) {
        if (res.magic_word) {
          config["queue_magic_word_data"] = res.magic_word;
          setKey(key + 1);
        }
      });
    }
  }, [config, config["queue_magic_word_data"]]);

  return React.createElement(ConfigLinked, {
    configKeys: ["queue_magic_word_mode", "queue_magic_word_data"],
    config: config,
    render: function render(_ref2) {
      var onSubmit = _ref2.onSubmit,
          _ref2$values = _slicedToArray(_ref2.values, 2),
          mode = _ref2$values[0],
          data = _ref2$values[1],
          _ref2$handlers = _slicedToArray(_ref2.handlers, 2),
          onModeChange = _ref2$handlers[0],
          onDataChange = _ref2$handlers[1],
          _ref2$setters = _slicedToArray(_ref2.setters, 2),
          setData = _ref2$setters[1],
          submitButton = _ref2.submitButton;

      return React.createElement(InnerAdminMagicWordForm, {
        mode: mode,
        data: data,
        onModeChange: onModeChange,
        onDataChange: onDataChange,
        setData: setData,
        submitButton: submitButton,
        onSubmit: onSubmit
      });
    }
  });
}

function InnerAdminMagicWordForm(_ref3) {
  var mode = _ref3.mode,
      data = _ref3.data,
      onModeChange = _ref3.onModeChange,
      onDataChange = _ref3.onDataChange,
      setData = _ref3.setData,
      submitButton = _ref3.submitButton,
      onSubmit = _ref3.onSubmit;

  var handleModeChange = function handleModeChange(e) {
    onModeChange(e);
    if (e.target.value === "text") {
      setData("");
    }
  };
  var queueMagicWordOptions = [React.createElement(
    "div",
    { className: "form-group" },
    React.createElement(
      "select",
      { className: "form-control", value: mode, onChange: handleModeChange },
      React.createElement(
        "option",
        { value: "none" },
        "None"
      ),
      React.createElement(
        "option",
        { value: "text" },
        "Text"
      ),
      React.createElement(
        "option",
        { value: "timed_numeric" },
        "Time-based Numeric"
      )
    )
  )];
  if (mode === "text") {
    queueMagicWordOptions.push(React.createElement(
      "div",
      { className: "form-group" },
      React.createElement("input", {
        type: "text",
        className: "form-control",
        value: data,
        onChange: onDataChange,
        required: "required"
      })
    ));
  }
  return React.createElement(
    "form",
    { onSubmit: onSubmit },
    queueMagicWordOptions,
    submitButton
  );
}


"use strict";

function AdminOnlineManager(_ref) {
  var state = _ref.state;

  return React.createElement(
    AdminOptionsManager,
    null,
    React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        "Should students be able to join an online queue?"
      ),
      React.createElement(
        "td",
        { className: "col-md-1" },
        React.createElement(ConfigLinkedToggle, {
          config: state.config,
          configKey: "online_active",
          offText: "No",
          onText: "Yes"
        })
      )
    ),
    React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        "Should students or TAs specify the video call link for an online OH call?"
      ),
      React.createElement(
        "td",
        { className: "col-md-1" },
        React.createElement(ConfigLinkedToggle, {
          config: state.config,
          configKey: "students_set_online_link",
          offText: "TAs",
          onText: "Students"
        })
      )
    ),
    React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        "Should students or TAs specify the shared document link for an online OH call?"
      ),
      React.createElement(
        "td",
        { className: "col-md-1" },
        React.createElement(ConfigLinkedToggle, {
          config: state.config,
          configKey: "students_set_online_doc",
          offText: "TAs",
          onText: "Students"
        })
      )
    )
  );
}


"use strict";

function AdminOptionsManager(_ref) {
  var children = _ref.children;

  return React.createElement(
    "div",
    { className: "table-responsive" },
    React.createElement(
      "table",
      { className: "table table-hover" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Option"
          ),
          React.createElement(
            "th",
            { className: "col-md-3" },
            "Value"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        children
      )
    )
  );
}


"use strict";

function AdminPartyManager(_ref) {
  var state = _ref.state;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      AdminOptionsManager,
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "What should ",
          state.config.party_name,
          " mode be called?"
        ),
        React.createElement(
          "td",
          { className: "col-md-1" },
          React.createElement(ConfigLinkedText, { config: state.config, configKey: "party_name" })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Should students be able to create and join ",
          state.config.party_name,
          " ",
          "groups?"
        ),
        React.createElement(
          "td",
          { className: "col-md-1" },
          React.createElement(ConfigLinkedToggle, {
            config: state.config,
            configKey: "party_enabled"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Should students be able to create individual tickets while",
          " ",
          state.config.party_name,
          " mode is enabled?"
        ),
        React.createElement(
          "td",
          { className: "col-md-1" },
          React.createElement(ConfigLinkedToggle, {
            config: state.config,
            configKey: "allow_private_party_tickets"
          })
        )
      )
    )
  );
}


"use strict";

function AdminSlackManager(_ref) {
  var config = _ref.state.config;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "table-responsive" },
      React.createElement(
        "table",
        { className: "table table-hover" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Option"
            ),
            React.createElement(
              "th",
              { className: "col-md-3" },
              "Value"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should the queue send a Slack notification when the queue is long?"
            ),
            React.createElement(
              "td",
              { className: "col-md-3" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "slack_notif_long_queue"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should the queue send a Slack notification summarizing daily appointments?"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "slack_notif_appt_summary"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should the queue notify the ",
              React.createElement(
                "code",
                null,
                "oh-queue"
              ),
              " channel if an appointment is missed? (2-minute threshold)"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "slack_notif_missed_appt"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should the queue notify the ",
              React.createElement(
                "code",
                null,
                "oh-missed-appts"
              ),
              " channel if an appointment is missed? (5-minute threshold)"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "slack_notif_missed_appt_private"
              })
            )
          )
        )
      ),
      React.createElement(
        "p",
        null,
        "To setup Slack, visit",
        " ",
        React.createElement(
          "a",
          { href: "https://auth.apps.cs61a.org", target: "_blank" },
          "Auth"
        ),
        " ",
        "and register a Slack channel with the purpose ",
        React.createElement(
          "code",
          null,
          "oh-queue"
        ),
        ". Then check that it works!"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "button",
          {
            className: "btn btn-primary",
            onClick: function onClick() {
              return app.makeRequest("test_slack");
            }
          },
          "Send a test message"
        ),
        React.createElement(
          "button",
          {
            style: { "margin-left": 5 },
            className: "btn btn-warning",
            onClick: function onClick() {
              return app.makeRequest("appointment_summary");
            }
          },
          "Send daily appointment summary"
        )
      )
    )
  );
}


"use strict";

function AdminTabs(_ref) {
  var currentTab = _ref.currentTab,
      partyAlias = _ref.partyAlias;

  if (currentTab === "admin") {
    currentTab = "general";
  }

  var links = ["general", "tickets", "party", "appointments", "assignments", "locations", "online", "slack"];

  var body = links.map(function (link, index) {
    return React.createElement(
      "li",
      { role: "presentation", className: currentTab === link ? "active" : "" },
      React.createElement(
        Link,
        { to: index ? "/admin/" + link : "/admin" },
        link === "party" ? partyAlias : link[0].toUpperCase() + link.slice(1)
      )
    );
  });

  return React.createElement(
    "ul",
    { className: "nav nav-tabs" },
    body
  );
}


"use strict";

function AdminTicketsManager(_ref) {
  var config = _ref.state.config;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "table-responsive" },
      React.createElement(
        "table",
        { className: "table table-hover" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Option"
            ),
            React.createElement(
              "th",
              { className: "col-md-3" },
              "Value"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should the description field be required for new tickets?"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "description_required",
                offText: "No",
                onText: "Yes"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "Should staff members be able to shuffle the queue?"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "enable_shuffle",
                offText: "No",
                onText: "Yes"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "(Data 100 Only) Enable LLM features?"
            ),
            React.createElement(
              "td",
              { className: "col-md-1" },
              React.createElement(ConfigLinkedToggle, {
                config: config,
                configKey: "enable_llm_features",
                offText: "No",
                onText: "Yes"
              })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              React.createElement(
                "p",
                null,
                "What type of magic word should the queue require to submit new tickets?"
              ),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "Text = staff will provide a hard-coded magic word"
                ),
                React.createElement(
                  "li",
                  null,
                  "Time-based Numeric = the magic word will be a 4-digit number that changes every minute. This number is displayed under \"Estimated Wait Time\" on the homepage (staff view only)."
                )
              )
            ),
            React.createElement(
              "td",
              { className: "col-md-3" },
              React.createElement(AdminMagicWordForm, { config: config })
            )
          )
        )
      )
    ),
    React.createElement(ConfigLinkedText, {
      title: "Description Template",
      placeholder: "Points of confusion:\n\n Things I've tried:",
      config: config,
      configKey: "default_description",
      lines: 10,
      optional: true
    })
  );
}


"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* This component holds the global application state, and manages the websocket
 * connection. To update the state, call a method on the global "app" object,
 * e.g. as
 *
 *     app.addMessage("Something bad happened", "danger");
 *
 * Because it sits at the root of React heirarchy, any state changes in the app
 * will cause the entire app to re-render, so any state changes are reflected
 * instantly.
 *
 * All other React components are "stateless". Many of them are simply pure
 * functions that take the state and produce HTML. A few are slightly more
 * complicated in that they have to interact with jQuery or the network.
 *
 * NB: calling app methods inside a render() method will result in an infinite
 * loop.
 */
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = initialState;
    _this.socket = new Socket();

    _this.socket.on("connect", function () {
      _this.setOffline(false);
    });
    _this.socket.on("disconnect", function () {
      return _this.setOffline(true);
    });
    _this.socket.on("state", function (data, callback) {
      _this.updateState(data);
      if (callback) {
        callback();
      }
    });
    _this.socket.on("event", function (data) {
      return _this.updateTicket(data);
    });
    _this.socket.on("appointment_event", function (data) {
      return _this.updateAppointment(data);
    });
    _this.socket.on("group_event", function (data) {
      return _this.updateGroup(data);
    });

    _this.loadTicket = _this.loadTicket.bind(_this);
    _this.loadAppointment = _this.loadAppointment.bind(_this);
    _this.loadGroup = _this.loadGroup.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "refresh",
    value: function refresh() {
      this.setState(this.state);
    }
  }, {
    key: "setOffline",
    value: function setOffline(offline) {
      this.state.offline = offline;
      this.refresh();
    }
  }, {
    key: "updateState",
    value: function updateState(data) {
      var _this2 = this;

      if (Array.isArray(data.assignments)) {
        this.state.assignments = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data.assignments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var assignment = _step.value;

            this.state.assignments[assignment.id] = assignment;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      if (Array.isArray(data.locations)) {
        this.state.locations = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data.locations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var location = _step2.value;

            this.state.locations[location.id] = location;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      if (Array.isArray(data.tickets)) {
        var ticketIDs = new Set();
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = data.tickets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var ticket = _step3.value;

            setTicket(this.state, ticket);
            ticketIDs.add(ticket.id);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        var oldTicketIDs = this.state.tickets.keys();
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = oldTicketIDs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var oldTicketID = _step4.value;

            if (!ticketIDs.has(oldTicketID)) {
              this.state.tickets.delete(oldTicketID);
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
      if (data.hasOwnProperty("config")) {
        this.state.config = data.config;
        var _arr = ["daily_appointment_limit", "weekly_appointment_limit", "simul_appointment_limit", "show_okpy_backups", "slack_notif_long_queue", "slack_notif_appt_summary", "slack_notif_missed_appt", "slack_notif_missed_appt_private", "party_enabled", "allow_private_party_tickets", "recommend_appointments", "only_registered_students", "show_presence", "enable_shuffle", "auto_activate_appointments", "auto_activate_appointments_frequency", "auto_activate_appointments_range", "always_show_appointment_join_call", "send_ticket_notifications", "enable_llm_features"];
        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i];
          this.state.config[key] = JSON.parse(this.state.config[key]);
        }
      }
      if (data.hasOwnProperty("current_user")) {
        this.state.currentUser = data.current_user;
      }
      if (data.hasOwnProperty("appointments")) {
        var appointmentIDMap = Object.fromEntries(this.state.appointments.map(function (appointment) {
          return [appointment.id, appointment];
        }));
        data.appointments.forEach(function (appointment) {
          return setAppointment(_this2.state, appointment, function () {
            return _this2.router.history.push("/appointments/" + appointment.id);
          }, appointmentIDMap);
        });
        this.state.appointments = Array.from(data.appointments).sort(appointmentTimeComparator);
      }
      if (data.hasOwnProperty("groups")) {
        this.state.groups = Array.from(data.groups).sort(function (x) {
          return x.id;
        });
      }
      if (data.hasOwnProperty("presence")) {
        this.state.presence = data.presence;
      }
      this.state.loaded = true;
      this.refresh();
    }
  }, {
    key: "shouldNotify",
    value: function shouldNotify(ticket, type) {
      return isStaff(this.state) && type === "create";
    }
  }, {
    key: "updateAppointment",
    value: function updateAppointment(_ref) {
      var _this3 = this;

      var appointment = _ref.appointment,
          type = _ref.type;

      setAppointment(this.state, appointment, function () {
        _this3.router.history.push("/appointments/" + appointment.id);
      });
      this.refresh();
    }
  }, {
    key: "updateTicket",
    value: function updateTicket(data) {
      setTicket(this.state, data.ticket);
      this.refresh();
    }
  }, {
    key: "updateGroup",
    value: function updateGroup(data) {
      setGroup(this.state, data.group);
      this.refresh();
    }
  }, {
    key: "loadTicket",
    value: function (_loadTicket) {
      function loadTicket(_x) {
        return _loadTicket.apply(this, arguments);
      }

      loadTicket.toString = function () {
        return _loadTicket.toString();
      };

      return loadTicket;
    }(function (id) {
      var _this4 = this;

      loadTicket(this.state, id);
      this.refresh();
      this.socket.emit("load_ticket", id, function (ticket) {
        receiveTicket(_this4.state, id, ticket);
        _this4.refresh();
      });
    })
  }, {
    key: "loadAppointment",
    value: function loadAppointment(id) {
      var _this5 = this;

      if (isStaff(this.state)) {
        this.socket.emit("load_appointment", id, function (appointment) {
          setAppointment(_this5.state, appointment);
          _this5.refresh();
        });
      }
    }
  }, {
    key: "loadGroup",
    value: function loadGroup(id) {
      var _this6 = this;

      if (isStaff(this.state)) {
        this.socket.emit("load_group", id, function (group) {
          setGroup(_this6.state, group);
          _this6.refresh();
        });
      }
    }
  }, {
    key: "toggleFilter",
    value: function toggleFilter() {
      this.state.filter.enabled = !this.state.filter.enabled;
      this.refresh();
    }
  }, {
    key: "setFilter",
    value: function setFilter(filter) {
      filter.enabled = !!this.state.filter.enabled;
      this.state.filter = filter;
      this.refresh();
    }
  }, {
    key: "addMessage",
    value: function (_addMessage) {
      function addMessage(_x2, _x3, _x4) {
        return _addMessage.apply(this, arguments);
      }

      addMessage.toString = function () {
        return _addMessage.toString();
      };

      return addMessage;
    }(function (message, category, ttl) {
      var _this7 = this;

      var id = addMessage(this.state, message, category);
      this.refresh();
      if (ttl) {
        setTimeout(function () {
          return _this7.clearMessage(id);
        }, ttl);
      }
    })
  }, {
    key: "clearMessage",
    value: function (_clearMessage) {
      function clearMessage(_x5) {
        return _clearMessage.apply(this, arguments);
      }

      clearMessage.toString = function () {
        return _clearMessage.toString();
      };

      return clearMessage;
    }(function (id) {
      clearMessage(this.state, id);
      this.refresh();
    })
  }, {
    key: "makeRequest",
    value: function makeRequest(eventType, request) {
      var _this8 = this;

      var follow_redirect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var callback = arguments[3];

      if (typeof request === "function") {
        follow_redirect = request;
        request = undefined;
      }
      if (typeof follow_redirect === "function") {
        callback = follow_redirect;
        follow_redirect = false;
      }
      var cb = function cb(response) {
        if (response == null) {
          if (callback) callback(response);
          return;
        }
        var messages = response.messages || [];
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = messages[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var message = _step5.value;

            _this8.addMessage(message.text, message.category, message.ttl);
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        if (follow_redirect && response.redirect) {
          _this8.router.history.push(response.redirect);
        }
        if (callback) callback(response);
      };
      if (request !== undefined) {
        this.socket.emit(eventType, request, cb);
      } else {
        this.socket.emit(eventType, cb);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var _ReactRouterDOM = ReactRouterDOM,
          BrowserRouter = _ReactRouterDOM.BrowserRouter,
          Route = _ReactRouterDOM.Route,
          Switch = _ReactRouterDOM.Switch;

      var state = this.state;

      var Root = isPartyRoot(state) ? Party : Home;

      return React.createElement(
        BrowserRouter,
        { ref: function ref(router) {
            return _this9.router = router;
          } },
        React.createElement(
          "div",
          null,
          React.createElement(
            Switch,
            null,
            React.createElement(Route, {
              exact: true,
              path: "/",
              render: function render(props) {
                return React.createElement(Root, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              exact: true,
              path: "/party",
              render: function render(props) {
                return React.createElement(Party, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              exact: true,
              path: "/queue",
              render: function render(props) {
                return React.createElement(Home, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              exact: true,
              path: "/appointments",
              render: function render(props) {
                return React.createElement(Appointments, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              exact: true,
              path: "/online_setup",
              render: function render(props) {
                return React.createElement(StaffOnlineSetup, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: "/admin",
              render: function render(props) {
                return React.createElement(AdminLayout, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: "/activity_log",
              render: function render(props) {
                return React.createElement(ActivityLogLayout, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: "/error",
              render: function render(props) {
                return React.createElement(ErrorView, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: "/presence",
              render: function render(props) {
                return React.createElement(PresenceIndicator, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              path: "/tickets/:id",
              render: function render(props) {
                return React.createElement(TicketLayout, _extends({
                  state: state,
                  socket: _this9.socket,
                  loadTicket: _this9.loadTicket
                }, props));
              }
            }),
            React.createElement(Route, {
              path: "/appointments/:id",
              render: function render(props) {
                return React.createElement(AppointmentLayout, _extends({
                  state: state,
                  socket: _this9.socket,
                  loadAppointment: _this9.loadAppointment
                }, props));
              }
            }),
            React.createElement(Route, {
              path: "/groups/:id",
              render: function render(props) {
                return React.createElement(PartyGroupLayout, _extends({
                  state: state,
                  socket: _this9.socket,
                  loadGroup: _this9.loadGroup
                }, props));
              }
            }),
            React.createElement(Route, {
              path: "/user/:id",
              render: function render(props) {
                return React.createElement(UserLayout, _extends({ state: state }, props));
              }
            }),
            React.createElement(Route, {
              render: function render(props) {
                return React.createElement(ErrorView, _extends({ state: state }, props, { message: "Page Not Found" }));
              }
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);


"use strict";

function AppointmentButtons(_ref) {
  var ids = _ref.ids;

  var action = function action(_action) {
    return function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this action!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!"
      }).then(function (result) {
        if (result.value) {
          app.makeRequest("bulk_appointment_action", { action: _action, ids: ids }, function () {
            Swal.fire("Success!", "Your action has been performed.", "success");
          });
        }
      });
    };
  };

  var _ReactRouterDOM = ReactRouterDOM,
      Link = _ReactRouterDOM.Link;


  return React.createElement(
    "div",
    { className: "appointment-buttons" },
    ids == null && React.createElement(
      Link,
      { className: "btn btn-success", to: "/admin/appointments" },
      "Add Appointments"
    ),
    React.createElement(
      "button",
      { className: "btn btn-warning", onClick: action("open_all_assigned") },
      "Activate all assigned appointments"
    ),
    React.createElement(
      "button",
      { className: "btn btn-primary", onClick: action("resolve_all_past") },
      "Resolve all past appointments"
    ),
    React.createElement(
      "button",
      {
        className: "btn btn-danger",
        onClick: action("remove_all_unassigned")
      },
      "Delete all unassigned appointments"
    ),
    React.createElement(
      "button",
      {
        className: "btn btn-info",
        onClick: action("resend_reminder_emails")
      },
      "Resend reminder emails"
    )
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var calcSpareCapacity = function calcSpareCapacity(appointment) {
  return Math.max(0, appointment.capacity - appointment.signups.length);
};

function AppointmentCard(_ref) {
  var currentUser = _ref.currentUser,
      locations = _ref.locations,
      appointment = _ref.appointment,
      assignments = _ref.assignments,
      compact = _ref.compact,
      onStudentSignup = _ref.onStudentSignup;

  var panelColor = "panel-default";
  var canAdd = true;

  var spareCapacity = calcSpareCapacity(appointment);

  if (currentUser.isStaff) {
    if (appointment.helper && appointment.status === "hidden") {
      panelColor = "panel-danger";
    } else if (appointment.helper && appointment.helper.id === currentUser.id) {
      panelColor = "panel-primary";
    } else if (currentUser.isStaff && !appointment.helper) {
      panelColor = "panel-warning";
    }
  } else {
    if (appointment.signups.some(function (_ref2) {
      var user = _ref2.user;
      return user && user.id === currentUser.id;
    })) {
      panelColor = "panel-success";
      canAdd = false;
    } else if (spareCapacity === 0) {
      panelColor = "panel-danger";
    }
  }

  var panelClass = classNames(_defineProperty({
    panel: true
  }, panelColor, true));

  var handleStaffSignup = function handleStaffSignup() {
    app.makeRequest("assign_staff_appointment", appointment.id);
  };

  var handleStaffUnassign = function handleStaffUnassign() {
    app.makeRequest("unassign_staff_appointment", appointment.id);
  };

  var handleStudentSignup = function handleStudentSignup(e, signup) {
    e.preventDefault();
    onStudentSignup(appointment, signup);
  };

  var toggleVisibility = function toggleVisibility() {
    app.makeRequest("toggle_visibility", appointment.id);
  };

  var deleteAppointment = function deleteAppointment() {
    app.makeRequest("delete_appointment", appointment.id);
  };

  return React.createElement(
    "div",
    { className: panelClass },
    React.createElement(AppointmentCardHeader, {
      appointment: appointment,
      locations: locations,
      compact: compact,
      isStaff: currentUser && currentUser.isStaff,
      onVisibilityToggle: toggleVisibility,
      onDeleteClick: deleteAppointment
    }),
    React.createElement(
      "ul",
      { className: "list-group" },
      (!compact || currentUser.isStaff) && React.createElement(AppointmentCardHelperRow, {
        appointment: appointment,
        currentUser: currentUser,
        onStaffSignup: handleStaffSignup,
        onStaffUnassign: handleStaffUnassign
      }),
      React.createElement(AppointmentCardStudentList, {
        appointment: appointment,
        currentUser: currentUser,
        assignments: assignments,
        compact: compact,
        onStudentSignup: handleStudentSignup
      }),
      (!compact || !currentUser.isStaff) && React.createElement(AppointmentCardPostList, {
        appointment: appointment,
        currentUser: currentUser,
        canAdd: canAdd,
        compact: compact,
        onStudentSignup: handleStudentSignup
      })
    )
  );
}

function AppointmentCardHeader(_ref3) {
  var appointment = _ref3.appointment,
      locations = _ref3.locations,
      isStaff = _ref3.isStaff,
      onVisibilityToggle = _ref3.onVisibilityToggle,
      onDeleteClick = _ref3.onDeleteClick;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modalOpen = _React$useState2[0],
      setModalOpen = _React$useState2[1];

  var spareCapacity = calcSpareCapacity(appointment);

  var subtitle = React.createElement(
    React.Fragment,
    null,
    locations[appointment.location_id].name,
    " \xB7 ",
    spareCapacity,
    " slot",
    spareCapacity === 1 ? "" : "s",
    " left"
  );

  var hiddenWarning = appointment.status === "hidden" && React.createElement(
    React.Fragment,
    null,
    " \xB7 HIDDEN"
  );

  var description = isStaff && appointment.description && React.createElement(
    React.Fragment,
    null,
    " \xB7 ",
    appointment.description
  );

  var visibilityClass = appointment.status === "hidden" ? "glyphicon glyphicon-play" : "glyphicon glyphicon-pause";

  return React.createElement(
    "div",
    { className: "panel-heading" },
    React.createElement(
      "div",
      { className: "btn-group", role: "group", style: { float: "right" } },
      isStaff && React.createElement(
        "button",
        {
          type: "button",
          className: "btn btn-xs btn-default",
          onClick: function onClick() {
            return setModalOpen(true);
          }
        },
        React.createElement("span", { className: "glyphicon glyphicon-edit", "aria-hidden": "true" })
      ),
      isStaff && React.createElement(
        "button",
        {
          type: "button",
          className: "btn btn-xs btn-default",
          onClick: onVisibilityToggle
        },
        React.createElement("span", { className: visibilityClass, "aria-hidden": "true" })
      ),
      isStaff && React.createElement(
        "button",
        {
          type: "button",
          className: "btn btn-danger btn-xs btn-default",
          onClick: onDeleteClick
        },
        React.createElement("span", { className: "glyphicon glyphicon-trash", "aria-hidden": "true" })
      )
    ),
    !isStaff && React.createElement(
      "span",
      { className: "badge" },
      appointment.description
    ),
    React.createElement(
      "h3",
      { className: "panel-title" },
      formatAppointmentDuration(appointment)
    ),
    React.createElement(
      "small",
      null,
      subtitle,
      hiddenWarning,
      description
    ),
    React.createElement(AppointmentEditForm, {
      isOpen: modalOpen,
      appointment: appointment,
      onSubmit: function onSubmit() {
        return setModalOpen(false);
      }
    })
  );
}

function AppointmentCardHelperRow(_ref4) {
  var appointment = _ref4.appointment,
      currentUser = _ref4.currentUser,
      onStaffSignup = _ref4.onStaffSignup,
      onStaffUnassign = _ref4.onStaffUnassign;

  return React.createElement(
    Slot,
    null,
    appointment.helper ? "Helper: " + appointment.helper.name : "No helper assigned yet.",
    currentUser.isStaff && (appointment.helper ? React.createElement(
      "button",
      {
        className: "btn btn-danger btn-take-over btn-xs",
        onClick: onStaffUnassign
      },
      "Unassign"
    ) : React.createElement(
      "button",
      {
        className: "btn btn-success btn-take-over btn-xs",
        onClick: onStaffSignup
      },
      "Sign up"
    ))
  );
}

function AppointmentCardStudentList(_ref5) {
  var appointment = _ref5.appointment,
      assignments = _ref5.assignments,
      currentUser = _ref5.currentUser,
      compact = _ref5.compact,
      onStudentSignup = _ref5.onStudentSignup;

  return appointment.signups.map(function (signup) {
    var assignmentText = signup.assignment_id ? assignments[signup.assignment_id].name : "";
    var questionText = (signup.assignment_id ? " " : "") + (parseInt(signup.question) ? "Q" : "") + (signup.question || "");
    return (signup.user && currentUser.id === signup.user.id || !compact) && React.createElement(
      Slot,
      {
        link: signup.user && (signup.user.id === currentUser.id || currentUser.isStaff),
        badgeText: assignmentText + questionText,
        onClick: function onClick(e) {
          return onStudentSignup(e, signup);
        }
      },
      currentUser.isStaff ? signup.user.name : signup.user && currentUser.id === signup.user.id ? "You (click to edit)" : "Anonymous Student"
    );
  });
}

function AppointmentCardPostList(_ref6) {
  var appointment = _ref6.appointment,
      currentUser = _ref6.currentUser,
      onStudentSignup = _ref6.onStudentSignup,
      compact = _ref6.compact,
      canAdd = _ref6.canAdd;

  var spareCapacity = calcSpareCapacity(appointment);
  return React.createElement(
    React.Fragment,
    null,
    currentUser.isStaff && React.createElement(
      Slot,
      { link: true, onClick: onStudentSignup },
      "Add a student to the section"
    ),
    !currentUser.isStaff && canAdd && spareCapacity > 0 && React.createElement(
      Slot,
      { link: true, onClick: onStudentSignup },
      "Add yourself to the section"
    ),
    !compact && Array(Math.max(spareCapacity - (canAdd || currentUser.isStaff), 0)).fill().map(function () {
      return React.createElement(
        Slot,
        { className: "slot-disabled" },
        "Extra Slot"
      );
    })
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function AppointmentEditForm(_ref) {
  var isOpen = _ref.isOpen,
      appointment = _ref.appointment,
      onSubmit = _ref.onSubmit;

  var root = React.useRef();

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      description = _React$useState2[0],
      setDescription = _React$useState2[1];

  React.useEffect(function () {
    setDescription(appointment.description);
  }, [isOpen, appointment]);

  React.useEffect(function () {
    if (isOpen) {
      $(root.current).modal("show");
    } else {
      $(root.current).modal("hide");
    }
  }, [isOpen]);

  var handleSubmit = function handleSubmit() {
    app.makeRequest("update_appointment", {
      id: appointment.id,
      description: description
    });
    onSubmit();
  };

  return ReactDOM.createPortal(React.createElement(
    "div",
    { className: "modal fade", ref: root, tabIndex: "-1", role: "dialog" },
    React.createElement(
      "div",
      { className: "modal-dialog", role: "document" },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement(
          "div",
          { className: "modal-header" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close"
            },
            React.createElement(
              "span",
              { "aria-hidden": "true" },
              "\xD7"
            )
          ),
          React.createElement(
            "h4",
            { className: "modal-title" },
            "Edit Appointment"
          )
        ),
        React.createElement(
          "div",
          { className: "modal-body" },
          React.createElement("input", {
            className: "form-control form-right",
            type: "text",
            name: "question",
            title: "Question",
            placeholder: "Description (keep it short!)",
            value: description,
            onChange: function onChange(e) {
              return setDescription(e.target.value);
            },
            required: true
          })
        ),
        React.createElement(
          "div",
          { className: "modal-footer" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-default",
              "data-dismiss": "modal"
            },
            "Close"
          ),
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-primary",
              onClick: handleSubmit
            },
            "Update"
          )
        )
      )
    )
  ), document.body);
}


"use strict";

var _ReactRouterDOM = ReactRouterDOM,
    Link = _ReactRouterDOM.Link;


function AppointmentLayout(_ref) {
  var state = _ref.state,
      match = _ref.match,
      loadAppointment = _ref.loadAppointment,
      socket = _ref.socket;

  var appointmentID = +match.params.id;
  if (!getAppointment(state, appointmentID)) {
    loadAppointment(appointmentID);
    return "loading...";
  }
  var appointment = getAppointment(state, appointmentID);

  var title = appointment.helper ? appointment.helper.shortName + "'s Section" : "Unassigned Section";

  var suffix = appointment.description && " for " + appointment.description;

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  var handleStaffSignup = function handleStaffSignup() {
    app.makeRequest("assign_staff_appointment", appointment.id);
  };

  var handleStaffUnassign = function handleStaffUnassign() {
    app.makeRequest("unassign_staff_appointment", appointment.id);
  };

  var updateAppointment = function updateAppointment(status) {
    return function () {
      app.makeRequest("set_appointment_status", {
        appointment: appointment.id,
        status: status
      });
    };
  };

  var attendanceDone = appointment.signups.every(function (_ref2) {
    var attendance_status = _ref2.attendance_status;
    return attendance_status !== "unknown";
  });

  var actionButton = null;

  if (state.currentUser.isStaff) {
    if (appointment.status === "resolved") {
      actionButton = React.createElement(
        Link,
        { to: "/old" },
        React.createElement(
          AppointmentLayoutButton,
          { color: "default", onClick: function onClick() {
              return null;
            } },
          "Return to Queue"
        )
      );
    } else if (!appointment.helper) {
      actionButton = React.createElement(
        AppointmentLayoutButton,
        { color: "success", onClick: handleStaffSignup },
        "Sign up to help section"
      );
    } else if (appointment.helper.id !== state.currentUser.id) {
      actionButton = React.createElement(
        "div",
        null,
        React.createElement(
          AppointmentLayoutButton,
          { color: "warning", onClick: handleStaffSignup },
          "Reassign Appointment"
        ),
        React.createElement(
          AppointmentLayoutButton,
          { color: "danger", onClick: handleStaffUnassign },
          "Unassign Appointment"
        )
      );
    } else if (appointment.status === "pending") {
      actionButton = React.createElement(
        "div",
        null,
        React.createElement(
          AppointmentLayoutButton,
          {
            color: "primary",
            onClick: updateAppointment("active")
          },
          "Start Appointment"
        ),
        React.createElement(
          AppointmentLayoutButton,
          { color: "danger", onClick: handleStaffUnassign },
          "Unassign Appointment"
        )
      );
    } else if (attendanceDone) {
      actionButton = React.createElement(
        "div",
        null,
        React.createElement(
          AppointmentLayoutButton,
          {
            color: "danger",
            onClick: updateAppointment("resolved")
          },
          "End Appointment"
        ),
        React.createElement(
          AppointmentLayoutButton,
          {
            color: "default",
            onClick: updateAppointment("pending")
          },
          "Requeue Appointment"
        )
      );
    } else {
      actionButton = React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          {
            className: "d-inline-block btn-block",
            tabIndex: "0",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "You must record attendance before ending appointments."
          },
          React.createElement(
            "button",
            {
              className: "btn btn-danger btn-lg btn-block",
              disabled: true,
              style: { pointerEvents: "none" }
            },
            "End Appointment"
          )
        ),
        React.createElement(
          AppointmentLayoutButton,
          {
            color: "default",
            onClick: updateAppointment("pending")
          },
          "Requeue Appointment"
        )
      );
    }
  }

  var onlineButtons = null;
  if (state.locations[appointment.location_id].online && (appointment.status === "active" || state.config["always_show_appointment_join_call"])) {
    var callURL = state.locations[appointment.location_id].link || appointment.helper.call_url;
    var callButton = callURL && React.createElement(
      AppointmentLayoutButton,
      {
        color: "success",
        onClick: function onClick() {
          return window.open(callURL, "_blank");
        }
      },
      "Join Call"
    );
    var docButton = appointment.helper.doc_url && React.createElement(
      AppointmentLayoutButton,
      {
        color: "info",
        onClick: function onClick() {
          return window.open(appointment.helper.doc_url, "_blank");
        }
      },
      "Open Shared Document"
    );
    if (callButton || docButton) {
      onlineButtons = React.createElement(
        React.Fragment,
        null,
        callButton,
        docButton,
        actionButton && React.createElement("hr", null)
      );
    }
  }

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { state: state, mode: "appointments" }),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("br", null),
      React.createElement(
        "h2",
        { className: "list-group-item-heading text-center" },
        title,
        suffix,
        React.createElement(
          "small",
          { className: "clearfix" },
          formatAppointmentDuration(appointment),
          " \xB7",
          " ",
          state.locations[appointment.location_id].name
        ),
        React.createElement(
          "p",
          { className: "ticket-view-text text-center" },
          " ",
          appointment.status[0].toUpperCase() + appointment.status.slice(1),
          " "
        ),
        React.createElement("hr", null),
        (onlineButtons || actionButton) && React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-xs-12 col-md-6 col-md-offset-3" },
            React.createElement(
              "div",
              { className: "well" },
              onlineButtons,
              actionButton
            )
          )
        )
      ),
      state.currentUser.isStaff && !attendanceDone && React.createElement(
        "div",
        { className: "alert alert-danger", role: "alert" },
        "Remember to record attendance!"
      ),
      React.createElement(Messages, { messages: state.messages }),
      React.createElement(
        "div",
        { className: "card-holder" },
        appointment.signups.map(function (signup) {
          return React.createElement(AppointmentStudentCard, {
            isStaff: state.currentUser.isStaff,
            status: appointment.status,
            signup: signup,
            assignments: state.assignments,
            okpyEndpointID: state.config.show_okpy_backups && state.config.okpy_endpoint_id
          });
        })
      ),
      React.createElement(ChatBox, {
        key: appointment.id,
        currentUser: state.currentUser,
        socket: socket,
        id: appointment.id,
        messages: appointment.messages,
        mode: "appointment"
      }),
      state.config.ticket_prompt && React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3 text-center" },
          React.createElement("hr", null),
          React.createElement(ReactMarkdown, { source: state.config.ticket_prompt })
        )
      )
    )
  );
}

function AppointmentLayoutButton(_ref3) {
  var color = _ref3.color,
      children = _ref3.children,
      onClick = _ref3.onClick;

  return React.createElement(
    "button",
    { className: "btn btn-" + color + " btn-lg btn-block", onClick: onClick },
    children
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function AppointmentOverlay(_ref) {
  var staffMode = _ref.staffMode,
      appointment = _ref.appointment,
      assignments = _ref.assignments,
      signup = _ref.signup,
      onSubmit = _ref.onSubmit,
      isOpen = _ref.isOpen;

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      email = _React$useState2[0],
      setEmail = _React$useState2[1];

  var _React$useState3 = React.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      assignment = _React$useState4[0],
      setAssignment = _React$useState4[1];

  var _React$useState5 = React.useState(""),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      question = _React$useState6[0],
      setQuestion = _React$useState6[1];

  var _React$useState7 = React.useState(""),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      description = _React$useState8[0],
      setDescription = _React$useState8[1];

  // logic for disabling unassigning appointments 3 minutes before the start time


  var referenceTimeZone = "America/Los_Angeles";
  var currTimeZone = moment.tz.guess();

  var _React$useState9 = React.useState(appointment !== null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      canCancel = _React$useState10[0],
      setCanCancel = _React$useState10[1];

  if (canCancel && appointment) {
    var timeLeft = moment.tz(appointment.start_time, referenceTimeZone).tz(currTimeZone).add(-3, "minutes").diff(moment());
    if (timeLeft <= 0) {
      setCanCancel(false);
    } else {
      setTimeout(function () {
        return setCanCancel(false);
      }, timeLeft);
    }
  }

  var root = React.useRef();

  React.useEffect(function () {
    if (signup) {
      setEmail(signup.user.email || "");
      setAssignment(signup.assignment_id || "");
      setQuestion(signup.question || "");
      setDescription(signup.description || "");
    } else {
      setEmail("");
      setAssignment("");
      setQuestion("");
      setDescription("");
    }
  }, [signup]);

  React.useEffect(function () {
    if (isOpen) {
      $(root.current).modal("show");
    } else {
      $(root.current).modal("hide");
    }
  }, [isOpen]);

  React.useEffect(function () {
    $(root.current).on("hide.bs.modal", onSubmit);
  }, []);

  var handleCancel = function handleCancel() {
    app.makeRequest("unassign_appointment", signup.id);
    onSubmit();
  };

  var handleSubmit = function handleSubmit() {
    app.makeRequest("assign_appointment", {
      appointment_id: appointment.id,
      assignment_id: parseInt(assignment),
      question: question,
      description: description,
      email: signup ? signup.user.email : email
    });
    onSubmit();
  };

  return ReactDOM.createPortal(React.createElement(
    "div",
    { className: "modal fade", ref: root, tabIndex: "-1", role: "dialog" },
    React.createElement(
      "div",
      { className: "modal-dialog", role: "document" },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement(
          "div",
          { className: "modal-header" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close"
            },
            React.createElement(
              "span",
              { "aria-hidden": "true" },
              "\xD7"
            )
          ),
          React.createElement(
            "h4",
            { className: "modal-title" },
            staffMode ? "Create / Edit Appointment Signup" : "What do you need help with?"
          )
        ),
        React.createElement(
          "div",
          { className: "modal-body" },
          !staffMode && React.createElement(
            "p",
            null,
            "Leave fields blank if you aren't yet sure what you want to ask about."
          ),
          React.createElement(SlotsForm, {
            assignments: assignments,
            email: email,
            onEmailChange: setEmail,
            selectedAssignment: assignment,
            onSelectedAssignmentChange: setAssignment,
            question: question,
            onQuestionChange: setQuestion,
            description: description,
            onDescriptionChange: setDescription,
            showEmail: staffMode && !signup
          })
        ),
        React.createElement(
          "div",
          { className: "modal-footer" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-default",
              "data-dismiss": "modal"
            },
            "Close"
          ),
          signup && canCancel && React.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-danger",
              onClick: handleCancel
            },
            "Cancel Appointment"
          ),
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-primary",
              onClick: handleSubmit
            },
            "Confirm"
          )
        )
      )
    )
  ), document.body);
}


"use strict";

function AppointmentStudentCard(_ref) {
  var status = _ref.status,
      signup = _ref.signup,
      assignments = _ref.assignments,
      isStaff = _ref.isStaff,
      okpyEndpointID = _ref.okpyEndpointID;

  var assignmentName = signup.assignment_id ? assignments[signup.assignment_id].name : "";
  var questionName = signup.question ? " Question " + signup.question : "";

  var okPyURL = "https://okpy.org/admin/course/" + okpyEndpointID + "/" + encodeURIComponent(signup.user.email);
  var okPyLink = isStaff && okpyEndpointID && React.createElement(
    "button",
    {
      className: "btn btn-sm btn-default pull-right",
      onClick: function onClick() {
        return window.open(okPyURL, "_blank");
      }
    },
    "View Backups"
  );

  var question = assignmentName + questionName ? React.createElement(
    Slot,
    null,
    React.createElement(
      "div",
      { className: "slot-question-row" },
      assignmentName + questionName,
      okPyLink
    )
  ) : React.createElement(
    Slot,
    { className: "slot-question-row slot-disabled" },
    React.createElement(
      "i",
      null,
      "No question specified"
    ),
    okPyLink
  );

  var description = signup.description ? React.createElement(
    Slot,
    { className: "ticket-view-desc" },
    signup.description
  ) : React.createElement(
    Slot,
    { className: "slot-disabled" },
    React.createElement(
      "i",
      null,
      "No description provided"
    )
  );

  var colorLookup = {
    unknown: "default",
    present: "primary",
    excused: "warning",
    absent: "danger"
  };

  var color = colorLookup[signup.attendance_status];

  return React.createElement(
    "div",
    { className: "panel panel-" + color },
    React.createElement(
      "div",
      { className: "panel-heading" },
      React.createElement(
        "h3",
        { className: "panel-title" },
        signup.user.name
      )
    ),
    React.createElement(
      "ul",
      { className: "list-group" },
      question,
      description
    ),
    isStaff && status === "active" && React.createElement(
      "div",
      { className: "panel-footer attendance-buttons" },
      React.createElement(AttendanceButton, { color: "primary", signup: signup, status: "present" }),
      React.createElement(AttendanceButton, { color: "warning", signup: signup, status: "excused" }),
      React.createElement(AttendanceButton, { color: "danger", signup: signup, status: "absent" })
    )
  );
}

function AttendanceButton(_ref2) {
  var signup = _ref2.signup,
      status = _ref2.status,
      color = _ref2.color;

  var handleClick = function handleClick() {
    app.makeRequest("mark_attendance", { signup_id: signup.id, status: status });
  };

  var active = signup.attendance_status === status;

  return React.createElement(
    "button",
    {
      className: "btn btn-" + color,
      onClick: handleClick,
      disabled: signup.status === "resolved" || active
    },
    status[0].toUpperCase() + status.slice(1).toLowerCase()
  );
}


"use strict";

function Appointments(_ref) {
  var state = _ref.state;
  var _ReactRouterDOM = ReactRouterDOM,
      Redirect = _ReactRouterDOM.Redirect;


  if (!state.loaded) return null;

  if (!state.currentUser) {
    return React.createElement(Redirect, { to: "/" });
  }
  return React.createElement(
    "div",
    { className: "admin-root" },
    React.createElement(Navbar, { state: state, mode: "appointments" }),
    React.createElement(OfflineIndicator, { offline: state.offline && state.loaded }),
    React.createElement(FutureSlots, { state: state })
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function ChatBox(_ref) {
  var currentUser = _ref.currentUser,
      id = _ref.id,
      mode = _ref.mode,
      messages = _ref.messages;

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      typed = _React$useState2[0],
      setTyped = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      numMessages = _React$useState4[0],
      setNumMessages = _React$useState4[1];

  var historyRef = React.useRef();

  var handleChange = function handleChange(e) {
    setTyped(e.target.value);
  };

  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === "Enter") {
      postMessage();
    }
  };

  var postMessage = function postMessage() {
    if (!typed.trim()) {
      return;
    }
    app.makeRequest("send_chat_message", {
      content: typed,
      mode: mode,
      id: id
    });
    setTyped("");
  };

  var scrollDown = function scrollDown() {
    $('[data-toggle="tooltip"]').tooltip();
    historyRef.current.scrollTop = historyRef.current.scrollHeight;
  };

  React.useEffect(scrollDown, [messages]);

  function formatTooltip(message) {
    var omitUsername = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!message.created) return message.user.name;
    var time = moment.utc(message.created).local().format("ddd hh:mmA");
    if (omitUsername) return time;
    return message.user.name + " | " + time;
  }

  if (messages.length != numMessages) {
    if (!document.hasFocus()) {
      var message = messages[messages.length - 1];
      notifyUser("New Chat Message from " + message.user.shortName, message.body, null);
    }
    setNumMessages(messages.length);
  }

  var body = messages.map(function (message, i) {
    var user = message.user,
        body = message.body;

    if (user.id === currentUser.id) {
      return React.createElement(
        "div",
        { className: "my-chat-bubble" },
        React.createElement(
          "div",
          {
            className: "chat-text",
            "data-toggle": "tooltip",
            "data-placement": "right",
            title: formatTooltip(message, true)
          },
          body
        )
      );
    } else if (messages[i + 1] && user.id === messages[i + 1].user.id) {
      return React.createElement(
        "div",
        { className: "chat-bubble" },
        React.createElement(
          "div",
          { className: "chat-icon none" },
          user.shortName[0]
        ),
        React.createElement(
          "div",
          {
            className: "chat-text",
            "data-toggle": "tooltip",
            "data-placement": "right",
            title: formatTooltip(message)
          },
          body
        )
      );
    } else {
      return React.createElement(
        "div",
        { className: "chat-bubble" },
        React.createElement(
          "div",
          { className: "chat-icon" },
          user.shortName[0]
        ),
        React.createElement(
          "div",
          {
            className: "chat-text",
            "data-toggle": "tooltip",
            "data-placement": "right",
            title: formatTooltip(message)
          },
          body
        )
      );
    }
  });

  return React.createElement(
    "div",
    { className: "panel panel-default" },
    React.createElement(
      "div",
      { className: "panel-heading" },
      "Chat\uFE0F"
    ),
    React.createElement(
      "div",
      { className: "panel-body" },
      React.createElement(
        "div",
        { className: "chat-history", ref: historyRef },
        body
      ),
      React.createElement(
        "div",
        { className: "input-group chat-input" },
        React.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Type a message...",
          onChange: handleChange,
          onKeyPress: handleKeyPress,
          value: typed
        }),
        React.createElement(
          "div",
          { className: "input-group-btn" },
          React.createElement(
            "button",
            {
              className: "btn btn-default",
              type: "button",
              onClick: postMessage
            },
            React.createElement("span", { className: "glyphicon glyphicon-play" })
          )
        )
      )
    )
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function ConfigLinked(_ref) {
  var configKey = _ref.configKey,
      _ref$configKeys = _ref.configKeys,
      configKeys = _ref$configKeys === undefined ? [] : _ref$configKeys,
      config = _ref.config,
      render = _ref.render;

  var _React$useState = React.useState(config[configKey]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState(configKeys.map(function (key) {
    return config[key];
  })),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      values = _React$useState4[0],
      setValues = _React$useState4[1];

  var submitButtonRef = React.useRef();

  React.useEffect(function () {
    setValue(config[configKey]);
    setValues(configKeys.map(function (key) {
      return config[key];
    }));
  }, configKeys.map(function (key) {
    return config[key];
  }).concat([config[configKey]]));

  var setters = configKeys.map(function (key, i) {
    return function (val) {
      return setValues(function (values) {
        return values.slice(0, i).concat([val]).concat(values.slice(i + 1));
      });
    };
  });
  var handlers = setters.map(function (setter) {
    return function (e) {
      return setter(e.target.value);
    };
  });

  var handleSubmit = function handleSubmit(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (submitButtonRef.current) {
      submitButtonRef.current.classList.add("is-loading");
      submitButtonRef.current.setAttribute("disabled", true);
    }
    var time = Date.now();

    var requestBody = configKey ? { key: configKey, value: e.target ? value : e } : { keys: configKeys, values: values };

    app.makeRequest("update_config", requestBody, function (isSuccess) {
      if (submitButtonRef.current && isSuccess) {
        setTimeout(function () {
          submitButtonRef.current.classList.remove("is-loading");
          submitButtonRef.current.removeAttribute("disabled");
        }, 250 - (Date.now() - time));
      }
    });

    return false;
  };

  var submitButton = React.createElement(
    "button",
    {
      className: "btn btn-default",
      name: "btn-submit",
      type: "submit",
      ref: submitButtonRef
    },
    "Save"
  );

  var onChange = function onChange(e) {
    return setValue(e.target.value);
  };

  return render({
    onSubmit: handleSubmit,
    onChange: onChange,
    value: value,
    setValue: setValue,
    submitButton: submitButton,
    values: values,
    setters: setters,
    handlers: handlers
  });
}


"use strict";

function ConfigLinkedMarkdownInput(_ref) {
  var title = _ref.title,
      placeholder = _ref.placeholder,
      config = _ref.config,
      configKey = _ref.configKey;

  return React.createElement(ConfigLinked, {
    configKey: configKey,
    config: config,
    render: function render(_ref2) {
      var onSubmit = _ref2.onSubmit,
          onChange = _ref2.onChange,
          value = _ref2.value,
          submitButton = _ref2.submitButton;
      return React.createElement(
        "form",
        { onSubmit: onSubmit },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            null,
            title,
            " (supports Markdown)"
          ),
          React.createElement("textarea", {
            className: "form-control",
            name: "ticket-input",
            placeholder: placeholder,
            value: value,
            onChange: onChange
          })
        ),
        React.createElement(
          "label",
          null,
          title,
          " Preview:"
        ),
        React.createElement(
          "div",
          {
            className: "alert alert-info alert-dismissable fade in",
            role: "alert"
          },
          React.createElement(
            "button",
            {
              type: "button",
              className: "close",
              "aria-label": "Close",
              "data-dismiss": "alert"
            },
            React.createElement(
              "span",
              { "aria-hidden": "true" },
              "\xD7"
            )
          ),
          React.createElement(ReactMarkdown, { source: value })
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "div",
            null,
            submitButton
          )
        )
      );
    }
  });
}


"use strict";

function ConfigLinkedNumeric(_ref) {
  var config = _ref.config,
      configKey = _ref.configKey;

  return React.createElement(ConfigLinked, {
    configKey: configKey,
    config: config,
    render: function render(_ref2) {
      var onSubmit = _ref2.onSubmit,
          onChange = _ref2.onChange,
          value = _ref2.value,
          submitButton = _ref2.submitButton;
      return React.createElement(
        "form",
        { onSubmit: onSubmit },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("input", {
            type: "number",
            className: "form-control",
            required: "required",
            value: value,
            onChange: onChange
          })
        ),
        submitButton
      );
    }
  });
}


"use strict";

function ConfigLinkedText(_ref) {
  var config = _ref.config,
      configKey = _ref.configKey,
      _ref$lines = _ref.lines,
      lines = _ref$lines === undefined ? 1 : _ref$lines,
      placeholder = _ref.placeholder,
      title = _ref.title,
      optional = _ref.optional;

  var Input = lines > 1 ? "textarea" : "input";
  return React.createElement(ConfigLinked, {
    configKey: configKey,
    config: config,
    render: function render(_ref2) {
      var onSubmit = _ref2.onSubmit,
          onChange = _ref2.onChange,
          value = _ref2.value,
          submitButton = _ref2.submitButton;
      return React.createElement(
        "form",
        { onSubmit: onSubmit },
        React.createElement(
          "div",
          { className: "form-group" },
          title && React.createElement(
            "label",
            null,
            title
          ),
          React.createElement(Input, {
            type: "text",
            className: "form-control",
            required: optional ? undefined : "required",
            value: value,
            onChange: onChange,
            placeholder: placeholder,
            rows: lines
          })
        ),
        submitButton
      );
    }
  });
}


"use strict";

function ConfigLinkedToggle(_ref) {
  var config = _ref.config,
      configKey = _ref.configKey,
      _ref$offText = _ref.offText,
      offText = _ref$offText === undefined ? "No" : _ref$offText,
      _ref$onText = _ref.onText,
      onText = _ref$onText === undefined ? "Yes" : _ref$onText;

  if (!app || Object.keys(config).length === 0) {
    return null;
  }
  return React.createElement(ConfigLinked, {
    configKey: configKey,
    config: config,
    render: function render(_ref2) {
      var onSubmit = _ref2.onSubmit,
          value = _ref2.value;
      return React.createElement(FancyToggle, {
        checked: value === "true" || value === true,
        offText: offText,
        onText: onText,
        onChange: function onChange(x) {
          return onSubmit(x ? "true" : "false");
        }
      });
    }
  });
}


"use strict";

function ConfirmedAppointment(_ref) {
  var mySignups = _ref.mySignups,
      locations = _ref.locations,
      assignments = _ref.assignments,
      state = _ref.state;

  var body = void 0;
  if (mySignups.length === 0) {
    body = React.createElement(
      "p",
      null,
      "Choose a slot to schedule a visit to office hours! "
    );
  } else {
    var innerBody = mySignups.map(function (_ref2) {
      var appointment = _ref2.appointment,
          signup = _ref2.signup;
      return React.createElement(ConfirmedAppointmentCard, {
        appointment: appointment,
        assignments: assignments,
        signup: signup,
        locations: locations,
        state: state
      });
    });
    body = React.createElement(
      "div",
      { className: "confirmed-appointment-container" },
      innerBody
    );
  }
  return React.createElement(
    "div",
    { className: "jumbotron" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h2",
        null,
        " Your Appointments "
      ),
      body
    )
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function ConfirmedAppointmentCard(_ref) {
  var appointment = _ref.appointment,
      signup = _ref.signup,
      locations = _ref.locations,
      assignments = _ref.assignments,
      state = _ref.state;

  var assignmentName = signup.assignment_id && assignments[signup.assignment_id].name;
  var questionName = signup.question ? " Question " + signup.question : "";

  var questionBlock = assignmentName && React.createElement(
    React.Fragment,
    null,
    "have asked for help with ",
    React.createElement(
      "b",
      null,
      assignmentName + questionName
    ),
    ", and"
  );
  var helperBlock = appointment.helper && React.createElement(
    React.Fragment,
    null,
    "by ",
    React.createElement(
      "b",
      null,
      appointment.helper.name
    ),
    ",",
    " "
  );

  var content = React.createElement(
    React.Fragment,
    null,
    "Your appointment is at ",
    React.createElement(
      "b",
      null,
      locations[appointment.location_id].name
    ),
    ". You ",
    questionBlock,
    " will be helped ",
    helperBlock,
    " in a group of",
    " ",
    React.createElement(
      "b",
      null,
      Math.max(appointment.capacity, appointment.signups.length)
    ),
    "."
  );

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modalOpen = _React$useState2[0],
      setModalOpen = _React$useState2[1];

  var history = ReactRouterDOM.useHistory();

  var handleClick = function handleClick(e) {
    e.preventDefault();
    if (appointment.status === "active" || state.config["always_show_appointment_join_call"]) {
      history.push("/appointments/" + appointment.id);
    } else {
      setModalOpen(true);
    }
  };

  var style = {};

  if (appointment.status === "active") {
    style.borderLeft = "5px solid #337ab7";
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "panel panel-default", onClick: handleClick, style: style },
      React.createElement(
        "ul",
        { className: "list-group" },
        React.createElement(
          "a",
          { href: "#", className: "list-group-item" },
          (appointment.status === "active" || state.config["always_show_appointment_join_call"]) && React.createElement(
            "span",
            { className: "badge badge-primary" },
            "Click To Enter"
          ),
          React.createElement(
            "h4",
            { className: "list-group-item-heading appointment-card-heading" },
            formatAppointmentDate(appointment)
          ),
          React.createElement(
            "div",
            { className: "appointment-card-subheading" },
            formatAppointmentDuration(appointment)
          ),
          content
        )
      )
    ),
    React.createElement(AppointmentOverlay, {
      assignments: assignments,
      appointment: appointment,
      signup: signup,
      isOpen: modalOpen,
      onSubmit: function onSubmit() {
        return setModalOpen(false);
      }
    })
  );
}


"use strict";

function DescriptionBox(_ref) {
  var editable = _ref.editable,
      locked = _ref.locked,
      state = _ref.state,
      ticket = _ref.ticket,
      prompt = _ref.prompt,
      placeholder = _ref.placeholder,
      description = _ref.description,
      _onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;

  var staff = isStaff(state);

  if (!editable && staff || locked) {
    return React.createElement(
      "p",
      { className: "ticket-view-desc" },
      ticket.description ? ticket.description : React.createElement(
        "i",
        null,
        "No description"
      )
    );
  } else {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h4",
        null,
        prompt
      ),
      React.createElement("textarea", {
        className: "description-box",
        value: description,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        rows: "5",
        placeholder: placeholder
      }),
      description !== ticket.description ? React.createElement(
        "button",
        {
          onClick: onSubmit,
          className: "description-button btn btn-default btn-lg btn-block"
        },
        " ",
        "Save Description",
        " "
      ) : null
    );
  }
}


"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorView = function (_React$Component) {
  _inherits(ErrorView, _React$Component);

  function ErrorView() {
    _classCallCheck(this, ErrorView);

    return _possibleConstructorReturn(this, (ErrorView.__proto__ || Object.getPrototypeOf(ErrorView)).apply(this, arguments));
  }

  _createClass(ErrorView, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var query = Qs.parse(this.props.location.search.substring(1));
      var state = this.props.state;

      state.message = this.props.message || query.message || "Unknown error";
    }
  }, {
    key: "render",
    value: function render() {
      var _ReactRouterDOM = ReactRouterDOM,
          Link = _ReactRouterDOM.Link;

      var state = this.props.state;

      return React.createElement(
        "div",
        null,
        React.createElement(Navbar, { state: state, mode: "error" }),
        React.createElement(
          "div",
          { className: "container error-view" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-xs-12" },
              React.createElement(
                "div",
                { className: "alert alert-danger" },
                React.createElement(
                  "p",
                  null,
                  state.message
                )
              ),
              React.createElement(
                Link,
                { className: "btn btn-primary", to: "/old" },
                "Home"
              )
            )
          )
        )
      );
    }
  }]);

  return ErrorView;
}(React.Component);


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function FancyToggle(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      offText = _ref.offText,
      onText = _ref.onText;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      initialized = _React$useState2[0],
      setInitialized = _React$useState2[1];

  var toggleRef = React.useRef();

  var initializeToggle = function initializeToggle(toggle) {
    if (!toggle || initialized) return;
    $(toggle).bootstrapToggle();
    $(toggle).change(function () {
      return handleClick(toggle);
    });
    setInitialized(true);
    toggleRef.current = toggle;
  };

  var handleClick = function handleClick(toggle) {
    onChange(toggle.checked);
  };

  React.useEffect(function () {
    if (toggleRef.current) {
      $(toggleRef.current).off("change");
      $(toggleRef.current).bootstrapToggle(checked ? "on" : "off");
      $(toggleRef.current).change(function () {
        return handleClick(toggleRef.current);
      });
    }
  }, [toggleRef.current, checked]);

  return React.createElement("input", {
    ref: initializeToggle,
    type: "checkbox",
    defaultChecked: checked,
    "data-off": offText,
    "data-on": onText,
    "data-size": "mini",
    "data-toggle": "toggle",
    onClick: handleClick
  });
}


"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterControls = function (_React$Component) {
  _inherits(FilterControls, _React$Component);

  function FilterControls(props) {
    _classCallCheck(this, FilterControls);

    var _this = _possibleConstructorReturn(this, (FilterControls.__proto__ || Object.getPrototypeOf(FilterControls)).call(this, props));

    _this.updateFilter = _this.updateFilter.bind(_this);
    return _this;
  }

  _createClass(FilterControls, [{
    key: "updateFilter",
    value: function updateFilter() {
      app.setFilter({
        assignment_id: $("#assignment").val(),
        location_id: $("#location").val(),
        question: $("#question").val()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          filter = _props.filter,
          state = _props.state;
      var assignments = state.assignments,
          locations = state.locations;


      var filteredAssignments = Object.values(assignments).sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      var filteredLocations = Object.values(locations).sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });

      return React.createElement(
        "div",
        { className: "row form-group form-group-lg" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-sm-4 filter-field" },
          React.createElement(SelectPicker, {
            options: filteredAssignments,
            emptyOption: "Any Assignment",
            className: "selectpicker form-control",
            "data-live-search": "true",
            "data-size": "8",
            "data-width": "100%",
            "data-style": "btn-lg btn-default",
            id: "assignment",
            name: "assignment",
            title: "Assignment",
            onChange: this.updateFilter
          })
        ),
        React.createElement(
          "div",
          { className: "col-xs-12 col-sm-4 filter-field" },
          React.createElement("input", {
            className: "form-control",
            type: "text",
            id: "question",
            name: "question",
            title: "Question",
            placeholder: "Question",
            onChange: this.updateFilter
          })
        ),
        React.createElement(
          "div",
          { className: "col-xs-12 col-sm-4 filter-field" },
          React.createElement(SelectPicker, {
            options: filteredLocations,
            emptyOption: "Any Location",
            className: "selectpicker form-control",
            id: "location",
            "data-width": "100%",
            "data-style": "btn-lg btn-default",
            name: "location",
            title: "Location",
            onChange: this.updateFilter
          })
        ),
        React.createElement("hr", null)
      );
    }
  }]);

  return FilterControls;
}(React.Component);


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function FutureSlots(_ref) {
  var state = _ref.state;
  var assignments = state.assignments,
      appointments = state.appointments,
      locations = state.locations,
      currentUser = state.currentUser,
      messages = state.messages;

  var filteredAssignments = Object.values(assignments).filter(function (assignment) {
    return assignment.visible;
  }).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  var hiddenTypes = currentUser && currentUser.isStaff ? ["resolved"] : ["resolved", "hidden"];

  var currentAppointments = appointments.filter(function (_ref2) {
    var status = _ref2.status;
    return !hiddenTypes.includes(status);
  });

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      compact = _React$useState2[0],
      setCompact = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      hideFull = _React$useState4[0],
      setHideFull = _React$useState4[1];

  React.useEffect(function () {
    return setCompact(currentUser && !currentUser.isStaff);
  }, [currentUser && currentUser.isStaff]);

  var days = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = currentAppointments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var appointment = _step.value;

      if (appointment.status === "active") {
        continue;
      }
      if (hideFull && appointment.signups.length >= appointment.capacity) {
        continue;
      }
      var date = formatAppointmentDate(appointment);
      if (!days.has(date)) {
        days.set(date, []);
      }
      days.get(date).push(appointment);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = days.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var value = _step2.value;

      value.sort(appointmentTimeComparator);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _React$useState5 = React.useState(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      openedAppointment = _React$useState6[0],
      setOpenedAppointment = _React$useState6[1];

  var _React$useState7 = React.useState(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      openedSignup = _React$useState8[0],
      setOpenedSignup = _React$useState8[1];

  var _React$useState9 = React.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      modalOpen = _React$useState10[0],
      setModalOpen = _React$useState10[1];

  var handleAddClick = function handleAddClick(appointment, signup) {
    setOpenedAppointment(appointment);
    setOpenedSignup(signup);
    setModalOpen(true);
  };

  var handleSubmit = function handleSubmit() {
    setModalOpen(false);
  };

  var mySignups = [];
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = currentAppointments[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _appointment = _step3.value;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = _appointment.signups[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var signup = _step4.value;

          if (signup.user && signup.user.id === currentUser.id) {
            mySignups.push({ appointment: _appointment, signup: signup });
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return React.createElement(
    React.Fragment,
    null,
    currentUser && !currentUser.isStaff && React.createElement(ConfirmedAppointment, {
      state: state,
      mySignups: mySignups,
      locations: locations,
      assignments: assignments
    }),
    currentUser && currentUser.isStaff && React.createElement(StaffUpcomingAppointments, {
      myAppointments: getMyAppointmentsStaff(state),
      locations: locations,
      assignments: assignments
    }),
    (!currentUser || currentUser.isStaff) && React.createElement("br", null),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(Messages, { messages: messages }),
      state.config.appointment_prompt && React.createElement(
        "div",
        { className: "alert alert-info fade in", role: "alert" },
        React.createElement(
          "button",
          {
            type: "button",
            className: "close",
            "aria-label": "Close",
            "data-dismiss": "alert"
          },
          React.createElement(
            "span",
            { "aria-hidden": "true" },
            "\xD7"
          )
        ),
        React.createElement(ReactMarkdown, { source: state.config.appointment_prompt })
      ),
      React.createElement(
        "div",
        {
          className: "alert alert-warning alert-dismissable fade in",
          role: "alert"
        },
        React.createElement(
          "button",
          {
            type: "button",
            className: "close",
            "aria-label": "Close",
            "data-dismiss": "alert"
          },
          React.createElement(
            "span",
            { "aria-hidden": "true" },
            "\xD7"
          )
        ),
        React.createElement(
          "h4",
          null,
          "Appointment Limits"
        ),
        React.createElement(
          "h5",
          null,
          "You cannot enroll in more than",
          " ",
          state.config.daily_appointment_limit,
          " appointments per day, or more than ",
          state.config.weekly_appointment_limit,
          " per week. You also cannot be signed up for more than",
          " ",
          state.config.simul_appointment_limit,
          " appointments that have not yet occurred."
        )
      ),
      (!currentUser || currentUser.isStaff) && React.createElement(AppointmentButtons, null),
      React.createElement(FancyToggle, {
        checked: compact,
        onChange: setCompact,
        offText: "Regular",
        onText: "Compact"
      }),
      " ",
      React.createElement(FancyToggle, {
        checked: hideFull,
        onChange: setHideFull,
        offText: "Show All",
        onText: "Hide Full"
      }),
      Array.from(days.entries()).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            day = _ref4[0],
            dayAppointments = _ref4[1];

        return React.createElement(
          "div",
          null,
          React.createElement(
            "h3",
            null,
            day
          ),
          currentUser != null && currentUser.isStaff && React.createElement(AppointmentButtons, { ids: dayAppointments.map(function (_ref5) {
              var id = _ref5.id;
              return id;
            }) }),
          React.createElement(
            "div",
            {
              className: "card-holder " + (compact ? "compact-card-holder" : "")
            },
            dayAppointments.map(function (appointment) {
              return React.createElement(AppointmentCard, {
                locations: locations,
                appointment: appointment,
                currentUser: currentUser,
                assignments: assignments,
                onStudentSignup: handleAddClick,
                compact: compact
              });
            })
          ),
          React.createElement("hr", null)
        );
      })
    ),
    React.createElement(AppointmentOverlay, {
      assignments: filteredAssignments,
      appointment: openedAppointment,
      signup: openedSignup,
      staffMode: currentUser && currentUser.isStaff,
      isOpen: modalOpen,
      onSubmit: handleSubmit
    })
  );
}


"use strict";

var GroupActions = function GroupActions(_ref) {
  var state = _ref.state,
      status = _ref.status,
      tickets = _ref.tickets;

  if (!isStaff(state)) return null;
  var ticket_ids = tickets.map(function (ticket) {
    return ticket.id;
  });
  var heldTickets = tickets.filter(function (ticket) {
    return ["juggled", "rerequested"].includes(ticket.status);
  });
  var myHeldTickets = heldTickets.filter(function (ticket) {
    return isTicketHelper(state, ticket);
  });
  var hasShuffledTickets = tickets.some(function (ticket) {
    return ticket.created !== ticket.sort_key;
  });
  var buttons;
  if (status === "pending") {
    buttons = [React.createElement(
      "button",
      {
        key: "delete-all",
        onClick: function onClick() {
          if (!confirm("Are you sure you want to delete " + tickets.length + " requests?")) return;
          app.makeRequest("delete", ticket_ids);
        },
        className: "btn btn-danger pull-right"
      },
      "Delete all"
    ), React.createElement(
      "button",
      {
        key: "help-all",
        onClick: function onClick() {
          return app.makeRequest("assign", ticket_ids, true);
        },
        className: "btn btn-primary pull-right"
      },
      "Help all"
    ), !!myHeldTickets.length && React.createElement(
      "button",
      {
        key: "release-my-holds",
        onClick: function onClick() {
          if (!confirm("Are you sure you want to release all " + myHeldTickets.length + " of your requests?")) return;
          app.makeRequest("release_holds", {
            ticket_ids: myHeldTickets.map(function (t) {
              return t.id;
            })
          });
        },
        className: "btn btn-warning pull-right"
      },
      "Release my holds"
    ), hasShuffledTickets && React.createElement(
      "button",
      {
        key: "unshuffle",
        onClick: function onClick() {
          return app.makeRequest("unshuffle_tickets", ticket_ids);
        },
        className: "btn btn-info pull-right"
      },
      "Unshuffle"
    ), state.config.enable_shuffle && React.createElement(
      "button",
      {
        key: "shuffle",
        onClick: function onClick() {
          return app.makeRequest("shuffle_tickets", ticket_ids);
        },
        className: "btn btn-warning pull-right"
      },
      "Shuffle"
    )];
  } else if (status === "assigned") {
    buttons = [React.createElement(
      "button",
      {
        key: "requeue-all",
        onClick: function onClick() {
          return app.makeRequest("unassign", ticket_ids);
        },
        className: "btn btn-warning pull-right"
      },
      "Requeue all"
    ), React.createElement(
      "button",
      {
        key: "resolve-all",
        onClick: function onClick() {
          return app.makeRequest("resolve", { ticket_ids: ticket_ids });
        },
        className: "btn btn-primary pull-right"
      },
      "Resolve all"
    )];
  } else if (status === "held") {
    buttons = [React.createElement(
      "button",
      {
        key: "release-all-holds",
        onClick: function onClick() {
          if (!confirm("Are you sure you want to release all " + heldTickets.length + " of EVERYONE'S requests?")) return;
          app.makeRequest("release_holds", {
            ticket_ids: heldTickets.map(function (t) {
              return t.id;
            })
          });
        },
        className: "btn btn-danger pull-right"
      },
      "Release all holds"
    ), !!myHeldTickets.length && React.createElement(
      "button",
      {
        key: "release-my-holds",
        onClick: function onClick() {
          if (!confirm("Are you sure you want to release all " + myHeldTickets.length + " of your requests?")) return;
          app.makeRequest("release_holds", {
            ticket_ids: myHeldTickets.map(function (t) {
              return t.id;
            })
          });
        },
        className: "btn btn-warning pull-right"
      },
      "Release my holds"
    )];
  }

  return React.createElement(
    "div",
    { className: "group-actions clearfix" },
    buttons,
    React.createElement(
      "p",
      { className: "pull-right" },
      tickets.length,
      " selected"
    )
  );
};


"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GroupCard(_ref) {
  var group = _ref.group,
      state = _ref.state;
  var _ReactRouterDOM = ReactRouterDOM,
      Link = _ReactRouterDOM.Link;


  var panelColor = "panel-default";

  var inGroup = groupIsMine(state, group);

  if (inGroup) {
    panelColor = "panel-primary";
  } else {
    panelColor = "panel-default";
  }

  var panelClass = classNames(_defineProperty({
    panel: true
  }, panelColor, true));

  var ownerName = group.attendees[0].user.shortName;

  var joinText = group.attendees.length === 1 ? "Join " + ownerName + "!" : "Join " + ownerName + " and " + (group.attendees.length - 1) + " others!";

  var joinGroup = function joinGroup() {
    var join = function join() {
      return app.makeRequest("join_group", group.id, true);
    };
    var ticket = getMyTicket(state);
    if (ticket && ticket.group_id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You have created a ticket for your previous group. If you switch groups," + " that ticket will be deleted",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!"
      }).then(function (result) {
        if (result.value) {
          join();
        }
      });
    } else {
      join();
    }
  };

  return React.createElement(
    "div",
    { className: panelClass },
    React.createElement(
      "div",
      { className: "panel-heading" },
      state.assignments[group.assignment_id].name,
      " ",
      ticketQuestion(state, group),
      " \xB7",
      " ",
      state.locations[group.location_id].name,
      React.createElement(
        "div",
        { className: "btn-group", role: "group", style: { float: "right" } },
        isStaff(state) && React.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-xs btn-default",
            onClick: function onClick() {
              return app.makeRequest("delete_group", group.id);
            }
          },
          React.createElement("span", { className: "glyphicon glyphicon-trash", "aria-hidden": "true" })
        )
      )
    ),
    React.createElement(
      "div",
      { className: "panel-body" },
      inGroup ? React.createElement(
        "p",
        null,
        React.createElement(
          "b",
          null,
          "You are in this group."
        )
      ) : React.createElement(
        "p",
        null,
        state.currentUser ? ownerName : "A student",
        " is looking to collaborate!"
      ),
      group.description ? React.createElement(
        "blockquote",
        { style: { fontSize: 15 } },
        group.description
      ) : React.createElement(
        "p",
        null,
        React.createElement(
          "i",
          null,
          "No description"
        )
      ),
      React.createElement(
        "p",
        null,
        "Created ",
        ticketTimeAgo(group),
        "."
      ),
      state.currentUser && React.createElement(
        Link,
        { to: inGroup ? "groups/" + group.id : null },
        React.createElement(
          "button",
          {
            className: inGroup ? "btn btn-primary" : "btn btn-default",
            type: "button",
            onClick: inGroup ? null : joinGroup
          },
          inGroup ? "Return to group" : joinText
        )
      )
    )
  );
}


"use strict";

var Home = function Home(_ref) {
  var match = _ref.match,
      state = _ref.state,
      children = _ref.children;
  var _ReactRouterDOM = ReactRouterDOM,
      Route = _ReactRouterDOM.Route,
      Switch = _ReactRouterDOM.Switch;


  if (isStaff(state) || getMyTicket(state)) {
    requestNotificationPermission();
  }

  // TODO loading indicator instead of blank screen
  if (!state.loaded) return null;

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { state: state, mode: "queue" }),
    React.createElement(OfflineIndicator, { offline: state.offline && state.loaded }),
    React.createElement(Queue, { state: state })
  );
};


"use strict";

var Jumbotron = function Jumbotron(_ref) {
  var state = _ref.state;

  var isQueueOpen = state.config && JSON.parse(state.config.is_queue_open);
  var appointments = JSON.parse(state.config.appointments_open) && state.config.recommend_appointments;
  var party_enabled = state.config.party_enabled;
  if (!state.currentUser) {
    var titleText = "Hi! Please sign in";
    var subtitleText = "Sign in with your course OK account to request help";
    var contents = React.createElement(
      "a",
      { className: "btn btn-block btn-jumbo btn-outline", href: "/login" },
      "Sign in with Ok"
    );
  } else if (!isQueueOpen) {
    var titleText = "Hello, " + state.currentUser.shortName;
    var subtitleText = "The queue is currently closed. Check back later!";
    var contents = React.createElement(RequestForm, { state: state });
  } else {
    var titleText = "Hello, " + state.currentUser.shortName;
    var subtitleText = "Fill out the form to request help!";
    var contents = React.createElement(RequestForm, { state: state });
  }

  if (state.currentUser && party_enabled) {
    subtitleText = "Join an existing group, or create a new one!";
  } else if (state.currentUser && appointments && !isQueueOpen) {
    subtitleText = " Click the button to make an appointment for a future OH!";
  }

  return React.createElement(
    "div",
    { className: "jumbotron blue" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "section",
        { className: "page-header" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(Messages, { messages: state.messages })
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-7 col-lg-8" },
            React.createElement(
              "h3",
              { className: "truncate" },
              titleText
            ),
            React.createElement(
              "p",
              { className: "truncate" },
              subtitleText
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-5 col-lg-4" },
            React.createElement(
              "div",
              { className: "request-form" },
              contents
            )
          )
        )
      )
    )
  );
};


"use strict";

var LlmTips = function LlmTips(_ref) {
  var tips = _ref.tips,
      className = _ref.className;

  if (!tips) {
    return null;
  }
  var tipClass = classNames("ticket-llm-tips", className);
  return React.createElement(
    "div",
    { className: tipClass },
    React.createElement(
      "span",
      { className: "ticket-llm-tips-title" },
      "LLM Tips"
    ),
    React.createElement(ReactMarkdown, { className: "ticket-llm-tips-body", source: tips })
  );
};


"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MagicWordDisplay = function (_React$Component) {
  _inherits(MagicWordDisplay, _React$Component);

  function MagicWordDisplay() {
    var _ref;

    _classCallCheck(this, MagicWordDisplay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MagicWordDisplay.__proto__ || Object.getPrototypeOf(MagicWordDisplay)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      loaded: false,
      oldMagicWord: undefined,
      magicWord: undefined,
      refreshInterval: null
    };

    _this.loadState = _this.loadState.bind(_this);

    _this.loadState();
    return _this;
  }

  _createClass(MagicWordDisplay, [{
    key: "loadState",
    value: function loadState() {
      var _this2 = this;

      if (this.state.loaded) return;
      var config = this.props.state.config;
      if (!this.props.state.loaded || !config) {
        setTimeout(this.loadState, 100);
        return;
      }
      if (isStaff(this.props.state) && config.queue_magic_word_mode !== "none") {
        if (this.state.refreshInterval) {
          clearInterval(this.state.refreshInterval);
          this.state.refreshInterval = null;
        }
        this.setState({
          refreshInterval: setInterval(function () {
            var mode = _this2.props.state.config.queue_magic_word_mode;
            if (mode !== "timed_numeric" && (mode !== "none" || _this2.state.magicWord !== undefined)) return;
            app.makeRequest("refresh_magic_word", function (res) {
              var magicWord = res.magic_word || null;
              _this2.setState({
                oldMagicWord: _this2.state.magicWord,
                magicWord: magicWord
              });
            });
          }, 10000)
        });
      }
      this.setState({
        loaded: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.refreshInterval) {
        clearInterval(this.state.refreshInterval);
        this.state.refreshInterval = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.loaded) {
        this.loadState();
        return false;
      }
      if (this.props.state.config.queue_magic_word_mode === "none" || this.state.magicWord === undefined) {
        return false;
      }

      var magicWordElem = React.createElement(
        "i",
        null,
        "Loading..."
      );
      if (this.state.magicWord) {
        var magicWord = this.state.magicWord;
        magicWordElem = React.createElement(
          "code",
          null,
          magicWord
        );
      }

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          null,
          "Magic word: ",
          magicWordElem
        )
      );
    }
  }]);

  return MagicWordDisplay;
}(React.Component);


"use strict";

var Messages = function Messages(_ref) {
  var messages = _ref.messages;
  return React.createElement(
    "div",
    { className: "row messages" },
    messages.map(function (message) {
      return React.createElement(Message, { key: message.id, message: message });
    })
  );
};

var Message = function Message(_ref2) {
  var message = _ref2.message;
  var id = message.id,
      text = message.text,
      category = message.category,
      visible = message.visible;

  if (!visible) {
    return null;
  }
  return React.createElement(
    "div",
    { className: "col-xs-12" },
    React.createElement(
      "div",
      { className: "alert alert-" + category + " alert-dismissible", role: "alert" },
      React.createElement(
        "button",
        {
          type: "button",
          className: "close",
          "aria-label": "Close",
          onClick: function onClick() {
            return app.clearMessage(id);
          }
        },
        React.createElement(
          "span",
          { "aria-hidden": "true" },
          "\xD7"
        )
      ),
      text
    )
  );
};


"use strict";

function MyAppointments(_ref) {
  var state = _ref.state;

  var studentContent = getMySignups(state).filter(function (_ref2) {
    var appointment = _ref2.appointment;
    return appointment.status === "active" || isSoon(appointment) || state.config["always_show_appointment_join_call"];
  }).map(function (_ref3) {
    var appointment = _ref3.appointment,
        signup = _ref3.signup;

    var handleClick = appointment.status !== "pending" && function () {
      return redirect(appointment.id);
    };
    return React.createElement(ConfirmedAppointmentCard, {
      assignments: state.assignments,
      locations: state.locations,
      appointment: appointment,
      signup: signup,
      onClick: handleClick,
      state: state
    });
  });

  var staffContent = getMyAppointmentsStaff(state).filter(function (appointment) {
    return appointment.status === "active" || isSoon(appointment);
  }).filter(function (_ref4) {
    var status = _ref4.status;
    return status !== "resolved";
  }).filter(function (_ref5) {
    var signups = _ref5.signups;
    return signups.length > 0;
  }).sort(function (x, y) {
    return (+!!y.helper - +!!x.helper) * 2 + appointmentTimeComparator(x, y);
  }).map(function (appointment) {
    return React.createElement(StaffUpcomingAppointmentCard, {
      appointment: appointment,
      locations: state.locations,
      assignments: state.assignments
    });
  });

  var content = state.currentUser && state.currentUser.isStaff ? staffContent : studentContent;

  return content.length > 0 && React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "assigned-tickets-header" },
      "Upcoming Appointments"
    ),
    content
  );
}


"use strict";

function MyAssignedTickets(_ref) {
  var state = _ref.state,
      tickets = _ref.tickets;

  return !!tickets.length && React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "assigned-tickets-header" },
      "Your Assigned Tickets"
    ),
    tickets.map(function (ticket) {
      return React.createElement(Ticket, { key: ticket.id, state: state, ticket: ticket, independent: true });
    })
  );
}


"use strict";

/* React Components */
var Navbar = function Navbar(_ref) {
  var state = _ref.state,
      mode = _ref.mode;
  var currentUser = state.currentUser;

  var myTicket = getMyTicket(state);
  if (myTicket && myTicket.group_id) {
    myTicket = null;
  }
  var myGroup = getMyGroup(state);
  var _ReactRouterDOM = ReactRouterDOM,
      Link = _ReactRouterDOM.Link;


  var words = mode.split("_");

  if (words.length === 1 && words[0] === "party") {
    words[0] = state.config.party_name;
  } else if (mode === "appointments") {
    words[0] = state.config.appointment_mode_title;
  }

  var title = words.map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");

  var partyAsRoot = isPartyRoot(state);
  var defaultMode = partyAsRoot ? "party" : "queue";

  return React.createElement(
    "nav",
    { className: "navbar navbar-default navbar-fixed-top" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "navbar-header" },
        React.createElement(
          "button",
          {
            type: "button",
            className: "navbar-toggle collapsed",
            "data-toggle": "collapse",
            "data-target": "#navbar-collapse-section"
          },
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" })
        ),
        React.createElement(
          Link,
          {
            className: "navbar-brand",
            to: "/" + (mode === defaultMode ? "" : mode)
          },
          React.createElement(
            "strong",
            null,
            window.courseName,
            " |"
          ),
          " " + title
        )
      ),
      React.createElement(
        "div",
        { className: "collapse navbar-collapse", id: "navbar-collapse-section" },
        React.createElement(
          "ul",
          { className: "nav navbar-nav navbar-right" },
          !!myGroup && React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/groups/" + myGroup.id + "/" },
              "My Group"
            )
          ),
          !!myTicket && React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/tickets/" + myTicket.id + "/" },
              "My Request"
            )
          ),
          currentUser && state.config.party_enabled && React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: partyAsRoot ? "/" : "/party" },
              state.config.party_name
            )
          ),
          currentUser && React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: partyAsRoot ? "/queue" : "/" },
              "Queue"
            )
          ),
          currentUser && JSON.parse(state.config.appointments_open) && React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/appointments" },
              state.config.appointment_mode_title
            )
          ),
          currentUser && currentUser.isStaff && React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/activity_log" },
              "Activity Log"
            )
          ),
          currentUser && currentUser.isStaff && React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/admin" },
              "Admin"
            )
          ),
          currentUser ? React.createElement(
            "li",
            { className: "dropdown" },
            React.createElement(
              "a",
              {
                href: "#",
                className: "dropdown-toggle",
                "data-toggle": "dropdown",
                role: "button"
              },
              currentUser.name,
              " ",
              React.createElement("span", { className: "caret" })
            ),
            React.createElement(
              "ul",
              { className: "dropdown-menu" },
              state.config.online_active && currentUser.isStaff && React.createElement(
                "li",
                null,
                React.createElement(
                  Link,
                  { to: "/online_setup" },
                  "Online Setup"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  Link,
                  { to: "/user/" + currentUser.id },
                  "Ticket History"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "/logout" },
                  "Log out"
                )
              )
            )
          ) : React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "/login/" },
              "Staff Login"
            )
          )
        )
      )
    )
  );
};


"use strict";

// TODO make this prettier
var NotFound = function NotFound() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-xs-12" },
        React.createElement(
          "h1",
          { className: "text-center" },
          "Not found"
        ),
        React.createElement(
          "p",
          { className: "text-center" },
          "This request does not exist or you don't have permission to view it"
        )
      )
    )
  );
};


"use strict";

function OfflineIndicator(_ref) {
  var offline = _ref.offline;

  return React.createElement(
    "div",
    { className: "offline offline-" + (offline ? "down" : "up") },
    React.createElement(
      "div",
      { className: "offline-content" },
      offline ? "Connection lost. Reconnecting..." : "Your computer is connected."
    )
  );
}


"use strict";

var Party = function Party(_ref) {
  var match = _ref.match,
      state = _ref.state,
      children = _ref.children;
  var _ReactRouterDOM = ReactRouterDOM,
      Route = _ReactRouterDOM.Route,
      Switch = _ReactRouterDOM.Switch;


  if (isStaff(state) || getMyTicket(state)) {
    requestNotificationPermission();
  }

  if (!state.loaded) return null;

  var showJumbotron = !getMyGroup(state);

  var containerClass = classNames({
    container: true,
    "stub-jumbotron": !showJumbotron
  });

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { state: state, mode: "party" }),
    React.createElement(OfflineIndicator, { offline: state.offline && state.loaded }),
    React.createElement(
      "div",
      null,
      showJumbotron && React.createElement(Jumbotron, { state: state }),
      !showJumbotron && React.createElement(Messages, { messages: state.messages })
    ),
    React.createElement(
      "div",
      { className: containerClass },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(PresenceIndicator, { state: state, hideWaitTime: true })
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12" },
          React.createElement(MyAppointments, { state: state }),
          React.createElement(
            "div",
            { className: "card-holder" },
            state.groups.filter(function (group) {
              return group.group_status === "active";
            }).map(function (group) {
              return React.createElement(GroupCard, { group: group, state: state });
            })
          )
        )
      )
    )
  );
};


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ReactRouterDOM = ReactRouterDOM,
    Link = _ReactRouterDOM.Link;


function PartyGroupLayout(_ref) {
  var state = _ref.state,
      match = _ref.match,
      loadGroup = _ref.loadGroup,
      socket = _ref.socket;

  var groupID = +match.params.id;

  if (!getGroup(state, groupID)) {
    loadGroup(groupID);
    return "loading...";
  }
  var group = getGroup(state, groupID);
  var ticket = getTicket(state, group.ticket_id);
  var location = state.locations[group.location_id];
  var ticketActive = ticket && !["resolved", "deleted"].includes(ticket.status);

  var inGroup = groupIsMine(state, group);

  var handleAssignmentSubmit = function handleAssignmentSubmit(args) {
    app.makeRequest("update_group", Object.assign(args, { id: groupID }));
  };

  var handleLeaveGroup = function handleLeaveGroup() {
    var leave = function leave() {
      return app.makeRequest("leave_group", group.id, true);
    };

    if (ticketActive && ticket.user.id === state.currentUser.id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You have created a ticket for this group. If you leave the group, the" + " ticket will be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!"
      }).then(function (result) {
        if (result.value) {
          leave();
        }
      });
    } else {
      leave();
    }
  };

  var actionButton = inGroup ? React.createElement(
    React.Fragment,
    null,
    React.createElement(
      PartyGroupLayoutButton,
      {
        color: "default",
        disabled: ticketActive || !JSON.parse(state.config.is_queue_open),
        onClick: function onClick() {
          return app.makeRequest("create_group_ticket", { id: group.id });
        }
      },
      ticketActive ? ticket.user.shortName + " has asked for help" : JSON.parse(state.config.is_queue_open) ? "Ask for Help (as a group)" : "Queue is currently closed"
    ),
    React.createElement("hr", null),
    React.createElement(
      PartyGroupLayoutButton,
      { color: "danger", onClick: handleLeaveGroup },
      "Leave Group"
    )
  ) : React.createElement(
    React.Fragment,
    null,
    group.group_status === "active" && React.createElement(
      React.Fragment,
      null,
      React.createElement(
        PartyGroupLayoutButton,
        {
          color: "primary",
          onClick: function onClick() {
            return app.makeRequest("join_group", group.id, true);
          }
        },
        "Join Group"
      ),
      React.createElement("hr", null)
    ),
    React.createElement(
      Link,
      { to: "/" },
      React.createElement(
        PartyGroupLayoutButton,
        { color: "default", onClick: function onClick() {
            return null;
          } },
        "Return to Home"
      )
    )
  );

  var onlineButtons = null;
  if (location.online && group.group_status === "active" && inGroup) {
    var callButton = (location.link || group.call_url) && React.createElement(
      PartyGroupLayoutButton,
      {
        color: "success",
        onClick: function onClick() {
          return window.open(location.link || group.call_url, "_blank");
        }
      },
      "Join Call"
    );
    var docButton = group.doc_url && React.createElement(
      PartyGroupLayoutButton,
      {
        color: "info",
        onClick: function onClick() {
          return window.open(group.doc_url, "_blank");
        }
      },
      "Open Shared Document"
    );
    if (callButton || docButton) {
      onlineButtons = React.createElement(
        React.Fragment,
        null,
        callButton,
        docButton
      );
    }
  }

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      description = _React$useState2[0],
      setDescription = _React$useState2[1];

  React.useEffect(function () {
    if (group) setDescription(group.description);
  }, [group && group.description]);

  var handleDescriptionSubmit = function handleDescriptionSubmit() {
    app.makeRequest("update_group", {
      id: groupID,
      description: description
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { state: state, mode: "party" }),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(Messages, { messages: state.messages }),
      React.createElement("br", null),
      React.createElement(
        "h2",
        { className: "list-group-item-heading text-center" },
        state.assignments[group.assignment_id].name,
        " ",
        ticketQuestion(state, group),
        React.createElement(
          "small",
          { className: "clearfix" },
          group.group_status[0].toUpperCase() + group.group_status.slice(1),
          " ",
          "\xB7 ",
          location.name,
          location.link && group.call_url && " (" + group.call_url + ")"
        ),
        React.createElement(
          "p",
          { className: "ticket-view-text text-center" },
          "Created ",
          ticketTimeAgo(group),
          "."
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement("hr", null),
          React.createElement(DescriptionBox, {
            editable: true,
            locked: !inGroup,
            state: state,
            ticket: group,
            description: description,
            prompt: "Encourage others to join the group!",
            placeholder: "Hi! Anyone else want to work on this problem with me?",
            onChange: setDescription,
            onSubmit: handleDescriptionSubmit
          })
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement(UpdateAssignmentBox, {
            state: state,
            elem: group,
            onSubmit: handleAssignmentSubmit
          })
        )
      ),
      React.createElement("hr", null),
      (onlineButtons || actionButton) && React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement(
            "div",
            { className: "well" },
            onlineButtons,
            actionButton
          )
        )
      ),
      React.createElement(
        "div",
        { className: "card-holder" },
        ticketActive && React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "panel panel-primary" },
            React.createElement(
              "div",
              { className: "panel-heading" },
              React.createElement(
                "h3",
                { className: "panel-title" },
                "Your Ticket"
              )
            ),
            React.createElement(
              "div",
              { className: "panel-body" },
              React.createElement(
                "p",
                { className: "ticket-view-text text-center" },
                " ",
                ticketStatus(state, ticket),
                " "
              ),
              React.createElement("hr", null),
              React.createElement(TicketButtons, { embedded: true, state: state, ticket: ticket })
            )
          )
        ),
        React.createElement(
          "div",
          null,
          group.attendees.map(function (attendance) {
            return React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h3",
                  { className: "panel-title" },
                  attendance.user.isStaff ? "Staff" : "Student"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                attendance.user.name
              )
            );
          })
        ),
        React.createElement(ChatBox, {
          key: group.id,
          currentUser: state.currentUser,
          socket: socket,
          id: group.id,
          messages: group.messages,
          mode: "group"
        })
      ),
      state.config.ticket_prompt && React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3 text-center" },
          React.createElement("hr", null),
          React.createElement(ReactMarkdown, { source: state.config.ticket_prompt })
        )
      )
    )
  );
}

function PartyGroupLayoutButton(_ref2) {
  var color = _ref2.color,
      children = _ref2.children,
      disabled = _ref2.disabled,
      onClick = _ref2.onClick;

  return React.createElement(
    "button",
    {
      className: "btn btn-" + color + " btn-lg btn-block",
      disabled: disabled,
      onClick: onClick
    },
    children
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var PresenceIndicator = function PresenceIndicator(_ref) {
  var state = _ref.state,
      hideWaitTime = _ref.hideWaitTime,
      hideWelcome = _ref.hideWelcome;

  var presence = state.presence;
  var numStudentsOnline = presence && presence.students ? presence.students : 0;
  var numStaffOnline = presence && presence.staff ? presence.staff : 0;
  var color = numStaffOnline ? "success" : "warning";
  var pendingTickets = getTickets(state, "pending");
  var assignedTickets = getTickets(state, "assigned");

  var studentMessage = numStudentsOnline + " students";
  var staffMessage = numStaffOnline + " assistants";

  if (numStudentsOnline === 1) {
    studentMessage = studentMessage.slice(0, -1);
  }
  if (numStaffOnline === 1) {
    staffMessage = staffMessage.slice(0, -1);
  }

  var message = studentMessage + " and " + staffMessage + " currently online.";

  // PARAM 1: expected service time ~ Exponential(1/10)
  var avgHelpTime = 10;

  // how many assistants are unoccupied
  var availableAssistants = numStaffOnline - assignedTickets.length;

  // how many students need help, assuming all avaiable assistants are assigned
  var stillNeedHelp = Math.max(0, pendingTickets.length - availableAssistants);

  var waitColor = "#646468";

  // catch if there actually are no assistants available
  if (numStaffOnline == 0) {
    var timeRange = "??";
  } else {
    // min of numStaffOnline exponentials is exponential, take expectation
    var expectedWaitFirst = Math.ceil(avgHelpTime / numStaffOnline);
    // standard deviation of exponential equals the expectation
    var stdDev = expectedWaitFirst;

    // expectation for stillNeedHelp + 1th student on queue
    var expectedWaitTotal = (stillNeedHelp + 1) * expectedWaitFirst;

    // PARAM 2: (75% conf interval by CLT, 1.15 is from zscore of Normal)
    var bound = 1.15 * stdDev / Math.sqrt(numStaffOnline);

    // interval bounds
    var estWaitTimeMin = Math.max(0, Math.floor(expectedWaitTotal - bound));
    var estWaitTimeMax = Math.ceil(expectedWaitTotal + bound);

    // colors for the time
    if (expectedWaitTotal <= 5) {
      waitColor = "#009900";
    } else if (expectedWaitTotal < 10) {
      waitColor = "#739900";
    } else if (expectedWaitTotal < 25) {
      waitColor = "#cc5200";
    } else {
      waitColor = "#ff0000";
    }

    // concatenate time range string
    var timeRange = estWaitTimeMin + " - " + estWaitTimeMax;
    if (estWaitTimeMax > 120) {
      timeRange = "> 120";
    }
  }

  var welcomeMessage = state.config.welcome;

  var openQueue = function openQueue() {
    app.makeRequest("update_config", {
      key: "is_queue_open",
      value: "true"
    });
  };

  return React.createElement(
    "div",
    { className: "col-xs-12" },
    state.config.is_queue_open === "false" && (state.config.party_enabled || isStaff(state)) && React.createElement(
      "div",
      {
        className: "alert alert-danger alert-dismissable fade in",
        role: "alert"
      },
      React.createElement(
        "button",
        {
          type: "button",
          className: "close",
          "aria-label": "Close",
          "data-dismiss": "alert"
        },
        React.createElement(
          "span",
          { "aria-hidden": "true" },
          "\xD7"
        )
      ),
      React.createElement(
        "h3",
        null,
        "The queue is currently closed!"
      ),
      state.currentUser && state.currentUser.isStaff && React.createElement(
        "button",
        { className: "btn btn-primary", onClick: openQueue },
        "Open queue"
      )
    ),
    !hideWelcome && React.createElement(
      "div",
      {
        className: "alert alert-info alert-dismissable fade in",
        role: "alert"
      },
      React.createElement(
        "button",
        {
          type: "button",
          className: "close",
          "aria-label": "Close",
          "data-dismiss": "alert"
        },
        React.createElement(
          "span",
          { "aria-hidden": "true" },
          "\xD7"
        )
      ),
      React.createElement(ReactMarkdown, { source: welcomeMessage })
    ),
    state.config.online_active === "true" && state.currentUser && state.currentUser.isStaff && [state.config.students_set_online_link, state.config.students_set_online_doc].includes("false") && React.createElement(
      "div",
      {
        className: "alert alert-warning alert-dismissable fade in",
        role: "alert"
      },
      React.createElement(
        "button",
        {
          type: "button",
          className: "close",
          "aria-label": "Close",
          "data-dismiss": "alert"
        },
        React.createElement(
          "span",
          { "aria-hidden": "true" },
          "\xD7"
        )
      ),
      React.createElement(
        "h4",
        null,
        "Configure Online Queue Settings"
      ),
      React.createElement(
        "h5",
        null,
        "Remember to go to ",
        React.createElement(
          Link,
          { to: "/online_setup" },
          "Online Setup"
        ),
        " to configure your settings for video calls and shared documents, otherwise you will not be able to interact with students on the Online Queue."
      )
    ),
    !hideWaitTime && React.createElement(
      "div",
      {
        className: "alert alert-" + color + " alert-dismissable fade in",
        role: "alert"
      },
      React.createElement(
        "button",
        {
          type: "button",
          className: "close",
          "aria-label": "Close",
          "data-dismiss": "alert"
        },
        React.createElement(
          "span",
          { "aria-hidden": "true" },
          "\xD7"
        )
      ),
      React.createElement(
        "h4",
        null,
        "Estimated wait time:",
        " ",
        React.createElement(
          "font",
          { color: waitColor },
          React.createElement(
            "strong",
            null,
            timeRange
          )
        ),
        " ",
        "minutes"
      ),
      React.createElement(
        "h5",
        null,
        message
      ),
      React.createElement(MagicWordDisplay, { state: state }),
      presence && state.currentUser && state.currentUser.isStaff && React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            {
              "data-toggle": "collapse",
              href: "#collapseExample",
              role: "button",
              "aria-expanded": "false",
              "aria-controls": "collapseExample"
            },
            "See online assistants."
          )
        ),
        React.createElement(
          "div",
          { className: "collapse", id: "collapseExample" },
          React.createElement(
            "div",
            { className: "card card-body" },
            React.createElement(
              "ul",
              null,
              presence.staff_list.map(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2),
                    email = _ref3[0],
                    name = _ref3[1];

                return React.createElement(
                  "li",
                  null,
                  name,
                  " (",
                  React.createElement(
                    "a",
                    { href: "mailto:" + email },
                    " ",
                    email
                  ),
                  ")"
                );
              })
            )
          )
        )
      )
    )
  );
};


"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Queue = function Queue(_ref) {
  var _concat$concat, _concat, _ref2, _getTickets;

  var state = _ref.state;
  var _ReactRouterDOM = ReactRouterDOM,
      Redirect = _ReactRouterDOM.Redirect;

  if (!state.currentUser && state.config.party_enabled) {
    return React.createElement(Redirect, { to: "/old" });
  }
  var staff = isStaff(state);
  var myTicket = getMyTicket(state);
  var canAddTicket = !staff && !myTicket && (!state.config.party_enabled || state.config.allow_private_party_tickets);
  var showJumbotron = canAddTicket && !state.config.party_enabled;
  var myAssignedTickets = getTickets(state, "assigned").filter(function (ticket) {
    return isTicketHelper(state, ticket);
  });
  var pendingTickets = (_concat$concat = (_concat = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(getTickets(state, "rerequested").filter(function (ticket) {
    return isTicketHelper(state, ticket) || !ticket.helper;
  })))).concat.apply(_concat, _toConsumableArray(getTickets(state, "pending")))).concat.apply(_concat$concat, _toConsumableArray(getTickets(state, "juggled").filter(function (ticket) {
    return isTicketHelper(state, ticket) || !ticket.helper;
  })));
  var assignedTickets = getTickets(state, "assigned");
  var heldTickets = (_getTickets = getTickets(state, "rerequested")).concat.apply(_getTickets, _toConsumableArray(getTickets(state, "juggled")));
  if (!staff) {
    assignedTickets.push.apply(assignedTickets, _toConsumableArray(heldTickets));
  }
  var shouldHighlightAssigned = staff && getHelpingTicket(state);
  var selectTab = function selectTab(index) {
    state.queueTabIndex = index;
    app.refresh();
  };
  var containerClass = classNames({
    container: true,
    "stub-jumbotron": !showJumbotron
  });
  return React.createElement(
    "div",
    null,
    showJumbotron && React.createElement(Jumbotron, { state: state }),
    React.createElement(
      "div",
      { className: containerClass },
      !showJumbotron && canAddTicket && React.createElement(
        "div",
        { className: "col-xs-8 col-xs-offset-2" },
        React.createElement(
          "div",
          { className: "request-form" },
          React.createElement(RequestForm, { state: state, forceTicket: true })
        )
      ),
      !showJumbotron && React.createElement(Messages, { messages: state.messages }),
      React.createElement(PresenceIndicator, {
        state: state,
        hideWaitTime: !state.config.show_presence
      }),
      React.createElement(MyAppointments, { state: state }),
      React.createElement(MyAssignedTickets, { state: state, tickets: myAssignedTickets }),
      !!myAssignedTickets.length && React.createElement("hr", null),
      staff && React.createElement(FilterControls, { state: state, filter: state.filter }),
      staff && React.createElement("hr", null),
      React.createElement(
        Tabs,
        { selectedIndex: state.queueTabIndex, onSelect: selectTab },
        React.createElement(
          Tab,
          { label: "Waiting (" + pendingTickets.length + ")" },
          React.createElement(TicketList, {
            tickets: pendingTickets,
            status: "pending",
            state: state
          })
        ),
        staff && React.createElement(
          Tab,
          { label: "On Hold (" + heldTickets.length + ")" },
          React.createElement(TicketList, { tickets: heldTickets, status: "held", state: state })
        ),
        React.createElement(
          Tab,
          {
            label: "Assigned (" + assignedTickets.length + ")",
            shouldHighlight: shouldHighlightAssigned
          },
          React.createElement(TicketList, {
            tickets: assignedTickets,
            status: "assigned",
            state: state
          })
        )
      )
    )
  );
};

var TicketList = function TicketList(_ref3) {
  var tickets = _ref3.tickets,
      state = _ref3.state,
      status = _ref3.status;

  var filteredTickets = applyFilter(state.filter, tickets);
  var items = filteredTickets.map(function (ticket) {
    return React.createElement(Ticket, { key: ticket.id, state: state, ticket: ticket });
  });
  var body;
  if (tickets.length === 0) {
    body = React.createElement(
      "div",
      { className: "no-results" },
      React.createElement(
        "h4",
        null,
        "No help requests"
      )
    );
  } else if (items.length === 0) {
    body = React.createElement(
      "div",
      { className: "no-results" },
      React.createElement(
        "h4",
        null,
        "No help requests matched your search"
      )
    );
  } else {
    body = [React.createElement(GroupActions, {
      key: "group",
      tickets: filteredTickets,
      status: status,
      state: state
    })].concat(items);
  }

  return React.createElement(
    "div",
    { className: "queue" },
    body
  );
};


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function RequestForm(props) {
  var state = props.state;
  var forceTicket = props.forceTicket;
  var appointments = JSON.parse(state.config.appointments_open) && state.config.recommend_appointments;
  var party_enabled = state.config.party_enabled && !forceTicket;
  var is_queue_open = JSON.parse(state.config.is_queue_open) && (!party_enabled || state.config.allow_private_party_tickets);
  var disabled = !party_enabled && !is_queue_open;
  var descriptionRequired = state.config.description_required === "true";

  var submit = function submit(e) {
    e.preventDefault();
    var form = $("#request-form");
    var descriptionBox = $("#description-box");

    var descriptionDOM = descriptionBox[0];
    if (descriptionDOM.reportValidity && !descriptionDOM.reportValidity()) {
      return;
    }

    var formData = {};
    form.serializeArray().forEach(function (input) {
      formData[input.name] = input.value;
    });

    formData["description"] = descriptionBox.val();

    app.makeRequest(party_enabled ? "create_group" : "create", formData, true);
    $("#description-overlay").hide();
  };

  var show = function show(e) {
    e.preventDefault();
    var form = $("#request-form");
    var formDOM = form[0];
    if (formDOM.reportValidity && !formDOM.reportValidity()) {
      return;
    }

    if (!descriptionRequired || party_enabled) {
      return submit(e);
    }

    var descriptionBox = $("#description-box");

    descriptionBox.prop("required", true);

    $("#description-overlay").show();
  };

  var history = ReactRouterDOM.useHistory();

  var openAlternative = function openAlternative() {
    if (is_queue_open && party_enabled) {
      history.push("/queue");
    } else {
      history.push("/appointments");
    }
  };

  var assignments = state.assignments,
      locations = state.locations;


  var filteredAssignments = Object.values(assignments).filter(function (assignment) {
    return assignment.visible;
  }).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  var filteredLocations = Object.values(locations).filter(function (location) {
    return location.visible;
  }).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  var magicWordInput = false;
  if (state.config && !party_enabled && state.config.queue_magic_word_mode && state.config.queue_magic_word_mode !== "none") {
    magicWordInput = React.createElement(
      "div",
      { className: "form-group form-group-lg" },
      React.createElement(
        "div",
        { className: "input-group" },
        React.createElement("input", {
          className: "form-control",
          type: "password",
          id: "magic-word",
          name: "magic_word",
          title: "Magic Word",
          placeholder: "Magic Word",
          required: true,
          disabled: disabled
        })
      )
    );
  }

  var llmTipsEnabled = state.config.enable_llm_features === true || state.config.enable_llm_features === "true";

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      locationID = _React$useState2[0],
      setLocationID = _React$useState2[1];

  var _React$useState3 = React.useState(llmTipsEnabled),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      useLlmTips = _React$useState4[0],
      setUseLlmTips = _React$useState4[1];

  var llmTipsToggleId = "llm-tips-toggle";

  var handleLocationChange = function handleLocationChange(e) {
    setLocationID(e.target.value);
  };

  var handleLlmTipsConsentChange = function handleLlmTipsConsentChange(value) {
    setUseLlmTips(value);
  };

  React.useEffect(function () {
    if (!llmTipsEnabled && useLlmTips) {
      setUseLlmTips(false);
    }
  }, [llmTipsEnabled, useLlmTips]);

  var showOnlineInput = locationID && state.locations[locationID].online;
  var linkKnown = locationID && state.locations[locationID].link;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      { id: "request-form" },
      magicWordInput,
      (!disabled || !appointments) && React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { className: "form-group form-group-lg" },
          React.createElement(
            "div",
            { className: "input-group" },
            React.createElement(SelectPicker, {
              options: filteredAssignments,
              className: "selectpicker form-control form-left",
              "data-live-search": "true",
              "data-size": "8",
              "data-width": "60%",
              "data-style": "btn-lg btn-default",
              id: "assignment_id",
              name: "assignment_id",
              title: "Assignment",
              required: true,
              disabled: disabled && !appointments
            }),
            React.createElement("input", {
              className: "form-control form-right",
              type: "text",
              id: "question",
              name: "question",
              title: "Question",
              placeholder: "Question",
              required: true,
              disabled: disabled && !appointments
            })
          )
        ),
        showOnlineInput && React.createElement(
          React.Fragment,
          null,
          (party_enabled || state.locations[locationID].name !== "Online" || JSON.parse(state.config.students_set_online_link)) && React.createElement(
            "div",
            { className: "form-group form-group-lg" },
            React.createElement(
              "label",
              { htmlFor: "call-link" },
              linkKnown ? "Breakout Room (optional)" : "Video Call Link"
            ),
            React.createElement("input", {
              className: "form-control",
              type: "text",
              id: "call-link",
              name: "call-link",
              title: "Video Call Link",
              placeholder: linkKnown ? "Breakout Room 6" : "meet.google.com/xyz",
              required: !linkKnown,
              disabled: disabled && !appointments
            })
          ),
          (party_enabled || JSON.parse(state.config.students_set_online_doc)) && React.createElement(
            "div",
            { className: "form-group form-group-lg" },
            React.createElement(
              "label",
              { htmlFor: "doc-link" },
              "Shared Document Link (optional)"
            ),
            React.createElement("input", {
              className: "form-control",
              type: "text",
              id: "doc-link",
              name: "doc-link",
              title: "Shared Doc Link",
              placeholder: "docs.google.com/xyz",
              disabled: disabled && !appointments
            })
          )
        ),
        React.createElement(
          "div",
          { className: "form-group form-group-lg" },
          React.createElement(
            "div",
            { className: "input-group" },
            React.createElement(SelectPicker, {
              options: filteredLocations,
              className: "selectpicker form-control form-left",
              "data-live-search": "true",
              "data-size": "8",
              "data-width": "60%",
              "data-style": "btn-lg btn-default",
              id: "location_id",
              name: "location_id",
              title: "Location",
              required: true,
              onChange: handleLocationChange,
              disabled: disabled
            }),
            React.createElement(
              "div",
              { className: "input-group-btn form-right pull-left" },
              React.createElement(
                "button",
                {
                  className: "btn btn-lg btn-default",
                  onClick: show,
                  disabled: disabled
                },
                party_enabled ? "Create" : "Request"
              )
            )
          )
        )
      ),
      llmTipsEnabled && React.createElement(
        "div",
        { className: "form-group llm-toggle-group" },
        React.createElement(
          "div",
          { className: "llm-toggle-title" },
          React.createElement(
            "span",
            { className: "llm-toggle-label" },
            "May we prompt a course specific LLM pipeline (GPT-4) to get a response to your question?"
          ),
          React.createElement(
            "label",
            { className: "llm-toggle-switch", htmlFor: llmTipsToggleId },
            React.createElement("input", {
              id: llmTipsToggleId,
              type: "checkbox",
              checked: useLlmTips,
              onChange: function onChange(e) {
                return handleLlmTipsConsentChange(e.target.checked);
              },
              "aria-label": "Use course-specific LLM pipeline (GPT-4)"
            }),
            React.createElement("span", { className: "llm-toggle-slider", "aria-hidden": "true" }),
            React.createElement(
              "span",
              { className: "llm-toggle-state" },
              useLlmTips ? "Yes" : "No"
            )
          )
        ),
        React.createElement(
          "p",
          { className: "llm-toggle-subtitle" },
          "If yes, please toggle the switch above."
        ),
        React.createElement("input", {
          type: "hidden",
          name: "use_llm",
          value: useLlmTips ? "true" : "false"
        })
      ),
      (party_enabled && (appointments || is_queue_open) || appointments && (!forceTicket || is_queue_open)) && React.createElement(
        "div",
        { className: "form-group form-group-lg" },
        React.createElement(
          "button",
          {
            className: "btn btn-lg btn-default",
            onClick: openAlternative
          },
          party_enabled && is_queue_open ? "Or ask staff privately" : disabled ? "Schedule Appointment" : "Or make an appointment"
        )
      )
    ),
    React.createElement(
      "div",
      { id: "description-overlay", className: "description-overlay" },
      React.createElement(
        "div",
        { id: "description-form", className: "description-form" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h4",
            null,
            " Please describe your issue below: "
          ),
          React.createElement("textarea", {
            id: "description-box",
            className: "description-box",
            rows: "5",
            defaultValue: state.config.default_description,
            placeholder: state.config.default_description || 'It would be helpful if you could describe your issue. For example, "I have a SyntaxError in my ___ function. I&apos;ve tried using ____ and ____."'
          }),
          React.createElement(
            "button",
            {
              className: "btn btn-lg btn-default",
              onClick: submit,
              disabled: disabled
            },
            "Request"
          )
        )
      )
    )
  );
}


"use strict";

function Row(_ref) {
  var title = _ref.title,
      link = _ref.link,
      prop1 = _ref.prop1,
      prop2 = _ref.prop2;

  return React.createElement(
    "div",
    { className: "ticket-row clearfix ticket-link" },
    React.createElement(
      Link,
      { to: link, className: "clearfix" },
      React.createElement("div", { className: "pull-left ticket-index" }),
      React.createElement(
        "h4",
        { className: "pull-left" },
        React.createElement(
          Link,
          { to: link },
          title
        ),
        React.createElement("br", { className: "visible-xs" }),
        React.createElement(
          "small",
          { className: "visible-xs ticket-status-xs" },
          prop2
        ),
        React.createElement("small", { className: "visible-xs ticket-desc-xs" }),
        React.createElement(
          "small",
          { className: "visible-xs ticket-created-xs" },
          prop1
        )
      ),
      React.createElement(
        "h4",
        { className: "pull-left hidden-xs ticket-created-md" },
        React.createElement(
          "small",
          null,
          prop1
        )
      ),
      React.createElement(
        "h4",
        { className: "pull-right hidden-xs ticket-status-md " },
        React.createElement(
          "small",
          null,
          prop2
        )
      )
    )
  );
}


"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectPicker = function (_React$Component) {
  _inherits(SelectPicker, _React$Component);

  function SelectPicker() {
    var _ref;

    _classCallCheck(this, SelectPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SelectPicker.__proto__ || Object.getPrototypeOf(SelectPicker)).call.apply(_ref, [this].concat(args)));

    _this.refreshSelect = _this.refreshSelect.bind(_this);
    return _this;
  }

  _createClass(SelectPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshSelect();
    }
  }, {
    key: "refreshSelect",
    value: function refreshSelect() {
      $(this.refs.selectpicker).selectpicker("refresh");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.refreshSelect();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          options = _props.options,
          emptyOption = _props.emptyOption;

      if (options && !Array.isArray(options) && (typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
        options = Object.entries(options).map(function (entry) {
          return Object.assign({}, {
            id: entry[0]
          }, entry[1]);
        });
      }
      var optionsElements = null;
      if (options) {
        optionsElements = options.map(function (obj) {
          if (typeof obj === "string") {
            return React.createElement(
              "option",
              { key: obj, value: obj },
              obj
            );
          } else if (obj.id !== undefined && obj.name !== undefined) {
            return React.createElement(
              "option",
              { key: obj.id, value: obj.id },
              obj.name
            );
          } else {
            var str = JSON.stringify(obj);
            return React.createElement(
              "option",
              { key: str, value: str },
              str
            );
          }
        }).filter(function (option) {
          return option;
        });
      }
      var props = Object.assign({}, this.props);
      delete props.emptyOption;
      delete props.options;
      return React.createElement(
        "select",
        _extends({ ref: "selectpicker" }, props),
        emptyOption && React.createElement(
          "option",
          { value: "" },
          emptyOption
        ),
        optionsElements
      );
    }
  }]);

  return SelectPicker;
}(React.Component);


"use strict";

function Slot(_ref) {
  var children = _ref.children,
      badgeText = _ref.badgeText,
      onClick = _ref.onClick,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? "" : _ref$className,
      link = _ref.link;

  if (link) {
    return React.createElement(
      "a",
      {
        href: "#",
        className: "list-group-item slot-add-button" + className,
        onClick: onClick
      },
      !!badgeText && React.createElement(
        "span",
        { className: "badge" },
        badgeText
      ),
      children
    );
  } else {
    return React.createElement(
      "li",
      { className: "list-group-item " + className },
      !!badgeText && React.createElement(
        "span",
        { className: "badge" },
        badgeText
      ),
      children
    );
  }
}


"use strict";

function SlotsForm(_ref) {
  var assignments = _ref.assignments,
      showEmail = _ref.showEmail,
      email = _ref.email,
      onEmailChange = _ref.onEmailChange,
      selectedAssignment = _ref.selectedAssignment,
      onSelectedAssignmentChange = _ref.onSelectedAssignmentChange,
      question = _ref.question,
      onQuestionChange = _ref.onQuestionChange,
      description = _ref.description,
      onDescriptionChange = _ref.onDescriptionChange;

  return React.createElement(
    "form",
    { "class": "slots-form" },
    React.createElement(
      "div",
      { className: "form-group form-group-lg" },
      showEmail && React.createElement(
        React.Fragment,
        null,
        React.createElement("input", {
          className: "form-control",
          type: "text",
          name: "email",
          title: "Student Email",
          placeholder: "somestudent@berkeley.edu",
          value: email,
          onChange: function onChange(e) {
            return onEmailChange(e.target.value);
          },
          required: true
        }),
        React.createElement("br", null)
      ),
      React.createElement(
        "div",
        { className: "input-group" },
        React.createElement(SelectPicker, {
          options: assignments,
          value: selectedAssignment,
          onChange: function onChange(e) {
            return onSelectedAssignmentChange(e.target.value);
          },
          className: "selectpicker form-control form-left",
          "data-live-search": "true",
          "data-size": "8",
          "data-width": "60%",
          "data-style": "btn-lg btn-default",
          name: "assignment_id",
          title: "Assignment",
          required: true
        }),
        React.createElement("input", {
          className: "form-control form-right",
          type: "text",
          name: "question",
          title: "Question",
          placeholder: "Question",
          value: question,
          onChange: function onChange(e) {
            return onQuestionChange(e.target.value);
          },
          required: true
        })
      ),
      React.createElement("br", null),
      React.createElement(
        "div",
        { className: "input-group" },
        React.createElement("textarea", {
          className: "description-box",
          rows: "5",
          value: description,
          onChange: function onChange(e) {
            return onDescriptionChange(e.target.value);
          },
          placeholder: "It would be helpful if you could describe your" + " main points of confusion. For example, \"I don't understand how" + ' tree recursion works." \n\nCourse staff will read your' + " descriptions before the section so that we can better help you.",
          required: true
        })
      )
    )
  );
}


"use strict";

function StaffOnlineSetup(_ref) {
  var state = _ref.state;

  if (!state.currentUser || !state.currentUser.isStaff) {
    return React.createElement(NotFound, null);
  }

  var submit = function submit(e) {
    e.preventDefault();
    var form = $("#staff-online-setup-form");

    var formData = {};
    form.serializeArray().forEach(function (input) {
      formData[input.name] = input.value;
    });

    var btn = $("#submitBtn");

    btn.addClass("is-loading");
    btn.attr("disabled", true);
    var time = Date.now();

    app.makeRequest("update_staff_online_setup", formData, function (isSuccess) {
      setTimeout(function () {
        btn.removeClass("is-loading");
        btn.attr("disabled", false);
      }, 250 - (Date.now() - time));
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { state: state, mode: "online_setup" }),
    React.createElement(OfflineIndicator, { offline: state.offline && state.loaded }),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("br", null),
      React.createElement(
        "p",
        null,
        "Consider using ",
        React.createElement(
          "a",
          { href: "https://meet.google.com" },
          "Google Meet"
        ),
        " to host video calls, and ",
        React.createElement(
          "a",
          { href: "https://code.cs61a.org" },
          "61A Code"
        ),
        " ",
        "for a collaborative code editor."
      ),
      React.createElement(
        "form",
        { id: "staff-online-setup-form" },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "staff-call-link" },
            "Your Default Video Call Link"
          ),
          React.createElement("input", {
            type: "text",
            className: "form-control",
            id: "staff-call-link",
            name: "staff-call-link",
            placeholder: "meet.google.com/xyz",
            defaultValue: state.currentUser.call_url
          })
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "staff-doc-link" },
            "Your Default Shared Document Link"
          ),
          React.createElement("input", {
            type: "text",
            className: "form-control",
            id: "staff-doc-link",
            name: "staff-doc-link",
            placeholder: "code.cs61a.org/xyz",
            defaultValue: state.currentUser.doc_url
          })
        ),
        React.createElement(
          "button",
          {
            id: "submitBtn",
            type: "submit",
            className: "btn btn-default",
            onClick: submit
          },
          "Submit"
        )
      )
    )
  );
}


"use strict";

function StaffUpcomingAppointmentCard(_ref) {
  var appointment = _ref.appointment,
      locations = _ref.locations,
      assignments = _ref.assignments;

  var possessive = appointment.helper ? "Your" : "This";

  var descriptionText = appointment.description && React.createElement(
    React.Fragment,
    null,
    "It will be on the subject of ",
    React.createElement(
      "b",
      null,
      appointment.description
    ),
    "."
  );

  var makeAppointmentsString = function makeAppointmentsString() {
    var arr = appointment.signups.map(function (signup) {
      var assignmentText = signup.assignment_id ? assignments[signup.assignment_id].name : "";
      var questionText = (signup.assignment_id ? " " : "") + (parseInt(signup.question) ? "Q" : "") + (signup.question || "");
      return signup.user.name + " (" + assignmentText + questionText + ")";
    });
    if (arr.length === 0) {
      return "";
    }
    var listStart = arr.slice(0, -1).join(', ');
    var listEnd = arr.slice(-1);
    var conjunction = arr.length <= 1 ? '' : arr.length > 2 ? ', and ' : ' and ';
    var joined = arr.length >= 2 ? "have joined your appointment." : "has joined your appointment.";
    return [listStart, listEnd].join(conjunction) + " " + joined;
  };

  var appointmentStudents = appointment.helper ? makeAppointmentsString() : "";

  var content = React.createElement(
    React.Fragment,
    null,
    possessive,
    " appointment is at",
    " ",
    React.createElement(
      "b",
      null,
      locations[appointment.location_id].name
    ),
    ", with a group of",
    " ",
    React.createElement(
      "b",
      null,
      appointment.signups.length
    ),
    " students. ",
    descriptionText,
    appointmentStudents
  );

  var history = ReactRouterDOM.useHistory();

  var handleClick = function handleClick(e) {
    e.preventDefault();
    history.push("/appointments/" + appointment.id);
  };

  var style = {};

  if (!appointment.helper) {
    style.borderLeft = "5px solid red";
  }

  if (appointment.status === "active") {
    style.borderLeft = "5px solid #337ab7";
  }

  var hasStudent = !!appointment.signups.length && appointment.helper;

  if (hasStudent) {
    style.borderLeft = "5px solid #009688";
  }

  return React.createElement(
    "div",
    { className: "panel panel-default", onClick: handleClick, style: style },
    React.createElement(
      "ul",
      { className: "list-group" },
      React.createElement(
        "a",
        { href: "#", className: "list-group-item" },
        !appointment.helper && React.createElement(
          "span",
          { className: "badge badge-danger" },
          "No helper assigned!"
        ),
        appointment.status === "active" && React.createElement(
          "span",
          { className: "badge badge-primary" },
          "In Progress"
        ),
        React.createElement(
          "h4",
          { className: "list-group-item-heading appointment-card-heading" + (hasStudent ? " appointment-card-heading-success" : "") },
          formatAppointmentDate(appointment)
        ),
        React.createElement(
          "div",
          { className: "appointment-card-subheading" },
          formatAppointmentDuration(appointment)
        ),
        content
      )
    )
  );
}


"use strict";

function StaffUpcomingAppointments(_ref) {
  var myAppointments = _ref.myAppointments,
      locations = _ref.locations,
      assignments = _ref.assignments;

  var body = void 0;
  if (myAppointments.length === 0) {
    body = React.createElement(
      "p",
      null,
      "Sign up for appointments below! "
    );
  } else {
    var innerBody = myAppointments.map(function (appointment) {
      return React.createElement(StaffUpcomingAppointmentCard, {
        appointment: appointment,
        locations: locations,
        assignments: assignments
      });
    });
    body = React.createElement(
      "div",
      { className: "confirmed-appointment-container" },
      innerBody
    );
  }
  return React.createElement(
    "div",
    { className: "jumbotron" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h2",
        null,
        " Your Appointments "
      ),
      body
    )
  );
}


"use strict";

/* Mostly from https://toddmotto.com/creating-a-tabs-component-with-react/
 * Use like this:
 *
 * <Tabs selectedIndex={0} onSelect={(index) => ...}>
 *   <Tab label="My Tab">
 *     ... tab content
 *   </Tab>
 *   <Tab label="Other Tab">
 *     ... tab content
 *   </Tab>
 * </Tabs>
 */
var Tabs = function Tabs(_ref) {
  var selectedIndex = _ref.selectedIndex,
      onSelect = _ref.onSelect,
      children = _ref.children;

  children = React.Children.toArray(children).filter(function (x) {
    return x;
  });
  var renderLabel = function renderLabel(child, index) {
    var active = selectedIndex === index;
    var tabClass = classNames({
      active: active,
      pulsating: child.props.shouldHighlight && !active
    });
    return React.createElement(
      "li",
      { key: index, className: tabClass },
      React.createElement(
        "a",
        {
          href: "#",
          onClick: function onClick(e) {
            e.preventDefault();
            onSelect(index);
          }
        },
        child.props.label
      )
    );
  };
  return React.createElement(
    "div",
    { className: "row tabs-container" },
    React.createElement(
      "div",
      { className: "col-xs-12 tabs" },
      React.createElement(
        "ul",
        { className: "nav nav-tabs nav-justified" },
        children.map(renderLabel)
      ),
      React.createElement(
        "div",
        { className: "tab-content" },
        children[selectedIndex]
      )
    )
  );
};

var Tab = function Tab(props) {
  return React.createElement(
    "div",
    null,
    props.children
  );
};


"use strict";

var Ticket = function Ticket(_ref) {
  var state = _ref.state,
      ticket = _ref.ticket,
      independent = _ref.independent;

  var assignment = ticketAssignment(app.state, ticket);
  var location = ticketLocation(app.state, ticket);

  var staff = isStaff(state);
  var llmTipsEnabled = state.config.enable_llm_features === true || state.config.enable_llm_features === "true";

  var staffName = ticket.helper ? isTicketHelper(state, ticket) ? "you" : ticket.helper.name : "someone";
  var studentName = ticket.user ? ticketIsMine(state, ticket) ? "you" : staff ? ticket.user.name : "a student" : "someone";

  var capitalize = function capitalize(x) {
    return x[0].toUpperCase() + x.slice(1);
  };
  var possessive = function possessive(x) {
    return x === "you" ? "your" : x + "'s";
  };

  var status;
  if (ticket.status === "pending") {
    status = ticketDisplayTime(ticket) + " in " + location.name;
  } else if (ticket.status === "juggled") {
    status = capitalize(staffName) + " put " + studentName + " on hold " + moment.utc(ticket.hold_time).fromNow() + " in " + location.name + ".";
  } else if (ticket.status === "rerequested") {
    status = capitalize(studentName) + " re-requested " + possessive(staffName) + " help " + moment.utc(ticket.rerequest_time).fromNow() + " in " + location.name + ".";
  } else {
    if (isStaff(state)) {
      status = capitalize(staffName) + " (Started helping " + ticketTimeSinceAssigned(ticket) + ") in " + location.name;
    } else {
      status = ticketStatus(state, ticket) + " in " + location.name;
    }
  }

  var description;
  if (isStaff(state) || ticketIsMine(state, ticket)) {
    description = ticket.description;
  }

  var question = ticketQuestion(app.state, ticket);

  return React.createElement(
    TicketLink,
    { state: state, ticket: ticket, independent: independent },
    React.createElement(
      "div",
      { className: "pull-left ticket-index" },
      ticketPosition(state, ticket)
    ),
    React.createElement(
      "h4",
      { className: "pull-left" },
      assignment.name,
      " ",
      question,
      React.createElement("br", { className: "visible-xs" }),
      React.createElement(
        "small",
        { className: "visible-xs ticket-status-xs" },
        status
      ),
      React.createElement(
        "small",
        { className: "visible-xs ticket-desc-xs" },
        description
      ),
      React.createElement(
        "small",
        { className: "visible-xs ticket-created-xs" },
        "Ticket created: ",
        ticketTimeAgo(ticket)
      )
    ),
    React.createElement(
      "h4",
      { className: "pull-left hidden-xs ticket-desc-md " },
      React.createElement(
        "small",
        null,
        description
      )
    ),
    React.createElement(
      "h4",
      { className: "pull-left hidden-xs ticket-created-md " },
      React.createElement(
        "small",
        null,
        "Ticket created: ",
        ticketTimeAgo(ticket)
      )
    ),
    React.createElement(
      "h4",
      { className: "pull-right hidden-xs ticket-status-md" },
      React.createElement(
        "small",
        null,
        status,
        " ",
        moment.duration(moment.utc().diff(moment.utc(ticket.created))).asDays() > 1 && React.createElement(
          "span",
          { className: "badge" },
          " Old Ticket "
        )
      )
    ),
    staff && llmTipsEnabled && ticket.llm_tips && React.createElement(LlmTips, { tips: ticket.llm_tips, className: "ticket-llm-tips--inline" })
  );
};

var TicketLink = function TicketLink(_ref2) {
  var state = _ref2.state,
      ticket = _ref2.ticket,
      children = _ref2.children,
      independent = _ref2.independent;
  var _ReactRouterDOM = ReactRouterDOM,
      Link = _ReactRouterDOM.Link;

  var highlight = ticketIsMine(state, ticket, true) || isTicketHelper(state, ticket);
  var link = ticketIsMine(state, ticket, true) || isStaff(state);
  var ticketClass = classNames({
    "ticket-row": true,
    clearfix: true,
    "ticket-link": link,
    "ticket-highlight": highlight,
    "ticket-independent": independent,
    "ticket-rerequested": ticket.status === "rerequested",
    "ticket-juggled": ticket.status === "juggled"
  });
  if (link) {
    return React.createElement(
      "div",
      { className: ticketClass },
      React.createElement(
        Link,
        { to: "/tickets/" + ticket.id, className: "clearfix" },
        children
      )
    );
  } else {
    return React.createElement(
      "div",
      { className: ticketClass },
      children
    );
  }
};


"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LLM_HELP_TYPE_OPTIONS = [{ value: "conceptual", label: "Conceptual" }, { value: "debugging", label: "Debugging" }, { value: "past_exams_studying", label: "Past Exams/ Studying" }, { value: "other", label: "Other" }];

var LLM_TIPS_INFLUENCE_OPTIONS = [{ value: "helpful", label: "Helpful" }, { value: "helpful_minimal", label: "Helpful, but minimal influence" }, { value: "neutral", label: "Neutral" }, { value: "not_helpful_but_accurate", label: "Not Helpful, but accurate" }, { value: "not_helpful_at_all", label: "Not Helpful at all" }];

function ResolveLlmFeedbackModal(_ref) {
  var isOpen = _ref.isOpen,
      staffMode = _ref.staffMode,
      studentHelpType = _ref.studentHelpType,
      studentHelpOther = _ref.studentHelpOther,
      staffHelpType = _ref.staffHelpType,
      staffHelpOther = _ref.staffHelpOther,
      llmTipsInfluence = _ref.llmTipsInfluence,
      errorMessage = _ref.errorMessage,
      onChangeStudentHelpType = _ref.onChangeStudentHelpType,
      onChangeStudentHelpOther = _ref.onChangeStudentHelpOther,
      onChangeStaffHelpType = _ref.onChangeStaffHelpType,
      onChangeStaffHelpOther = _ref.onChangeStaffHelpOther,
      onChangeLlmTipsInfluence = _ref.onChangeLlmTipsInfluence,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;

  var root = React.useRef();

  React.useEffect(function () {
    if (isOpen) {
      $(root.current).modal("show");
    } else {
      $(root.current).modal("hide");
    }
  }, [isOpen]);

  React.useEffect(function () {
    $(root.current).on("hidden.bs.modal", onClose);
  }, []);

  return ReactDOM.createPortal(React.createElement(
    "div",
    { className: "modal fade", ref: root, tabIndex: "-1", role: "dialog" },
    React.createElement(
      "div",
      { className: "modal-dialog", role: "document" },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement(
          "div",
          { className: "modal-header" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close"
            },
            React.createElement(
              "span",
              { "aria-hidden": "true" },
              "\xD7"
            )
          ),
          React.createElement(
            "h4",
            { className: "modal-title" },
            "Before you resolve this ticket"
          )
        ),
        React.createElement(
          "div",
          { className: "modal-body" },
          errorMessage && React.createElement(
            "div",
            { className: "alert alert-danger" },
            errorMessage
          ),
          !staffMode && React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { htmlFor: "student-help-type" },
              "What did course staff help with today?"
            ),
            React.createElement(
              "select",
              {
                id: "student-help-type",
                className: "form-control",
                value: studentHelpType,
                onChange: function onChange(e) {
                  return onChangeStudentHelpType(e.target.value);
                }
              },
              React.createElement(
                "option",
                { value: "" },
                "Select an option (optional)"
              ),
              LLM_HELP_TYPE_OPTIONS.map(function (option) {
                return React.createElement(
                  "option",
                  { key: option.value, value: option.value },
                  option.label
                );
              })
            )
          ),
          !staffMode && studentHelpType === "other" && React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { htmlFor: "student-help-other" },
              "Please describe"
            ),
            React.createElement("input", {
              id: "student-help-other",
              className: "form-control",
              type: "text",
              value: studentHelpOther,
              onChange: function onChange(e) {
                return onChangeStudentHelpOther(e.target.value);
              }
            })
          ),
          staffMode && React.createElement(
            React.Fragment,
            null,
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "staff-help-type" },
                "What did you help the student with today?"
              ),
              React.createElement(
                "select",
                {
                  id: "staff-help-type",
                  className: "form-control",
                  value: staffHelpType,
                  onChange: function onChange(e) {
                    return onChangeStaffHelpType(e.target.value);
                  }
                },
                React.createElement(
                  "option",
                  { value: "" },
                  "Select an option"
                ),
                LLM_HELP_TYPE_OPTIONS.map(function (option) {
                  return React.createElement(
                    "option",
                    { key: option.value, value: option.value },
                    option.label
                  );
                })
              )
            ),
            staffHelpType === "other" && React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "staff-help-other" },
                "Please describe"
              ),
              React.createElement("input", {
                id: "staff-help-other",
                className: "form-control",
                type: "text",
                value: staffHelpOther,
                onChange: function onChange(e) {
                  return onChangeStaffHelpOther(e.target.value);
                }
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "llm-tips-influence" },
                "How did the LLM-tips influence your approach?"
              ),
              React.createElement(
                "select",
                {
                  id: "llm-tips-influence",
                  className: "form-control",
                  value: llmTipsInfluence,
                  onChange: function onChange(e) {
                    return onChangeLlmTipsInfluence(e.target.value);
                  }
                },
                React.createElement(
                  "option",
                  { value: "" },
                  "Select an option"
                ),
                LLM_TIPS_INFLUENCE_OPTIONS.map(function (option) {
                  return React.createElement(
                    "option",
                    { key: option.value, value: option.value },
                    option.label
                  );
                })
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "modal-footer" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-default",
              "data-dismiss": "modal"
            },
            "Cancel"
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn-primary", onClick: onSubmit },
            "Resolve"
          )
        )
      )
    )
  ), document.body);
}

var TicketButtons = function (_React$Component) {
  _inherits(TicketButtons, _React$Component);

  function TicketButtons(props) {
    _classCallCheck(this, TicketButtons);

    var _this = _possibleConstructorReturn(this, (TicketButtons.__proto__ || Object.getPrototypeOf(TicketButtons)).call(this, props));

    _this.assign = _this.assign.bind(_this);
    _this.returnTo = _this.returnTo.bind(_this);
    _this.delete = _this.delete.bind(_this);
    _this.resolveAndNext = _this.resolveAndNext.bind(_this);
    _this.resolveAndLocalNext = _this.resolveAndLocalNext.bind(_this);
    _this.comeBackLater = _this.comeBackLater.bind(_this);
    _this.releaseToAnyone = _this.releaseToAnyone.bind(_this);
    _this.releaseToMe = _this.releaseToMe.bind(_this);
    _this.rerequest = _this.rerequest.bind(_this);
    _this.cancelRerequest = _this.cancelRerequest.bind(_this);
    _this.resolve = _this.resolve.bind(_this);
    _this.unassign = _this.unassign.bind(_this);
    _this.reassign = _this.reassign.bind(_this);
    _this.next = _this.next.bind(_this);
    _this.requestResolve = _this.requestResolve.bind(_this);
    _this.submitResolveFeedback = _this.submitResolveFeedback.bind(_this);
    _this.closeResolveFeedback = _this.closeResolveFeedback.bind(_this);

    _this.refresher = null;
    _this.state = {
      llmFeedbackModalOpen: false,
      pendingResolve: null,
      studentHelpType: "",
      studentHelpOther: "",
      staffHelpType: "",
      staffHelpOther: "",
      llmTipsInfluence: "",
      llmFeedbackError: ""
    };
    return _this;
  }

  _createClass(TicketButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresher = setInterval(this.forceUpdate.bind(this), 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.refresher);
    }
  }, {
    key: "assign",
    value: function assign() {
      app.makeRequest("assign", [this.props.ticket.id], true);
    }
  }, {
    key: "returnTo",
    value: function returnTo() {
      app.makeRequest("return_to", [this.props.ticket.id]);
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (!confirm("Delete this ticket?")) return;
      app.makeRequest("delete", [this.props.ticket.id]);
    }
  }, {
    key: "resolveAndNext",
    value: function resolveAndNext() {
      this.requestResolve({ followRedirect: true });
    }
  }, {
    key: "resolveAndLocalNext",
    value: function resolveAndLocalNext() {
      this.requestResolve({ followRedirect: true, local: true });
    }
  }, {
    key: "comeBackLater",
    value: function comeBackLater() {
      app.makeRequest("juggle", { ticket_ids: [this.props.ticket.id] }, true);
    }
  }, {
    key: "releaseToAnyone",
    value: function releaseToAnyone() {
      if (!confirm("Release this ticket to anyone else?")) return;
      app.makeRequest("release_holds", { ticket_ids: [this.props.ticket.id] });
    }
  }, {
    key: "releaseToMe",
    value: function releaseToMe() {
      if (this.props.ticket.helper && !confirm("Take over responsibility for this ticket?")) return;
      app.makeRequest("release_holds", {
        ticket_ids: [this.props.ticket.id],
        to_me: true
      });
    }
  }, {
    key: "rerequest",
    value: function rerequest() {
      app.makeRequest("rerequest", { ticket_ids: [this.props.ticket.id] });
    }
  }, {
    key: "cancelRerequest",
    value: function cancelRerequest() {
      app.makeRequest("cancel_rerequest", { ticket_ids: [this.props.ticket.id] });
    }
  }, {
    key: "resolve",
    value: function resolve() {
      this.requestResolve();
    }
  }, {
    key: "unassign",
    value: function unassign() {
      app.makeRequest("unassign", [this.props.ticket.id]);
    }
  }, {
    key: "reassign",
    value: function reassign() {
      if (!confirm("Reassign this ticket?")) return;
      app.makeRequest("assign", [this.props.ticket.id], true);
    }
  }, {
    key: "next",
    value: function next() {
      app.makeRequest("next", [this.props.ticket.id], true);
    }
  }, {
    key: "shouldPromptForLlmFeedback",
    value: function shouldPromptForLlmFeedback(staff) {
      var _props = this.props,
          state = _props.state,
          ticket = _props.ticket;

      var llmEnabled = state.config.enable_llm_features === true || state.config.enable_llm_features === "true";
      if (!llmEnabled || !ticket.use_llm || !ticket.llm_tips) {
        return false;
      }
      if (staff) {
        return true;
      }
      return !!ticket.helper;
    }
  }, {
    key: "requestResolve",
    value: function requestResolve() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$followRedirect = _ref2.followRedirect,
          followRedirect = _ref2$followRedirect === undefined ? false : _ref2$followRedirect,
          _ref2$local = _ref2.local,
          local = _ref2$local === undefined ? false : _ref2$local;

      var _props2 = this.props,
          state = _props2.state,
          ticket = _props2.ticket;

      var staff = isStaff(state);
      if (this.shouldPromptForLlmFeedback(staff)) {
        this.setState({
          llmFeedbackModalOpen: true,
          pendingResolve: { followRedirect: followRedirect, local: local },
          llmFeedbackError: ""
        });
        return;
      }
      this.submitResolveRequest({ followRedirect: followRedirect, local: local });
    }
  }, {
    key: "submitResolveRequest",
    value: function submitResolveRequest(_ref3) {
      var _ref3$followRedirect = _ref3.followRedirect,
          followRedirect = _ref3$followRedirect === undefined ? false : _ref3$followRedirect,
          _ref3$local = _ref3.local,
          local = _ref3$local === undefined ? false : _ref3$local,
          _ref3$payload = _ref3.payload,
          payload = _ref3$payload === undefined ? {} : _ref3$payload;

      var requestPayload = Object.assign({ ticket_ids: [this.props.ticket.id] }, payload);
      if (local) {
        requestPayload.local = true;
      }
      app.makeRequest("resolve", requestPayload, followRedirect);
    }
  }, {
    key: "closeResolveFeedback",
    value: function closeResolveFeedback() {
      if (this.state.llmFeedbackModalOpen) {
        this.setState({
          llmFeedbackModalOpen: false,
          pendingResolve: null,
          llmFeedbackError: "",
          studentHelpType: "",
          studentHelpOther: "",
          staffHelpType: "",
          staffHelpOther: "",
          llmTipsInfluence: ""
        });
      }
    }
  }, {
    key: "submitResolveFeedback",
    value: function submitResolveFeedback() {
      var state = this.props.state;

      var staff = isStaff(state);
      var _state = this.state,
          studentHelpType = _state.studentHelpType,
          studentHelpOther = _state.studentHelpOther,
          staffHelpType = _state.staffHelpType,
          staffHelpOther = _state.staffHelpOther,
          llmTipsInfluence = _state.llmTipsInfluence,
          pendingResolve = _state.pendingResolve;

      var errorMessage = "";
      if (staff) {
        if (!staffHelpType) {
          errorMessage = "Please select what you helped the student with.";
        } else if (staffHelpType === "other" && !staffHelpOther.trim()) {
          errorMessage = "Please describe what you helped the student with.";
        } else if (!llmTipsInfluence) {
          errorMessage = "Please select how the LLM-tips influenced your approach.";
        }
      } else if (studentHelpType === "other" && !studentHelpOther.trim()) {
        errorMessage = "Please describe what staff helped you with.";
      }

      if (errorMessage) {
        this.setState({ llmFeedbackError: errorMessage });
        return;
      }

      var payload = {};
      if (staff) {
        payload.staff_help_type = staffHelpType;
        if (staffHelpType === "other") {
          payload.staff_help_other = staffHelpOther.trim();
        }
        payload.llm_tips_influence = llmTipsInfluence;
      } else if (studentHelpType) {
        payload.student_help_type = studentHelpType;
        if (studentHelpType === "other") {
          payload.student_help_other = studentHelpOther.trim();
        }
      }

      this.setState({
        llmFeedbackModalOpen: false,
        pendingResolve: null,
        llmFeedbackError: "",
        studentHelpType: "",
        studentHelpOther: "",
        staffHelpType: "",
        staffHelpOther: "",
        llmTipsInfluence: ""
      });

      this.submitResolveRequest({
        followRedirect: pendingResolve && pendingResolve.followRedirect,
        local: pendingResolve && pendingResolve.local,
        payload: payload
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          embedded = _props3.embedded,
          state = _props3.state,
          ticket = _props3.ticket;

      var staff = isStaff(state);

      function makeButton(text, style, action) {
        return React.createElement(
          "button",
          {
            key: text,
            onClick: action,
            className: "btn btn-" + style + " btn-lg btn-block"
          },
          text
        );
      }

      function makeLink(text, style, href) {
        return React.createElement(
          "a",
          {
            key: text,
            href: href,
            target: "_blank",
            className: "btn btn-" + style + " btn-lg btn-block"
          },
          text
        );
      }

      var onlineButtons = [];
      var topButtons = [];
      var bottomButtons = [];

      if (staff && (ticket.status === "resolved" || ticket.status === "deleted")) {
        topButtons.push(makeButton("Revive", "danger", this.unassign));
      }

      if (ticket.status === "pending") {
        bottomButtons.push(makeButton("Delete", "danger", this.delete));
        if (staff) {
          topButtons.push(makeButton("Help", "primary", this.assign));
        }
      }
      if (ticket.status === "assigned") {
        if (!embedded && (ticketLocation(state, ticket).link || ticket.call_url || ticket.helper.call_url)) {
          onlineButtons.push(makeButton("Join Call", "success", function () {
            return window.open(ticketLocation(state, ticket).link || ticket.call_url || ticket.helper.call_url, "_blank");
          }));
        }
        if (!embedded && (ticket.doc_url || ticket.helper.doc_url)) {
          onlineButtons.push(makeButton("Open Shared Document", "info", function () {
            return window.open(ticket.doc_url || ticket.helper.doc_url, "_blank");
          }));
        }

        bottomButtons.push(makeButton("Resolve", "default", this.resolve));
        if (staff) {
          if (isTicketHelper(state, ticket)) {
            topButtons.push(makeButton("Resolve and Next in Room", "primary", this.resolveAndLocalNext));
            topButtons.push(makeButton("Resolve and Next", "primary", this.resolveAndNext));
            topButtons.push(makeButton("Come Back Later", "warning", this.comeBackLater));
            bottomButtons.push(makeButton("Requeue", "default", this.unassign));
          } else {
            topButtons.push(makeButton("Reassign", "warning", this.reassign));
            topButtons.push(makeButton("Next Ticket", "default", this.next));
          }
        }
      }
      if (staff && (ticket.status === "resolved" || ticket.status === "deleted")) {
        topButtons.push(makeButton("Next Ticket", "default", this.next));
      }
      if (staff && ticket.status === "assigned" && state.config.show_okpy_backups) {
        topButtons.push(makeLink("View Backups", "default", "https://okpy.org/admin/course/" + state.config.okpy_endpoint_id + "/" + encodeURIComponent(ticket.user.email)));
      }
      if (ticket.status === "juggled") {
        var isWaiting = moment.utc(ticket.rerequest_threshold).isAfter();
        if (staff) {
          if (isTicketHelper(state, ticket)) {
            if (isWaiting) {
              topButtons.push(makeButton("Continue helping (ahead of schedule)", "danger", this.returnTo));
            } else {
              topButtons.push(makeButton("Continue helping", "warning", this.returnTo));
            }
          } else {
            topButtons.push(makeButton("Take over", "warning", this.releaseToMe));
          }
          if (ticket.helper) {
            topButtons.push(makeButton("Release hold", "danger", this.releaseToAnyone));
          }
          bottomButtons.push(makeButton("Delete", "danger", this.delete));
          bottomButtons.push(makeButton("Resolve", "default", this.resolve));
        } else {
          if (isWaiting) {
            var remainingTime = ticketTimeToReRequest(ticket);
            topButtons.push(makeButton("You can re-request help " + remainingTime, "warning disabled"));
          } else {
            topButtons.push(makeButton("Re-request help", "warning", this.rerequest));
          }
          bottomButtons.push(makeButton("Resolve", "default", this.resolve));
        }
      }
      if (ticket.status === "rerequested") {
        if (staff) {
          if (isTicketHelper(state, ticket)) {
            topButtons.push(makeButton("Continue helping", "warning", this.returnTo));
          } else {
            topButtons.push(makeButton("Take over", "warning", this.releaseToMe));
          }
          if (ticket.helper) {
            topButtons.push(makeButton("Release hold", "danger", this.releaseToAnyone));
          }
          bottomButtons.push(makeButton("Resolve", "default", this.resolve));
        } else {
          topButtons.push(makeButton("Help re-requested, wait for staff", "warning disabled"));
          bottomButtons.push(makeButton("Cancel request", "danger", this.cancelRerequest));
        }
      }

      var onlineHR = onlineButtons.length ? React.createElement("hr", null) : null;
      var hr = topButtons.length && bottomButtons.length ? React.createElement("hr", null) : null;

      if (!(topButtons.length || bottomButtons.length)) {
        return null;
      }

      var contents = React.createElement(
        React.Fragment,
        null,
        onlineButtons,
        onlineHR,
        topButtons,
        hr,
        bottomButtons
      );

      var modal = React.createElement(ResolveLlmFeedbackModal, {
        isOpen: this.state.llmFeedbackModalOpen,
        staffMode: staff,
        studentHelpType: this.state.studentHelpType,
        studentHelpOther: this.state.studentHelpOther,
        staffHelpType: this.state.staffHelpType,
        staffHelpOther: this.state.staffHelpOther,
        llmTipsInfluence: this.state.llmTipsInfluence,
        errorMessage: this.state.llmFeedbackError,
        onChangeStudentHelpType: function onChangeStudentHelpType(value) {
          return _this2.setState({ studentHelpType: value });
        },
        onChangeStudentHelpOther: function onChangeStudentHelpOther(value) {
          return _this2.setState({ studentHelpOther: value });
        },
        onChangeStaffHelpType: function onChangeStaffHelpType(value) {
          return _this2.setState({ staffHelpType: value });
        },
        onChangeStaffHelpOther: function onChangeStaffHelpOther(value) {
          return _this2.setState({ staffHelpOther: value });
        },
        onChangeLlmTipsInfluence: function onChangeLlmTipsInfluence(value) {
          return _this2.setState({ llmTipsInfluence: value });
        },
        onClose: this.closeResolveFeedback,
        onSubmit: this.submitResolveFeedback
      });

      if (embedded) {
        return React.createElement(
          React.Fragment,
          null,
          contents,
          modal
        );
      }

      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement(
            "div",
            { className: "well" },
            contents
          ),
          modal
        )
      );
    }
  }]);

  return TicketButtons;
}(React.Component);


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function TicketLayout(_ref) {
  var loadTicket = _ref.loadTicket,
      state = _ref.state,
      socket = _ref.socket,
      match = _ref.match;

  var id = +match.params.id;
  var ticket = getTicket(state, id);

  React.useEffect(function () {
    if (ticket == null) {
      loadTicket(id);
    }
  }, []);

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      description = _React$useState2[0],
      setDescription = _React$useState2[1];

  React.useEffect(function () {
    if (ticket) setDescription(ticket.description);
  }, [ticket && ticket.description]);

  var handleAssignmentSubmit = function handleAssignmentSubmit(args) {
    app.makeRequest("update_ticket", Object.assign(args, { id: id }));
  };

  var handleDescriptionSubmit = function handleDescriptionSubmit() {
    app.makeRequest("update_ticket", {
      id: id,
      description: description
    });
  };

  if (ticket == null) {
    if (isLoading(state, id)) {
      return null; // TODO loading indicator instead of blank screen
    } else {
      return React.createElement(NotFound, null);
    }
  }

  if (!isStaff(state) && !ticketIsMine(state, ticket, true)) {
    return React.createElement(NotFound, null);
  }

  var assignment = ticketAssignment(state, ticket);
  var location = ticketLocation(state, ticket);
  var question = ticketQuestion(state, ticket);

  var group = getGroup(state, ticket.group_id);

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { state: state, mode: "queue" }),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(Messages, { messages: state.messages }),
      isStaff(state) && ticket.status === "assigned" && !isTicketHelper(state, ticket) && React.createElement(
        "div",
        { className: "alert alert-warning text-center" },
        "This ticket is being helped by ",
        React.createElement(
          "strong",
          null,
          ticket.helper.name
        ),
        "."
      ),
      React.createElement(
        "div",
        { className: "row ticket" },
        React.createElement(
          "div",
          { className: "col-xs-12" },
          React.createElement(
            "h2",
            { className: "ticket-view-name text-center" },
            group ? group.attendees[0].user.shortName + "'s Group" : ticket.status === "pending" && isStaff(state) ? "Help to View Name" : ticket.user.name,
            React.createElement(
              "small",
              { className: "clearfix" },
              assignment.name,
              " ",
              question,
              " \xB7 ",
              location.name,
              location.link && ticket.call_url && " (" + ticket.call_url + ")"
            )
          ),
          React.createElement(
            "p",
            { className: "ticket-view-text text-center" },
            " ",
            ticketStatus(state, ticket),
            " "
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement("hr", null),
          React.createElement(DescriptionBox, {
            locked: !!ticket.group_id,
            state: state,
            ticket: ticket,
            prompt: "Please describe your issue below:",
            placeholder: state.config.default_description || "It would be helpful if you could describe your issue. For example," + ' "I have a SyntaxError in my ___ function. I&apos;ve tried using ____ and ____."',
            description: description,
            onChange: setDescription,
            onSubmit: handleDescriptionSubmit
          })
        )
      ),
      isStaff(state) && (state.config.enable_llm_features === true || state.config.enable_llm_features === "true") && ticket.llm_tips && React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement("hr", null),
          React.createElement(LlmTips, { tips: ticket.llm_tips, className: "ticket-llm-tips--card" })
        )
      ),
      !ticket.group_id && React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement("hr", null),
          React.createElement(UpdateAssignmentBox, {
            state: state,
            elem: ticket,
            onSubmit: handleAssignmentSubmit
          })
        )
      ),
      !ticket.group_id && React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement("hr", null),
          React.createElement(UpdateLocationBox, { state: state, ticket: ticket })
        )
      ),
      React.createElement(TicketButtons, { state: state, ticket: ticket }),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement("hr", null),
          React.createElement(ChatBox, {
            key: id,
            currentUser: state.currentUser,
            socket: socket,
            mode: group ? "group" : "ticket",
            messages: group ? group.messages : ticket.messages,
            id: group ? group.id : id
          })
        )
      ),
      state.config.ticket_prompt && React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-md-6 col-md-offset-3" },
          React.createElement("hr", null),
          React.createElement(ReactMarkdown, { source: state.config.ticket_prompt })
        )
      )
    )
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function UpdateAssignmentBox(_ref) {
  var state = _ref.state,
      elem = _ref.elem,
      onSubmit = _ref.onSubmit;
  var assignments = state.assignments;


  var filteredAssignments = Object.values(assignments).filter(function (assignment) {
    return assignment.visible;
  }).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  var _React$useState = React.useState(elem.assignment_id),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      assignment_id = _React$useState2[0],
      setAssignment = _React$useState2[1];

  var _React$useState3 = React.useState(elem.question),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      question = _React$useState4[0],
      setQuestion = _React$useState4[1];

  return React.createElement(
    "div",
    { className: "request-form form-group form-group-lg" },
    React.createElement(
      "div",
      { className: "input-group" },
      React.createElement(SelectPicker, {
        options: filteredAssignments,
        value: assignment_id,
        onChange: function onChange(e) {
          return setAssignment(parseInt(e.target.value));
        },
        className: "selectpicker form-control form-left",
        "data-live-search": "true",
        "data-size": "8",
        "data-width": "60%",
        "data-style": "btn-lg btn-default",
        id: "assignment_id",
        name: "assignment_id",
        title: "Assignment",
        required: true
      }),
      React.createElement("input", {
        className: "form-control form-right",
        type: "text",
        id: "question",
        name: "question",
        title: "Question",
        placeholder: "Question",
        value: question,
        onChange: function onChange(e) {
          return setQuestion(e.target.value);
        }
      })
    ),
    assignment_id !== elem.assignment_id || question !== elem.question ? React.createElement(
      "button",
      {
        onClick: function onClick() {
          return onSubmit({ assignment_id: assignment_id, question: question });
        },
        className: "description-button btn btn-default btn-lg btn-block"
      },
      " ",
      "Update Assignment",
      " "
    ) : null
  );
}


"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateLocationBox = function (_React$Component) {
  _inherits(UpdateLocationBox, _React$Component);

  function UpdateLocationBox(props) {
    _classCallCheck(this, UpdateLocationBox);

    var _this = _possibleConstructorReturn(this, (UpdateLocationBox.__proto__ || Object.getPrototypeOf(UpdateLocationBox)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  _createClass(UpdateLocationBox, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _props = this.props,
          state = _props.state,
          ticket = _props.ticket;

      this.newLocationId = event.target.value;
      this.setState(state); //force a re-render
    }
  }, {
    key: "submit",
    value: function submit() {
      var _props2 = this.props,
          state = _props2.state,
          ticket = _props2.ticket;

      app.makeRequest("update_ticket", {
        id: ticket.id,
        location_id: this.newLocationId
      });
      this.setState(state); //force a render
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props,
          state = _props3.state,
          ticket = _props3.ticket;
      var locations = state.locations;

      var filteredLocations = Object.values(locations).filter(function (locations) {
        return locations.visible;
      }).sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      var staff = isStaff(state);
      if (staff) {
        return null;
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          null,
          " If you have moved, please update your new location here:"
        ),
        React.createElement(
          "div",
          { className: "form-group form-group-lg" },
          React.createElement(
            "div",
            { className: "input-group" },
            React.createElement(SelectPicker, {
              onChange: this.handleChange,
              options: filteredLocations,
              className: "selectpicker form-control",
              id: "location",
              "data-width": "80%",
              "data-style": "btn-lg btn-default",
              name: "location",
              title: "Location"
            }),
            React.createElement(
              "div",
              { className: "input-group-btn form-right pull-left" },
              React.createElement(
                "button",
                {
                  className: "btn btn-lg btn-default",
                  onClick: this.submit,
                  disabled: this.newLocationId == undefined || this.newLocationId == ticket.location_id
                },
                "Update"
              )
            )
          )
        )
      );
    }
  }]);

  return UpdateLocationBox;
}(React.Component);


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function UserLayout(_ref) {
  var state = _ref.state,
      match = _ref.match;

  var userID = +match.params.id;

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      userData = _React$useState2[0],
      setUserData = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isLoading = _React$useState4[0],
      setIsLoading = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      page = _React$useState6[0],
      setPage = _React$useState6[1];

  if (app && !isLoading && Object.keys(userData).length === 0) {
    setIsLoading(true);
    app.makeRequest("get_user", userID, false, function (userData) {
      setUserData(userData);
    });
  }

  if (Object.keys(userData).length === 0) {
    return null;
  }

  var ticketRows = userData.tickets.map(function (ticket) {
    return [moment.utc(ticket.created), React.createElement(Row, {
      title: (ticket.user ? ticket.user.name : "Someone") + "'s Ticket",
      link: "/tickets/" + ticket.id,
      prop1: moment().to(moment.utc(ticket.created)),
      prop2: state.locations[ticket.location_id].name
    })];
  });

  var appointmentRows = userData.appointments.map(function (appointment) {
    var id = appointment.id,
        location_id = appointment.location_id,
        signups = appointment.signups,
        start_time = appointment.start_time;


    var students = signups.map(function (_ref2) {
      var name = _ref2.user.name;
      return name;
    });

    var studentNameList = void 0;
    if (students.length === 0) {
      studentNameList = "nobody";
    } else if (students.length === 1) {
      studentNameList = students[0];
    } else {
      studentNameList = students.slice(0, students.length - 1).join(", ") + " and " + students[students.length - 1];
    }

    var title = "Section with " + studentNameList;

    return [getAppointmentStartTime(appointment), React.createElement(Row, {
      title: title,
      link: "/appointments/" + id,
      prop1: moment().to(getAppointmentStartTime({ start_time: start_time })),
      prop2: state.locations[location_id].name
    })];
  });

  var rows = [].concat(ticketRows, appointmentRows).sort(function (a, b) {
    return -timeComparator(a[0], b[0]);
  }).map(function (x) {
    return x[1];
  });

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { state: state, mode: "activity_log" }),
    React.createElement(OfflineIndicator, { offline: state.offline && state.loaded }),
    React.createElement(
      "div",
      { className: "jumbotron" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h2",
          null,
          " ",
          userData.user.name,
          " "
        ),
        React.createElement(
          "p",
          null,
          userData.user.email
        ),
        React.createElement(
          "div",
          { className: "activity-buttons" },
          React.createElement(
            Link,
            { to: "/activity_log", className: "btn btn-warning" },
            "Back to list"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h3",
        null,
        "History"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "queue" },
          rows.slice(page * 50, (page + 1) * 50)
        ),
        React.createElement(
          "nav",
          null,
          React.createElement(
            "ul",
            { className: "pager" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "button",
                {
                  className: "btn btn-default",
                  onClick: function onClick(e) {
                    return setPage(function (page) {
                      return page - 1;
                    });
                  },
                  disabled: page <= 0
                },
                "Previous"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "button",
                {
                  className: "btn btn-default",
                  onClick: function onClick(e) {
                    return setPage(function (page) {
                      return page + 1;
                    });
                  },
                  disabled: page >= rows.length / 50 - 1
                },
                "Next"
              )
            )
          )
        )
      )
    )
  );
}


"use strict";

var initialState = {
  currentUser: null,
  loaded: false,
  offline: true,
  assignments: {},
  locations: {},
  config: {},
  appointments: [],
  groups: [],
  tickets: new Map(),
  loadingTickets: new Set(),
  filter: {
    location_id: null,
    assignment_id: null,
    question: null
  },
  queueTabIndex: 0,
  messages: [],
  nextMessageID: 1
}; /* This file contains functions for manipulating the global state of the app.
    *
    * This file uses flow type annotations for greater safety. To typecheck, run
    *     npm run-script flow
    */

var referenceTimeZone = "America/Los_Angeles";
var currTimeZone = moment.tz.guess();

function ticketDisplayTime(ticket) {
  return moment.utc(ticket.created).local().format("h:mm A");
}

function ticketTimeAgo(ticket) {
  return moment.utc(ticket.created).fromNow();
}

function ticketTimeSinceAssigned(ticket) {
  return moment.utc(ticket.updated).fromNow();
}

function ticketTimeToReRequest(ticket) {
  return moment.utc(ticket.rerequest_threshold).fromNow();
}

function isPending(ticket) {
  return ticket.status === "pending";
}

function isActive(ticket) {
  return ["pending", "assigned", "juggled", "rerequested"].includes(ticket.status);
}

function ticketAssignment(state, ticket) {
  return state.assignments[ticket.assignment_id];
}

function ticketLocation(state, ticket) {
  return state.locations[ticket.location_id];
}

function ticketQuestion(state, ticket) {
  var question = ticket.question;
  if (!isNaN(question)) {
    question = "Q" + parseInt(question);
  }
  return question;
}

function ticketStatus(state, ticket) {
  if (ticket.status === "assigned" && ticket.helper) {
    return "Being helped by " + (isTicketHelper(state, ticket) ? "you" : ticket.helper.name);
  } else if (ticket.status === "resolved") {
    if (ticket.helper) {
      return "Resolved by " + ticket.helper.name;
    } else {
      return "Resolved";
    }
  } else if (ticket.status === "deleted") {
    return "Deleted";
  } else if (ticket.status === "juggled") {
    return ticket.group_id ? "Working in a group" : "Working solo";
  } else if (ticket.status === "rerequested") {
    return "Waiting for " + (isTicketHelper(state, ticket) ? "you" : ticket.helper ? ticket.helper.name : "any assistant") + " to come back";
  } else {
    return "Queued";
  }
}

function ticketPosition(state, ticket) {
  var index = getTickets(state, "pending").findIndex(function (pendingTicket) {
    return pendingTicket.id === ticket.id;
  });
  if (index != -1) {
    return "#" + (index + 1);
  }
}

function isStaff(state) {
  return state.currentUser != null && state.currentUser.isStaff;
}

function getTicket(state, id) {
  return state.tickets.get(id);
}

function setTicket(state, ticket) {
  if (ticketIsMine(state, ticket, true)) {
    var oldTicket = getMyTicket(state);
    if (oldTicket) {
      if (oldTicket.status === "pending" && ticket.status === "assigned") {
        var location = ticketLocation(state, ticket);
        notifyUser("Your name is being called", ticket.helper.name + " is looking for you in " + location.name, ticket.id + ".assign");
      } else if (oldTicket.status === "assigned" && ticket.status !== "assigned") {
        cancelNotification(ticket.id + ".assign");
      }
    }
  }
  /* New ticket notifications for staff */
  if (isStaff(state) && state.config.send_ticket_notifications) {
    var _oldTicket = getTicket(state, ticket.id);
    if (!_oldTicket && ticket.status === "pending") {
      var assignment = ticketAssignment(state, ticket);
      var _location = ticketLocation(state, ticket);
      var _question = ticketQuestion(state, ticket);
      notifyUser("New request for " + assignment.name + " " + _question, _location.name, ticket.id + ".create");
    } else if (ticket.status !== "pending") {
      cancelNotification(ticket.id + ".create");
    }
  }
  state.tickets.set(ticket.id, ticket);
}

function loadTicket(state, id) {
  state.loadingTickets.add(id);
}

function isLoading(state, id) {
  return state.loadingTickets.has(id);
}

function receiveTicket(state, id, ticket) {
  if (ticket != null) {
    setTicket(state, ticket);
  }
  state.loadingTickets.delete(id);
}

/* Return an array of pending tickets, sorted by queue time.
 */
function getTickets(state, status) {
  return Array.from(state.tickets.values()).filter(function (ticket) {
    return ticket.status === status;
  }).sort(function (a, b) {
    if (a.sort_key < b.sort_key) {
      return -1;
    } else if (a.sort_key > b.sort_key) {
      return 1;
    } else {
      return 0;
    }
  });
}

function applyFilter(filter, tickets) {
  var assignmentId = parseInt(filter.assignment_id);
  if (!isNaN(assignmentId)) {
    tickets = tickets.filter(function (ticket) {
      return ticket.assignment_id === assignmentId;
    });
  }
  var locationId = parseInt(filter.location_id);
  if (!isNaN(locationId)) {
    tickets = tickets.filter(function (ticket) {
      return ticket.location_id === locationId;
    });
  }
  if (filter.question) {
    tickets = tickets.filter(function (ticket) {
      return ticket.question === filter.question;
    });
  }
  return tickets;
}

function ticketIsMine(state, ticket, includeGroup) {
  return state.currentUser != null && (ticket.user && state.currentUser.id === ticket.user.id || includeGroup && getMyGroup(state) && getMyGroup(state).id === ticket.group_id);
}

function isTicketHelper(state, ticket) {
  return state.currentUser && ticket.helper && state.currentUser.id === ticket.helper.id;
}

/* Return the current user's active ticket. */
function getMyTicket(state) {
  return Array.from(state.tickets.values()).find(function (ticket) {
    return isActive(ticket) && ticketIsMine(state, ticket);
  });
}

/* Return the first ticket the current user is helping. */
function getHelpingTicket(state) {
  return Array.from(state.tickets.values()).find(function (ticket) {
    return isActive(ticket) && isTicketHelper(state, ticket);
  });
}

function addMessage(state, text, category) {
  var id = state.nextMessageID;
  state.messages.push({
    id: id,
    text: text,
    category: category,
    visible: true
  });
  state.nextMessageID += 1;
  return id;
}

function clearMessage(state, id) {
  var message = state.messages.find(function (message) {
    return message.id === id;
  });
  if (message) {
    message.visible = false;
  }
}

var timeComparator = function timeComparator(a, b) {
  return a.isAfter(b) ? 1 : -1;
};

var appointmentTimeComparator = function appointmentTimeComparator(a, b) {
  return moment(a.start_time).isSame(moment(b.start_time)) ? b.id - a.id : moment(a.start_time).isAfter(moment(b.start_time)) ? 1 : -1;
};

function getMySignups(state) {
  if (!state.currentUser) {
    return [];
  }
  var mySignups = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = state.appointments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var appointment = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = appointment.signups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var signup = _step2.value;

          if (signup.user && signup.user.id === state.currentUser.id) {
            mySignups.push({ appointment: appointment, signup: signup });
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return mySignups;
}

function isSoon(appointment) {
  return getAppointmentStartTime(appointment).isBefore(moment().add(2, "hours"));
}

function getMyAppointmentsStaff(state) {
  if (!state.currentUser) {
    return [];
  }
  var myAppointments = [];
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = state.appointments[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var appointment = _step3.value;

      if (!appointment.helper && appointment.status === "pending" || appointment.helper && appointment.helper.id === state.currentUser.id) {
        myAppointments.push(appointment);
      }
    }

    /***************Handling notifications***************/
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (state.currentUser.isStaff) {
    if (!state.apptStudents) {
      state.apptStudents = [];
    }

    // compare state list to the new student signup
    var currStudentSignups = state.apptStudents;

    var newStudentSignups = [].concat.apply([], myAppointments.filter(function (appointment) {
      return appointment.signups.length > 0;
    }).map(function (appointment) {
      return appointment.signups;
    })).map(function (signups) {
      return signups.user.name;
    });

    // if there are differences, send them as a notification
    var differences = newStudentSignups.filter(function (student) {
      return !currStudentSignups.includes(student);
    });
    if (differences.length != 0) {
      notifyUser("You have new appointment signups!", differences.join(", "), null);
    }

    state.apptStudents = newStudentSignups;
  }
  return myAppointments;
}

function getAppointment(state, appointment_id) {
  return state.appointments.find(function (_ref) {
    var id = _ref.id;
    return id === appointment_id;
  });
}

function setAppointment(state, appointment, redirect, lookup) {
  if (!appointment.id) {
    return;
  }
  var oldAppointment = lookup ? lookup[appointment.id] : getAppointment(state, appointment.id);
  if (appointmentIncludesMe(state, appointment)) {
    if (oldAppointment) {
      if (oldAppointment.status === "pending" && appointment.status === "active") {
        notifyUser("Your appointment has started", appointment.helper.name + " is waiting for you in " + state.locations[appointment.location_id].name, appointment.id + ".appointment.assign");
        redirect();
      } else if (oldAppointment.status === "active" && appointment.status !== "active") {
        cancelNotification(appointment.id + ".appointment.assign");
      }
    }
  }
  if (!lookup) {
    if (oldAppointment) {
      state.appointments.splice(state.appointments.indexOf(oldAppointment), 1);
    }
    state.appointments.push(appointment);
    state.appointments.sort(appointmentTimeComparator);
  }
}

function appointmentIncludesMe(state, appointment) {
  if (!appointment.signups) {
    return false;
  }
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = appointment.signups[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var signup = _step4.value;

      if (signup.user && state.currentUser && signup.user.id === state.currentUser.id) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return false;
}

function getAppointmentStartTime(appointment) {
  return moment.tz(appointment.start_time, referenceTimeZone).tz(currTimeZone);
}

function getAppointmentEndTime(appointment) {
  return getAppointmentStartTime(appointment).add(appointment.duration, "seconds");
}

function formatAppointmentDate(appointment) {
  return getAppointmentStartTime(appointment).format("dddd, MMMM D");
}

function formatAppointmentDuration(appointment) {
  if (currTimeZone === referenceTimeZone) {
    return getAppointmentStartTime(appointment).format("h:mma") + "\u2010" + getAppointmentEndTime(appointment).format("h:mma");
  } else {
    return getAppointmentStartTime(appointment).format("h:mma") + "\u2010" + getAppointmentEndTime(appointment).format("h:mma z") + " (UTC" + getAppointmentEndTime(appointment).format("Z") + ")";
  }
}

function formatAppointmentDurationWithDate(appointment) {
  if (currTimeZone === referenceTimeZone) {
    return getAppointmentStartTime(appointment).format("dddd, MMMM D") + " at " + getAppointmentStartTime(appointment).format("h:mma") + "\u2010" + getAppointmentEndTime(appointment).format("h:mma");
  } else {
    return getAppointmentStartTime(appointment).format("dddd, MMMM D") + " at " + getAppointmentStartTime(appointment).format("h:mma") + "\u2010" + getAppointmentEndTime(appointment).format("h:mma z") + " (UTC" + getAppointmentEndTime(appointment).format("Z") + ")";
  }
}

function getGroup(state, group_id) {
  return state.groups.find(function (_ref2) {
    var id = _ref2.id;
    return id === group_id;
  });
}

function setGroup(state, group) {
  if (!group.id) {
    return;
  }
  var oldGroup = getGroup(state, group.id);
  if (oldGroup) {
    state.groups.splice(state.groups.indexOf(oldGroup), 1);
  }
  state.groups.push(group);
  state.groups.sort(function (group) {
    return group.id;
  });
}

function groupIsActive(group) {
  return group.group_status === "active";
}

function groupIsMine(state, group) {
  return state.currentUser && group.attendees.some(function (attendance) {
    return attendance.user.id === state.currentUser.id;
  });
}

function getMyGroup(state) {
  return Array.from(state.groups.values()).find(function (group) {
    return groupIsActive(group) && groupIsMine(state, group);
  });
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function timeoutPromise(ms, promise) {
  return new Promise(function (resolve, reject) {
    var timeoutId = setTimeout(function () {
      reject(new Error("promise timeout"));
    }, ms);
    promise.then(function (res) {
      clearTimeout(timeoutId);
      resolve(res);
    }, function (err) {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
}

async function post(endpoint, data, skipTimeout) {
  var promise = fetch(endpoint, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (skipTimeout) {
    return promise;
  }
  return timeoutPromise(10000, promise).then(function (resp) {
    return resp.json();
  });
}

var Socket = function () {
  function Socket() {
    var _this = this;

    _classCallCheck(this, Socket);

    setInterval(function () {
      return _this.emit("connect", { url: window.location.href });
    }, 10000);
    this.handlers = new Map();
    this.jobs = [];
    this.emit("connect", { url: window.location.href });
  }

  _createClass(Socket, [{
    key: "on",
    value: function on(event, handler) {
      if (!this.handlers.has(event)) {
        this.handlers.set(event, []);
      }
      this.handlers.get(event).push(handler);
    }
  }, {
    key: "trigger",
    value: function trigger(event, args) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (this.handlers.get(event) || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var handler = _step.value;

          handler(args);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(eventType) {
      this.handlers.delete(eventType);
    }
  }, {
    key: "emit",
    value: function emit() {
      var _this2 = this;

      var processQueue = function processQueue() {
        if (_this2.jobs.length > 0) {
          var _args = _this2.jobs[0];
          _this2.actuallyEmit.apply(_this2, _toConsumableArray(_args)).finally(_this2.jobs.shift.bind(_this2.jobs)).then(processQueue);
        }
      };

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.jobs.push(args);
      if (this.jobs.length === 1) {
        processQueue();
      }
    }
  }, {
    key: "actuallyEmit",
    value: function actuallyEmit(event) {
      var _this3 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (callback == null && typeof params === "function") {
        callback = params;
        params = {};
      }
      return post("/api/" + event, params).then(function (_ref) {
        var action = _ref.action,
            updates = _ref.updates;

        _this3.trigger("connect");
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = updates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                _event = _step2$value[0],
                payload = _step2$value[1];

            _this3.trigger(_event, payload);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (callback != null) {
          callback(action);
        }
      }).catch(function (e) {
        console.error(e);
        _this3.trigger("disconnect");
      });
    }
  }]);

  return Socket;
}();


"use strict";

function requestNotificationPermission() {
  try {
    Push.Permission.request(null, function () {
      console.log("Permission denied for notifications");
    });
  } catch (e) {
    // Ignore Push.js errors about unsupported devices
  }
}

function notifyUser(title, body, tag) {
  try {
    Push.create(title, {
      body: body,
      icon: window.location.origin + "/static/img/logo-tiny.png",
      onClick: function onClick() {
        window.focus();
        this.close();
      },
      tag: tag
    });
  } catch (e) {
    // Ignore Push.js errors about unsupported devices
  }
}

function cancelNotification(tag) {
  try {
    Push.close(tag);
  } catch (e) {
    // Ignore Push.js errors about unsupported devices
  }
}

function initializeTooltip(elem, options) {
  $(elem).tooltip(options);
}

function isPartyRoot(state) {
  return state.config.party_enabled && (!JSON.parse(state.config.is_queue_open) || !isStaff(state));
}

// The one and only app. Other components may reference this variable.
// See components/app.js for more documentation
var app = ReactDOM.render(React.createElement(App, null), document.getElementById("content"));

