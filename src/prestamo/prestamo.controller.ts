import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { Prestamo } from './Model/Prestamo.entity';

@Controller('prestamo')
export class PrestamoController {

    constructor(
        private prestamoService: PrestamoService
    ) { }

    @Get()
    findAll() {
        return this.prestamoService.findAll();
    }

    @Post('create')
    async registrarPrestamo(@Body() prestamoData: Prestamo) {
        return this.prestamoService.create(prestamoData);
    }

    @Put(':CODPRES/update')
    async actualizarPrestamo(@Param('CODPRES') CODPRES, @Body() prestamoData: Prestamo): Promise<any> {
        prestamoData.CODPRES = Number(CODPRES);
        console.log('Update #' + prestamoData.CODPRES)
        return this.prestamoService.update(prestamoData);
    }  

    @Delete(':CODPRES/delete')
    async eliminarPrestamo(@Param('CODPRES') CODPRES): Promise<any> {
      return this.prestamoService.delete(CODPRES);
    } 
}
