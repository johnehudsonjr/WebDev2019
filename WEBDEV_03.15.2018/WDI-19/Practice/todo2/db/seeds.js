const User = require('../models/User')
const Chirp = require('../models/Chirp')

// Delete all Users that exist in the database
// This cleans up any existing bad test data
User.deleteMany()
  .then(() => {
    // Delete all Chirps that exist in the database
    // This cleans up any existing bad test data
    return Chirp.deleteMany()
  })
  .then(() => {
    // Create our First User
    // This is an example of a Promise, or an asynchronous action.
    // It will take time to
    return User.create({
      email: 'bugsbunny@gmail.com',
      password: 'bugsbunny'
    })
  })
  .then(bugs => {
    // Once first user is created, add two chirps
    // The argument 'bugs' is the User AFTER it has successfully been saved to the database.
    const chirp1 = Chirp.create({
      content: "eh, what's up doc?",
      author: bugs._id
    }).then(chirp => {
      bugs.chirps.push(chirp)
    })

    const chirp2 = Chirp.create({
      content: "That's all, folks!",
      author: bugs._id
    }).then(chirp => {
      bugs.chirps.push(chirp)
    })

    // Promise.all will wait for an array of promises to complete before moving onward.
    return Promise.all([chirp1, chirp2]).then(() => {
      // Once the chirps are saved, we will save our user one more time, since we added 2 ids to the chirps array
      bugs.save()
    })
  })
  .then(() => {

    // Once bugs is created, we'll build out our next seeded User
    return User.create({
      email: 'daffyduck@gmail.com',
      password: 'daffyduck'
    })
  })
  .then(daffy => {
    // Once daffy is saved, create two chirps and save them to the user
    // Notice that this looks almost identical to the previous seeds
    const chirp1 = Chirp.create({
      content: "Who's this Duck Dodgers any how?",
      author: daffy._id
    }).then(chirp => {
      daffy.chirps.push(chirp)
    })
    const chirp2 = Chirp.create({
      content: "You're dethpicable.",
      author: daffy._id
    }).then(chirp => {
      daffy.chirps.push(chirp)
    })

    return Promise.all([ chirp1, chirp2 ]).then(() => {
      daffy.save()
    })
  })
  .then(() => {
    return User.create({
      email: 'elmerfudd@gmail.com',
      password: 'elmerfudd'
    })
  })
  .then(elmer => {
    const chirp1 = Chirp.create({
      content: "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
      author: elmer._id
    }).then(chirp => {
      elmer.chirps.push(chirp)
    })

    const chirp2 = Chirp.create({
      content: 'Kiww da wabbit!',
      author: elmer._id
    }).then(chirp => {
      elmer.chirps.push(chirp)
    })

    return Promise.all([ chirp1, chirp2 ]).then(() => {
      elmer.save()
    })
  })