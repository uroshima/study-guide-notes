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

What is Round Robin?
Round robin is the simplest form of load balancing. It rotates through the IP addresses in the configuration with no regard to if those servers are even up.
Since there is no way to tell if those systems are available or not, you could be sending traffic to a slow or unhealthy server.
Say you have three systems in your network. If one of them goes down, roughly a third of your traffic will still be pointed to that system.

 What is Round Robin DNS binding?
 Round Robin DNS is a technique of load distribution, load balancing, or fault-tolerance provisioning multiple, redundant Internet Protocol service hosts, e.g., Web server, FTP servers, by managing the Domain Name System's (DNS) responses to address requests from client computers according to an appropriate statistical model.

 What is striping when talking about writing to a Hard drive?
 Disk striping is the process of dividing a body of data into blocks and spreading the data blocks across multiple storage devices, such as hard disks or solid-state drives (SSDs).

What is RAID and what functionality can it give you?
RAID is an acronym for Redundant Array of Independent Disks, which is a storage method that combines multiple physical disk drives into one virtual drive. A RAID setup can be faster than a single disk, and provide drive failure protection you can't get with a single disk.
RAID0 allows you to use multiple hard drives as one, but does not give you the ability to recover data if one of them fails

 How do computers synchronize their clocks?
 All computers by default sync to a NTP (Network Time Protocol) server. Generally all computers get their time from these servers all over the world and sync to their local timezone.
Unless you work in an office. Most times there are main servers in your company, that get their time for the above NTP servers. Then workstations get their time from the main servers.

What is manchester coding?
Manchester coding is a strategy to deal with clock slip. In telecommunication and data storage, Manchester code (also known as phase encoding, or PE) is a line code in which the encoding of each data bit is either low then high, or high then low, for equal time. It is a self-clocking signal with no DC component. As a result, electrical connections using a Manchester code are easily galvanically isolated.
Manchester code derives its name from its development at the University of Manchester, where the coding was used to store data on the magnetic drum of the Manchester Mark 1 computer.

What's memcache?
Memcached is an open source, distributed memory object caching system that alleviates database load to speed up dynamic Web applications.
The system caches data and objects in memory to minimize the frequency with which an external database or API (application program interface) must be accessed.
In the Memcached system, each item comprises a key, an expiration time, optional flags, and raw data. When an item is requested, Memcached checks the expiration time to see if the item is still valid before returning it to the client. The cache can be seamlessly integrated with the application by ensuring that the cache is updated at the same time as the database.

Why would you want to use an LRU cache in a backend server?
Cache is useful when you have a database-driven website that gets high amounts of traffic as it can help reduce the load on your database server by bypassing it completely to retrieve certain data.

What is Address Resolution Protocol?
Address Resolution Protocol (ARP) is a protocol for mapping an Internet Protocol address (IP address) to a physical machine address that is recognized in the local network. For example, in IP Version 4, the most common level of IP in use today, an address is 32 bits long. In an Ethernet local area network, however, addresses for attached devices are 48 bits long. (The physical machine address is also known as a Media Access Control or MAC address.) A table, usually called the ARP cache, is used to maintain a correlation between each MAC address and its corresponding IP address. ARP provides the protocol rules for making this correlation and providing address conversion in both directions.

What is the purpose of TCP?
TCP (Transmission Control Protocol) is a standard that defines how to establish and maintain a network conversation via which application programs can exchange data.TCP works with the Internet Protocol (IP), which defines how computers send packets of data to each other.

What is Load Balancing?
For more details check this link http://news.constellix.com/dns-load-balancing-what-is-it-and-why-do-you-need-it/
<!-- DNS Load Balancing: What is It and Why Do You Need It? -->
Load balancing is commonly used to balance traffic across redundant systems, like web or application servers. So if one server is unavailable, there are multiple other servers ready to take over the traffic load.
Load balancing can do some pretty amazing things, like:
 - Outage protection
 - Improve load times
 - Reduce server load
Seamless app rollouts or network expansions
If load balancing can do such amazing things, why isn’t everyone using it?! Good question, I don’t know… but some quick Googling told me this:
 - Load balancing is expensive
 - Hard to set up
 - Requires extra lookups

