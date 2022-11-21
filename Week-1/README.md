
# How does the browser fetch the desired result, when a user enters an URL in the browser:

Step 1: To find corresponding IP address of the website, browser checks cache for DNS entry. It looks for Browser Cache, OS Cache, Router Cache, ISP Cache. It continues to check one after another until it found.

Step 2: If required DNS is not found in cache, DNS server of ISP initiates the DNS request to find the IP Address of a server that hosts the domain name.

Step 3: Browser initiates a TCP connection with the server.

Step 4: Browser sends a HTTP request(GET or POST) to the web server.

Step 5: Host Server handles that request and sends back a response. It assembles a response in JSON, XML and HTML format.

Step 6: Server sends a HTTP response along with the status of response.

Step 7: finally browser displays a HTML content.


## 

![web](https://user-images.githubusercontent.com/88332305/201488093-ab598658-adfe-4209-8e9a-a45640c16ac7.jpg)

##  

a.What is the main functionality of the browser?

=>The main functionality of browser is to retrieve information from the World Wide Web and making it available for users. It displays content and allows users to interact with web pages.

b. High Level Components of a browser

=>1) UI 2) Browser Engine 3) Rendering Engine 4) Network 5) Javascript Interpreter 6) Data Storage

c. Rendering engine and its use

=>Dispays requested content by parsing HTML and CSS.

d. Parsers (HTML, CSS, etc)

=>Parser means converts a program into an internal format that a runtime environment can actually run. Browser parses HTML into DOM tree and CSS into CSS Object Model.
