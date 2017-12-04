# Show / hide Option in IE11
IE11 doesn't accept hidding options elements using display:none o standard techniques, so this is a little plugin for jQuery that does the job.
Basically if you need to hide an option within a select element in IE11 you will find (just like i did) that jQuery.toggle o hide doesn't work, IE11 just ignores the addition of the display:none attribute, so this is a little trick to get the job done.
It just wraps the option with a span element, and voilá!

## Usage:

```` javascript
$("select>option[name='hideme']").hideOption();
```` 
Enjoy.
