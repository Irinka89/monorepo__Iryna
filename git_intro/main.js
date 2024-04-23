//function waitFor1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(1)
//       },1000)
//     })
//   }
//   function waitFor2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(2)
//       },2000)
//     })
//   }
//   function waitFor3() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(3)
//       },3000)
//     })
//   }
  
//      Promise.all([waitFor2(), waitFor1(), waitFor3()])
//     .then((data) => {
//       console.log('then', data)
//     })
//     .catch(() => {
//       console.log('catch')
//     })
//     .finally(() => {
//       console.log('fin')
//     })


//------Praktika---------

// function fetchData1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(['apple', 'pineapple'])
//       }, 2000)
//     })
//   }

//   function fetchData2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(1000)
//       }, 1500)
//     })
//   }

//   function fetchData3() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({x:1, y:2})
//       }, 1000)
//     })
//   }

//   function loadAllData() {
//     return Promise.all([fetchData1(), fetchData2(), fetchData3()])
//   }
  
//   loadAllData()
//     .then((data) => {
//     console.log(data)
//     })

//-----------------

// function fetchDataFast() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(['apple', 'pineapple'])
//       }, 1500)
//     })
//   }
//   function fetchDataSlow() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({x:1, y:2})
//       }, 3000)
//     })
//   }

//   function loadFasterData() {
//     return Promise.race([fetchDataFast(), fetchDataSlow()])
//   }
  
//   loadFasterData()
//     .then((data) => {
//       console.log(data)
//     })
//     .catch(() => {
//       console.log('error')
//     })
  

