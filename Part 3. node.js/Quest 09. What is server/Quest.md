## 1. tracert(Windows가 아닌 경우 traceroute) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.
  * 어떤 IP주소들이 있나요?  

      core22.fsn1.hetzner.com	213.239.245.241	de	0.223 ms	0.222 ms  
      core21.fsn1.hetzner.com	213.239.245.237	de	0.243 ms  
      core11.nbg1.hetzner.com	213.239.224.9	de	2.740 ms   
      core4.fra.hetzner.com	213.239.245.14	de	15.818 ms  
      core0.fra.hetzner.com	213.239.252.29	de	4.941 ms  
      core4.fra.hetzner.com	213.239.245.33	de	15.811 ms	15.804 ms  
      core0.fra.hetzner.com	213.239.252.21	de	5.618 ms
      
  * 그 IP주소들은 어디에 위치해 있나요?  
    - 상단의 IP주소는 www.google.com를 찾아가는 경로에 위치한 라우터 주소이다. DNS 서버로부터 IP주소를 확인하게 되면 해당 IP주소의 장치로 찾아가는 과정이 존재한다. 그 과정에서 라우터는 라우팅 테이블을 통해 해당 IP주소가 이고, 라우팅 경로에 따라 IP주소는 달라지기 때문에 IP주소의 물리적인 위치를 특정짓기는 힘들 것 같습니다.  

* Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  * TCP 패킷을 주고받는 과정은 어떻게 되나요?
  * 각각의 패킷에 어떤 정보들이 담겨 있나요?
* telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.
  * 어떤 헤더들이 있나요?  
    - HTTP/1.0 200 OK  
      Date: Tue, 07 Aug 2018 05:38:58 GMT  
      Expires: -1  
      Cache-Control: private, max-age=0  
      Content-Type: text/html; charset=ISO-8859-1  
      P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."  
      Server: gws  
      X-XSS-Protection: 1; mode=block  
      X-Frame-Options: SAMEORIGIN  
      Set-Cookie: 1P_JAR=2018-08-07-05; expires=Thu, 06-Sep-2018 05:38:58 GMT; path=/;       domain=.google.com  
      Set-Cookie: NID=136=i8JWbU4oysSosgX8VTEeyU1gJl_9f0mzUIU5gZsz05c4sZhcna7IEzEZAlvmne9bLXdo5XrBMRsK6PdbeG2TB_c5sMqXg8t8xxx_dZ5ZT3kSVILFO2rVmYHInXneVuZf; expires=Wed, 06-Feb-2019       05:38:58 GMT; path=/; domain=.google.com; HttpOnly  
      Accept-Ranges: none  
      Vary: Accept-Encoding
      
  * 그 헤더들은 어떤 역할을 하나요?  
    - ㄴㅁㅇㄹ