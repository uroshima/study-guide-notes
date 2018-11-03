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

What kind of object is returned by .childNodes?
The childNodes property returns a collection of a node's child nodes, as a NodeList object.
The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.
Note: Whitespace inside elements is considered as text, and text is considered as nodes. Comments are also considered as nodes.
Tip: You can use the length property of the NodeList object to determine the number of child nodes, then you can loop through all child nodes and extract the info you want.
This property is read-only.
Tip: To return a collection of a node's element nodes (excluding text and comment nodes), use the children property.
Tip: element.childNodes[0] will produce the same result as the firstChild property.

Talk about the different ways your can access DOM elements in JS?
Often, with JavaScript, you want to manipulate HTML elements.
To do so, you have to find the elements first. There are a couple of ways to do this:
 - Finding HTML elements by id
 - Finding HTML elements by tag name
 - Finding HTML elements by class name
 - Finding HTML elements by CSS selectors
 - Finding HTML elements by HTML object collections

 What's the difference between calling .childnodes and calling .children?
 .children is a property of an Element. Only Elements have children, and these children are all of type Element.
However .childNodes is a property of Node. .childNodes can contain any node.
So a concrete example would be

        var el = document.createElement("div");
        el.textContent = "foo"
        el.childNodes.length === 1; // TextNode is a node child
        el.children.length === 0; // no Element children

What does console.dir() do?
Most browsers support two commands in their developer tools: console.log and console.dir. They output their arguments to the console. For JavaScript objects these commands usually do the same.
But for DOM elements they are different:

1. console.log(elem) shows the element DOM tree.
2. console.dir(elem) shows the element as a DOM object, good to explore its properties.

What happens if you set innerHTML to a script?
The innerHTML property allows to get the HTML inside the element as a string.
We can also modify it. So it’s one of most powerful ways to change the page.
The example shows the contents of document.body and then replaces it completely:

           <body>
            <p>A paragraph</p>
            <div>A div</div>

            <script>
              alert( document.body.innerHTML ); // read the current contents
              document.body.innerHTML = 'The new BODY!'; // replace it
            </script>

          </body>

What does the .hidden property do?
The “hidden” attribute and the DOM property specifies whether the element is visible or not. We can use it in HTML or assign using JavaScript, like this:

<div>Both divs below are hidden</div>
<div hidden>With the attribute "hidden"</div>
<div id="elem">JavaScript assigned the property "hidden"</div>
<script>
  elem.hidden = true;
</script>

Technically, hidden works the same as style="display:none". But it’s shorter to write.
