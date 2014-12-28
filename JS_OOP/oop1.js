/**
 * Created by Administrator on 2014/12/28.
 */
//这种相当于继承
(function(){
    function People(name){
        this._name = name;
    }
    People.prototype.say = function(){
        alert("Hello~"+this._name);
    }
    window.People = People;
}());

(function(){
    function Student(name){
        this._name = name;
    }
    Student.prototype = new People();
    Student.prototype.say = function(){
        alert("I am a student!"+this._name);
    }
    window.Student = Student;
}());

var stu = new Student("lyc");
stu.say();

var peopleSay = People.prototype.say;
peopleSay.call();