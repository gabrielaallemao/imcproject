import { Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':altura')
  getAltura(@Param('altura') altura): number {
    return this.appService.getAltura(altura);
  }

  @Get(':peso')
  getPeso(@Param('peso') peso): number {
    return this.appService.getPeso(peso);
  }

  @Get (':altura' + ':peso')
  getImc(@Param('imc') imc): number{
    return this.appService.getImc(
      let imc = peso
    );
  }
}
