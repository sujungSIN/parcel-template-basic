console.log("hello parcel!");

//비동기함수
async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}

test()
