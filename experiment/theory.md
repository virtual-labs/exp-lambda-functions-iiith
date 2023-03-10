|<p>1.</p><p>![](images/Aspose.Words.4a0b4a35-9bdd-401f-a7d7-a24e9db101ed.001.png)</p>|<p>2.</p><p>![](images/Aspose.Words.4a0b4a35-9bdd-401f-a7d7-a24e9db101ed.002.png)</p>|<p>3.</p><p>![](images/Aspose.Words.4a0b4a35-9bdd-401f-a7d7-a24e9db101ed.003.png)</p>|
| :- | :- | :- |
|<p>4.</p><p>![](images/Aspose.Words.4a0b4a35-9bdd-401f-a7d7-a24e9db101ed.004.png)</p>|<p>5.</p><p>![](images/Aspose.Words.4a0b4a35-9bdd-401f-a7d7-a24e9db101ed.005.png)</p>|<p>6.</p><p>![](images/Aspose.Words.4a0b4a35-9bdd-401f-a7d7-a24e9db101ed.006.png)</p>|

Image 1 represents that asha is a final year computer science engineering student, since it was her last semester ,companies have started visiting asha’s college for placements. Asha was shortlisted for one company named ‘flipkart’, based on her profile, she was shortlisted for the role of software engineer. She cleared the company’s aptitude round and she had to clear 1 more  round which consists of coding, to get an offer. 

Image 2 represents that asha is giving her coding round, the interviewer gave one question to asha and the question was , she was given a list of data and she needs to play with the data and display the results,and she was instructed to use python functions which have no name. After hearing the problem statement, he started wondering if this is even possible?because she thought that every function had a name. At the end, she gave up and was not able to perform well in the coding round, and hence she was not considered for the software engineer position. 

Image 3 represents that asha was sad because she was not able to clear the coding round, but she decided to learn from her mistakes, by gathering a lot of courage she decided to explore more about the question which was asked during her coding round interview. When she explored on the google, she found that such functions which has no name are called as lambda or anonymous function

Let us explore more about lambda functions

## What are lambda functions?

- Lambda functions in python are considered to be a special type of function , which does not consists of a function name
- The syntax of lambda expression is ***lambda input:expression*** , where lambda is the keyword, input is the user input, and in the expression part you must define what action you want to perform with the user input. 
- For example, if we want to write a lambda function to calculate square root, it would be ***y=lambda x : x\*\*2*** → ‘x’ the user input would be stored in variable ‘x’, and after that we are defining the formula to calculate square root. If we want to find the square root of 3, we need to call the function i.e **y(3)**, the output would be 9.
- If we want to write a lambda function which adds 2 numbers, it would be ***z=lambda x,y:x+y***→ here x and y are the 2 inputs which would be provided by the user, and x+y will add the 2 numbers and will return the output. If we want to add 2 numbers i.e 3 & 4, we need to call the function **z(3,4)**, the output would be 7

## **What is the difference between lambda function and return function?**

- Lambda function has no return value
- Lambda function returns the entire function
- Lambda function can be written in only one line
- Lambda function is not used for code reusability 
- Lambda function consists of no name

## **Commonly used lambda functions** 

