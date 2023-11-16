// // function

// function del_doc(id) {
//   db.collection("people")
//     .doc(id)
//     .delete()
//     .then(() => alert("user deleted"));
// }

// function update_doc(ele, id) {
//   // console.log(ele);
//   // change every input element that is hidden to become a text input element
//   // access the parent of the button and look inside of the parent

//   let inputs = ele.parentNode.querySelectorAll("input");

//   // change the type from hidden to text
//   // inputs.forEach((i) => {
//   //   i.type = "text";
//   //   db.collection("people").doc(id).update({
//   //     name: i.value,
//   //   });
//   // });

//   inputs[0].type = "text";
//   inputs[1].type = "text";

//   db.collection("people").doc(id).update({
//     name: inputs[0].value,
//     color: inputs[1].value,
//   });
// }

// // console.log(firebase);

// // attach a click event listener to the button

// let btn = document.querySelector("#submit");

// btn.addEventListener("click", () => {
//   //   alert("hello");

//   let person = {
//     name: document.querySelector("#name").value,
//     age: parseInt(document.querySelector("#age").value),
//     color: document.querySelector("#favcolor").value,
//   };

//   console.log(person);

//   //   submit the object to firestore

//   db.collection("people")
//     .add(person)
//     .then(() => alert("new person added!"));

//   // reset the form

//   document.querySelector("#name").value = "";
//   document.querySelector("#age").value = "";

//   //   make a call to the Db to get the latest data

//   //   getData();
// });

// // display a list of all people
// // get()

// db.collection("people")
//   .get()
//   .then((data) => {
//     // console.log(data.docs[0].data().name);

//     let docs = data.docs;
//     // loop through the docs array
//     let html = ``;
//     docs.forEach((doc) => {
//       //   console.log(doc.data().name);

//       html += `<p id="${doc.id}" class="box" >${doc.data().name}



//       <input type="hidden" value= "${doc.data().name}" />

//       ${doc.data().color}

//       <input type="hidden" value= "${doc.data().color}" />

//       <button class="is-pulled-right" onclick="update_doc(this, '${
//         doc.id
//       }')">update</button>

//       <button onclick="del_doc('${
//         doc.id
//       }')" class="is-pulled-right">X</button> </p>`;
//     });

//     // console.log(html);

//     document.querySelector("#all_people").innerHTML += html;
//   });

//   update tim's age

// db.collection("people").doc("wAFp5SvigD9mmNEXlyS5").update({
//   name: "kelly j",
//   color: "white",
//   age: 55,
// });

// delete the user tim

// db.collection("people").doc("M8bGqfszewlni3vHYpWT").delete();

//query 
// db.collection("people")
//   .where("friends", "array-contains", "Tim")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

//show all people who have Jackie or Tom as a friend
// db.collection("people")
//   .where("friends", "array-contains-any", ["joe", "tom"])
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });


//show all people with red or green as their favorite color 

// db.collection("people")
//   .where("color", "in", ["red", "green"])
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });


// //show all people that have no red as their favorite color
// db.collection("people")
//   .where("color", "!=", "red")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

//update kelly's friends
// db.collection('people').doc('iwj99ixkvb7ON0PJ3goq').update({
//   friends: firebase.firestore.fieldvalue.arrayUnion("Mike"),
//   friends: firebase.firestore.fieldvalue.arrayUnion("Julie "),
// });

//update kelly's friends - remove sally 
// db.collection('people').doc('iwj99ixkvb7ON0PJ3goq').update({
//   friends: firebase.firestore.fieldvalue.arrayRemove('sally'),
// });

//update kelly's firends friends - remove jackie 
//update kelly's document - add her favoirtes 

//update kelly's friends
// db.collection('people').doc('iwj99ixkvb7ON0PJ3goq').update({
//   friends: firebase.firestore.fieldvalue.arrayRemove("jackie"),
//   favorites {
//     color: "pink",
//     food: "pizza",
//     city: "madison"
//   }
// });


// db.collection("people").doc('iwj99ixkvb7ON0PJ3goq').update({
//   "favorites.color": "purple"
// });

// db.collection('people').doc('iwj99ixkvb7ON0PJ3goq').update({
//   favorites: {
//     color: "new purple",
//     food: "pizza",
//     city: "madison"
//   }
// });


