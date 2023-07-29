import { Controller } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  sum(num1: number, num2: number) {
    return num1 + num2;
  }

  calculate(numb: number, pow: number, numberPlus: number): number {
    const res = this.mathService.power(numb, pow);

    return res + numberPlus;
  }
}
