import { Test, TestingModule } from '@nestjs/testing';
import { TrackResolver } from './track.resolver';

describe('TrackResolver', () => {
  let resolver: TrackResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrackResolver],
    }).compile();

    resolver = module.get<TrackResolver>(TrackResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
