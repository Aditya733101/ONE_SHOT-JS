# project -1
## color changer :-

project link:
[click]()

## solution code
```javascript
console.log(""Aditya sarkar)
const nums = document.querySelectorAll('.button');
const main = document.querySelector("body");
nums.forEach(function (button){
  button.addEventListener("click",function (e) {
    if (e.target.id === 'grey') {
      main.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      main.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      main.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      main.style.backgroundColor = e.target.id;
    }
    
  })
})

```


