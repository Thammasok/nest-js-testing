import { Test, TestingModule } from '@nestjs/testing';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';

import { MathController } from './math.controller';
import { MathService } from './math.service';

const moduleMocker = new ModuleMocker(global);

describe('MathController', () => {
  let controller: MathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathController],
    })
      .useMocker((token) => {
        const result = 8;
        if (token === MathService) {
          return {
            // Mock return value in MathService
            power: jest.fn().mockReturnValueOnce(result),
          };
        }

        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(
            token,
          ) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();

    controller = module.get<MathController>(MathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Calculate number', () => {
    it('adds 1 + 2 to equal 3', () => {
      // Arrange
      const num1 = 1;
      const num2 = 2;
      const expectResult = 3;

      // Act
      const result = controller.sum(num1, num2);

      // Assert
      expect(result).toEqual(expectResult);
    });

    it('หาค่ายกกำลังของ (2 ^ 3) + 2 เท่ากับ 10', () => {
      // Arrange
      const number = 2;
      const power = 3;
      const numberPlus = 2;

      const expectResult = 10;

      // Act
      const result = controller.calculate(number, power, numberPlus);

      // Assert
      expect(result).toBe(expectResult);
    });
  });
});
