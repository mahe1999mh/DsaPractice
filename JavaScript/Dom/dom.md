- **Document Object Model (DOM)**

  - API for manipulating **HTML documents**.
  - Provides functions to **add**, **remove**, and **modify** parts of the document.
  - Represents an **HTML document** as a **tree of nodes**.

- **Node Types**

  - **Document Type Node**: Represents the document type.
  - **Element Type Nodes**: Includes **HTML**, **head**, **title**, **body** tags.
  - **Text Nodes**: Contain text content, e.g., "great stack".
  - **Comment Nodes**: Represent comments in the HTML.

- **Node Relationships**

  - Relationships akin to a **family tree**:
    - **Child Node**: A node that is a descendant of another node.
    - **Parent Node**: A node that has child nodes.
    - **Sibling Nodes**: Nodes that share the same parent.

- **JavaScript DOM Topics Covered**

  - **What is DOM?**
  - **Node Types and Relationships**.
  - **Element Selection Methods**:
    - **getElementById**
    - **getElementsByClassName**
    - **getElementsByTagName**
    - **querySelector**
    - **querySelectorAll**
  - **Traversing Elements**:
    - Selecting **parent elements**, **child elements**, and **sibling elements**.
  - **Manipulating HTML Elements**:
    - Creating elements using **createElement**.
    - **appendChild**, **textContent**, and other methods.
  - **Attribute Methods**:
    - **getAttribute**, **setAttribute**, **hasAttribute**, **removeAttribute**.
  - **Manipulating Element Styles**:
    - Using **style property**, **CSS text**, **getComputedStyle**, **className**, and **classList**.
  - **JavaScript Events**:
    - Definition of **events**, **event bubbling**, and **event capturing**.
    - Handling events with **event handler attributes**.
    - **DOM Level 0** event handler.
    - Using **addEventListener** and **removeEventListener**.
    - Understanding **event objects** and different **event types**.

- **Call to Action**

  - Encourage viewers to **like** and **subscribe** to the channel prior to starting the tutorial.

- **Visual Example**
  - Illustrative example of nodes in HTML:
    - Example nodes include **HTML**, **head**, **body**, and **P tags**.
    - Relationships demonstrated with **parent-child** and **sibling** examples.

Functionality:

append:
Can append text: ✅ Yes
Can append multiple items: ✅ Yes
appendChild:
Can append text: ❌ No
Can append multiple items: ❌ No (only one node)
Return Value:

append:
Returns appended node: ❌ No
appendChild:
Returns appended node: ✅ Yes
Error Handling:

append:
Error for non-node: ❌ No (ignores the error)
appendChild:
Error for non-node: ✅ Yes (throws error)
