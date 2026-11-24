import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { FilmModule } from './film/film.module.js';

@Module({
  imports: [PrismaModule, FilmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
