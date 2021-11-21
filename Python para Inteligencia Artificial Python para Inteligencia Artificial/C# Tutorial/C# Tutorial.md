using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}


Console.WriteLine("Hello World!");


string name = "John";
Console.WriteLine(name);


int myNum = 15;
Console.WriteLine(myNum);


int myNum;
myNum = 15;
Console.WriteLine(myNum)


int myNum = 5;               // Integer (whole number)
double myDoubleNum = 5.99D;  // Floating point number
char myLetter = 'D';         // Character
bool myBool = true;          // Boolean
string myText = "Hello";     // String



int x = 100 + 50;


# operador 
+	Addition	Adds together two values	x + y	
-	Subtraction	Subtracts one value from another	x - y	
*	Multiplication	Multiplies two values	x * y	
/	Division	Divides one value by another	x / y	
%	Modulus	Returns the division remainder	x % y	
++	Increment	Increases the value of a variable by 1	x++	
--	Decrement	Decreases the value of a variable by 1	x--


using System;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      string txt = "Hello World";
      Console.WriteLine(txt.ToUpper());   // Outputs "HELLO WORLD"
      Console.WriteLine(txt.ToLower());   // Outputs "hello world"
    }
  }
}

int time = 20;
if (time < 18) 
{
  Console.WriteLine("Good day.");
} 
else 
{
  Console.WriteLine("Good evening.");
}
// Es Un Comentario



int day = 4;
switch (day) 
{
  case 1:
    Console.WriteLine("Monday");
    break;
  case 2:
    Console.WriteLine("Tuesday");
    break;
  case 3:
    Console.WriteLine("Wednesday");
    break;
  case 4:
    Console.WriteLine("Thursday");
    break;
  case 5:
    Console.WriteLine("Friday");
    break;
  case 6:
    Console.WriteLine("Saturday");
    break;
  case 7:
    Console.WriteLine("Sunday");
    break;
}


int i = 0;
do 
{
  Console.WriteLine(i);
  i++;
}
while (i < 5);


for (int i = 0; i < 5; i++) 
{
  Console.WriteLine(i);
}


for (int i = 0; i < 10; i++) 
{
  if (i == 4) 
  {
    break;
  }
  Console.WriteLine(i);
}



for (int i = 0; i < 10; i++) 
{
  if (i == 4) 
  {
    continue;
  }
  Console.WriteLine(i);
}



using System;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      // Type your username and press enter
      Console.WriteLine("Enter username:");

      // Create a string variable and get user input from the keyboard and store it in the variable
      string userName = Console.ReadLine();

      // Print the value of the variable (userName), which will display the input value
      Console.WriteLine("Username is: " + userName);
    }
  }
}



using System;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      // Type your username and press enter
      Console.WriteLine("Enter username:");

      // Create a string variable and get user input from the keyboard and store it in the variable
      string userName = Console.ReadLine();

      // Print the value of the variable (userName), which will display the input value
      Console.WriteLine("Username is: " + userName);
    }
  }
}


string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};


int[] myNum = {10, 20, 30, 40};



using System;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
      Console.WriteLine(cars[0]);
    }
  }
}



# FIN