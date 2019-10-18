import { LibroService } from './libro.service';
import { Controller, Get } from '@nestjs/common';

@Controller('libro')
export class LibroController {

    
  constructor(private libroService: LibroService) {}

  @Get()
  findAll() {
    return this.libroService.findAll();
  }
}
