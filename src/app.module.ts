import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathController } from './modules/math/math.controller';
import { MathService } from './modules/math/math.service';
import { MathModule } from './modules/math/math.module';

@Module({
  imports: [MathModule],
  controllers: [AppController, MathController],
  providers: [AppService, MathService],
})
export class AppModule {}
