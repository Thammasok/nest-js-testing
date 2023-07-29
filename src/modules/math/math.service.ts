import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  public power(n: number, p: number): number {
    let sum = 1;
    for (let i = 0; i < p; i++) {
      sum = sum * n;
    }

    return sum;
  }
}