What is the principle of Least Privilege?
The principle of least privilege (POLP), an important concept in computer security, is the practice of limiting access rights for users to the bare minimum permissions they need to perform their work. Under POLP, users are granted permission to read, write or execute only the files or resources they need to do their jobs: In other words, the least amount of privilege necessary.

Top 10 ways to speed up a website
1. Minimize HTTP requests
2. Minify and combine files
3. Use asynchronous loading for CSS and JavaScript files
4. Reduce redirects
5. Reduce external scripts
6. Reduce server response time
7. Choose the right hosting option for your needs
8. Use external hosting platforms
9. Reduce image sizes
10. Enable browser caching
also check this link for more details https://browserdiet.com/

Why is FTP a bad idea?
FTP, File Transfer Protocol, has been around since the beginning of the internet in the early 1970s. It transfered files when the internet was a safer, more trusting, place. That isn’t the case anymore. Using FTP to host files is probably a bad idea for almost everyone. FTP is like Telnet. No encryption is used for anything. These days, we know that is bad. There are lots of important issues with using plain FTP, but the biggest two are:

1. Passwords are transmitted un-encrypted – this is reason enough to not use it anymore
2. Data is transmitted un-encrypted – this may or may not be that important to any specific download

 What kinds of information is at risk when comunicating over HTTP?
 HTTP biggest problem is that the session token (that big string) can be easily intercepted (stolen), which means identity can be stolen

  Why should you ensure that files on a web server are not being executed by root?
  Because the root has permission to take many different actions like download anything, install, change..

  What is WPA2?
  Wi-Fi Protected Access (WPA) and Wi-Fi Protected Access II (WPA2) are two security protocols and security certification programs developed by the Wi-Fi Alliance to secure wireless computer networks. The Alliance defined these in response to serious weaknesses researchers had found in the previous system, Wired Equivalent Privacy (WEP).

  What is public key cryptography?
Public-key cryptography, or asymmetric cryptography, is any cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner. This accomplishes two functions: authentication, where the public key verifies that a holder of the paired private key sent the message, and encryption, where only the paired private key holder can decrypt the message encrypted with the public key.

What is a certificate authority?
Certificate Authorities, or Certificate Authorities / CAs, issue Digital Certificates. Digital Certificates are verifiable small data files that contain identity credentials to help websites, people, and devices represent their authentic online identity (authentic because the CA has verified the identity). CAs play a critical role in how the Internet operates and how transparent, trusted transactions can take place online. CAs issue millions of Digital Certificates each year, and these certificates are used to protect information, encrypt billions of transactions, and enable secure communication.

Explain Diffie-Hellman key exchange. Why does it work?
Diffie-Hellman is a way of generating a shared secret between two people in such a way that the secret can't be seen by observing the communication. That's an important distinction: You're not sharing information during the key exchange, you're creating a key together.
This is particularly useful because you can use this technique to create an encryption key with someone, and then start encrypting your traffic with that key. And even if the traffic is recorded and later analyzed, there's absolutely no way to figure out what the key was, even though the exchanges that created it may have been visible. This is where perfect forward secrecy comes from. Nobody analyzing the traffic at a later date can break in because the key was never saved, never transmitted, and never made visible anywhere.

What is same-origin policy?
Same Origin Policy (SOP), also called Single Origin Policy, is a security measure used in Web browser programming languages such as JavaScript and Ajax to protect the confidentiality and integrity of information. Same Origin Policy prevents a web site's scripts from accessing and interacting with scripts used on other sites.

What is JSONP?
JSONP is a method for sending JSON data without worrying about cross-domain issues.
JSONP does not use the XMLHttpRequest object.
JSONP uses the <script> tag instead.
JSONP stands for JSON with Padding.
Requesting a file from another domain can cause problems, due to cross-domain policy.
Requesting an external script from another domain does not have this problem.
JSONP uses this advantage, and request files using the script tag instead of the XMLHttpRequest object.

What does data before action mean in OOP?
It means that the way OOP works is that it approaches a problem with decomposing the data into a bunch of different data types first before moving to approach the functions.

What is the difference between public and private methods?
A public method is one that can be accessed by any other object whereas a private method is not. Private methods cannot be accessed by any other class, it can only be accessed by its own. 
