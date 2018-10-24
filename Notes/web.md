What happens when you type in www.maps.google.com and hit enter?
Check this link for more detailed answer:
https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a
This is the brief answer:
1. You type maps.google.com into the address bar of your browser.
2. The browser checks the cache for a DNS (Domain Name System) record to find the corresponding IP address of maps.google.com.
3. If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts maps.google.com.
4. Browser initiates a TCP connection with the server.
5. The browser sends an HTTP request to the web server.
6. The server handles the request and sends back a response.
7. The server sends out an HTTP response.
8. The browser displays the HTML content (for HTML responses which is the most common).

Why do we need a DNS?
The Domain Name System (DNS) is often referred to as the backbone of the internet. It’s run by many engineers and their organizations, it ultimately shapes the future of the internet. We need DNS because it manages the whole process of how the internet works and how it is organized (we can use the example of what happens when you type in google.com and press enter)

Explain TCP, and why it is a necessary protocol
TCP/IP (Transmission Control Protocol/Internet Protocol) is a set of allows anyone with a computer, modem, and an Internet service provider to access and share information over the Internet.Both TCP and IP, two separate protocols that work hand-in-hand, perform chores that manage and guide the general mobility of data packets over the Internet.

What is the difference between TCP and UDP?
TCP is a connection oriented stream over an IP network. It guarantees that all sent packets will reach the destination in the correct order. This imply the use of acknowledgement packets sent back to the sender, and automatic retransmission, causing additional delays and a general less efficient transmission than UDP.

What are the common HTTP methods? When are they used, and what do they accomplish? (This is a big one)
The set of common methods for HTTP/1.1 is defined below and this set can be expanded based on requirements. These method names are case sensitive and they must be used in uppercase.

Method and Description:
1	GET
The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.

2	HEAD
Same as GET, but transfers the status line and header section only.

3	POST
A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

4	PUT
Replaces all current representations of the target resource with the uploaded content.

5	DELETE
Removes all current representations of the target resource given by a URI.

6	CONNECT
Establishes a tunnel to the server identified by a given URI.

7	OPTIONS
Describes the communication options for the target resource.

8	TRACE
Performs a message loop-back test along the path to the target resource.

 What is the difference between HTTP and HTTPS?
 In address bar of a browser, have you noticed either http:// or https:// at the time of browsing a website? If neither of these are present then most likely, it’s http://
In short, both of these are protocols using which the information of a particular website is exchanged between Web Server and Web Browser. But what’s difference between these two? Well, extra s is present in https and that makes it secure!
Main difference between http and https is that https is much more secure compared to http.

What is the difference between localStorage, sessionStorage, session and cookies?
This is an extremely broad scope question, and a lot of the pros/cons will be contextual to the situation.
In all cases, these storage mechanisms will be specific to an individual browser on an individual computer/device.
localStorage, sessionStorage, and cookies are all client storage solutions. Session data is held on the server where it remains under your direct control.
localStorage and sessionStorage are relatively new APIs (meaning, not all legacy browsers will support them) and are near identical (both in APIs and capabilities) with the sole exception of persistence. sessionStorage (as the name suggests) is only available for the duration of the browser session (and is deleted when the tab or window is closed) - it does, however, survive page reloads.
Clearly, if the data you are storing needs to be available on an ongoing basis then localStorage is preferable to sessionStorage - although you should note both can be cleared by the user so you should not rely on the continuing existence of data in either case.
localStorage and sessionStorage are perfect for persisting non-sensitive data needed within client scripts between pages (for example: preferences, scores in games). The data stored in localStorage and sessionStorage can easily be read or changed from within the client/browser so should not be relied upon for storage of sensitive or security-related data within applications.
Cookies - this is also true for cookies, these can be trivially tampered with by the user, and data can also be read from them in plain text - so if you are wanting to store sensitive data then the session is really your only option. If you are not using SSL, cookie information can also be intercepted in transit, especially on an open wifi. As cookies are used for authentication purposes and persistence of user data, all cookies valid for a page are sent from the browser to the server for every request to the same domain - this includes the original page request, any subsequent Ajax requests, all images, stylesheets, scripts, and fonts. For this reason, cookies should not be used to store large amounts of information.
In terms of capabilities, cookies, sessionStorage, and localStorage only allow you to store strings. Session storage will generally allow you to store any primitives or objects supported by your Server Side language/framework.

 What is XSS and what is the danger of it?
 Cross-site Scripting (XSS) refers to client-side code injection attack wherein an attacker can execute malicious scripts (also commonly referred to as a malicious payload) into a legitimate website or web application. XSS is amongst the most rampant of web application vulnerabilities and occurs when a web application makes use of unvalidated or unencoded user input within the output it generates.
