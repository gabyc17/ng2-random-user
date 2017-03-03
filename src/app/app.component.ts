import { Component } from '@angular/core';

import { Conector } from './conector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Random User App';
  loading: boolean;
  user = null;
  // UsersProperties = [];
  errorMessage: string;
  //selectedUser: User;
  buttonText = 'Get New User';

  constructor(
   // private router: Router,
    private conector: Conector) { }

  // getUsers(): void {
  //   this.conector.getUserData().then(users => this.users = users);
  //   console.log(this.conector.getUserData())
  //   //console.log('DATA:', this.users);
  // }

  //  UsersProperties = [
  //    {
  //         title: 'Name',
  //         value: this.users.results[0].name  
  //        },{
  //    title: 'Username',
  //    getVal: user => user.username
  //  }];

  getRandomUser(): void {
    this.loading = true;
    //this.users = null;
    //  this.conector.getUserData().then(users => { this.users = users; this.loading = false }).catch(() => this.loading = false );
    //this.conector.getUserData().then(users => { this.users = users; this.loading = false; }, error => { this.errorMessage = <any>error; this.loading = false });

    //this.conector.getUserData(); // ver por que joraka se necesita esta linea si se usa .then



    //  this.conector.getUserData().subscribe(
    //   data => { this.users = data; 
    //  // console.log(data)}
    // //, err => { this.foods_error = true }
    //   });


    // this.conector.getUserData();
    // console.log(this.conector.getUserData());
    //console.log(this.users);

    this.workingData();



  } //end getRandomUser

  //  getRandomUser() {
  //     this.loading = true;
  //     this.getUser().then(user => {
  //       this.user = user;
  //       this.loading = false;
  //     }).catch(() => this.loading = false);
  //   }

  //  ngOnInit(): void {
  //  this.getRandomUser();
  //   }

  //   onSelect(users: User): void {
  //   this.selectedUser = users;
  // }

  //   gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }


  properties = [];
  datos: string = '';
  workingData() {
    this.conector.getUserData().subscribe(
      data => {
      this.user = data.results[0];
        this.properties = [
          {
            title: 'Email',
            value: this.user.email
          }, {
            title: 'Name',
            value: this.user.name.first
          }, {
            title: 'Cel',
            value: this.user.cell
          }];

        this.loading = false;
        //console.log(data, "loading is " + this.loading)
      })
      ;

    //this.datos = JSON.parse(this.users);


    //console.log("DATA " + this.properties)
    return this.properties;



  }

} // End export AppComponent