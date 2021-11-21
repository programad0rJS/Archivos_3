public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}

/* ES UN COMENTARIO */

int myNum = 15;
System.out.println(myNum);



String name = "John";
System.out.println(name);

# operadores
int x = 100 + 50;


# Operadore

Operator	Name	Description	Example	Try it
+	Addition	Adds together two values	x + y	
-	Subtraction	Subtracts one value from another	x - y	
*	Multiplication	Multiplies two values	x * y	
/	Division	Divides one value by another	x / y	
%	Modulus	Returns the division remainder	x % y	
++	Increment	Increases the value of a variable by 1	++x	
--	Decrement	Decreases the value of a variable by 1	--x


# Busca Los Metodos: https://www.w3schools.com/java/



    System.out.println(txt.toUpperCase());
    System.out.println(txt.toLowerCase());




    public class Main {
  public static void main(String[] args) {
    String txt = "Please locate where 'locate' occurs!";
    System.out.println(txt.indexOf("locate"));
  }
}


int time = 20;
if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
// Comentario


int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
}


int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}




int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i < 5);



for (int i = 0; i < 5; i++) {
  System.out.println(i);
}


for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  System.out.println(i);
}


for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  System.out.println(i);
}



String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};


<!-- Dedes Busca La Documentacion -->