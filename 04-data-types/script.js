let str_value = "Hello World" ;
let int_value = 100 ;
let float_value = 100.1 ;
let boolean_value = true ;
let undefined_value;
let null_value = null;

let array = [str_value, int_value, float_value, boolean_value, undefined_value, null_value]

let object = {
    str_value: typeof(str_value) , 
    int_value: typeof(int_value) , 
    float_value: typeof(float_value) ,
    boolean_value : typeof(boolean_value) , 
    undefined_value : typeof(undefined_value) , 
    null_value : typeof(null_value)
}

msg =  `array = ${array} \nobject = ${JSON.stringify(object)}`
alert(msg)
msg2 = `Is the variable array an array ? ${Array.isArray(array)}\nIs the variable object an array ? ${Array.isArray(object)}`
alert(msg2)
