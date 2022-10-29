<ol>
<li>A function "operate" will check which operation to perform 
and then perform the operation </li>
<li>two arrays "firstNum" and "secondNum" will be used to store numbers</li>
<li>Whenever any number is clicked it will always be stored in the "firstNum"
array</li>
<li>when an operator is clicked :
<ul>
<li>if it is the first operator to be clicked the "firstNum" array content will be passed to the "secondNum" array and the "firstNum" array would be emptied and 
ready to recieve another number</li>
<li> if it is not the first operator to be pressed then the "secondNum" array would equal to the result of the operation and the "firstNum" array would be emptied and ready to recieve new number</li>
</ul></li>
<li>when equal is clicked "firstNum" would equal to the operation result
and the "secondNum" would be emptied and count would equal to zero 
(so whenever another operator is pressed this state is similar to the initial state) </li>

</ol>