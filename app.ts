import {Todo} from './todo';

// import {RouterConfiguration, Router} from 'aurelia-router';



export class App {
  public message: string = 'Hello World!';
  public myData: string;
  public todo = new Todo('Clean my room!');

  public todoList: Array<string | any>;

  public results: Array<Record<string, any>> = [{"title": "Article for the future", "highlight": 
  {"content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra erat nec cursus scelerisque. Aliquam suscipit ac ante sed aliquam. Vestibulum finibus tellus vitae nisl bibendum viverra. Vivamus ut feugiat justo, et pellentesque magna. Donec ultrices aliquet mauris, id accumsan magna lacinia vel. Curabitur rutrum purus nunc, ut pretium metus lacinia at. Pellentesque quis lacus et nulla posuere auctor. Phasellus nec ipsum pretium, viverra mauris nec, <em>volutpat eros. Nam mollis volutpat nisi</em>, id tristique odio tempus id. Pellentesque justo orci, congue eget tincidunt ac, posuere sit "]}}, {"title": "Article from another time", "highlight":
  {"content": ["Mauris scelerisque metus sapien, quis tincidunt nibh imperdiet eget. Suspendisse elit odio, mollis a diam dictum, aliquet volutpat tellus. Integer malesuada commodo felis vel viverra. Nullam justo magna, porta sit amet ornare a, fringilla a orci. Pellentesque sit amet viverra eros, ac malesuada odio. Fusce at nibh volutpat, <em>faucibus nibh eget</em>, aliquam leo. Nunc varius ullamcorper nunc. Cras quis felis mollis, iaculis elit eget, dictum turpis. Morbi"]}}];
  
  updateContent() {
    this.message = 'This is NEW content';
    this.myData = 'Enter some text!';
    // this.todoList.push('A change has occured');
    // this.todoList.push('Walk the dog');
    // this.todoList.push('Take out the trash');

  }

  // manually sets checkbox to true
  // constructor(done : boolean) {
  //   this.todo.done = true;
  //   }

  

    // configureRouter(config, router): void {
    //   // this.router = router;
    //   config.title = 'Title Router Test';
    //   config.map([
    //     { route: '', name: 'home', moduleId:'index', title:'Home' },
    //     { route: 'about', name: 'about', moduleId:'about', title:'About Us' }
    //   ]);
    // }



 
}

