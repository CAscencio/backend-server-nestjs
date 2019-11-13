import { Controller, Get, Param } from '@nestjs/common';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {
  constructor(private personaService: PersonaService) {}

  @Get('/Todos')
  findAll() {
    return this.personaService.findAll();
  }

  @Get()
  lectoresActivos() {
    return this.personaService.lectoresActivos();
  }
  // GET DEL SERVICIO DE AUTENTICAR EL USU Y PASS DEL LOGIN
  @Get('/:USUPER/:PASSPER')
  usuario(@Param() params) {
    return this.personaService.login(params.USUPER, params.PASSPER);
  }
}
