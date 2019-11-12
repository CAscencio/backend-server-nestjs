import { LibroService } from './libro.service';
import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { Libro } from './Model/Libro.entity';

@Controller('libro')
export class LibroController {

    
  constructor(private libroService: LibroService) {}

  @Get()
  findAll() {
    return this.libroService.findAll();
  }

  @Get('/Libros')
  librosDisponibles(){
    return this.libroService.librosDatos();
  }
  
  @Put(':CODLIB/update')
    async actualizarLibro(@Param('CODLIB') CODLIB, @Body() libroData: Libro): Promise<any> {
      libroData.CODLIB = Number(CODLIB);
        return this.libroService.update(libroData);
    } 
}
