import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { LibroModule } from './libro/libro.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { DevolucionModule } from './devolucion/devolucion.module';
import { TypeOrmModule }  from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot(
    {
      "type": "oracle",
      "username": "dbBookFlix",
      "password": "BookFlix-2019",
      "connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=35.184.25.222)(PORT=1521))(CONNECT_DATA=(SID=XE)))",
      "synchronize": false,
      "logging": true,
      "entities": [__dirname + '/**/**.entity{.ts,.js}']
    }
  ), PersonaModule, LibroModule, PrestamoModule, DevolucionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
