## 1. tracert(Windows가 아닌 경우 traceroute) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.
  * 어떤 IP주소들이 있나요?  

      core22.fsn1.hetzner.com	213.239.245.241	de	0.223 ms	0.222 ms  
      core21.fsn1.hetzner.com	213.239.245.237	de	0.243 ms  
      core11.nbg1.hetzner.com	213.239.224.9	de	2.740 ms   
      core4.fra.hetzner.com	213.239.245.14	de	15.818 ms  
      core0.fra.hetzner.com	213.239.252.29	de	4.941 ms  
      core4.fra.hetzner.com	213.239.245.33	de	15.811 ms	15.804 ms  
      core0.fra.hetzner.com	213.239.252.21	de	5.618 ms  
      prg03s06-in-f228.1e100.net	172.217.23.228	us	12.609 ms	12.591 ms

  * 그 IP주소들은 어디에 위치해 있나요?  

    - 상단의 IP주소 중 마지막 줄은 www.google.com의 IP주소이고, 나머지는 www.google.com를 찾아가는 경로에 위치한 라우터 주소이다. DNS 서버로부터 IP주소를 확인하게 되면, 라우터는 해당 IP주소가 가리키는 장치로 찾아갈 수 있도록 경로를 설정하게 되는데 그 과정에서 라우팅 테이블을 참조하게 된다. 라우팅 테이블에는 목적지까지 도달하기 위한 다음 라우터의 IP주소 정보를 가지고 있으며, 다수의 라우터를 거쳐 목적지에 도달하게 된다.

* Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  
  * TCP 패킷을 주고받는 과정은 어떻게 되나요?
    
    1. 세션 성립: 3way-handshacking 

        1. client는 [SYN] 패킷에 Seq값으로 자신의 ISN넘버 설정한 후 server에 전송한다.
        2. server는 client의 [SYN] 패킷에 대한 응답으로 Seq값에 자신의 ISN넘버를 설정하고, Ack값에 client의 Seq값에 +1한 값을 설정 한 [SYN, ACK] 패킷을 전송한다.
        3. client는 server에서 전송된 [SYN, ACK] 패킷 대한 응답으로 Seq값에 [SYN, ACK] 패킷의 Ack값을, Ack값에 [SYN, ACK] 패킷의 Seq값을 설정 한 [ACK] 패킷을 전송한다.

    2. 데이터 전송: Seq값, Ack값을 +1씩 증가시키며 실질적인 데이터 전송을 수행한다.

    3. 세션 종료: 4way-handshaking  

        1. client는 마지막 [FIN, ACK] 패킷의 Ack값으로 마지막 Seq값을 전송한다.   
        2. server는 [ACK] 패킷을 통해 마지막 데이터를 요청하고, [FIN, ACK] 패킷을 전송하여 세션 종료를 수행한다.
        3. client는 [FIN, ACK] 패킷의 Ack값을 Seq값으로 설정하여 마지막 [ACK] 패킷을 보내고 세션은 종료된다.

  * 각각의 패킷에 어떤 정보들이 담겨 있나요?  
        
      1. Source Port: 패킷을 송신하는 시스템의 포트번호를 나타낸다.
      2. Destination Port: 패킷을 수신하는 시스템의 포트번호를 나타낸다.
      3. Sequence Number: 전송되는 데이터의 순서를 나타낸다.
      4. Acknowledge Number: 상대방으로부터 수신한 데이터의 바로 다음 데이터 번호를 나타낸다.
      5. Header Length: TCP 헤터의 전체 길이를 byte단위로 나타낸다.
      6. Reserved: 미래를 위해 예약된 필드로 항상 0이다.
      7. CWR: 송신자가 자신의 윈도우 사이즈를 줄인다.
      8. ECE: 혼잡 감지 시 수신자가 ECE를 설정하여 송신자에게 알린다.
      9. URG: TCP는 해당 패킷을 전송 큐의 제일 앞으로 보낸다.
      10. ACK: SYN에 대한 확인의 의미이다.
      11. PSH: 수신측에게 데이터를 전송하라는 의미이다.
      12. RST: 통신의 연결 및 종료를 정상적으로 할 수 없을 때 사용된다.
      13. SYN: 통신 시작 시 연결을 요청하고 ISN을 교환한다.
      14. FIN: 데이터 전송을 종료한다. 
      15. Window Size: 송신 시스템에서 자신이 수용가능한 버퍼의 크기를 byte단위로 나타낸다.
      16. Checksum: 데이터가 전송 중에 손실되지 않고 원본과 동일한지 검사한다.
      17. Urgent Point: URG 설정 시, urgent 데이터의 마지막 byte의 일련번호를 Urgent Point에 저장한다.
      18. Data: 실제 전송 데이터를 나타낸다.

* telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.
  * 어떤 헤더들이 있나요?  
    1. HTTP/1.0 200 OK  

    2. Date: Tue, 07 Aug 2018 05:38:58 GMT  

    3. Expires: -1  

    4. Cache-Control: private, max-age=0  

    5. Content-Type: text/html; charset=ISO-8859-1  

    6. P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."  

    7. Server: gws  

    8. X-XSS-Protection: 1; mode=block  

    9. X-Frame-Options: SAMEORIGIN  

    10. Set-Cookie: 1P_JAR=2018-08-07-05; expires=Thu, 06-Sep-2018 05:38:58 GMT; path=/; domain=.google.com  

    11. Set-Cookie: NID=136=i8JWbU4oysSosgX8VTEeyU1gJl_9f0mzUIU5gZsz05c4sZhcna7IEzEZAlvmne9bLXdo5XrBMRsK6PdbeG2TB_c5sMqXg8t8xxx_dZ5ZT3kSVILFO2rVmYHInXneVuZf; expires=Wed, 06-Feb-2019       05:38:58 GMT; path=/; domain=.google.com; HttpOnly  

    12. Accept-Ranges: none  

    13. Vary: Accept-Encoding    
      
  * 그 헤더들은 어떤 역할을 하나요?  
      1. HTTP/1.0 200 OK => http/1.0 프로토콜로 통신한 결과 상태를 나타낸다. 

      2. Date => 요청에 대한 응답이 이루어진 시간을 나타낸다.  

      3. Expires, Cache-Control => Cache-Control의 값을 통해 응답한 데이터를 캐싱할지 여부를 나타낸다. 캐싱 기간은 Expires 또는 max-age값으로 나타낸다.  

      5. Content-Type => 응답으로 전송된 데이터의 타입, 인코딩 정보를 나타낸다.  

      6. P3P => 해당 사이트의 개인정보 취급에 대한 정보를 나타낸다.  

      7. Server => 서버 정보를 나타낸다.  

      8. X-XSS-Protection => XSS 공격에 대해 내장 XSS Filter를 사용하여 공격을 방지할지를 설정할 수 있는 항목이다.  

      9. X-Frame-Options => `ClickJacking`과 같은 공격을 막기 위해 브라우저가 `<frame>`, `<iframe>`, `<object>` 태그를 렌더링해야하는지 하지 말아야 하는지를 설정할 수 있는 항목이다.  

      10. Set-Cookie => 해당 정보는 클라이언트의 브라우저에 의해 저장되며, 다음 요청의 헤더값에 `Cookie`항목으로 재전송 한다.  

      12. Accept-Ranges => 부분 요청의 지원을 나타낸다. 값이 `bytes`일 경우 도중에 다운로드가 중단된 브라우저는 중단된 다운로드를 재개한다.  

      13. Vary => 동일한 URL에 의한 요청이라 하더라도, 이 항목 값에 따라 서로 다른 응답을 해주는 역할을 한다.(User Agent, Accept Encoding 등) 주로 캐싱이 이루어지는 캐시서버, CDN에서 Vary 값을 보고 캐싱할 데이터를 선택하는데 도움을 주는 역할을 한다.



