import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('cat')
  findOne(): string {
    return 'This is one cat';
  }
}
