const fun1 = (name, age, task) =>{
    console.log(name)
    console.log(age)
    task()
    console.log('===================')

}

const takeShower = () =>{
    console.log('shower')
}

const washHand = () =>{
    console.log('hand wash')
}

fun1("mt", 45, takeShower);
fun1("m;lmc", 5, washHand);