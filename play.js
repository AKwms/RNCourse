let Task1='Meow'
const Task = new Promise ((resolve, reject) => {
  if (Task1 == 'completed') {
    resolve('Task completed')
  }
  else {
    reject('Not comp')

  }
});

Task
  .then(value => {
    console.log(value)
  })

  .catch(error => {
    console.log(error)
  });