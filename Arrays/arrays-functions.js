let students = [{
    "id": 1,
    "first_name": "Dara",
    "last_name": "Andriveau",
    "email": "dandriveau0@sourceforge.net",
    "gender": "Female",
    "fee_balance": 8585,
    "course": "Research and Development",
    "self_sponsored": false
  }, {
    "id": 2,
    "first_name": "Murvyn",
    "last_name": "Goldie",
    "email": "mgoldie1@fotki.com",
    "gender": "Bigender",
    "fee_balance": 23150,
    "course": "Product Management",
    "self_sponsored": false
  }, {
    "id": 3,
    "first_name": "Sigfrid",
    "last_name": "Kalinsky",
    "email": "skalinsky2@rediff.com",
    "gender": "Male",
    "fee_balance": 9295,
    "course": "Research and Development",
    "self_sponsored": false
  }, {
    "id": 4,
    "first_name": "Bald",
    "last_name": "Happer",
    "email": "bhapper3@comsenz.com",
    "gender": "Male",
    "fee_balance": 35705,
    "course": "Sales",
    "self_sponsored": false
  }, {
    "id": 5,
    "first_name": "Royce",
    "last_name": "Mapp",
    "email": "rmapp4@pagesperso-orange.fr",
    "gender": "Male",
    "fee_balance": 32650,
    "course": "Training",
    "self_sponsored": false
  }, {
    "id": 6,
    "first_name": "Ilse",
    "last_name": "Condie",
    "email": "icondie5@amazon.co.uk",
    "gender": "Female",
    "fee_balance": 10217,
    "course": "Research and Development",
    "self_sponsored": true
  }, {
    "id": 7,
    "first_name": "Maxie",
    "last_name": "Eton",
    "email": "meton6@ucsd.edu",
    "gender": "Male",
    "fee_balance": 945,
    "course": "Product Management",
    "self_sponsored": false
  }, {
    "id": 8,
    "first_name": "Deb",
    "last_name": "Beldon",
    "email": "dbeldon7@toplist.cz",
    "gender": "Female",
    "fee_balance": 23431,
    "course": "Legal",
    "self_sponsored": false
  }, {
    "id": 9,
    "first_name": "Chiquia",
    "last_name": "Rake",
    "email": "crake8@over-blog.com",
    "gender": "Female",
    "fee_balance": 8161,
    "course": "Engineering",
    "self_sponsored": true
  }, {
    "id": 10,
    "first_name": "Andie",
    "last_name": "Nacci",
    "email": "anacci9@newsvine.com",
    "gender": "Male",
    "fee_balance": 36832,
    "course": "Sales",
    "self_sponsored": false
  }, {
    "id": 11,
    "first_name": "Loreen",
    "last_name": "Phillott",
    "email": "lphillotta@epa.gov",
    "gender": "Female",
    "fee_balance": 24502,
    "course": "Human Resources",
    "self_sponsored": true
  }, {
    "id": 12,
    "first_name": "Sauveur",
    "last_name": "Conn",
    "email": "sconnb@diigo.com",
    "gender": "Male",
    "fee_balance": 5863,
    "course": "Sales",
    "self_sponsored": true
  }, {
    "id": 13,
    "first_name": "Bil",
    "last_name": "Walkley",
    "email": "bwalkleyc@technorati.com",
    "gender": "Male",
    "fee_balance": 3019,
    "course": "Training",
    "self_sponsored": true
  }, {
    "id": 14,
    "first_name": "Kania",
    "last_name": "Jouanot",
    "email": "kjouanotd@4shared.com",
    "gender": "Female",
    "fee_balance": 25630,
    "course": "Services",
    "self_sponsored": true
  }, {
    "id": 15,
    "first_name": "Griffin",
    "last_name": "Blenkiron",
    "email": "gblenkirone@istockphoto.com",
    "gender": "Male",
    "fee_balance": 20945,
    "course": "Business Development",
    "self_sponsored": true
  }, {
    "id": 16,
    "first_name": "Bree",
    "last_name": "Bankhurst",
    "email": "bbankhurstf@themeforest.net",
    "gender": "Female",
    "fee_balance": 33940,
    "course": "Support",
    "self_sponsored": false
  }, {
    "id": 17,
    "first_name": "Cassandra",
    "last_name": "Newiss",
    "email": "cnewissg@bloglovin.com",
    "gender": "Female",
    "fee_balance": 32520,
    "course": "Accounting",
    "self_sponsored": true
  }]
let student1 = students[1]
// console.log(student1['first_name'])

function printStudentDetail(list,index, attribute){
  
  console.log(list[index][attribute])
}

printStudentDetail(students, 0, 'first_name')

