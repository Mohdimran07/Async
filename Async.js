console.log('person1: shows ticket');
console.log('person2: shows ticket');

// const promiseWifeBringsTickets = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('tickets');
//     }, 3000)
// });

// const getPopcorn = promiseWifeBringsTickets.then((t) =>{
//     console.log('husband: we should go in');
//     console.log('wife: i am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`));
// });
// getButter.then((t) => console.log(t));

const preMovie = async () => {
   const promiseWifeBringsTickets = new Promise((resolve, reject) => 
   {
       setTimeout(() =>
       {
           resolve('ticket');
       }, 3000)
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve, reject) => resolve(`colddrink`));

    let ticket = await promiseWifeBringsTickets;
      console.log(`wife: i have the ${ticket}`);
      console.log('husband: we should go in');
      console.log('wife: no i am hungry');
    let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('wife: i need butter on popcorn');
    
    let butter = await getButter;
      console.log(`husband: i got some ${butter} on popcorn`);
      console.log('husband: anything else?');
    //   console.log('wife: lets go we are getting late');

    let colddrink = await getColdDrinks;
       console.log(`wife: wait i need ${colddrink}`);
       console.log('husband: ok! i will bring it');
       console.log('husband: here it is');
       console.log('wife: thanks dear..lets go')

   return ticket
}
preMovie().then((m) => console.log(`person3: show ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');


console.log('post one');
console.log('post two');

const createPosts = async () => {
    const creatingPost = new Promise((resolve, reject) => 
    {
        setTimeout(() =>
        {
            resolve('post');
        }, 4000)
     });

     let post = await creatingPost;
     console.log(` ${post} three`);
     console.log('post four');

     const deletePost = new Promise((resolve, reject) => {
         setTimeout(() => {
             reject('deletepost');
         }, 2000)
     });
    let deletepost = await deletePost;
    console.log(`${deletepost} five`);
    
    return post;
}
createPosts().then((m) => console.log(`create post ${m}`));