By leveraging XSS, an attacker does not target a victim directly. Instead, an attacker would exploit a vulnerability within a website or web application that the victim would visit, essentially using the vulnerable website as a vehicle to deliver a malicious script to the victim’s browser.
XSS in combination with social engineering, allow attackers to pull off advanced attacks including cookie theft, keylogging, phishing and identity theft. Critically, XSS vulnerabilities provide the perfect ground for attackers to escalate attacks to more serious ones.

 What is a CSRF Attack?
 Cross Site Request Forgery (CSRF) is an attack whereby a malicious entity tricks a victim into performing actions on behalf of the attacker. The impact of the attack would depend on the level of permissions that the victim being exploited has. The actions being perpetrated by the attacker will surely have a greater effect if the victim performing the actions is at an administrative level versus a low level user, with less privileges. CSRF attacks take advantage of the fact that a web application completely trusts a user, once it can confirm that the user is indeed who they say they are.

  When are two pages considered to have the same origin?
  Two pages have the same origin if the protocol, port (if one is specified), and host are the same for both pages.

 What is CORS?
 Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.

 What is Round Robin DNS binding?
 Round Robin DNS is a technique of load distribution, load balancing, or fault-tolerance provisioning multiple, redundant Internet Protocol service hosts, e.g., Web server, FTP servers, by managing the Domain Name System's (DNS) responses to address requests from client computers according to an appropriate statistical model.

 What is striping when talking about writing to a Hard drive?
 Disk striping is the process of dividing a body of data into blocks and spreading the data blocks across multiple storage devices, such as hard disks or solid-state drives (SSDs).

What is RAID and what functionality can it give you?
RAID is an acronym for Redundant Array of Independent Disks, which is a storage method that combines multiple physical disk drives into one virtual drive. A RAID setup can be faster than a single disk, and provide drive failure protection you can't get with a single disk.

 How do computers synchronize their clocks?
 All computers by default sync to a NTP (Network Time Protocol) server. Generally all computers get their time from these servers all over the world and sync to their local timezone.
Unless you work in an office. Most times there are main servers in your company, that get their time for the above NTP servers. Then workstations get their time from the main servers.

 What is manchester coding?
 In telecommunication and data storage, Manchester code (also known as phase encoding, or PE) is a line code in which the encoding of each data bit is either low then high, or high then low, for equal time. It is a self-clocking signal with no DC component. As a result, electrical connections using a Manchester code are easily galvanically isolated.
Manchester code derives its name from its development at the University of Manchester, where the coding was used to store data on the magnetic drum of the Manchester Mark 1 computer.

What's memcache?
Memcached is an open source, distributed memory object caching system that alleviates database load to speed up dynamic Web applications.
The system caches data and objects in memory to minimize the frequency with which an external database or API (application program interface) must be accessed.
In the Memcached system, each item comprises a key, an expiration time, optional flags, and raw data. When an item is requested, Memcached checks the expiration time to see if the item is still valid before returning it to the client. The cache can be seamlessly integrated with the application by ensuring that the cache is updated at the same time as the database.

 Why would you want to use an LRU cache in a backend server?
 Cache is useful when you have a database-driven website that gets high amounts of traffic as it can help reduce the load on your database server by bypassing it completely to retrieve certain data.
