// const repeat = (arr) =>{
//     for(i = 0; i < arr.length; i++){
//         for(j = 0; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 break;
//             }
//         }console.log(arr[i])
//         return arr[i]
//     }
// }

const repeat = (arr) =>{
    let hashMap = {};
    for(i = 0; i < arr.length; i++){
        if(hashMap[arr[i]]){
            return arr[i]        
        }
        else{
            hashMap[arr[i]] = i
        }
    }
    return undefined
}

console.log(repeat([5,1,1,2,4,5,1,2,4]))












// let user = {
//     age:12,
//     name:"hale",
//     scream: function(){
//         console.log(`hello ${user.name}`)
//     }
// }


// class HashTable{
//     constructor(size){
//         this.data = new Array(size)
//     }


//     _hash(key){
//         let hash = 0;
//         for(let i = 0; i < key.length; i++){
//             hash = (hash + key.charCodeAt(i) * i)%
//             this.data.length
//             // console.log(hash)
//         }
//         return hash

//     }

//     set( key, value){
//         // console.log(key)
//         let adress = this._hash(key);
//         console.log(adress)

//     }
// }

// // user.scream()

// const newHash = new HashTable(20);


// newHash.set('grapess',1000)
