import { Module } from '@nestjs/common';
import { DevolucionService } from './devolucion.service';
import { DevolucionController } from './devolucion.controller';
import { Devolucion } from './Model/devolucion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Devolucion])],
  providers: [DevolucionService],
  controllers: [DevolucionController]
})
export class DevolucionModule {}
