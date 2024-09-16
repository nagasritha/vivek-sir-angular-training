import { Component, OnDestroy, OnInit } from "@angular/core";


@Component({
    selector:'app-home',
    template:`
        <h1>{{title | uppercase}}</h1>
        <h3>Today is {{today|date:'EEEE, MMMM dd, yyyy'}}</h3>
        <h3>Time is {{today|date:'hh:mm:ss'}}</h3>
        
    
    `,
    styles:[
        `h1{
            color:teal;
            font-size:2em;
            font-weight:bold;
            font-style:italic;
        }`
    ]
})
export class AppHomeComponent implements OnInit, OnDestroy {
    public title="Welcome to World of Books";
    public today:any =new Date();
    private iid: any;

    constructor(){
       console.log('constructor called');
    }

    ngOnInit(): void {
        console.log('component intialized',this.title);
        this.iid= setInterval(()=>{
            this.today=new Date();
        },5000);
    }
    ngOnDestroy(): void {
       clearInterval(this.iid);
    }
   

}

