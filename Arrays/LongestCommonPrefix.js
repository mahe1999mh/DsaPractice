

let strs = ["flower","flow","flight"];
let prefix = strs[0];


for(let i=1; i<strs.length; i++){
    let s = strs[i];
    
    //if s not mach with prefix it will give -1 else 0
    while(s.indexOf(prefix) != 0){
        
        // slice(startIndex, endIndex)
        prefix = prefix.slice(0,-1)
        if(prefix == "") return ""
    }
}

console.log(prefix);
