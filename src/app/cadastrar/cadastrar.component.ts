import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

    user: User = new User
    confirmarSenha: string
    tipoCooperativa: string
    estadoLocalidade: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  cooperativaCadastro(event: any){
    this.tipoCooperativa = event.target.value
  }

  localidadeCadastro(event: any){
    this.estadoLocalidade = event.target.value
  }

  cadastrar(){
    this.user.cooperativa = this.tipoCooperativa
    this.user.localidade = this.estadoLocalidade

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas.')
    }else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })
  }

  }

}