let t1 = {
  team: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  topScorers: ["Ronaldo", "Benzema", "Hazard"],
  fans: 798
}
let t2 = {
  team: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  topScorers: ["Messi", "Suarez", "Puyol"],
  fans: 738
}
let t3 = {
  team: "Manchester United",
  city: "Manchester",
  country: "England",
  topScorers: ["Contona", "Rooney", "Ronaldo"],
  fans: 755
}
let t4 = {
  team: "Manchester City",
  city: "Manchester",
  country: "England",
  topScorers: ["Sterling", "Aguero", "Haaland"],
  fans: 537
}
let t5 = {
  team: "Brazil National Team",
  city: null,
  country: "Brazil",
  topScorers: ["Ronaldinho", "Cafe", "Bebto"],
  fans: 950
}
let t6 = {
  team: "Argentina National Team",
  city: null,
  country: "Argentina",
  topScorers: ["Messi", "Batistuta", "Maradona"],
  fans: 888
}

let t7 = {
  team: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  topScorers: ["Aragones", "Griezmann", "Torez"],
  fans: 400
}
// db.collection("Teams").add(t1)
// db.collection("Teams").add(t2)
// db.collection("Teams").add(t3)
// db.collection("Teams").add(t4)
// db.collection("Teams").add(t5)
// db.collection("Teams").add(t6)
// db.collection("Teams").add(t7)

// Question 1: Shows all teams in Spain
db.collection("Teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 1  ${
        d.data().team
      }</p>`;
    });
  });

// Question 2: Shows all teams in Madrid, Spain
db.collection("Teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 2 ${
      d.data().team
    }</p>`;
    });
  });

// //Question 3: Shows all national teams
db.collection("Teams")
  .where("city", "==", null)
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 3 ${
        d.data().team
      }</p>`;
    });
  });

// // Question 4: Show all the teams not in Spain 
db.collection("Teams")
  .where("country", "!=", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 4 ${
        d.data().team
      }</p>`;
    });
  });

// Question 5: Show all the teams not in Spain or England 
db.collection("Teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 5 ${
        d.data().team
      }</p>`;
    });
  });

// Question 6: Show all the teams in spain with more than 700 fans
db.collection("Teams")
  .where("country", "==", "Spain")
  .where("fans", ">", 700)
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 6 ${
        d.data().team
      }</p>`;
    });
  });

// Question 7: show all the teams with a number of fans in the range of 500 and 600
db.collection("Teams")
  .where("fans", ">", 500)
  .where("fans", "<", 600)
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 7 ${
        d.data().team
      }</p>`;
    });
  });

//  Question 8: show all the teams with a number of fans in the range of 500 and 600
db.collection("Teams")
  .where("topScorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 8 ${
        d.data().team
      }</p>`;
    });
  });

//  Question 9: show all the teams with a number of fans in the range of 500 and 600
db.collection("Teams")
  .where("topScorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p>Question 9 ${
        d.data().team
      }</p>`;
    });
  });

// Task 3

//updates
db.collection('Teams').doc('CjvsHNo1839VZPN6Fstb').update({
  fans: 811,
  team: "Real Madrid FC"
});

db.collection('Teams').doc('Vs4oi2pvKg60wKP2OrfZ').update({
  fans: 747,
  team: "FC Barcelona"
});

//remove Hazard 
db.collection('Teams').doc('CjvsHNo1839VZPN6Fstb').update({
  topScorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
});


//add Crispo
db.collection('Teams').doc('CjvsHNo1839VZPN6Fstb').update({
  topScorers: firebase.firestore.FieldValue.arrayUnion("Crispo")
});


//remove Hazard 
db.collection('Teams').doc('Vs4oi2pvKg60wKP2OrfZ').update({
  topScorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
});


//add Crispo
db.collection('Teams').doc('Vs4oi2pvKg60wKP2OrfZ').update({
  topScorers: firebase.firestore.FieldValue.arrayUnion("Deco")
});


//add jersey colors to Madrid
db.collection('Teams').doc('CjvsHNo1839VZPN6Fstb').update({
  color: {
    home: "White",
    away: "Black"
  }
});

//add Jersey colors for Barcelona
db.collection('Teams').doc('Vs4oi2pvKg60wKP2OrfZ').update({
  color: {
    home: "Red",
    away: "Gold"
  }
});

//update Jersey Color Madrid
db.collection("Teams").doc('CjvsHNo1839VZPN6Fstb').update({
  "color.away": "purple",
});

//update Jersey Color Barcelona
db.collection("Teams").doc('Vs4oi2pvKg60wKP2OrfZ').update({
  "color.away": "pink",
});