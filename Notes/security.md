Explain TCP, and why it is a necessary protocol
TCP/IP (Transmission Control Protocol/Internet Protocol) is a set of allows anyone with a computer, modem, and an Internet service provider to access and share information over the Internet.Both TCP and IP, two separate protocols that work hand-in-hand, perform chores that manage and guide the general mobility of data packets over the Internet.

What is the purpose of TCP?
TCP (Transmission Control Protocol) is a standard that defines how to establish and maintain a network conversation via which application programs can exchange data.TCP works with the Internet Protocol (IP), which defines how computers send packets of data to each other.

What is the difference between TCP and UDP?
TCP is a connection oriented stream over an IP network. It guarantees that all sent packets will reach the destination in the correct order. This imply the use of acknowledgement packets sent back to the sender, and automatic retransmission, causing additional delays and a general less efficient transmission than UDP.

What is XSS and what is the danger of it?
Cross-site Scripting (XSS) refers to client-side code injection attack wherein an attacker can execute malicious scripts (also commonly referred to as a malicious payload) into a legitimate website or web application. XSS is amongst the most rampant of web application vulnerabilities and occurs when a web application makes use of unvalidated or unencoded user input within the output it generates.
By leveraging XSS, an attacker does not target a victim directly. Instead, an attacker would exploit a vulnerability within a website or web application that the victim would visit, essentially using the vulnerable website as a vehicle to deliver a malicious script to the victim’s browser.
XSS in combination with social engineering, allow attackers to pull off advanced attacks including cookie theft, keylogging, phishing and identity theft. Critically, XSS vulnerabilities provide the perfect ground for attackers to escalate attacks to more serious ones.

What is a CSRF Attack?
Cross Site Request Forgery (CSRF) is an attack whereby a malicious entity tricks a victim into performing actions on behalf of the attacker. The impact of the attack would depend on the level of permissions that the victim being exploited has. The actions being perpetrated by the attacker will surely have a greater effect if the victim performing the actions is at an administrative level versus a low level user, with less privileges. CSRF attacks take advantage of the fact that a web application completely trusts a user, once it can confirm that the user is indeed who they say they are.

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

Compare and contrast CSRF and XSS.
Fundamental difference is that CSRF (Cross-site Request forgery) happens in authenticated sessions when the server trusts the user/browser, while XSS (Cross-Site scripting) doesn't need an authenticated session and can be exploited when the vulnerable website doesn't do the basics of validating or escaping input.
