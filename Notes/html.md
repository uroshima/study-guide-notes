Name 5 benefits of HTML5
- Video and Audio Support - <video> and <audio> tags;
- Game Development  - with Canvas;
- Going Mobile - Mobile browsers have fully adopted HTML5;
- Accessibility - with the new HTML headings like <header>, <footer>, <nav>, <section>...
- Doctype - No more cutting and pasting some long unreadable line of code

What is localStorage? How might you use it?
It's storing information in user’s browser in an easier and standardised way. Easy to use:

if('localStorage' in window && window['localStorage'] !== null){
var store = window.localStorage;
}

What is the DOM (Document Object Model)?
Check this link for more info https://javascript.info/onload-ondomcontentloaded
From Wikipedia => The Document Object Model (DOM) is a cross-platform and language-independent application programming interface (API) that treats an HTML, XHTML, or XML document as a tree structure where in each node is an object representing a part of the document. The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.

The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. In the DOM specification, the term "document" is used in the broad sense - increasingly, XML is being used as a way of representing many different kinds of information that may be stored in diverse systems, and much of this would traditionally be seen as data rather than as documents. Nevertheless, XML presents this data as documents, and the DOM may be used to manage this data.
With the Document Object Model, programmers can build documents, navigate their structure, and add, modify, or delete elements and content. Anything found in an HTML or XML document can be accessed, changed, deleted, or added using the Document Object Model, with a few exceptions - in particular, the DOM interfaces for the XML internal and external subsets have not yet been specified.

Whats the lifecycle of an HTML page?
The lifecycle of an HTML page has three important events:
1. DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may be not yet loaded.
2. load – the browser loaded all resources (images, styles etc).
3. beforeunload/unload – when the user is leaving the page.
Each event may be useful:
1. DOMContentLoaded event – DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
2. load event – additional resources are loaded, we can get image sizes (if not specified in HTML/CSS) etc.
3. beforeunload/unload event – the user is leaving: we can check if the user saved the changes and ask them whether they really want to leave.

 What's the difference between the DOMContentLoaded and load event triggers?
 1. DOMContentLoaded handler runs when the document is loaded and does not wait for the image to load. DOMContentLoaded may only happen after all such scripts are executed. The only exception are external scripts with async and defer attributes. They tell the browser to continue processing without waiting for the scripts. This lets the user see the page before scripts finish loading, which is good for performance. External style sheets don’t affect DOM, and so DOMContentLoaded does not wait for them.
But there’s a pitfall: if we have a script after the style, then that script must wait for the stylesheet to execute.
2. The load event on the window object triggers when the whole page is loaded including styles, images and other resources.