**1) Map**
- It takes 2 parameters i.e a function and an iterable . Iterable can be anything, it can be a list, set , tuple etc
- If you give a list as an input to map() function, then for every item present in that list, you perform some operation
- For eg: consider a list of numbers i.e L=[1,2,3,4,5,6,7], now you have to double every item present in the list , then our code would be ***list(map(lambda x:x\*2,L))***, if we carefully, the map function has 2 parameters, i.e one lambda function and one iterable, which is our list(L=[1,2,3,4,5,6,7]), which we have defined previously 
- Firstly, the lambda function will iterate all elements in the list one by one and will multiply the element in the list by 2, and will store the same. Hence our output would be L=[2, 4, 6, 8, 10, 12, 14]
- In the above map function, we are applying logic to every element which is present in the list.
**2) Filter**
- Filter function allows you to apply a condition, and based on that condition, it will provide us with the output.
- For eg: Consider a list of numbers i.e L=[1,2,3,4,5,6,7], now from this list we want only those numbers which are greater than 4 , then our code would be ***list(filter(lambda x:x>4,L))***, which means that first we are specifying a condition i.e x>4, and next we are specifying that filter only those numbers from list ‘L’, who are greater than 4, hence our output would be [5, 6, 7]
- Another example would be consider a list of vegetables i.e ***veg=['brinjal','potato','tomato','palak','methi']***, now from this list of vegetables, we want only those vegetables in which letter ‘l’ appears, our code for the same would be ***list(filter(lambda x: 'l' in x,veg))***, and our output would be ['brinjal', 'palak']
**3) Reduce**
- The reduce function, reduces your list to a single element. 
- For eg: Consider a list L=[5,7,8,13] and you want to sum all the numbers present in the list and in the form of output, you need a list which consists of a single element,obtained from sum of all the elements in the list i.e 33(5+7+8+13), the code for the same would be ***functools.reduce(lambda x,y:x+y,L)*** , in order to use the reduce function, we need to import a module named ‘functools’
- Let us understand the working of the above mentioned example.Initially first 2 elements from the list are picked and their sum is obtained i.e 5+7=12 , now our list becomes L=[12,8,13]
- In the next step we apply the function to the previously attained result and the result is stored again i.e 12+8=20, now our list would be L=[20,13]. Again we perform 20+13=33, and our list becomes L=[33]. Now since there is only a single element present in the list, we stop the process and return the output to the user.

Image 4 represents that asha was feeling satisfied because she finally understood that in python there exists a function which has no name. Now since she has learned about lambda functions, she tries to practise the similar type of  coding question which was asked to her during her coding round.

Image 5 represents that Asha fetched some data from her already existing database , her database consisted of data of students such as name, age, address, CGPA. 

The following is the data which she fetched from her database. 
```json
students=[

{

        "name":"karthik konar",

        "age":24,

        "Address":"Mumbai",

        "CGPA":8.55

    },

    {

        "name":"Deepanshu Garg",

        "age":23,

        "Address":"Delhi",

        "CGPA":9.00

    },

    {

        "name":"Ashish",

        "age":20,

        "Address":"Mumbai",

        "CGPA":7.50

    },

    {

        "name":"Jeet",

        "age":19,

        "Address":"Pune",

        "CGPA":8.23

    },

]
```

Now, from the above data which she had fetched from the database , which wanted to extract only the names of the student in the form of a list, so she utilised map function for it.she wrote the following code:

```py
list(map(lambda name_of_student:name_of_student["name"],students))
```

The above code only displays the names of the students from the ‘students’ list and displays the output. The output obtained is `['karthik konar', 'Deepanshu Garg', 'Ashish', 'Jeet']`

She used a filter function, to filter out names of only those students whose CGPA is greater than 8. She wrote the following code:

```py
result = list(filter(lambda x: x['CGPA'] > 8, students))
names = [student['name'] for student in result]
```

The above code firstly filters names of students whose CGPA is greater than 8 and stores it in a variable named ‘result’ , then it displays the name of the student . The output obtained is ***['karthik konar', 'Deepanshu Garg', 'Jeet']***

She used a reduce function to find the average CGPA of all the students. She wrote the following code:

```py
from functools import reduce

sum_cgpa = reduce(lambda sum1, student: sum1 + student['CGPA'], students,0)

average_cgpa = sum_cgpa / len(students)

print(average_cgpa)
```
The above code first imports reduce function from functools, after that it calculates sum of all students CGPA, and stores it in a variable named ‘sum\_cgpa’ and in the next step it calculates the average CGPA and then prints it. The output obtained is 8.32(which is the average CGPA)

Image 6 represents that asha was finally able to solve similar kind of questions which was asked to her in the coding interview, and she felt happy because she learnt from her mistake instead of blaming the situations 
