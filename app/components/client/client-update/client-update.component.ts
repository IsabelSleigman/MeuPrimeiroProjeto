import { Client } from './../client.model';
import { ClientService } from './../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client!: Client;

  constructor(
    private router: Router,
    private clientService: ClientService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(`${id}`).subscribe(client => {
      this.client = client
    });
  }

  updateClient(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente atualizado com sucesso')
      this.router.navigate(['/clients']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clients']);
  }
}