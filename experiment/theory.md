|<p>1\.</p><p>![](images/Aspose.Words.739bc889-20f0-4c6d-9ea4-a7e3fdb19141.001.png)</p>|<p>2\.</p><p>![](images/Aspose.Words.739bc889-20f0-4c6d-9ea4-a7e3fdb19141.002.png)</p>|<p>3\.</p><p>![](images/Aspose.Words.739bc889-20f0-4c6d-9ea4-a7e3fdb19141.003.png)</p>|
| :- | :- | :- |

In Image 1, Punit is depicted as a part-time librarian in a college responsible for managing the library's book inventory. Being a software engineer himself, he decided to simplify his task by developing a library management application. As a proficient Python programmer, he chose to utilize lambda functions for the following reasons: 

- They offer a concise and inline method to define small, anonymous functions, resulting in less complex code and improved logic comprehension. 
- Moreover, lambda functions enable compact code focused on specific tasks, eliminating the need for separate function definitions and reducing cognitive load.

Let us explore more about lambda functions

## <a name="_hxoq4sxilacg"></a>**What are lambda functions?**
- Lambda functions in Python are considered a special type of function that do not have a function name.
- The syntax of lambda expression is *lambda input:expression* , where lambda is the keyword, input is the user input, and in the expression part defines the action to perform with the user input.
- For example, if we want to write a lambda function to calculate square root, it would be *y=lambda x : x\*\*2* → Here, ‘x’ the user input would be stored in variable ‘x’, and we define the formula to calculate square root. If we want to find the square root of 3, we need to call the function i.e y(3), the output would be 9.
- If we want to write a lambda function which adds 2 numbers, it would be *z=lambda x,y:x+y*→ here x and y are the 2 inputs which would be provided by the user, and x+y adds the 2 numbers and returns the output. If we want to add 2 numbers i.e 3 & 4, we call the function z(3,4), the output would be 7
## <a name="_uyi3zzcjqn11"></a>**What is the difference between lambda function and return function?**
- Lambda function has no return value
- Lambda function returns the entire function
- Lambda function can be written in only one line
- Lambda function are not used for code reusability
- Lambda functions do not have a name
## <a name="_tthx4utnngzg"></a>**Commonly used lambda functions**
**1) Map**

- The map() function takes two parameters, a function and an iterable. The iterable can be anything, such as a list, set, tuple, etc.
- If you give a list as an input to map() function, then some operation is performed on every item in the list.
- For eg: consider a list of numbers i.e L=[1,2,3,4,5,6,7], If we want to double every item present in the list, then our code would be *list(map(lambda x:x\*2,L))*. Here the map function has 2 parameters, i.e a lambda function and an iterable, which is our list(L=[1,2,3,4,5,6,7]), that we have defined previously
- Firstly, the lambda function will iterate all the elements in the list one by one and multiply each element in the list by 2, and store the result. Hence, our output would be L=[2, 4, 6, 8, 10, 12, 14]. -In the above map function, we apply logic to every element that is present in the list.
- Later in this article, we will explore(with the help of code) how Punit utilised the map function to generate a new list exclusively comprising the titles of the filtered books and we will also be exploring how Punit utilised the map function to create a new list of dictionaries that contains only the title, author, and rating of the filtered books.

**2) Filter**

- The filter function enables the application of a condition to an iterable, and provides an output based on that condition.
- For instance we have a list of numbers i.e L=[1,2,3,4,5,6,7], and we only want the numbers that are greater than 4. In that case, our code would be *list(filter(lambda x:x>4,L))*.Here, we first define the condition x>4 using a lambda function, and then apply a filter to only keep those numbers in list ‘L’ that satisfy this condition. Therefore, our output would be [5, 6, 7].
- Another example would be a list of vegetables i.e *veg=['brinjal','potato','tomato','palak','methi']*, and we want only those vegetables which contain the letter ‘l’. In that case our code for the same would be *list(filter(lambda x: 'l' in x,veg))*, and the output would be ['brinjal', 'palak']
- Later in this article, we will explore(with the help of code) how Punit utilised the  filter function to create a new list that contains only the books published after a certain year.


**3) Reduce**

- The reduce function is used to reduce your list to a single element.
- For example, let's say we have a list L=[5,7,8,13] and we want to obtain a list consisting of a single element, which is the sum of all the numbers present in the original list. The code for this would be *functools.reduce(lambda x,y:x+y,L)* , in order to use the reduce function, we need to import a module named ‘functools’ -Let's understand the working of the above example. Initially, the first two elements from the list are picked and their sum is obtained i.e 5+7=12. Now, our list becomes L=[12,8,13].
- In the next step, we apply the function to the previously attained result and the result is stored again i.e 12+8=20. Now, our list would be L=[20,13]. We perform 20+13=33, and our list becomes L=[33]. Since there is only a single element present in the list, we stop the process and return the output to the user.
- Later in this article, we will explore(with the help of code) how Punit utilised the reduce function to calculate the total number of pages in the filtered books


Image 2 represents that Raj begins to  define a list of books in his library, with each book represented as a dictionary containing information such as the title, author,  publication date and number of pages the book contains. 

He then uses the filter function to create a new list that contains only the books published after a certain year. For instance, they can filter the list to only include books published after 2000. The code for the same is represented below:

```py
books = [

{'title': 'Book A', 'author': 'Karthik', 'publication_year': 1999, 'pages': 100,'rating':3.5},

{'title': 'Book B', 'author': 'Adyansh', 'publication_year': 2005, 'pages': 200,'rating':4.5},

{'title': 'Book C', 'author': 'Raj', 'publication_year': 2010, 'pages': 150,'rating':4.2},

{'title': 'Book D', 'author': 'Ravi', 'publication_year': 2000, 'pages': 250,'rating':4.1}

]

filtered_books = list(filter(lambda book: book['publication_year'] > 2000, books))
```
Next, he used the map function to create a new list that contains only the titles of the filtered books. This new list will be a simplified inventory of the books that meet the his criteria.The code for the same is represented below:
```py
book_titles = list(map(lambda book: book['title'], filtered_books))
```
Then he used the reduce function to calculate the total number of pages in the filtered books. The code for the same is represented below:
```py
total_pages = reduce(lambda acc, book: acc + book['pages'], filtered_books, 0)
```
Finally, he used the map function to create a new list of dictionaries that contains only the title, author, and rating of the filtered books. This simplified list can be useful for generating book recommendation lists for the library patrons. The code for the same is represented below:
```py
simplified_books = list(map(lambda book: {'title': book['title'], 'author': book['author'], 'rating': book['rating']}, filtered_books))**
```
Image 3 represents that Raj was finally happy because he would now be able to manage the inventory of the library more efficiently. Thanks to lambda functions in python


