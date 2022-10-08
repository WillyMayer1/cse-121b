/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let studentInfo = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
"name": "Willian",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
"photo": "images/me.jpg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
"favoriteFoods": ["banana", " apple", " watermelon"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
"hobbies": ["Videogames", "Meet with friends"],
// Step 6: Add another property named placesLived with a value of an empty array
"placesLived": []
};
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
studentInfo["placesLived"].push(venezuela = {"place": "", "length": ""})
// Step 8: For each property, add appropriate values as strings
studentInfo["placesLived"][0]["place"] = "Venezuela";
studentInfo["placesLived"][0]["length"] = "18 Years";
// Step 9: Add additional objects with the same properties for each place you've lived
studentInfo["placesLived"].push(colombia = {"place": "", "length": ""})
studentInfo["placesLived"].push(argentina = {"place": "", "length": ""})
studentInfo["placesLived"][1]["place"] = "Colombia";
studentInfo["placesLived"][1]["length"] = "5 Years";
studentInfo["placesLived"][2]["place"] = "Argentina";
studentInfo["placesLived"][2]["length"] = "1 Years";

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = studentInfo["name"];
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = studentInfo["photo"];
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").innerHTML = studentInfo["photo"];
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favFoodsList = document.querySelector("#favorite-foods");
let favFoods = studentInfo["favoriteFoods"]; 

favFoods.forEach(favFood => {
    let listItem = document.createElement("li");
    listItem.textContent = favFood;
    
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    favFoodsList.append(listItem)});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbiesList = document.querySelector("#hobbies");
let hobbies = studentInfo["hobbies"];
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
hobbies.forEach(hobbie => {
    let listItem = document.createElement("li");
    listItem.textContent = hobbie;
    hobbiesList.append(listItem);
});
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placeLivedList = document.querySelector("#places-lived");
//let placeProp = studentInfo["placeLived"]["place"];
//let lengthProp = studentInfo["placeLived"]["length"];

placeProp = studentInfo["placesLived"][0]["place"]
lengthProp = studentInfo["placesLived"][0]["length"]

placeProp.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place;
    placeLivedList.append(dt);
})

lengthProp.forEach(length => {
    let dd = document.createElement("dd");
    dd.textContent = length;
    placeLivedList.append(dd);
})

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
