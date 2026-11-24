import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

type FilmData = {
  judul: string;
  sutradara: string;
  tahun: number;
  genre: string;
  rating: number;
};

@Injectable()
export class FilmService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.film.findMany({ orderBy: { id: 'asc' } });
  }

  async findOne(id: number) {
    const film = await this.prisma.film.findUnique({ where: { id } });
    if (!film)
      throw new NotFoundException(`Film dengan id ${id} tidak ditemukan`);
    return film;
  }

  create(data: FilmData) {
    return this.prisma.film.create({ data });
  }

  async update(id: number, data: Partial<FilmData>) {
    await this.findOne(id);
    return this.prisma.film.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.film.delete({ where: { id } });
  }

  async statistik() {
    const [total, agg] = await Promise.all([
      this.prisma.film.count(),
      this.prisma.film.aggregate({
        _avg: { rating: true },
        _max: { rating: true },
      }),
    ]);
    return {
      total,
      rataRating: agg._avg.rating,
      ratingTertinggi: agg._max.rating,
    };
  }
}
