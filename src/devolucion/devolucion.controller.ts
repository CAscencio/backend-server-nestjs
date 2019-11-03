import { Controller, Get, Post, Body } from '@nestjs/common';
import { DevolucionService } from './devolucion.service';
import { Devolucion } from './Model/devolucion.entity';

@Controller('devolucion')
export class DevolucionController {

  constructor(
    private devolucionService: DevolucionService
) { }

    @Get()
    findAll() {
      return this.devolucionService.findAll();
    }  

    @Post('create')
    registrarDevolucion(@Body() devolucionData: Devolucion){
      return this.devolucionService.create(devolucionData);
    }

}
