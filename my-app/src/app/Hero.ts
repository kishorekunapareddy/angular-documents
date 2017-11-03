import {Component} from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: 
    `<h1> {{title}} </h1>
    <h2> {{hero.name}} Details! </h2>
    <div><label>id:</label> hero.id </div>
    <div><label>name: </label> hero.name</div>
    <div><label>name:</label>
    <input>[(ngModel0]</input>"hero.name" placeholder = name;`
})

export class AppComponent{
    title = 'Heros List'
    hero : Hero = {
        id: 25,
        name:'Kishore'
    };
}