import { Controller, Get } from '@nestjs/common';
import { DevolucionService } from './devolucion.service';

@Controller('devolucion')
export class DevolucionController {

  constructor(
    private devolucionService: DevolucionService
) { }

    @Get()
    findAll() {
      return this.devolucionService.findAll();
    }  
}
