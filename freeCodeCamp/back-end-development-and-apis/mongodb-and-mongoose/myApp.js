const { Schema } = require('mongoose');
const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI);

const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
})

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: 'Antonio Cirillo',
    age: 21,
    favoriteFoods: ['Pizza', 'Lasagna', 'Tiramisù']
  });
 
  newPerson.save((err, data) => {
    if(err)
      console.log(err);
    else
      done(null, data);
  }); 
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if(err)
      console.log(err);
    else
    done(null, data);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, null, null, (err, data) => {
    if(err)
      console.log(err);
    else 
      done(null, data);
  }).exec();
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, null, null, (err, data) => {
    if(err)
      console.log(err);
    else 
      done(null, data);
  }).exec();
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if(err)
      console.log(err);
    else 
      done(null, data);
  }).exec();
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, data) => {
    if(err)
      console.log(err);
    else {
      data.favoriteFoods.push(foodToAdd);
      data.save((err, data) => {
        if(err)
          console.log(err);
        else
          done(null, data);
      });
    }
  }).exec();
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, data) => {
    if(err)
      console.log(err);
    else
      done(null, data);
  })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, data) => {
    if(err)
      console.log(err);
    else
      done(null, data);
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, data) => {
    if(err)
      console.log(err);
    else
      done(null, data);
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch})
    .sort({name: 1})
    .limit(2)
    .select('-age')
    .exec((err, data) => {
      if(err)
        console.log(err);
      else
        done(null, data);
    });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
