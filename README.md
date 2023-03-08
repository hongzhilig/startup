# startup
Feachers:

My start up idea is to have a program that helps organize your book collection, this program would allow you 
to add books that you have in your collection along with its associated price, author, languague, and volume 
number. You would be able to search for a spacific book if needed and remove a book from your collection if you lost it. The program would also allow other users that are on at the same time as you to see what book you 
had just added to your collection and vise versa. In the main screen it would show a list of all the books that you own with all their associated information. 

Start up pitch:

Having a large collection of books is great but it is also very hard esspecially if you constantly 
expanding it. You might find it difficult to remember what books you have or have not gotten. 
If the book is a part of a series then you could forget which volumes you have for that series. If you do 
forget then you could buy a book you already have thats no fun. So to solve this I am propossing a program 
that logs all your books and all the information associated with that book. If you are thinking about buying 
a books but you are not sure if you already have it, you could just login to the program and bam all your 
books are right there. With this the days of going to a books store looking at a shelf seeing a book you 
might want to buy and thinking, "do I alrealy have that?", this program will save you minutes in your life.
No more having to drive back to the book store to return the book you just bought. No more relizing that you 
lost the receipt so you can't return the book and just have to copys of the same book. No more gifting a your 
friend a random book that they have no interest compleatly randomly so you don't feel like you wasted your 
money buying a book you already have. This program will help the tens of people like me who have a very large 
collection of books. Now you might be wondering what this program would look like. Well to answer that I refer 
you to the "Picture" section. 

Picture: 

![StartupDesign](https://user-images.githubusercontent.com/98627331/215234923-069d459c-2d64-4eef-8e68-15c8bd981593.jpg)


To remember:

Elastic IP: 3.136.4.32

SSH: ssh -i [Key] ubuntu@3.136.4.32

HTML Project. Simon:

Make sure that you have know the link to your key so that you don't have to waste time looking it up everytime you want to make a change.

Use https:// if you want to go to an external site otherwise it will think you are using a file in your repository. 

Make a commit before you push your stuff or else you will have a hard time remembering what you did when you find a but

<br />
<br />
<br />

Console Commands:

echo: output the parameters of the command

cd: Change directory

mkdir: Make directory

rmdir: Remove directory

rm: Remove file(s)

mv: Move file(s)

cp: copy files

ls: List files

ls -la: Can list all files(even hidden ones) 

curl: Command line client URL browser

grep: Regular expression search

find: find files

top: View running processes with CPU and memory usage

df: View disk staticstics

cat: Output the contents of a file

less: Interactively output the contents of a file

wc: Count the words in a file

ps: View the currently running processes

kill: Kill a currently running processes

sudo: Execute a command as a super user (admin)

ssh: Create a secure shell on a remote computer

scp: Securely copy files to a remote computer

history: Show the history of a remote computer

ping: Check if a website is up

tracert: Trace the connections to a website

dig: Sho the DNS information foa a domain 

man: look up a command in the manual

chmod: Makes a script exeutable

You can chain the inputs and outputs of commands using special characters

|: Take the output from the command on the left and pipe, or pass, it to the command on the right

">": Redirect output of a file. Overwrites the file if it exists

">>": Redirect output to a file. Appends if the file exists

CTRL-R: use type ahead to find previous commands

CTRL-C: Kill the currently running command

<br />
<br />
<br />
  
  
HTML Common Tags:

 html: The page container
 
 head: Header information
 
 title: Title of the page
 
 meta: Metadata for the page such as character set or viewport settings
 
 script: JavaScript reference. Either a external reference, or inline
 
 include: External content reference
 
 body: The entire content body of the page
 
 header: Header of the main content
 
 footer: Footer of the main content
 
 nav: Navigation inputs
 
 main: Main content of the page
 
 section: A section of the main content
 
 aside: Aside content from the main content
 
 div: A block division of content
 
 span: An inline span of content
 
 h<1-9>: Text heading. From h1, the highest level, down to h9, the lowest level
 
 p: A paragraph of text
 
 b: Brint attention
 
 table: Table
 
 tr: Table tow
 
 th: Table header
 
 td: Table data
 
 ol,ul: Ordered or unordered list
 
 li: List item
 
 a: Anchor the text to a hyperlink
 
 img: Graphical image reference
 
 dialog: Interactive component such as a confirmation 
 
 form: A collection of user input
 
 imput: User input field
 
 audio: Audio content
 
 video: Video content
 
 svg: Scalable vector graph content
 
 iframe: Inline frame of another HTML page  
 <br />
 <br />
 <br />
 
 TCP/IP layers:
 
 Application: HTTPS: Functinality like we browsing
 
 Transport: TCP: Moving connection information packets
 
 Internet: IP: Establishing connections
 
 Link: Fiber, hardware: Physical connections
 
 <br />
 <br />
 <br />
 
CSS Makes my head hurt:

Import font example: @import url('https://fonts.googleapis.com/css2?family=Rubik');

Use google fonts with a link to import them. 
You can put icon in buttons instead of text.
Forms are for allowing people to input things
fading in is really anoying to do

p { padding: 1em; }: Will put pudding in the space around the content of the selected element

Pals Before Marrage: Padding, Border, Margine

Content, padding, border, margin

Declarations: 

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

Units:

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

Color:

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rbg(50%, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |

<br />
<br />
<br />

Java Functions:

You can assign a veriable a function: let f = function(x);

Java Array Functions:

push: Add an item to the end of the array:  a.push(4)

pop: Remove an item fro the end of the array:  x = a.pop

slice: Return a sub-array:  a.slice(1,-1)

sort: Run a function sort an array in place:  a.sort((a,b) => b-a)

values: Creates an iterator for use with a for of loop:  for (i of a.values()) {...}

find: Find the first item satisfied by a test function: a.find(i => i < 2)

forEach: Run a function on each array item: a.forEach(console.log)

reduce: Run a function to reduce each array item to a single item: a.reduce((a, c) => a + c)  

map: Run a function to map an array to a new array: a.map(i => i+i)

filter: Run a function to remove items: a.fiter(i => i%2)

every: Run a function to test if all items match: a.every(i => i < 3)

some: Run a function to test if any items match: a.some(i => 1 < 1)

<br />
<br />
<br />

Midterm Kahoot:

To point to another DNS record, you should use CNAME DNS record type. Think of it as an alas. 

CSS box model, outside going in is [margin, boarder, padding, content].

To make a certain element do something such as making only the header blue you would do
div.header {color:blue;}. The .header specifies what part of the object you want to change

If something does not have quotes then it is not a proper JSON object

let b = a.filter(v => v.match(/A|f/i)); the i in this function makes it case insensitive. 

function f(x) = {} is not a valid JavaScript function 

document.querySelector('p').addEventListener('mouseover', console.log);: Adds a mouseover event listener to a p element

document is always avaliable and gives you an object to interact with the dom 

The DOM textContent property sets the child text for the an element. 

An DNS subdomain example: c260.cs.byu.edu The whole thing is a subdomain 

