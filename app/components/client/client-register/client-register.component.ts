import { Client } from './../client.model';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  client: Client = {
    name: " ",
    dateB: " " ,
    cpf: " ",
    email: " ",
    phone: " ",
    dateR: new Date() 
  }

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {

  }

  registerClient(): void {
    this.clientService.create(this.client).subscribe(()=>{
    this.clientService.showMessage('Cadastro realizado com sucesso!')
    this.router.navigate(['/clients'])
    })

   
  }
  cancel(): void {
    this.router.navigate(['/'])
  }
}
