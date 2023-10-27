import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAltura(altura:number): number {
    return altura;
  }

  getPeso(peso:number): number {
    return peso;
  }

  getImc(imc:number): number {
    return imc;
  }
}

