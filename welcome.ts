import { inject } from 'aurelia-dependency-injection';
// import 'welcome.css';
// import {Dialog} from '@material/mwc-dialog';
// import { HttpClient, HttpClientConfiguration } from 'aurelia';

import {HttpClient} from 'aurelia-http-client';

// export class Welcome {
//   public results: Array<Record<string, any>> = [{"title": "Article for the future", "highlight": 
//   {"content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra erat nec cursus scelerisque. Aliquam suscipit ac ante sed aliquam. Vestibulum finibus tellus vitae nisl bibendum viverra. Vivamus ut feugiat justo, et pellentesque magna. Donec ultrices aliquet mauris, id accumsan magna lacinia vel. Curabitur rutrum purus nunc, ut pretium metus lacinia at. Pellentesque quis lacus et nulla posuere auctor. Phasellus nec ipsum pretium, viverra mauris nec, <em>volutpat eros. Nam mollis volutpat nisi</em>, id tristique odio tempus id. Pellentesque justo orci, congue eget tincidunt ac, posuere sit "]}}, {"title": "Article from another time", "highlight":
//   {"content": ["Mauris scelerisque metus sapien, quis tincidunt nibh imperdiet eget. Suspendisse elit odio, mollis a diam dictum, aliquet volutpat tellus. Integer malesuada commodo felis vel viverra. Nullam justo magna, porta sit amet ornare a, fringilla a orci. Pellentesque sit amet viverra eros, ac malesuada odio. Fusce at nibh volutpat, <em>faucibus nibh eget</em>, aliquam leo. Nunc varius ullamcorper nunc. Cras quis felis mollis, iaculis elit eget, dictum turpis. Morbi"]}}];
  
//   constructor(private hc: HttpClient) {
//     const hcc: HttpClientConfiguration = new HttpClientConfiguration();
//     hcc.defaults = {
//       credentials: 'same-origin',
//       headers: {
//         'Accept': 'application/json',
//         'X-Requested-With': 'Fetch'
//       }
//     };
//     hc.configure(hcc);
//     console.log('hc: ', hc);
//   }


//   beforeAttach() {
//     console.log('welcome to app!');
//         //const client = new Client({node: "http://localhost:9200"});
//         this.hc.get('http://localhost:9200/_cluster/health').then(d => d.json().then(jd => console.log('JSON data: ', jd)));
//         //console.log('client: ', client);
//   }

//   searchClicked() {
//     // this.boolOpen = true;
//     // bShowDocument = true;
//     // dialogRef.show();
//     // this.modal.open();
//   }

// }
