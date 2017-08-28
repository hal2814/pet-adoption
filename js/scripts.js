//Back End -

//Pet object adopted is a boolean, age is an integer, all others are strings
function Pet(petName,age,adopted,markings,breed){
  this.petName = petName;
  this.age = age;
  this.adopted = adopted;
  this.markings = markings;
  this.breed = breed;
};

//Is pet adopted function- true or false
function isAdopted(bool){
  if(bool){
    return "is adopted.";
  }else{
    return "not adopted";
  }
};
//get pet details (aka: name, age, breed and markings)

Pet.prototype.display = function () {
  return "Pet name: "+this.petName+ "<br>Age: "+this.age+"<br>Adoption status: "+isAdopted(this.adopted)+"<br>Markings: "+this.markings+"<br>breed: "+this.breed;
};

//Front End-----------------------------------------|


//allow user to add a new pet (aka new object of type pet)


//submit function

//take input from each detail into variables
//(example: var age = $("#petAge").val(); )

//create Pet object- put variables into pet object
//(example: var petToAdd = new Pet(var1,var2,var3,var4,var5))

//Append details of pet object using display prototype
//(example: $("#output").append("<p>"+Pet.display()+"</p>") )
