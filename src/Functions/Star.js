const Star = (n) => {
    let j = []
    let newJ = 0
    for(let i=0; i<n; i++) {
        j.push(<i class="fa-solid fa-star mx-2 text-rating"></i>)  
    }
    if(j.length-5!=0)newJ=5-j.length;
    for(let i=0; i<newJ; i++) {
        j.push(<i class="fa-solid fa-star mx-2 text-white"></i>)  
    }
    return j
  }
  export default Star