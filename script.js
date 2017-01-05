/*
1. Start with the number 42 and set that equal to `majorKey`


2. Create condition logic to check if the `majorKey` is great or equal to 53
2-1. If true, add 42 to `majorKey`
2-2. If false, subtract 13 from `majorKey`

3. Add a the string witha  value of 11 to `majorKey`

4. Create an array, loop through `majorKey` using `charAt`, set array[i] to each value

5. Remove the first and last values from the array

6. Create a new variable. Loop **backwards** through the array and store each value into the new variable, combining each of the values of that array

7. `parseInt` both the `majorKey` and the new variable created in Step 6, ensure that both `majorKey` and the new variable are set to these new parsed values.

******* SWITCH PROGRAMMERS *******

8. Add `majorKey` and the new variable created in Step 6 together and store them in `majorKey`

9. If the new value of `majorKey` is less than 60, set `majorKey` equal to 14. If not, check to see if it is equal to 2930, if it is, set `majorKey` equal to 27.
If neither of these are true, set `majorKey` to 2.

10. Create a while loop that counts down from 10 and increments `majorKey` by 1.

11. Create a function that accepts an argument `val`. The function should convert `val` to a string, then drop the first character off the string, but only if there
is more than one character in the string. Return `val` and set the `majorKey` to the returned value.

12. Call the function.

13. Console log `majorKey`. Create an index.html file, link in this Javascript file. Load in the browser, check the value.

14. Your answer should be a string value that equals 7. Is that what you got?
*/

var majorKey = 42;

if (majorKey >= 53) {
  majorKey += 42;
}
else {
  majorKey -= 13;
};

majorKey = majorKey + "11";

arr = [];

for (i = 0; i < majorKey.length; i++) {
  arr.push(majorKey.charAt(i));

};

arr.shift();
arr.pop();
var minorKey = ""

/* arr = ["9","1"] */
for (i = 2; i > 0; i--) {
  minorKey += arr[i-1];
};

majorKey = parseInt(majorKey);
minorKey = parseInt(minorKey);

majorKey += minorKey;

if(majorKey < 60) {
  majorKey = 14;
} else if
  (majorKey == 2930) {
    majorKey = 27;
  } else
  {majorKey = 2};

  var i = 10;

  while(i > 0) {
  majorKey += 1;
  i--;
  }

  function upsilon(val) {
    val = val.toString();
    if(val.length > 1) {
      val = val.substring(1,2);
    }
    return val;
    majorKey = val;
  };

  upsilon(majorKey);

  console.log(upsilon(majorKey));
