import { ClientService } from './../client.service';
import { Client } from './../client.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  client!: Client

  constructor(
    private router: Router, 
    private clientService:ClientService, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(`${id}`).subscribe(client =>{
      this.client = client
    });
  }


  deleteClient(): void{
    this.clientService.delete(`${this.client.id}`).subscribe(()=>{
      this.clientService.showMessage('Cliente excluido com sucesso!')
      this.router.navigate(['/clients']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clients']);
  }
}
