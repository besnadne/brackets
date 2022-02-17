function check(str, bracketsConfig) {
    let storage = [];
    let counterDot = 0;
    let counterDash = 0;
    function close(char){
      return [ ']', ')', '}'].indexOf(char) > -1
    }
    let map = {
      "'" : "'",
      '|' : '|',
      ']' : '[',
      '}' : '{',
      ')' : '('
    }
    for(let i = 0; i < str.length; i++){
      let current = str[i]
  
      if(current === "'" && counterDot === 0){
        storage.push(current)
        counterDot++;
      }else if(current === "'" && counterDot > 0){
        if(map[current] === storage.pop()){
          counterDot--;
        }
     }
      else if(current === "'" && counterDot > 0){
        if(map[current] !== storage.pop()){
          return false
        }
      }
  
      if(current === "|" && counterDash === 0){
        storage.push(current)
        counterDash++;
      }else if(current === "|" && counterDash > 0){
        if(map[current] === storage.pop()){
          counterDash --
        }
      }

      else if(current === "|" && counterDash > 0){
        if(map[current] !== storage.pop()){
          return false
        }
      }
  
      if(close(current)){
        if(map[current] !== storage.pop()){
          return false
        }else{
          storage.push(current)
        }
      
      }
    }
    return storage.length === 0;
  }    
  
  
  console.log(check('||', [['|', '|']]))