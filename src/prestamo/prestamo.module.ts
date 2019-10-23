import { Module } from '@nestjs/common';
import { PrestamoController } from './prestamo.controller';
import { PrestamoService } from './prestamo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './Model/Prestamo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamo])],
  controllers: [PrestamoController],
  providers: [PrestamoService]
})
export class PrestamoModule { }
