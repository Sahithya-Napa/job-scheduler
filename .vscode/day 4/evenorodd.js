let a=0;

// if(a%2==0)
// {
//     console.log("even number");
// }
// else
// {
//     console.log("odd number");
// }
// if(a>0)
// {
//     console.log("its a positive number");
// }
// else if(a<0)
// {
//     console.log("its a negaative number");
// }
// else{
//     console.log("its a zero");
// }
// if(a>0)
// {
//     if(a%2==0)
//     {
//         console.log("its positive and even");
//     }
//     else{
//         console.log("its positive and odd");
//     }
// }
// else 
// {
//     if(a%2==0)
//     {
//         console.log("its not positive and even");
//     }
//     else{
//         console.log("its not positive and odd");
//     }
// }
let week=a%7;
switch (week) {
    case 0:
        console.log("sunday");
        break;
  case 1:
    console.log("monday");
    break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wensday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("satruday");
        break;
    default:
        
        break;
}