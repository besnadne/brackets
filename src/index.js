module.exports = function check(str, bracketsConfig) {
	let brackets = [];
   
   for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
         let start = bracketsConfig[j][0];
         let end = bracketsConfig[j][1];

         if (str[i] === start) {
            if (str[i] === end && brackets[brackets.length - 1] === end) {
               brackets.pop();
            } else {
               brackets.push(start);
            }
            break;
         } else if (str[i] === end ) {
            if (brackets.length === 0) return false;
            if (brackets[brackets.length - 1] === start) {
               brackets.pop();
               break;
            }   
         }
      }
   }

   if (brackets.length > 0) return false;

   return true;
}
