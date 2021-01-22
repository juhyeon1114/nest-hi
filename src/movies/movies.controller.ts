import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movieData: any) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): boolean {
    return this.movieService.deleteOne(id);
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updateData: any) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
