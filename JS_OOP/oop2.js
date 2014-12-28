/**
 * Created by Administrator on 2014/12/28.
 */
// 这种相当于组合
(function(){
    function Person(name){      //相当于类构造函数
        var _this = {}
        _this.sayHello = function(){
            alert("Hello "+name);
        }
        return _this;
    }
    window.Person = Person;
}());

(function(){
    function Teacher(name){
        var _this = Person(name);
        var superSay = _this.sayHello;
        _this.sayHello = function(){
            alert("Teacher "+name);
        }
        _this.superHello = function(){
            superSay.call();
        }
        return _this;
    }
    window.Teacher = Teacher;
}());


var  t = Teacher("lyc");
t.sayHello();
t.superHello();

