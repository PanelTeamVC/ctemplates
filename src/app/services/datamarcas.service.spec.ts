import { TestBed, inject } from '@angular/core/testing';

import { DatamarcasService } from './datamarcas.service';

describe('DatamarcasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatamarcasService]
    });
  });

  it('should be created', inject([DatamarcasService], (service: DatamarcasService) => {
    expect(service).toBeTruthy();
  }));
});
