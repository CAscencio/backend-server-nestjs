import { Controller, Get } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';

@Controller('prestamo')
export class PrestamoController {

    constructor(
        private prestamoService: PrestamoService
    ) { }

    @Get()
    findAll() {
        return this.prestamoService.personalizado();
    }
}
