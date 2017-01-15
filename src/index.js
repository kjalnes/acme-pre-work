import Foo from './AcmeDB'
import Bar from './anotherJSfile'

var hello = new Foo("wes");
console.log(hello.sayHi());

var foodILikw = new Bar('pizza');
console.log(foodILikw.sayFaveFood());
