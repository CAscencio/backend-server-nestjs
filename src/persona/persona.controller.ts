import { Controller, Get } from '@nestjs/common';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {


    constructor(private personaService: PersonaService){
    }

    @Get('/Todos')
    findAll(){
        return this.personaService.findAll();
    }

    @Get()
    lectoresActivos(){
        return this.personaService.lectoresActivos();
    }
}
